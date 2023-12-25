import { React, type ImmutableObject, hooks } from 'jimu-core'
import {
  NumericInput,
  defaultMessages as jimuUiDefaultMessage
} from 'jimu-ui'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import defaultMessages from '../../../../translations/default'
import { type CategoryFormatOptions } from 'jimu-ui/advanced/chart'
import { styled } from 'jimu-theme'

export interface LabelFormatSettingProps {
  value: ImmutableObject<CategoryFormatOptions>
  onChange: (value: ImmutableObject<CategoryFormatOptions>) => void
}

const Root = styled.div`
  width: 100%;
  .jimu-widget-setting--row-label {
    color: var(--dark-400);
  }
`

export const LabelFormatSetting = (props: LabelFormatSettingProps): React.ReactElement => {
  const { value, onChange } = props

  const characterLimit = value?.characterLimit ?? ''
  const translate = hooks.useTranslation(defaultMessages, jimuUiDefaultMessage)

  const handleCharacterLimitChange = (characterLimit: number): void => {
    if (!characterLimit) {
      onChange(value.without('characterLimit'))
    } else {
      onChange(
        value.set(
          'characterLimit',
          Math.floor(+characterLimit)
        )
      )
    }
  }

  return (
    <Root className='label-format-setting'>
       <SettingRow label={translate('characterLimit')} flow='no-wrap' truncateLabel={true}>
          <NumericInput
            size='sm'
            aria-label={translate('characterLimit')}
            showHandlers={false}
            value={characterLimit}
            min={1}
            max={99}
            step={1}
            className='w-50'
            onAcceptValue={handleCharacterLimitChange}
          />
        </SettingRow>
    </Root>
  )
}
