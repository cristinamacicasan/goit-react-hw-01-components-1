
import React from 'react';
import styles from '../Friend/friendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
   return (
    <li className={styles.item}>
      <span className={styles.online} style={{ backgroundColor: isOnline ? 'green' : 'red' }} />
      <img src={avatar} alt="User avatar" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
