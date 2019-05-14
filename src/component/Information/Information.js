import React from 'react';

const Information = (props) => {
  const { match, } = props;
  return (<h1>{match.params.Id}</h1>);
};

export default Information;
