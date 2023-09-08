import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="alert-notification-container">
    <h1 className="header">Alert Notifications</h1>
    <div className="notifications-container">
      <Notification>
        <AiFillCheckCircle className="display-icon success" />
        <div className="heading-description">
          <h1 className="heading success">Success</h1>
          <p className="description">
            You can access all the files in the folder
          </p>
        </div>
      </Notification>
      <Notification>
        <RiErrorWarningFill className="display-icon error" />
        <div className="heading-description">
          <h1 className="heading error">Error</h1>
          <p className="description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </Notification>
      <Notification>
        <MdWarning className="display-icon warning" />
        <div className="heading-description">
          <h1 className="heading warning">Warning</h1>
          <p className="description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </Notification>
      <Notification>
        <MdInfo className="display-icon info" />
        <div className="heading-description">
          <h1 className="heading info">Info</h1>
          <p className="description">
            Anyone on the internet can view these files
          </p>
        </div>
      </Notification>
    </div>
  </div>
)

export default AlertNotifications
