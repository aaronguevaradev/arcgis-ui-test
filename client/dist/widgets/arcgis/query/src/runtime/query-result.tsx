/** @jsx jsx */
import {
  React,
  jsx,
  css,
  ReactRedux,
  type IMState,
  type DataSource,
  type ImmutableObject,
  type DataRecord,
  type QueryParams,
  DataSourceComponent,
  DataSourceManager,
  Immutable,
  hooks,
  type DataRecordSet
} from 'jimu-core'
import { Button, Icon, Tooltip, DataActionList, DataActionListStyle } from 'jimu-ui'
import { getWidgetRuntimeDataMap } from './widget-config'
import { type QueryItemType, FieldsType, PagingType, ListDirection } from '../config'
import defaultMessage from './translations/default'
import { LazyList } from './lazy-list'
import { PagingList } from './paging-list'
import { DEFAULT_QUERY_ITEM } from '../default-query-item'
import { ArrowLeftOutlined } from 'jimu-icons/outlined/directional/arrow-left'

const { iconMap } = getWidgetRuntimeDataMap()

export interface QueryTasResultProps {
  widgetId: string
  resultCount: number
  maxPerPage: number
  queryParams: QueryParams
  outputDS: DataSource
  queryItem: ImmutableObject<QueryItemType>
  defaultPageSize: number
  records: DataRecord[]
  onNavBack: (clearResults?: boolean) => void
}

const resultStyle = css`
  display: flex;
  flex-direction: column;

  .query-result__header {
    color: var(--dark-800);
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
  }

  .query-result-container {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
  }

  .query-result-info {
    height: 18px;
  }
`

