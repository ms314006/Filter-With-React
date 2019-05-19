import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Tag } from 'antd';
import styles from './index.scss';
import dataStyles from '../DataList/Data/index.scss';

const Information = (props) => {
  const { originDataList, } = props;
  const [information, changeInformation] = useState({});

  useEffect(() => {
    const targetInformation = originDataList.find(data => data.Id === props.match.params.Id);
    if (targetInformation) {
      changeInformation(targetInformation);
    }
  });

  return (
    <div
      data-testid="informationBlock"
      className={styles.information_block}
    >
      <div
        data-testid="informationHeader"
        className={styles.content_page_header}
      >
        <Link
          data-testid="exploreLink"
          to="/"
          className={styles.explore_link}
        >
          Explore
        </Link>
        &nbsp;
        /
        &nbsp;
        {information.Name}
      </div>
      <div
        data-testid="informationContent"
        className={styles.information_content_block}
      >
        <div
          data-testid="imgBlock"
          className={styles.image_block}
          style={{ backgroundImage: `url(${information.Picture1})`, }}
        />
        <div className={styles.main_block}>
          <div className={styles.main_information_block}>
            <div data-testid="nameBlock" className={styles.name_block}>
              {information.Name}
            </div>
            <div className={dataStyles.zone_block}>
              <Tag className={dataStyles.zone_tag}>
                <span data-testid="zoneBlock">{information.Zone}</span>
              </Tag>
            </div>
            <div className={dataStyles.detail_block}>
              <i className="fas fa-map-marker-alt" />
              <span data-testid="addBlock">{information.Add}</span>
              <i className="far fa-calendar-alt" />
              <span data-testid="openTime">{information.Opentime}</span>
            </div>
            <div className={styles.description_block}>
              <span data-testid="description">{information.Description}</span>
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
