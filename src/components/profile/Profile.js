import React from 'react';
import styles from "./Profile.module.css";

function Profile({ avatar, username, tag, location, followers, views, likes}) {
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={avatar} alt="User avatar" className={styles.avatar} />
          <p className={styles.name}>{username}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
          <li>
            <div className={styles.item}>
              <span className={styles.label}>Followers</span>
              <br />
              <span className={styles.quantity}>{followers}</span>
            </div>
          </li>
          <li>
            <div className={styles.item}>
              <span className={styles.label}>Views</span>
              <br />
              <span className={styles.quantity}>{views}</span>
            </div>
          </li>
          <li>
            <div className={styles.item}>
              <span className={styles.label}>Likes</span>
              <br />
              <span className={styles.quantity}>{likes}</span>
            </div>
          </li>
        </ul>
       </div>
    </>
  );
}
export default Profile;