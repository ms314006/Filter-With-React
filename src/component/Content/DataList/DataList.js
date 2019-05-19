import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Pagination, Tag } from 'antd';
import Data from './Data';
import { changeSearchQuery } from '../../../actions/filter.js';
import styles from './index.scss';

const DataList = (props) => {
  const {
    filterDataList,
    page,
    pageSize,
    free,
    allDayOpen,
  } = props;

  return (
    <>
      <div data-testid="dataCountText" className={styles.search_count_text}>
        Showing
        <span className={styles.search_result_count}>
        &nbsp;
          {filterDataList.length}
        &nbsp;
        </span>
        results by…
      </div>
      <div
        data-testid="searchTagBlock"
        className={styles.search_tag_block}
      >
        { free !== ''
          ? (
            <Tag closable onClose={() => { props.changeSearchQuery({ free: '', }); }}>
              <span data-testid="freeTag">{free === 'Y' ? '免費入場' : '需付費入場'}</span>
            </Tag>
          )
          : null
        }
        { allDayOpen
          ? (
            <Tag closable onClose={() => { props.changeSearchQuery({ allDayOpen: false, }); }}>
              <span data-testid="allDayOprnTag">全天候開放</span>
            </Tag>
          )
          : null
        }
      </div>
      <div data-testid="dataListBlock">
        {
          filterDataList.slice((page - 1) * pageSize, page * pageSize).map(data => <Data key={data.Id} data={data} />)
        }
      </div>
      <div className={styles.pagination_block}>
        <Pagination
          data-testid="paginationBlock"
          defaultCurrent={1}
          total={filterDataList.length}
          onChange={(page, pageSize) => { props.changeSearchQuery({ page, pageSize, }); }}
        />
      </div>
    </>
  );
};

DataList.propTypes = {
  page: PropTypes.number,
  pageSize: PropTypes.number,
  free: PropTypes.string,
  allDayOpen: PropTypes.bool,
  filterDataList: PropTypes.arrayOf(PropTypes.shape({})),
  changeSearchQuery: PropTypes.func,
};

DataList.defaultProps = {
  page: 1,
  pageSize: 10,
  free: '',
  allDayOpen: false,
  filterDataList: [],
  changeSearchQuery: () => {},
};

const mapStateToProps = state => ({
  page: state.searchQuery.page,
  pageSize: state.searchQuery.pageSize,
  free: state.searchQuery.free,
  allDayOpen: state.searchQuery.allDayOpen,
  originDataList: state.originDataList,
  filterDataList: state.filterDataList,
});

const mapDispatchToProps = dispatch => ({
  changeSearchQuery: query => dispatch(changeSearchQuery(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataList);
