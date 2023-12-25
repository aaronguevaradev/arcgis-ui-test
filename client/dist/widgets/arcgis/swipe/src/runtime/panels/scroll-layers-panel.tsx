/** @jsx jsx */
import {
  React,
  jsx,
  css,
  hooks,
  Immutable,
  type ImmutableObject,
  type ImmutableArray,
  DataSourceManager,
  classNames
} from 'jimu-core'
import { CollapsablePanel } from 'jimu-ui'
import {
  type LayerInfo
} from '../../config'
import { type JimuMapView, type JimuLayerView } from 'jimu-arcgis'
import Legend from 'esri/widgets/Legend'
import { LayerList } from './layer-list'
import { EmptyLayerMessage } from './empty-layer-message'
import { isWebMap } from '../../utils/utils'
import defaultMessages from '.././translations/default'
import upCircle from 'jimu-icons/svg/outlined/directional/up-circle.svg'
import downCircle from 'jimu-icons/svg/outlined/directional/down-circle.svg'

const { useState, useEffect, useRef } = React

interface ScrollLayersPanelProps {
  scrollMapViewList: ImmutableObject<{ [mapViewId: string]: string[] }>
  activeMapView: JimuMapView
  inactiveMapView: JimuMapView
  handlePanelSelectedFirstScrollLayer: (list: ImmutableArray<string>) => void
  handlePanelSelectedSecondScrollLayer: (list: ImmutableArray<string>) => void
  isAllowDeactivateLayers: boolean
  scrollingLayerOfFirstMapView: JimuLayerView
  scrollingLayerOfSecondMapView: JimuLayerView
  scrollFirstMapView: boolean
  showSwipeOnMap: boolean
  runtimeActiveMapViewAddedLayers: ImmutableArray<string>
  runtimeInactiveMapViewAddedLayers: ImmutableArray<string>
  handleRuntimePanelSelectedFirstScrollLayer: (list: ImmutableArray<string>) => void
  handleRuntimePanelSelectedSecondScrollLayer: (list: ImmutableArray<string>) => void
}

