import React from 'react';
import AssetRank from './container/AssetRank';
import BestRank from './container/BestRank';
import WorstRank from './container/WorstRank';
import { useMediaQuery } from 'react-responsive';

const index = () => {
  const isPc = useMediaQuery({
    query: '(min-width: 481px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 480px)',
  });

  return (
    <>
      <ul className="home-tickerbox" id={isPc ? null : 'm'}>
        <div className="home-small-info-text">*전일대비</div>
        <div className="home-ticker-title-text">전날 엄청난 수익률을 낸 틸러입니다!</div>
        <BestRank />
      </ul>
      <ul className="home-tickerbox" id={isPc ? null : 'm'}>
        <div className="home-small-info-text">*전일대비</div>
        <div className="home-ticker-title-text">전날 아쉬웠던 수익률을 낸 틸러입니다..</div>
        <WorstRank />
      </ul>
      <ul className="home-rankbox" id={isPc ? null : 'm'}>
        <div className="home-small-info-text">*총자산 기준</div>
        <div className="home-rankbox-title-text">틸러들의 자산 순위</div>
        <AssetRank />
      </ul>
    </>
  );
};

export default index;
