import React from "react";
import styles from "./FriendList.module.css";

function FriendList({friends}) {
  // const spfff = friends.isOnline ? styles.online : styles.offline;
  // console.log(friends.isOnline);
  return (
    <>
      <ul className={styles.friend_list}>
        {friends.map((item) => (
          <li className={styles.item} key={item.id}>
            <span className={item.isOnline ? styles.online : styles.offline}>{item.isOnline}</span>
            <img
              className={styles.avatar}
              src={item.avatar}
              alt="User avatar"
            />
            <p className={styles.name}>{item.name}</p>
          </li>
        ))}
      </ul>
      <hr />
    </>
  );
}
export default FriendList;