export function ScrollLayersPanel (props: ScrollLayersPanelProps) {
  const { scrollMapViewList, activeMapView, inactiveMapView, handlePanelSelectedFirstScrollLayer, handlePanelSelectedSecondScrollLayer, isAllowDeactivateLayers, scrollingLayerOfFirstMapView, scrollingLayerOfSecondMapView, scrollFirstMapView, showSwipeOnMap, runtimeActiveMapViewAddedLayers, runtimeInactiveMapViewAddedLayers, handleRuntimePanelSelectedFirstScrollLayer, handleRuntimePanelSelectedSecondScrollLayer } = props
  const [showFirstMapViewLayers, setShowFirstMapViewLayers] = useState(false)
  const [showSecondMapViewLayers, setShowSecondMapViewLayers] = useState(false)
  const [showFirstRuntimeLayers, setShowFirstRuntimeLayers] = useState(false)
  const [showSecondRuntimeLayers, setShowSecondRuntimeLayers] = useState(false)
  const scrollLegendRef = useRef<HTMLDivElement>(null)
  const scrollFirstWatchHandlesRef = React.useRef<__esri.WatchHandle[]>([])
  const runtimeScrollFirstWatchHandlesRef = React.useRef<__esri.WatchHandle[]>([])
  const translate = hooks.useTranslation(defaultMessages)

  useEffect(() => {
    if (!inactiveMapView) {
      handlePanelSelectedSecondScrollLayer(Immutable([]))
    }
  }, [handlePanelSelectedSecondScrollLayer, inactiveMapView])

  //active map view list
  const [scrollFirstMapViewLayerList, setScrollFirstMapViewLayerList] = useState<LayerInfo[]>(null)
  const scrollFirstMapViewLayerListRef = useRef(scrollFirstMapViewLayerList)
  const [selectedFirstMapViewLayerList, setSelectedFirstMapViewLayerList] = useState<Immutable.ImmutableArray<string>>(Immutable([]))
  const [runtimeActiveMapViewLayerList, setRuntimeActiveMapViewLayerList] = useState<LayerInfo[]>([])
  const runtimeActiveMapViewLayerListRef = useRef(runtimeActiveMapViewLayerList)
  const [selectedRuntimeActiveMapViewLayerList, setSelectedRuntimeActiveMapViewLayerList] = useState<Immutable.ImmutableArray<string>>(Immutable([]))
  const [runtimeInactiveMapViewLayerList, setRuntimeInactiveMapViewLayerList] = useState<LayerInfo[]>([])
  const runtimeInactiveMapViewLayerListRef = useRef(runtimeInactiveMapViewLayerList)
  const [selectedRuntimeInactiveMapViewLayerList, setSelectedRuntimeInactiveMapViewLayerList] = useState<Immutable.ImmutableArray<string>>(Immutable([]))

  //inactive map view list
  const [scrollSecondMapViewLayerList, setScrollSecondMapViewLayerList] = useState<LayerInfo[]>(null)
  const scrollSecondMapViewLayerListRef = useRef(scrollSecondMapViewLayerList)
  const [selectedSecondMapViewLayerList, setSelectedSecondMapViewLayerList] = useState<Immutable.ImmutableArray<string>>(Immutable([]))

  useEffect(() => {
    const list = scrollMapViewList?.[activeMapView?.id]
    setSelectedFirstMapViewLayerList(list)
  }, [scrollMapViewList, activeMapView])

  useEffect(() => {
    const list = scrollMapViewList?.[inactiveMapView?.id]
    setSelectedSecondMapViewLayerList(list)
  }, [scrollMapViewList, inactiveMapView])

  const getJimuLayerViewById = async (jimuMapView: JimuMapView, jimuLayerViewId: string) => {
    const jimuLayerView = await jimuMapView.whenJimuLayerViewLoaded(jimuLayerViewId)
    return jimuLayerView
  }

  const renderLegend = hooks.useEventCallback(() => {
    const scrollContainer = scrollLegendRef.current
    const previousLegendDiv: HTMLDivElement = document.querySelector('.currentLegend')
    previousLegendDiv && previousLegendDiv.remove()
    if (showSwipeOnMap && (selectedFirstMapViewLayerList?.length > 0 || selectedSecondMapViewLayerList?.length > 0)) {
      const legendDiv = document.createElement('div')
      legendDiv.className = 'currentLegend'
      const legend = new Legend({
        view: scrollFirstMapView ? activeMapView?.view : inactiveMapView?.view,
        style: 'classic',
        layerInfos: [{
          layer: scrollFirstMapView ? scrollingLayerOfFirstMapView?.layer : scrollingLayerOfSecondMapView?.layer
        }]
      })
      legend.container = legendDiv
      scrollContainer.appendChild(legendDiv)
    }
  })

  const handleScrollMapViewList = hooks.useEventCallback((
    mapView: JimuMapView,
    setScrollLayerList: React.Dispatch<React.SetStateAction<LayerInfo[]>>,
    setSelectedLayerList: React.Dispatch<React.SetStateAction<Immutable.ImmutableArray<string>>>,
    scrollMapViewLayerListRef: React.MutableRefObject<LayerInfo[]>,
    handlePanelSelectedLayers: (list: ImmutableArray<string>) => void
  ) => {
    const scrollMapViewListPromiseArray = scrollMapViewList?.[mapView?.id]?.asMutable()?.map(jimuLayerViewId => {
      return getJimuLayerViewById(mapView, jimuLayerViewId)
    })

    if (scrollMapViewListPromiseArray) {
      Promise.all(scrollMapViewListPromiseArray).then(jimuLayerViews => {
        const scrollMapViewList: LayerInfo[] = jimuLayerViews.map(jimuLayerView => {
          return {
            layerId: jimuLayerView.id,
            title: jimuLayerView?.layer.title,
            selected: true,
            visible: jimuLayerView?.layer.visible,
            allowOperation: isAllowDeactivateLayers
          }
        })
        setScrollLayerList(scrollMapViewList)
        scrollMapViewLayerListRef.current = scrollMapViewList

        //When the setting changes scrollMapViewList, need to update the changes to runtime scroll layers.
        const selectedLayerList: string[] = []
        scrollMapViewList.forEach(layer => {
          if (layer.selected && layer.visible) {
            selectedLayerList.push(layer.layerId)
          }
        })

        setSelectedLayerList(Immutable(selectedLayerList))
        handlePanelSelectedLayers(Immutable(selectedLayerList))
      }).catch(err => {
        console.error(err)
      })
    }
  })

  useEffect(() => {
    handleScrollMapViewList(
      activeMapView,
      setScrollFirstMapViewLayerList,
      setSelectedFirstMapViewLayerList,
      scrollFirstMapViewLayerListRef,
      handlePanelSelectedFirstScrollLayer
    )

    handleScrollMapViewList(
      inactiveMapView,
      setScrollSecondMapViewLayerList,
      setSelectedSecondMapViewLayerList,
      scrollSecondMapViewLayerListRef,
      handlePanelSelectedSecondScrollLayer
    )
  }, [scrollMapViewList, activeMapView, inactiveMapView, isAllowDeactivateLayers, handlePanelSelectedFirstScrollLayer, handlePanelSelectedSecondScrollLayer, handleScrollMapViewList])

  useEffect(() => {
    if (activeMapView?.id === inactiveMapView?.id) {
      return
    }
    const layerListActive: LayerInfo[] = runtimeActiveMapViewAddedLayers?.asMutable({ deep: true }).map(jimuLayerViewId => {
      const jimuLayerView = activeMapView.jimuLayerViews[jimuLayerViewId]
      return {
        layerId: jimuLayerViewId,
        title: jimuLayerView.layer.title,
        selected: false,
        visible: jimuLayerView.layer.visible,
        allowOperation: true
      }
    })
    setRuntimeActiveMapViewLayerList(layerListActive)
    runtimeActiveMapViewLayerListRef.current = layerListActive

    //when the runtimeActiveMapViewAddedLayers changes, need to update the changes to runtime scroll layers.
    const selectedLayerList: string[] = []
    layerListActive.forEach(layer => {
      if (layer.selected && layer.visible) {
        selectedLayerList.push(layer.layerId)
      }
    })
    setSelectedRuntimeActiveMapViewLayerList(Immutable(selectedLayerList))
    handleRuntimePanelSelectedFirstScrollLayer(Immutable(selectedLayerList))

    if (inactiveMapView) {
      const layerListInactive: LayerInfo[] = runtimeInactiveMapViewAddedLayers?.asMutable({ deep: true }).map(jimuLayerViewId => {
        const jimuLayerView = inactiveMapView.jimuLayerViews[jimuLayerViewId]
        return {
          layerId: jimuLayerViewId,
          title: jimuLayerView.layer.title,
          selected: false,
          visible: jimuLayerView.layer.visible,
          allowOperation: true
        }
      })
      setRuntimeInactiveMapViewLayerList(layerListInactive)
      runtimeInactiveMapViewLayerListRef.current = layerListInactive

      //when the runtimeInactiveMapViewAddedLayers changes, need to update the changes to runtime scroll layers.
      const selectedLayerList: string[] = []
      layerListInactive.forEach(layer => {
        if (layer.selected && layer.visible) {
          selectedLayerList.push(layer.layerId)
        }
      })
      setSelectedRuntimeInactiveMapViewLayerList(Immutable(selectedLayerList))
      handleRuntimePanelSelectedSecondScrollLayer(Immutable(selectedLayerList))
    }
  }, [activeMapView, handleRuntimePanelSelectedFirstScrollLayer, handleRuntimePanelSelectedSecondScrollLayer, inactiveMapView, runtimeActiveMapViewAddedLayers, runtimeInactiveMapViewAddedLayers])

  const watchMapViewLayers = hooks.useEventCallback((
    mapView: JimuMapView,
    scrollWatchHandlesRef: React.MutableRefObject<__esri.WatchHandle[]>,
    scrollMapViewLayerListRef: React.MutableRefObject<LayerInfo[]>,
    setScrollMapViewLayerList: React.Dispatch<React.SetStateAction<LayerInfo[]>>,
    handlePanelSelectedLayers: (list: ImmutableArray<string>) => void
  ) => {
    const scrollMapViewListPromiseArray = scrollMapViewList?.[mapView?.id]?.asMutable()?.map(jimuLayerViewId => {
      return getJimuLayerViewById(mapView, jimuLayerViewId)
    })
    if (scrollMapViewListPromiseArray) {
      Promise.all(scrollMapViewListPromiseArray).then(jimuLayerViews => {
        jimuLayerViews.forEach(jimuLayerView => {
          const newList: __esri.WatchHandle[] = []
          newList.push(jimuLayerView?.layer.watch('visible', () => {
            const isVisible = jimuLayerView?.layer.visible
            const newList = JSON.parse(JSON.stringify(scrollMapViewLayerListRef.current))
            newList.forEach(layerObj => {
              if (layerObj.layerId === jimuLayerView.id) {
                layerObj.visible = isVisible
              }
            })
            setScrollMapViewLayerList(newList)
            scrollMapViewLayerListRef.current = (newList)

            //If the layer visibility is changed, update handlePanelSelectedFirstScrollLayer so that the runtime scroll layers can changed.
            const selectedFirstMapViewList: string[] = []
            newList?.forEach(layer => {
              if (layer.selected && layer.visible) {
                selectedFirstMapViewList.push(layer.layerId)
              }
            })
            handlePanelSelectedLayers(Immutable(selectedFirstMapViewList))
          }))
          scrollWatchHandlesRef.current = newList
        })
      })
    }
  })

  useEffect(() => {
    const firstHandles = scrollFirstWatchHandlesRef.current

    watchMapViewLayers(
      activeMapView,
      scrollFirstWatchHandlesRef,
      scrollFirstMapViewLayerListRef,
      setScrollFirstMapViewLayerList,
      handlePanelSelectedFirstScrollLayer
    )

    return () => {
      firstHandles.forEach(handle => {
        handle?.remove()
      })
    }
  }, [scrollMapViewList, activeMapView, watchMapViewLayers, handlePanelSelectedFirstScrollLayer])

  const watchRuntimeLayers = hooks.useEventCallback((
    mapView: JimuMapView,
    runtimeLayerList: LayerInfo[],
    runtimeLayerListRef: React.MutableRefObject<LayerInfo[]>,
    setRuntimeLayerList: React.Dispatch<React.SetStateAction<LayerInfo[]>>,
    handleRuntimePanelSelectedLayers: (list: ImmutableArray<string>) => void,
    runtimeScrollWatchHandlesRef: React.MutableRefObject<__esri.WatchHandle[]>
  ) => {
    runtimeLayerList.forEach(layerInfoObj => {
      const jimuLayerView = mapView.jimuLayerViews[layerInfoObj.layerId]
      const newList: __esri.WatchHandle[] = []
      newList.push(jimuLayerView?.layer.watch('visible', () => {
        const isVisible = jimuLayerView?.layer.visible
        const newList = JSON.parse(JSON.stringify(runtimeLayerListRef.current))
        newList.forEach(layerObj => {
          if (layerObj.layerId === jimuLayerView.id) {
            layerObj.visible = isVisible
          }
        })
        setRuntimeLayerList(newList)
        runtimeLayerListRef.current = (newList)

        //If the layer visibility is changed, update handlePanelSelectedFirstScrollLayer so that the runtime scroll layers can changed.
        const selectedFirstMapViewList: string[] = []
        newList?.forEach(layer => {
          if (layer.selected && layer.visible) {
            selectedFirstMapViewList.push(layer.layerId)
          }
        })
        handleRuntimePanelSelectedLayers(Immutable(selectedFirstMapViewList))
      }))
      runtimeScrollWatchHandlesRef.current = newList
    })
  })

  useEffect(() => {
    const firstHandles = runtimeScrollFirstWatchHandlesRef.current

    watchRuntimeLayers(
      activeMapView,
      runtimeActiveMapViewLayerList,
      runtimeActiveMapViewLayerListRef,
      setRuntimeActiveMapViewLayerList,
      handleRuntimePanelSelectedFirstScrollLayer,
      runtimeScrollFirstWatchHandlesRef
    )

    return () => {
      firstHandles.forEach(handle => {
        handle?.remove()
      })
    }
  }, [activeMapView, handleRuntimePanelSelectedFirstScrollLayer, runtimeActiveMapViewLayerList, watchRuntimeLayers])

  useEffect(() => {
    handlePanelSelectedFirstScrollLayer(selectedFirstMapViewLayerList)
  }, [handlePanelSelectedFirstScrollLayer, selectedFirstMapViewLayerList])

  useEffect(() => {
    handleRuntimePanelSelectedFirstScrollLayer(selectedRuntimeActiveMapViewLayerList)
  }, [handleRuntimePanelSelectedFirstScrollLayer, selectedRuntimeActiveMapViewLayerList])

  useEffect(() => {
    handleRuntimePanelSelectedSecondScrollLayer(selectedRuntimeInactiveMapViewLayerList)
  }, [handleRuntimePanelSelectedSecondScrollLayer, selectedRuntimeInactiveMapViewLayerList])

  useEffect(() => {
    handlePanelSelectedSecondScrollLayer(selectedSecondMapViewLayerList)
  }, [handlePanelSelectedSecondScrollLayer, selectedSecondMapViewLayerList])

  useEffect(() => {
    if (scrollingLayerOfFirstMapView || scrollingLayerOfSecondMapView) {
      renderLegend()
    }
  }, [renderLegend, scrollingLayerOfFirstMapView, scrollingLayerOfSecondMapView, activeMapView, inactiveMapView, showSwipeOnMap, scrollFirstMapView, scrollMapViewList, selectedFirstMapViewLayerList, selectedSecondMapViewLayerList])

  const handleShowFirstMapLayers = () => {
    setShowFirstMapViewLayers(!showFirstMapViewLayers)
  }

  const handleShowSecondMapLayers = () => {
    setShowSecondMapViewLayers(!showSecondMapViewLayers)
  }

  const handleShowFirstRuntimeLayers = () => {
    setShowFirstRuntimeLayers(!showFirstRuntimeLayers)
  }
  const handleShowSecondRuntimeLayers = () => {
    setShowSecondRuntimeLayers(!showSecondRuntimeLayers)
  }

  const handleSelectedMapViewLayers = (
    layerList: LayerInfo[],
    setScrollLayerList: React.Dispatch<React.SetStateAction<LayerInfo[]>>,
    setSelectedLayerList: React.Dispatch<React.SetStateAction<Immutable.ImmutableArray<string>>>,
    scrollMapViewLayerListRef: React.MutableRefObject<LayerInfo[]>,
    layerId: string
  ) => {
    const newList = JSON.parse(JSON.stringify(layerList)) as LayerInfo[]

    newList.forEach(layer => {
      if (layer.layerId === layerId) {
        layer.selected = !layer.selected
      }
    })

    setScrollLayerList(newList)
    scrollMapViewLayerListRef.current = newList

    const selectedLayerIds: string[] = []
    newList.forEach(layer => {
      if (layer.selected && layer.visible) {
        selectedLayerIds.push(layer.layerId)
      }
    })

    setSelectedLayerList(Immutable(selectedLayerIds))
  }

  const handleSelectedFirstMapViewLayers = (layerId: string) => {
    handleSelectedMapViewLayers(
      scrollFirstMapViewLayerList,
      setScrollFirstMapViewLayerList,
      setSelectedFirstMapViewLayerList,
      scrollFirstMapViewLayerListRef,
      layerId
    )
  }

  const handleSelectedSecondMapViewLayers = (layerId: string) => {
    handleSelectedMapViewLayers(
      scrollSecondMapViewLayerList,
      setScrollSecondMapViewLayerList,
      setSelectedSecondMapViewLayerList,
      scrollSecondMapViewLayerListRef,
      layerId
    )
  }

  const handleRuntimeSelectedFirstMapViewLayers = (layerId: string) => {
    handleSelectedMapViewLayers(
      runtimeActiveMapViewLayerList,
      setRuntimeActiveMapViewLayerList,
      setSelectedRuntimeActiveMapViewLayerList,
      runtimeActiveMapViewLayerListRef,
      layerId
    )
  }

  const handleRuntimeSelectedSecondMapViewLayers = (layerId: string) => {
    handleSelectedMapViewLayers(
      runtimeInactiveMapViewLayerList,
      setRuntimeInactiveMapViewLayerList,
      setSelectedRuntimeInactiveMapViewLayerList,
      runtimeInactiveMapViewLayerListRef,
      layerId
    )
  }

  //Get the name of the data source.
  const getDataSourceLabel = (dataSourceId: string): string => {
    if (!dataSourceId) {
      return ''
    }
    const dsObj = DataSourceManager.getInstance().getDataSource(dataSourceId)
    const label = dsObj?.getLabel()
    return label || dsObj?.getDataSourceJson().sourceLabel || dataSourceId
  }

  const getLayerIndex = (scrollMapViewList: ImmutableObject<{ [mapViewId: string]: string[] }>, showSwipeOnMap: boolean, mapView: JimuMapView, scrollingLayerOfMapView: JimuLayerView): number => {
    if (showSwipeOnMap) {
      const index = scrollMapViewList?.[mapView?.id]?.indexOf(scrollingLayerOfMapView?.id) + 1
      return index
    } else {
      return -1
    }
  }

  const getRuntimeLayerIndex = (runtimeAddedLayers, scrollingLayerOfMapView): number => {
    if (showSwipeOnMap) {
      const index = runtimeAddedLayers?.indexOf(scrollingLayerOfMapView?.id) + 1
      return index
    } else {
      return -1
    }
  }

  return (
    <div ref={scrollLegendRef} css={style}>
       <CollapsablePanel
          className={classNames(`swipe-collapse ${showSwipeOnMap && scrollFirstMapView ? 'scroll-now' : ''}`)}
          label={getDataSourceLabel(activeMapView.dataSourceId)}
          isOpen={showFirstMapViewLayers}
          aria-label={getDataSourceLabel(activeMapView.dataSourceId)}
          onRequestOpen={handleShowFirstMapLayers}
          onRequestClose={handleShowFirstMapLayers}
        >
        {scrollMapViewList?.[activeMapView?.id]?.length > 0
          ? <LayerList
            layerList={scrollFirstMapViewLayerList}
            onChange={handleSelectedFirstMapViewLayers}
            isAllowDeactivateLayers={isAllowDeactivateLayers}
            highlightIndex={scrollFirstMapView ? getLayerIndex(scrollMapViewList, showSwipeOnMap, activeMapView, scrollingLayerOfFirstMapView) : -1}
          />
          : <EmptyLayerMessage swipeLayerMode />
        }
          {runtimeActiveMapViewLayerList?.length > 0 &&
            <CollapsablePanel
              className='swipe-collapse runtime-layer-collapse'
              label={translate('runtimeLayers')}
              isOpen={showFirstRuntimeLayers}
              aria-label={translate('runtimeLayers')}
              onRequestOpen={handleShowFirstRuntimeLayers}
              onRequestClose={handleShowFirstRuntimeLayers}
              rightIcon={downCircle}
              rightActiveIcon={upCircle}
            >
              <LayerList
                layerList={runtimeActiveMapViewLayerList}
                isAllowDeactivateLayers={true}
                onChange={handleRuntimeSelectedFirstMapViewLayers}
                highlightIndex={scrollFirstMapView ? getRuntimeLayerIndex(runtimeActiveMapViewAddedLayers, scrollingLayerOfFirstMapView) : -1}
              />
            </CollapsablePanel>
          }
        </CollapsablePanel>
        {inactiveMapView && isWebMap(inactiveMapView.dataSourceId) && <CollapsablePanel
          className={classNames(`swipe-collapse ${showSwipeOnMap && (!scrollFirstMapView && scrollingLayerOfSecondMapView) ? 'scroll-now' : ''}`)}
          label={getDataSourceLabel(inactiveMapView.dataSourceId)}
          isOpen={showSecondMapViewLayers}
          aria-label={getDataSourceLabel(inactiveMapView.dataSourceId)}
          onRequestOpen={handleShowSecondMapLayers}
          onRequestClose={handleShowSecondMapLayers}
        >
        {scrollMapViewList?.[inactiveMapView?.id]?.length > 0
          ? <LayerList
            layerList={scrollSecondMapViewLayerList}
            onChange={handleSelectedSecondMapViewLayers}
            isAllowDeactivateLayers={isAllowDeactivateLayers}
            highlightIndex={scrollFirstMapView ? -1 : getLayerIndex(scrollMapViewList, showSwipeOnMap, inactiveMapView, scrollingLayerOfSecondMapView)}
          />
          : <EmptyLayerMessage swipeLayerMode />
        }
          {runtimeInactiveMapViewLayerList?.length > 0 &&
            <CollapsablePanel
              className='swipe-collapse runtime-layer-collapse'
              label={translate('runtimeLayers')}
              isOpen={showSecondRuntimeLayers}
              aria-label={translate('runtimeLayers')}
              onRequestOpen={handleShowSecondRuntimeLayers}
              onRequestClose={handleShowSecondRuntimeLayers}
              rightIcon={downCircle}
              rightActiveIcon={upCircle}
            >
              <LayerList
                layerList={runtimeInactiveMapViewLayerList}
                isAllowDeactivateLayers={true}
                onChange={handleRuntimeSelectedSecondMapViewLayers}
                highlightIndex={scrollFirstMapView ? -1 : getRuntimeLayerIndex(runtimeInactiveMapViewAddedLayers, scrollingLayerOfSecondMapView)}
              />
            </CollapsablePanel>
          }
        </CollapsablePanel> }
    </div>
  )
}

const style = css`
  .swipe-collapse {
    margin-top: 16px;
    .title {
      font-weight: 600;
    }
    .layer-list {
      margin-top: 12px;
      margin-bottom: 16px;
    }
    .no-layer-placeholder {
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }
  .runtime-layer-collapse {
    .title {
      font-size: 13px;
      font-weight: 500;
    }
  }
  .currentLegend {
    margin-top: 8px;
    .esri-legend__message, .esri-legend__service{
      padding-left: 0px;
    }
  }
  .scroll-now {
    .collapse-label {
      position: relative;
      &:after {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        content: "";
        display: block;
        position: absolute;
        right: -10px;
        background-color: var(--primary);
      }
    }
  }
  .runtime-layer-collapse {
    .collapse-label {
      &:after {
        content: none
      }
    }
  }
`
