import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'antd';
import { fetchData, filterData } from '../../actions/filter.js';
import styles from './index.scss';

const DataList = (props) => {
  const { originDataList, filterDataList, } = props;
  useEffect(() => {
    props.fetchData();
  }, []);
  return (
    <div className={styles.content_data_block}>
      <Pagination
        defaultCurrent={1}
        total={originDataList.length}
        onChange={(page, pageSize) => { props.filterData({ page, pageSize, }); }}
      />
      {
        filterDataList.map(data => <h1 key={data.Id}>{data.Name}</h1>)
      }
    </div>
  );
};

const mapStateToProps = state => ({
  originDataList: state.originDataList,
  filterDataList: state.filterDataList,
});

const mapDispatchToProps = dispatch => ({
  fetchData: fetchData(dispatch),
  filterData: query => dispatch(filterData(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataList);
