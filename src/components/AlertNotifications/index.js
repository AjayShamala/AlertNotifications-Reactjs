import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'
const AlertNotifications = () => {
  const renderSuccessView = () => (
    <div className="containers">
      <AiFillCheckCircle className="image-1" />
      <div>
        <h1 className="heads">Success</h1>
        <p className="paras">You can access all the files in the folder</p>
      </div>
      <Notification />
    </div>
  )
  const renderErrorView = () => (
    <div className="containers">
      <RiErrorWarningFill className="image-2" />
      <div>
        <h1 className="error">Error</h1>
        <p className="parass">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
      <Notification />
    </div>
  )
  const renderWarningView = () => (
    <div className="containers">
      <MdWarning className="image-3" />
      <div>
        <h1 className="heas">Warning</h1>
        <p className="parasss">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
      <Notification />
    </div>
  )
  const renderInfoView = () => (
    <div className="containers">
      <MdInfo className="image-4" />
      <div>
        <h1 className="info">Info</h1>
        <p className="parassss">Anyone on the internet can view these files</p>
      </div>
      <Notification />
    </div>
  )
  return (
    <div className="bg-containers">
      <h1 className="main-heading">Alert Notifications</h1>
      {renderSuccessView()}
      {renderErrorView()}
      {renderWarningView()}
      {renderInfoView()}
    </div>
  )
}
export default AlertNotifications
