import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'antd';
import { fetchData } from '../../actions/filter.js';
import styles from './index.scss';

const DataList = (props) => {
  const { dataList, } = props;
  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <div className={styles.content_data_block}>
      <Pagination
        defaultCurrent={1}
        total={dataList.length}
        onChange={(page, pageSize) => { console.log(page); }}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  dataList: state.dataList,
});

const mapDispatchToProps = dispatch => ({
  fetchData: fetchData(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataList);
