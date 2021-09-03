import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Ticker from '../presentational/Ticker';

const WorstRank = () => {
  const [inProgress, setInProgress] = useState(true);
  const [rank, setRank] = useState([]);

  useEffect(() => {
    // https://testyourlife.kro.kr/preday-history
    axios.get('rank/preday-history').then(res => {
      setRank(res.data.lowerRank);
      setInProgress(false);
      //console.log(res.data.lowerRank);
    });
  }, []);

  if (inProgress) {
    return <div></div>;
  }

  const peopleRank = [
    { nickname: '김병준', profit: '41.5' },
    { nickname: '임대호', profit: '38.7' },
    { nickname: '김동규', profit: '35.0' },
    { nickname: '김태성', profit: '29.3' },
    { nickname: '김예겸', profit: '28.4' },
    { nickname: '허예림', profit: '23.2' },
    { nickname: '배지영', profit: '18.0' },
    { nickname: '김재우', profit: '14.6' },
  ];

  return <Ticker info={peopleRank} str="worst" />;
};

export default WorstRank;
