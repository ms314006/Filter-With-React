import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSearchQuery } from '../../../../actions/filter.js';
import styles from './index.scss';

const FreeSelect = (props) => {
  const { free, } = props;
  return (
    <select
      className={styles.search_free_option}
      value={free}
      onChange={(e) => {
        props.changeQuery({ free: e.target.value, });
      }}
    >
      <option value="">請選擇</option>
      <option value="Y">是</option>
      <option value="N">否</option>
    </select>
  );
};


FreeSelect.propTypes = {
  free: PropTypes.string,
  changeQuery:PropTypes.func,
};

FreeSelect.defaultProps = {
  free: '',
  changeQuery: () => {},
};

const mapStateToProps = state => ({
  free: state.searchQuery.free,
});

const mapDispatchToProps = dispatch => ({
  changeQuery: query => dispatch(changeSearchQuery(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FreeSelect);
