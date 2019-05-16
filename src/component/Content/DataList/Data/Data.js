import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';
import styles from './index.scss';

const Data = (props) => {
  const { data, } = props;
  return (
    <div className={styles.data_block}>
      <div>
        <img className={styles.image_block} src={data.Picture1} alt="" />
      </div>
      <div className={styles.content_block}>
        <div className={styles.name_block}>
          <Link to={`/informaction/${data.Id}`}>{data.Name}</Link>
        </div>
        <div className={styles.description_block}>
          {`${data.Description.slice(0, 60)}...`}
        </div>
        <div className={styles.zone_block}>
          <Tag className={styles.zone_tag}>{data.Zone}</Tag>
        </div>
        <div className={styles.detail_block}>
          <div>
            <i className="fas fa-map-marker-alt" />
            {data.Add}
          </div>
          <div>
            <i className="far fa-calendar-alt" />
            {data.Opentime}
          </div>
        </div>
      </div>
    </div>
  );
};

Data.propTypes = {
  data: PropTypes.shape({}),
};

Data.defaultProps = {
  data: {},
};

export default Data;
