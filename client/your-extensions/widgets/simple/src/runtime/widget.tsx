import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import toast, { Toaster } from 'react-hot-toast'

const notify = () => toast.success('Here is your toast.');

const Widget = (props: AllWidgetProps<IMConfig>) => {
  return (
    <div className="widget-demo jimu-widget m-2">
      <button onClick={notify}>Make me a toast</button>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  )
}

export default Widget
