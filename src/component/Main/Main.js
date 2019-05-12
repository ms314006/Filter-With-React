import React from 'react';
import Header from '../Header';
import Content from '../Content';
import styles from './index.scss';

const Main = () => (
  <div className={styles.main_block}>
    <Header />
    <Content />
  </div>
);

export default Main;
