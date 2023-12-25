import { type IMThemeVariables, css, type SerializedStyles, polished } from 'jimu-core'

export function getPanelHeaderStyles (theme: IMThemeVariables): SerializedStyles {
  return css`
    .panel-header {
      background:${theme.colors.palette.light[300]};
      color:${theme.colors.palette.dark[600]};
      height: 50px;
      flex-shrink: 0;
      font-size: 1rem;
      font-weight: 500;
      .jimu-btn {
        color: ${theme.colors.palette.dark[600]} !important;
      }
      & >.actions >.jimu-btn.action-close :hover {
        color: ${theme.colors.black} !important;
      }
    }
  `
}

export function getPoperStyle (theme: IMThemeVariables): SerializedStyles {
  return css`
      .popper-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .popper-header {
          width: 100%;
          flex-shrink: 0;
          flex-grow: 0;
          cursor: move;
        }
        .map-container {
          width: 800px;
          height: 800px;
          background-color: gray;
          display: contents;
        }
        .popper-footer {
          display: flex;
          background:${theme.colors.palette.light[300]};
          color:${theme.colors.palette.dark[600]};
          padding: ${polished.rem(10)} ${polished.rem(20)};

          .left-tool {
            min-height: 32px;
          }
          .right-tools{
            height: 45px;
            padding: 6px 2px;
            margin-left: auto;

            .jimu-btn {
              min-width: 80px;
            }
          }
        }
      }
  `
}
