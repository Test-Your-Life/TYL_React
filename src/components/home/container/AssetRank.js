import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RankList from '../presentational/RankList';

const AssetRank = () => {
  const [rank, setRank] = useState([]);

  useEffect(() => {
    axios.get('rank/asset').then(res => {
      setRank(res.data.rank);
      //console.log(res.data.rank);
    });
  }, []);

  // json add data(ranking)
  for (let i = 0; i < rank.length; i++) {
    rank[i].ranking = i + 1;
  }

  return <RankList info={rank} />;
};

export default AssetRank;
