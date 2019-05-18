import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSearchQuery } from '../../../../actions/filter.js';

const AllDayOpenCheckBox = (props) => {
  const { allDayOpen, } = props;
  return (
    <>
      <input
        type="checkbox"
        checked={allDayOpen}
        onChange={(e) => {
          props.changeQuery({ allDayOpen: e.target.checked, });
        }}
      />
      &nbsp;全天候開放
    </>
  );
};

AllDayOpenCheckBox.propTypes = {
  allDayOpen: PropTypes.bool,
  changeQuery:PropTypes.func,
};

AllDayOpenCheckBox.defaultProps = {
  allDayOpen: false,
  changeQuery: () => {},
};

const mapStateToProps = state => ({
  allDayOpen: state.searchQuery.allDayOpen,
});

const mapDispatchToProps = dispatch => ({
  changeQuery: query => dispatch(changeSearchQuery(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllDayOpenCheckBox);
