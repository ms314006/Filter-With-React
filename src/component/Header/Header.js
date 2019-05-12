import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSearchWord } from '../../actions/filter.js';
import styles from './index.scss';

const Header = (props) => {
  const { searchWord, } = props;
  return (
    <>
      <div className={styles.header_title_block}>
        <div className={styles.header_title}>
          HavaFun
        </div>
      </div>
      <div className={styles.header_search_block}>
        <div className={styles.header_search_input_block}>
          <i className="fas fa-search" />
          <input
            type="text"
            className={styles.header_search_input}
            placeholder="Explore your own activities"
            value={searchWord}
            onChange={event => props.changeSearchWord(event.target.value)}
          />
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  changeSearchWord: PropTypes.func,
  searchWord: PropTypes.string,
};

Header.defaultProps = {
  changeSearchWord: () => { console.log('changeContentType'); },
  searchWord: '',
};

const mapStateToPorops = state => ({
  searchWord: state.searchWord,
});

const mapDispatchToProps = dispatch => ({
  changeSearchWord: word => (dispatch(changeSearchWord(word))),
});

export default connect(mapStateToPorops, mapDispatchToProps)(Header);
