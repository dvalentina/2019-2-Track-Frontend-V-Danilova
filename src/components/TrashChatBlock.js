import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from '../styles/chatBlockStyles.module.css'
import { ReactComponent as ChatAvatarSvg } from '../assets/user.svg'
import { ReactComponent as DeliveryIndicatorSvg } from '../assets/tick.svg'

export default function TrashChatBlock({ lastMessage, name, time }) {
  return (
    <div>
      <Link to="/trash_chat" className={styles.link}>
        <div className={styles.chatBlock}>
          <ChatAvatar />
          <ChatBlockCenter name={name} lastMessage={lastMessage} />
          <ChatBlockRight time={time} />
        </div>
      </Link>
      <hr />
    </div>
  )
}

TrashChatBlock.propTypes = {
  name: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}

function ChatAvatar(props) {
  return (
    <div className={styles.chatAvatar}>
      <ChatAvatarSvg className={styles.chatAvatarSvg} />
    </div>
  )
}

function ChatBlockCenter({ name, lastMessage }) {
  return (
    <div className={styles.chatBlockCenterColumn}>
      <div className={styles.chatName}>{name}</div>
      <div className={styles.chatLastMessage}>{lastMessage}</div>
    </div>
  )
}

ChatBlockCenter.propTypes = {
  name: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
}

function ChatBlockRight({ time }) {
  return (
    <div className={styles.chatBlockRightColumn}>
      <div className={styles.chatTime}>{time}</div>
      <ChatDeliveryIndicator />
    </div>
  )
}

ChatBlockRight.propTypes = {
  time: PropTypes.string.isRequired,
}

function ChatDeliveryIndicator(props) {
  return (
    <div className={styles.chatDeliveryIndicator}>
      <DeliveryIndicatorSvg className={styles.chatDeliveryIndicatorSvg} />
    </div>
  )
}