export function QueryTaskResult (props: QueryTasResultProps) {
  const { queryItem, queryParams, resultCount, maxPerPage, records, defaultPageSize, widgetId, outputDS, onNavBack } = props
  const getI18nMessage = hooks.useTranslation(defaultMessage)
  const [queryData, setQueryData] = React.useState(null)
  const [selectedRecords, setSelectedRecords] = React.useState<DataRecord[]>([])
  const backBtnRef = React.useRef<HTMLButtonElement>()

  const enableDataAction = ReactRedux.useSelector((state: IMState) => {
    const widgetJson = state.appConfig.widgets[widgetId]
    return widgetJson.enableDataAction ?? true
  })

  const pagingTypeInConfig = ReactRedux.useSelector((state: IMState) => {
    const widgetJson = state.appConfig.widgets[widgetId]
    return widgetJson.config.resultPagingStyle
  })
  const directionTypeInConfig = ReactRedux.useSelector((state: IMState) => {
    const widgetJson = state.appConfig.widgets[widgetId]
    return widgetJson.config.resultListDirection
  })

  const currentItem = Object.assign({}, DEFAULT_QUERY_ITEM, queryItem)
  const pagingType = pagingTypeInConfig ?? PagingType.MultiPage
  const direction = directionTypeInConfig ?? ListDirection.Vertical

  const actionDataSet: DataRecordSet = React.useMemo(() => {
    const dataSet: DataRecordSet = {
      dataSource: outputDS,
      type: selectedRecords?.length > 0 ? 'selected' : 'loaded',
      records: selectedRecords?.length > 0 ? selectedRecords : (queryData?.records || []),
      name: outputDS?.getLabel()
    }
    if (currentItem.resultFieldsType === FieldsType.SelectAttributes && currentItem.resultDisplayFields != null) {
      dataSet.fields = currentItem.resultDisplayFields
    }
    return dataSet
  }, [selectedRecords, outputDS, queryData, currentItem])

  hooks.useEffectOnce(() => {
    // focus the back button when it is rendered
    backBtnRef.current.focus()
  })

  React.useEffect(() => {
    setQueryData({
      records,
      pageSize: defaultPageSize,
      page: 1
    })
  }, [records, defaultPageSize])

  const clearResults = () => {
    onNavBack(true)
    setQueryData(null)
    outputDS.selectRecordsByIds?.([])
  }

  const handleRenderDone = React.useCallback(({ dataItems, pageSize, page }) => {
    setQueryData({
      records: dataItems,
      pageSize,
      page
    })
  }, [])

  const handleDataSourceInfoChange = React.useCallback(() => {
    const ds = DataSourceManager.getInstance().getDataSource(outputDS?.id)
    const records = ds?.getSelectedRecords()
    const selectedIds = ds?.getSelectedRecordIds() ?? []
    let shouldUpdate = false
    if (selectedIds.length !== selectedRecords.length) {
      shouldUpdate = true
    } else { // equal length
      shouldUpdate = selectedIds.some(id => {
        const target = selectedRecords.find((item) => item.getId() === id)
        return target == null
      })
    }
    if (shouldUpdate) {
      setSelectedRecords(records)
    }
  }, [outputDS?.id, selectedRecords])

  const getTipMessage = React.useCallback(() => {
    if (queryData) {
      if (pagingType === PagingType.LazyLoad) {
        return `${getI18nMessage('featuresDisplayed')}: ${queryData?.records?.length} / ${resultCount}`
      }
      const from = (queryData.page - 1) * queryData.pageSize + 1
      const to = from + queryData.pageSize - 1
      if (resultCount > 0) {
        return `${getI18nMessage('featuresDisplayed')}: ${from} - ${Math.min(to, resultCount)} / ${resultCount}`
      }
      return `${getI18nMessage('featuresDisplayed')}: 0 - 0 / 0`
    }
    return ''
  }, [queryData, resultCount, getI18nMessage, pagingType])

  const resultUseOutputDataSource = React.useMemo(() => {
    return Immutable({
      dataSourceId: queryItem.outputDataSourceId,
      mainDataSourceId: queryItem.outputDataSourceId
    })
  }, [queryItem?.outputDataSourceId])

  const handleEscape = React.useCallback(() => {
    backBtnRef.current?.focus()
  }, [])

  return (
    <div className='query-result h-100' css={resultStyle} role='listbox' aria-label={getI18nMessage('results')}>
      <DataSourceComponent useDataSource={resultUseOutputDataSource} onDataSourceInfoChange={handleDataSourceInfoChange} />
      <div className='query-result__header d-flex align-items-center px-3'>
        <Button ref={backBtnRef} className='p-0 mr-2' size='sm' type='tertiary' icon onClick={() => { onNavBack() }}>
          <ArrowLeftOutlined autoFlip/>
        </Button>
        {currentItem.resultsLabel ?? getI18nMessage('results')}
        {(
          <React.Fragment>
            <Tooltip title={getI18nMessage('clearResult')} placement='bottom'>
              <Button className='ml-auto' icon size='sm' type='tertiary' onClick={clearResults} aria-label={getI18nMessage('clearResult')}>
                <Icon icon={iconMap.toolDelete} />
              </Button>
            </Tooltip>
            {enableDataAction && outputDS && (
              <React.Fragment>
                <div css={css`width: 1px; height: 16px; background-color: var(--light-400);`}></div>
                <DataActionList
                  widgetId={widgetId}
                  dataSets={[actionDataSet]}
                  listStyle={DataActionListStyle.Dropdown}
                  buttonSize='sm'
                  buttonType='tertiary'
                />
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
      <div className='query-result-container mt-1'>
        <div className='query-result-info mb-2 px-3' role='alert' aria-live='polite'>
          {getTipMessage()}
        </div>
        {pagingType === PagingType.LazyLoad && resultCount > 0 && (
          <LazyList
            widgetId={widgetId}
            queryItem={queryItem}
            outputDS={outputDS as any}
            queryParams={queryParams}
            resultCount={resultCount}
            records={records}
            direction={direction}
            onRenderDone={handleRenderDone}
            onEscape={handleEscape}
          />
        )}
        {pagingType === PagingType.MultiPage && resultCount > 0 && (
          <PagingList
            widgetId={widgetId}
            queryItem={queryItem}
            outputDS={outputDS as any}
            queryParams={queryParams}
            resultCount={resultCount}
            maxPerPage={maxPerPage}
            records={records}
            direction={direction}
            onRenderDone={handleRenderDone}
            onEscape={handleEscape}
            defaultPageSize={defaultPageSize}
          />
        )}
      </div>
    </div>
  )
}
