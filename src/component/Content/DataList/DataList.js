import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Pagination } from 'antd';
import Data from './Data';
import { changeSearchQuery } from '../../../actions/filter.js';
import styles from './index.scss';

const DataList = (props) => {
  const {
    filterDataList,
    page,
    pageSize,
  } = props;

  return (
    <div className={styles.content_data_block}>
      <div className={styles.search_count_text}>
        Showing
        <span className={styles.search_result_count}>
        &nbsp;
          {filterDataList.length}
        &nbsp;
        </span>
        results by…
      </div>
      {
        filterDataList.slice((page - 1) * pageSize, page * pageSize).map(data => <Data key={data.Id} data={data} />)
      }
      <Pagination
        defaultCurrent={1}
        total={filterDataList.length}
        onChange={(page, pageSize) => { props.changeSearchQuery({ page, pageSize, }); }}
      />
    </div>
  );
};

DataList.propTypes = {
  page: PropTypes.number,
  pageSize: PropTypes.number,
  filterDataList: PropTypes.arrayOf(PropTypes.shape({})),
  changeSearchQuery: PropTypes.func,
};

DataList.defaultProps = {
  page: 1,
  pageSize: 10,
  filterDataList: [],
  changeSearchQuery: () => {},
};

const mapStateToProps = state => ({
  page: state.searchQuery.page,
  pageSize: state.searchQuery.pageSize,
  originDataList: state.originDataList,
  filterDataList: state.filterDataList,
});

const mapDispatchToProps = dispatch => ({
  changeSearchQuery: query => dispatch(changeSearchQuery(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataList);
