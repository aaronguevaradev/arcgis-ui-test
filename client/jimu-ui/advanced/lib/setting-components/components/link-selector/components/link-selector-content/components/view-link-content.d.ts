/// <reference types="react" />
import { React, type IMAppConfig, type BrowserSizeMode, type IntlShape, type ImmutableArray } from 'jimu-core';
import { type IMLinkParam, OpenTypes } from '../../../types';
interface Props {
    linkParam: IMLinkParam;
    originLinkParam: IMLinkParam;
    onLinkParamChange: any;
    appConfig: IMAppConfig;
    browserSizeMode: BrowserSizeMode;
    intl: IntlShape;
    openTypes: ImmutableArray<OpenTypes>;
}
interface States {
    viewLinkParamArr: string[];
    scrollToViewId: string;
}
export default class ViewLinkContent extends React.PureComponent<Props, States> {
    noScroll: string;
    constructor(props: any);
    componentDidMount(): void;
    static getDerivedStateFromProps(newProps: Props, prevState: States): {
        viewLinkParamArr: string[];
        scrollToViewId: string;
    };
    getInitLinkParam: () => IMLinkParam;
    getInitOpenType: () => OpenTypes;
    pageOrDialogChange: (e: any) => void;
    viewChange: (viewId: string, sectionId: string) => void;
    viewRemove: (viewId: string) => void;
    onScrollToViewChange: (viewId: string) => void;
    getDefaultPageOrDialogId: () => string;
    getSelectedVeiwIds: () => string[];
    render(): React.JSX.Element;
}
export {};
