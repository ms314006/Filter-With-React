import React from 'react';
import FreeSelect from '../SearchComponent/FreeSelect';
import AllDayOpenCheckbox from '../SearchComponent/AllDayOpenCheckbox';
import styles from './index.scss';

const SideSearchBlock = () => (
  <div className={styles.side_search_block}>
    <div className={styles.search_block}>
      <div className={styles.search_content}>
        免費入場
        <div>
          <FreeSelect />
        </div>
      </div>
      <div className={styles.search_content}>
        其他條件
        <div className={styles.content_query_block}>
          <AllDayOpenCheckbox />
        </div>
      </div>
    </div>
  </div>
);


export default SideSearchBlock;
