import React from 'react';
import FreeSelect from '../SearchComponent/FreeSelect';
import AllDayOpenCheckbox from '../SearchComponent/AllDayOpenCheckbox';
import styles from './index.scss';

const SideSearchBlock = () => (
  <div
    data-testid="sideSearchBlock"
    className={styles.side_search_block}
  >
    <div className={styles.search_block}>
      <div className={styles.search_content}>
        <span>免費入場</span>
        <div>
          <FreeSelect />
        </div>
      </div>
      <div className={styles.search_content}>
        <span>其他條件</span>
        <div className={styles.content_query_block}>
          <AllDayOpenCheckbox />
        </div>
      </div>
    </div>
  </div>
);


export default SideSearchBlock;
