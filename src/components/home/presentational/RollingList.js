import React from 'react';
import Ex from './Ex';

const RollingList = ({ info }) => {
  const listSize = info.map(people => <Ex key={people.nk_name} info={people} />);

  return <div>{listSize}</div>;
};

export default RollingList;
