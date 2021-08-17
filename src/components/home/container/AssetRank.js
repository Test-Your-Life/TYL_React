import React from 'react';
import RankList from '../presentational/RankList';
import '../../../styles/sass/main.css';

const AssetRank = () => {
  const people = {
    peopleList: [
      { rank: '1위', nk_name: 'KIM', asset: '400,000,000틸' },
      { rank: '2위', nk_name: 'LEE', asset: '300,000,000틸' },
      { rank: '3위', nk_name: 'LIM', asset: '200,000,000틸' },
      { rank: '4위', nk_name: 'SON', asset: '80,000,000틸' },
      { rank: '5위', nk_name: 'YUN', asset: '50,000,000틸' },
      { rank: '6위', nk_name: 'PARK', asset: '10,000,000틸' },
    ],
  };
  const { peopleList } = people;

  return <RankList info={peopleList} />;
};

export default AssetRank;
