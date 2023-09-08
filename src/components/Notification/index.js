import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="notification">
      <div className="notification-align">{children}</div>
      <button type="button" className="btn">
        <GrFormClose className="close-icon" />
      </button>
    </div>
  )
}

export default Notification
