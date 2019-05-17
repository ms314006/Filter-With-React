import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeSearchQuery } from '../../../actions/filter.js';
import styles from './index.scss';
import searchStyles from '../SideSearchBlock/index.scss';

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
        <div className={`${free ? styles.open_panel_search : styles.close_panel_search} ${styles.panel_content_block}`}>
          <select
            className={searchStyles.search_free_option}
            value={props.free}
            onChange={(e) => {
              props.changeQuery({ free: e.target.value, });
            }}
          >
            <option value="">請選擇</option>
            <option value="Y">是</option>
            <option value="N">否</option>
          </select>
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
          <input
            type="checkbox"
            checked={props.allDayOpen}
            onChange={(e) => {
              props.changeQuery({ allDayOpen: e.target.checked, });
            }}
          />
          &nbsp;全天候開放
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  free: state.searchQuery.free,
  allDayOpen: state.searchQuery.allDayOpen,
});

const mapDispatchToProps = dispatch => ({
  changeQuery: query => dispatch(changeSearchQuery(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopSearchBlock);
