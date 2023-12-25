import { css, type SerializedStyles } from 'jimu-core'

export function getStyles (): SerializedStyles {
  return css`
    .placeholder-wapper { /* larger placeholder size ,#11524 */
      display: flex;
      align-items: center;
      min-width: 440px;
      min-height: 444px;
    }
  `
}
