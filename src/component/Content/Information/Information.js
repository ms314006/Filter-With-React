import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Tag } from 'antd';
import styles from './index.scss';
import dataStyles from '../DataList/Data/index.scss';

const Information = (props) => {
  const { originDataList, } = props;
  const [information, changeInformation] = useState({
    Name: '',
  });

  useEffect(() => {
    const targetInformation = originDataList.find(data => data.Id === props.match.params.Id);
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
        <div className={styles.main_block}>
          <div className={styles.main_information_block}>
            <div className={styles.name_block}>
              {information.Name}
            </div>
            <div className={dataStyles.zone_block}>
              <Tag className={dataStyles.zone_tag}>{information.Zone}</Tag>
            </div>
            <div className={dataStyles.detail_block}>
              <i className="fas fa-map-marker-alt" />
              {information.Add}
              <i className="far fa-calendar-alt" />
              {information.Opentime}
            </div>
            <div className={styles.description_block}>
              {information.Description}
            </div>
          </div>
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
