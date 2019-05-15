import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './index.scss';

const Information = (props) => {
  const { match, originDataList, } = props;
  const [information, changeInformation] = useState({
    Name: '',
  });

  useEffect(() => {
    const targetInformation = originDataList.find(data => data.Id === match.params.Id);
    if (targetInformation) {
      changeInformation(targetInformation);
    }
  });

  return (
    <div className={styles.information_block}>
      <div className={styles.content_page_header}>
        <Link to="/" className={styles.explore_link}>
          Explore
        </Link>
        &nbsp;
        /
        &nbsp;
        {information.Name}
      </div>
      <div className={styles.information_content_block}>
        <img className={styles.image_block} src={information.Picture1} alt="" />
        <div className={styles.name_block}>
          {information.Name}
        </div>
      </div>
    </div>
  );
};

Information.propTypes = {
  match: PropTypes.shape({}),
  originDataList: PropTypes.arrayOf(PropTypes.shape({})),
};

Information.defaultProps = {
  match: {},
  originDataList: [{}],
};

const mapStateToProps = state => ({
  originDataList: state.originDataList,
});

export default connect(mapStateToProps)(Information);
