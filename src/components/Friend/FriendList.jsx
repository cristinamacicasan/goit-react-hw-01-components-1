// FriendList.js
import React from 'react';
import FriendListItem from '../Friend/FriendListItem';
import styles from '../Friend/friendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend, index) => (
        <FriendListItem
          key={index} 
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
