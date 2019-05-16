import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import SideSearchBlock from './SideSearchBlock';
import DataList from './DataList';
import Information from './Information';
import { fetchData } from '../../actions/filter.js';
import styles from './index.scss';

const Content = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);
  return (
    <>
      <SideSearchBlock />
      <HashRouter>
        <Switch>
          <div className={styles.content_data_block}>
            <Route exact path="/" component={DataList} />
            <Route path="/informaction/:Id" component={Information} />
          </div>
        </Switch>
      </HashRouter>
    </>
  );
};

Information.propTypes = {
  fetchData: PropTypes.func,
};

Information.defaultProps = {
  fetchData: () => {},
};

const mapDispatchToState = dispatch => ({
  fetchData: fetchData(dispatch),
});

export default connect(null, mapDispatchToState)(Content);
