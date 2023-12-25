/// <reference types="react" />
import { React, type IMFieldSchema, type ClauseValueOptions, type ClauseValuePair } from 'jimu-core';
interface Props {
    'aria-label'?: string;
    'aria-describedby'?: string;
    value: ClauseValueOptions;
    fieldObj: IMFieldSchema;
    runtime: boolean;
    isSmallSize?: boolean;
    onChange: (valueObj: ClauseValueOptions) => void;
    style?: React.CSSProperties;
}
interface State {
    DatePicker: any;
    displayUI: string;
}
export declare class _VIDateTimePicker extends React.PureComponent<Props, State> {
    __unmount: boolean;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    getInputEditor: (inputEditorType: string) => string;
    onChange: (value: number, label?: string) => void;
    getDateFromUTC: (valuePair: ClauseValuePair) => Date;
    render(): React.JSX.Element;
}
declare const VIDateTimePicker: typeof _VIDateTimePicker;
export default VIDateTimePicker;
