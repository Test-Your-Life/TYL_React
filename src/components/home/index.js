import React from 'react';
import GoogleButton from '../auth/GoogleButton';
import AssetRank from './container/AssetRank';
import BestRank from './container/BestRank';

const index = () => {
  return (
    <>
      <ul className="home-best">
        <h5>전날 엄청난 수익율을 낸 틸러입니다!</h5>
        <BestRank />
      </ul>
      <ul className="home-best">
        <h5>전날 아쉬웠던 틸러입니다...</h5>
      </ul>
      <ul className="homeRank">
        <h5>틸러들의 자산 순위</h5>
        <AssetRank />
      </ul>
      <GoogleButton />
    </>
  );
};

export default index;
