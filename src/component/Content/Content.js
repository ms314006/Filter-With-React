import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import SideSearchBlock from './SideSearchBlock';
import DataList from './DataList';
import Information from '../Information';
import { fetchData } from '../../actions/filter.js';

const Content = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);
  return (
    <>
      <SideSearchBlock />
      <HashRouter>
        <Switch>
          <Route exact path="/" component={DataList} />
          <Route path="/informaction/:Id" component={Information} />
        </Switch>
      </HashRouter>
    </>
  );
};

const mapDispatchToState = dispatch => ({
  fetchData: fetchData(dispatch),
});

export default connect(null, mapDispatchToState)(Content);
