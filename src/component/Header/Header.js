import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSearchQuery } from '../../actions/filter.js';
import styles from './index.scss';

const Header = (props) => {
  const { searchWord, } = props;
  return (
    <>
      <div data-testid="headerTitleBlock" className={styles.header_title_block}>
        <div className={styles.header_title}>
          HavaFun
        </div>
      </div>
      <div data-testid="headerInputBlock" className={styles.header_search_block}>
        <div className={styles.header_search_input_block}>
          <i className="fas fa-search" />
          <input
            type="text"
            data-testid="keywordInput"
            className={styles.header_search_input}
            placeholder="Explore your own activities"
            value={searchWord}
            onChange={event => props.changeSearchQuery({ keyWord: event.target.value, })}
          />
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  changeSearchQuery: PropTypes.func,
  searchWord: PropTypes.string,
};

Header.defaultProps = {
  changeSearchQuery: () => { console.log('changeSearchQuery'); },
  searchWord: '',
};

const mapStateToPorops = state => ({
  searchWord: state.searchQuery.keyWord,
});

const mapDispatchToProps = dispatch => ({
  changeSearchQuery: query => dispatch(changeSearchQuery(query)),
});

export default connect(mapStateToPorops, mapDispatchToProps)(Header);
