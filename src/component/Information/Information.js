import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

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

  return (<h1>{information.Name}</h1>);
};

const mapStateToProps = state => ({
  originDataList: state.originDataList,
});

export default connect(mapStateToProps)(Information);
