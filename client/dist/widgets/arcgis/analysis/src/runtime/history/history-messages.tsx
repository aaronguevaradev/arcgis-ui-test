/** @jsx jsx */
import { React, jsx, css, hooks } from 'jimu-core'
import { convertEsriMessageType, formatDurationTime, formatLearnMoreHelpUrl, formatMessage, formatNumberToLocale, formatTimeToLocale, getHelpBaseUrl, getLocaleInfo, isWarningCreditMessage, TimestampOptions, type LocaleItem } from 'analysis-shared-utils'
import { type AnalysisEngine } from 'analysis-ui-schema'
import { CollapsablePanel, defaultMessages as jimuiDefaultMessages } from 'jimu-ui'
import defaultMessages from '../translations/default'
import { ZeroCreditTools } from '../utils'
import { useGPMessageStrings, useHelpMapStrings } from '../../utils/strings'
import { getLimitLineContentStyle } from '../../utils/util'

interface Props {
  toolName: string
  translatedToolName: string
  analysisEngine: AnalysisEngine
  jobInfo: __esri.JobInfo
  startTimeStamp: number
  endTimeStamp?: number
  portal?: __esri.Portal
}

const { useMemo, useCallback } = React

const style = css`
  padding: 0;
  .msg-item {
    ${getLimitLineContentStyle(4)}
    font-size: 0.75rem;
    line-height: normal;
    color: var(--dark-800);
  }
`

const HistoryMessages = (props: Props) => {
  const translate = hooks.useTranslation(defaultMessages, jimuiDefaultMessages)
  const { toolName, translatedToolName, analysisEngine, jobInfo, startTimeStamp, endTimeStamp, portal } = props
  const { jobStatus, messages: unConvertedMessages } = jobInfo

  // convert here to ensure every message type is right
  const messages = useMemo(() => {
    return Array.isArray(unConvertedMessages)
      ? unConvertedMessages.map((msg) => {
        msg.type = convertEsriMessageType(msg.type) as __esri.GPMessage['type']
        return msg
      })
      : []
  }, [unConvertedMessages])

  const gpMessages = useGPMessageStrings()
  const helpMap = useHelpMapStrings()

  const getMessageLabel = useCallback((message: __esri.GPMessage): string => {
    let label = ''
    switch (message.type) {
      case 'informative':
        break
      case 'error':
        label = translate('error')
        break
      case 'warning':
        label = translate('warning')
        break
      default:
        break
    }
    return label
  }, [translate])

  const getMessageColor = (type: __esri.GPMessage['type']): string => {
    switch (type) {
      case 'informative':
        return 'var(--dark-800)'
      case 'error':
        return 'var(--danger)'
      case 'warning':
        return 'var(--warning-900)'
      default:
        return ''
    }
  }

  const getFormattedMessage = useCallback((message: __esri.GPMessage): string => {
    try {
      const parsedDescription = JSON.parse(message.description)
      // TODO: check if translated string is empty or undefined and fallback to server message if needed
      return formatMessage(gpMessages[parsedDescription?.messageCode] as string, parsedDescription.params as LocaleItem)
    } catch (error) {
      return message.description
    }
  }, [gpMessages])

  const formatTimestamp = (timestamp?: number): string => {
    return timestamp ? formatTimeToLocale(timestamp, TimestampOptions.long) : ''
  }

  const errorAndWarningMessages = useMemo(() => messages.filter((msg) => msg.type !== 'informative' && !isWarningCreditMessage(msg)), [messages])

  const creditMessage = useMemo(() => messages.find((msg) => isWarningCreditMessage(msg)), [messages])

  const getCreditMessageInfo = useCallback((): { label: string, value: string } | null => {
    let creditMessageInfo = null
    const creditsMessageDesc = JSON.parse(creditMessage?.description ?? '{}')
    const creditsCost = creditsMessageDesc.cost

    // TODO check if need link
    // const creditRowLabelWithLink = translate('creditMessage', {
    //   docLink: formatLocalizedUrl(
    //     (helpMap?.OtherHelpLinks as LocaleItem)?.creditsAnalysis as string,
    //     getHelpBaseUrl(portal)
    //   )
    // })

    const isZeroCreditsTool = !!ZeroCreditTools.find((tool) => tool.toolName === toolName && tool.analysisEngine === analysisEngine)

    const creditsMessageNoLink = translate('creditsMessageNoLink')
    if (creditsCost !== undefined && creditsCost !== -1 && !isZeroCreditsTool) {
      const localizedCreditCost = formatNumberToLocale(creditsCost)
      creditMessageInfo = { label: creditsMessageNoLink, value: localizedCreditCost }
    } else if (isZeroCreditsTool) {
      creditMessageInfo = { label: creditsMessageNoLink, value: translate('zeroCreditsMessage') }
    } else if (creditsCost === -1) {
      const formattedCreditsMessage = translate('checkCreditUsage', {
        url: formatLearnMoreHelpUrl({
          url: (helpMap?.OtherHelpLinks as LocaleItem)?.creditsAdmin as string,
          basePath: getHelpBaseUrl(portal),
          locale: getLocaleInfo().locale,
          portalUrl: portal?.restUrl
        })
      })
      creditMessageInfo = { label: creditsMessageNoLink, value: formattedCreditsMessage }
    }
    return creditMessageInfo
  }, [analysisEngine, creditMessage?.description, helpMap, portal, toolName, translate])

  const needDisplayMessages = useMemo(() => {
    const messages: Array<{ label: string, value: string, type: __esri.GPMessage['type'] }> = [
      {
        label: translate('startTime'),
        value: formatTimestamp(startTimeStamp),
        type: 'informative'
      },
      ...errorAndWarningMessages.map((msg) => ({ label: getMessageLabel(msg), value: getFormattedMessage(msg), type: msg.type }))
    ]

    // If no messages will be displayed and the job failed, display a generic error message
    if (!errorAndWarningMessages.length && jobStatus === 'job-failed') {
      messages.push({
        label: translate('error'),
        value: translate('genericFailureMessage', { toolName: translatedToolName }),
        type: 'error'
      })
    }
    if (jobStatus === 'job-cancelled') {
      messages.push({
        label: '',
        value: translate('jobCancelled', { toolName: translatedToolName }),
        type: 'error'
      })
    }

    if (endTimeStamp) {
      messages.push({
        label: translate('endTime'),
        value: formatTimestamp(endTimeStamp),
        type: 'informative'
      })
      messages.push({
        label: translate('elapsedTime'),
        value: formatDurationTime(startTimeStamp, endTimeStamp),
        type: 'informative'
      })
    }
    const creditMessageInfo = getCreditMessageInfo()
    if (creditMessageInfo) {
      messages.push({ ...creditMessageInfo, type: 'informative' })
    }
    return messages
  }, [errorAndWarningMessages, translate, startTimeStamp, jobStatus, endTimeStamp, getCreditMessageInfo, getMessageLabel, getFormattedMessage, translatedToolName])

  return (
    <CollapsablePanel label={translate('messages')} aria-label={translate('messages')} type="default" defaultIsOpen>
      <ul css={style}>
        {needDisplayMessages.map((msgInfo, index) => {
          const displayMsg = msgInfo.label ? `${msgInfo.label}: ${msgInfo.value}` : msgInfo.value
          const color = getMessageColor(msgInfo.type)
          return <li className='msg-item' key={index} style={color ? { color } : {}} title={displayMsg}>
            {displayMsg}
          </li>
        })}
      </ul>
    </CollapsablePanel>
  )
}

export default HistoryMessages
