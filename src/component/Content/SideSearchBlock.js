import React from 'react';
import { connect } from 'react-redux';
import { changeSearchQuery } from '../../actions/filter.js';
import styles from './index.scss';

const SideSearchBlock = (props) => {
  const { free, allDayOpen, } = props;
  return (
    <div className={styles.side_search_block}>
      <div className={styles.search_block}>
        <div className={styles.search_content}>
          免費入場
          <div>
            <select
              className={styles.search_free_option}
              value={free}
              onChange={(e) => {
                props.changeSearchQuery({ free: e.target.value, });
              }}
            >
              <option value="">請選擇</option>
              <option value="Y">是</option>
              <option value="N">否</option>
            </select>
          </div>
        </div>
        <div className={styles.search_content}>
          其他條件
          <div className={styles.content_query_block}>
            <input
              type="checkbox"
              value={allDayOpen}
              onChange={(e) => {
                props.changeSearchQuery({ allDayOpen: e.target.checked, });
              }}
            />
            全天候開放
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SideSearchBlock);
