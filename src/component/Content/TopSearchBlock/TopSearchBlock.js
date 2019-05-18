import React, { useState } from 'react';
import FreeSelect from '../SearchComponent/FreeSelect';
import AllDayOpenCheckbox from '../SearchComponent/AllDayOpenCheckbox';
import styles from './index.scss';

const TopSearchBlock = (props) => {
  const [free, changeFree] = useState(false);
  const [allDayOpen, changeAllDayOpen] = useState(false);

  const changeState = (key) => {
    switch (key) {
      case 'free':
        changeFree(!free);
        break;
      case 'allDayOpen':
        changeAllDayOpen(!allDayOpen);
        break;
      default:
    }
  };

  const changePanelStyleWith = (keys) => {
    changeState(keys);
  };

  return (
    <div className={styles.top_search_block}>
      <div className={`${styles.panel_block} ${free ? styles.open_panel_block : ''}`}>
        <div
          className={styles.panel_content_block}
          onClick={() => { changePanelStyleWith('free'); }}
          onKeyDown={() => {}}
        >
          <div className={styles.panel_content}>
            免費入場
          </div>
          <div>
            { free ? '-' : '+'}
          </div>
        </div>
        <div className={`${styles.panel_content_block} ${free ? styles.open_panel_search : styles.close_panel_search}`}>
          <FreeSelect />
        </div>
      </div>
      <div className={`${styles.panel_block} ${allDayOpen ? styles.open_panel_block : ''}`}>
        <div
          className={styles.panel_content_block}
          onClick={() => { changePanelStyleWith('allDayOpen'); }}
          onKeyDown={() => {}}
        >
          <div className={styles.panel_content}>
            其他條件
          </div>
          <div>
            { allDayOpen ? '-' : '+'}
          </div>
        </div>
        <div className={`${allDayOpen ? styles.open_panel_search : styles.close_panel_search} ${styles.panel_content_block}`}>
          <AllDayOpenCheckbox />
        </div>
      </div>
    </div>
  );
};

export default TopSearchBlock;
