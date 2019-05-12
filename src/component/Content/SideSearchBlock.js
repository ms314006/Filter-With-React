import React from 'react';
import styles from './index.scss'

const SideSearchBlock = () => {
  return (
    <div className={styles.side_search_block}>
      <div className={styles.search_block}>
        <div className={styles.search_content}>
          Location
        </div>
      </div>
    </div>
  );
};

export default SideSearchBlock;
