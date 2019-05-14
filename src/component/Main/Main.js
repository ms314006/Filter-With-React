import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header';
import Content from '../Content';
import Information from '../Information';
import styles from './index.scss';

const MainPage = () => (
  <div className={styles.main_block}>
    <Header />
    <Content />
  </div>
);

const Main = () => (
  <>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/informaction/:Id" component={Information} />
  </>
);

export default Main;
