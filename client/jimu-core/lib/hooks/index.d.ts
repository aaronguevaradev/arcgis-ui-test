import * as React from 'react';
import * as cancelablePromise from 'cancelable-promise';
interface UseControlledProps {
    /**
     * This prop contains the component value when it's controlled.
     */
    controlled: any;
    /**
     * The default value.
     */
    default: any;
}
type RefValue<T> = React.RefObject<T> | React.MutableRefObject<T> | ((e: T) => void);
/**
 * Returns a function to use Intl translation.
 * If no message is passed in, the default message of `jimu-core` will be used
 *
 * example:
 * ```tsx
 * const translate = useTranslate(jimucoreMessages, widgetMessages)
 * translate('ok')
 * ```
 */
export declare const useTranslation: (msg1?: {
    [x: string]: string;
}, msg2?: {
    [x: string]: string;
}, msg3?: {
    [x: string]: string;
}) => (id: string, values?: any) => string;
/**
 * A Hook that returns the latest value, effectively avoiding the closure problem.
 * @param value
 * @returns {React.MutableRefObject<T>}
 *
 * example:
 * ```tsx
 * const valueRef = useLatest(value)
 *
 * React.useEffect(() => {
 *  console.log(valueRef.current)
 * }, [valueRef])
 * ```
 */
export declare const useLatest: <T>(value: T) => React.MutableRefObject<T>;
/**
 * This will create a new function to assign value to both input refs.
 *
 * example:
 * ```tsx
 * const Component = React.forwardRef((props, ref) => {
 *   const nodeRef = React.useRef(null)
 *   const handleRef = useForwardRef(ref, nodeRef)
 *
 *   return <div ref={handleRef} />
 * })
 * ```
 */
export declare const useForkRef: <T>(refA: RefValue<T>, refB: RefValue<T>) => (refValue: any) => void;
/**
 * Receives a ref, returns a ref and a callback function to assign value to both refs.
 * @param ref
 *
 * example:
 * ```tsx
 * const Component = React.forwardRef((props, ref) => {
 *   const [nodeRef, handleRef] = useForwardRef(ref)
 *
 *   return <div ref={handleRef} />
 * })
 * ```
 */
export declare const useForwardRef: <T>(ref: RefValue<T>) => [React.MutableRefObject<T>, (T: any) => void];
/**
 * Returns true if component is just mounted (on first render) and false otherwise.
 *
 * example:
 * ```tsx
 * const Component = () => {
 *  const isFirstMount = useFirstMountState()
 *  if (isFirstMount) {
 *   console.log('first mount')
 *  }
 *  return <div />
 * }
 * ```
 */
export declare const useFirstMountState: () => boolean;
/**
 * React effect hook that ignores the first invocation (e.g. on mount).
 * The signature is exactly the same as the useEffect hook.
 *
 * example:
 * ```tsx
 * const Component = ({ value }) => {
 *  useUpdateEffect(() => {
 *    console.log('update')
 *  }, [value])
 *
 * return <div />
 *
 * @param effect
 * @param deps
 */
export declare const useUpdateEffect: (effect: any, deps: any) => void;
/**
 * React lifecycle hook that runs an effect only once.
 * @param effect
 *
 * example:
 * ```tsx
 * const Component = () => {
 *  useEffectOnce(() => {
 *    console.log('mount')
 *  })
 * return <div />
 */
export declare const useEffectOnce: (effect: React.EffectCallback) => void;
/**
 * React lifecycle hook that calls a function when the component will unmount.
 * @param fn
 *
 * example:
 * ```tsx
 * const Component = () => {
 *  useUnmount(() => {
 *    console.log('unmount')
 *  })
 * return <div />
 */
export declare const useUnmount: (fn: () => any) => void;
/**
 * A hook used to memoize a function that is used as a callback.
 * Used if you want create a memoized callback with multiple dependencies.
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 * @param fn
 * @param dependencies
 * Note: Don't call this in the render phase
 *
 * example:
 * ```tsx
 * const Component = ({ foo, bar }) => {
 *   const handleChange = useEventCallback(() => {
 *      console.log(foo, bar)
 *   })
 *  return <Subcomponent onChange={handleClick} />
 */
export declare const useEventCallback: (fn: any) => (...args: any[]) => any;
/**
 * A hook used to support controlled and uncontrolled components.
 * when controlled, use value from props, otherwise use value from state and update value by setState.
 *
 * example:
 * ```tsx
 * const Component = ({ value: propValue, defaultValue }) => {
 *   const [value, setValue] = useControlled({ controlled: propValue, default: defaultValue })
 *
 * return <Subcomponent onChange={setValue} value={value} />
 */
export declare const useControlled: ({ controlled, default: defaultProp }: UseControlledProps) => any[];
/**
 * A hook used to check if the specified widget is selected.
 * @param id
 *
 * example:
 * ```tsx
 * const Widget = ({ id }) => {
 *  const isSelected = useWidgetSelected(id)
 * return <div className={isSelected ? 'selected' : ''} />
 */
export declare const useWidgetSelected: (id: string) => boolean;
/**
 * A hook used to check if the specified widget is actived.
 * @param id
 *
 * example:
 * ```tsx
 * const Widget = ({ id }) => {
 * const active = useWidgetActived(id)
 * return <div className={active ? 'active' : ''} />
 */
export declare const useWidgetActived: (id: string) => boolean;
/**
 * A hook used to check if the app is in small browser size mode.
 *
 * example:
 * ```tsx
 * const Widget = () => {
 * const isMobile = useCheckSmallBrowserSizeMode()
 * return <>{isMobile ? <MobileView /> : <DesktopView />}</>
 */
export declare const useCheckSmallBrowserSizeMode: () => boolean;
/**
 * This hook returns a function named `cancelable`.
 * Input of `cancelable` is a common promise and output of it is a cancelable promise (see jimu-core `cancelablePromise.cancelable` for more details).
 * If components are to unmount, the hook will help to cancel all promises.
 *
 * example:
 * ```tsx
 * const Component = () => {
 * const cancelable = useCancelablePromiseMaker()
 * const [data, setData] = useState()
 * useEffect(() => {
 *   const promise = cancelable(fetchData())
 *    promise.then((data) => {
 *      setData(data)
 *    })
 *    }, [])
 * return <div />
 */
export declare const useCancelablePromiseMaker: () => <T>(p: Promise<T>) => cancelablePromise.CancelablePromise<T>;
/**
 * A Hook that returns the previous value.
 * @param value
 * @returns { T | undefined }
 *
 * example:
 * ```tsx
 * const prevValue = usePrevious(value)
 *
 * React.useEffect(() => {
 *  console.log(prevValue)
 * }, [value])
 * ```
 */
export declare const usePrevious: <T>(value: T) => T;
export {};
