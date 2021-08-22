import React from 'react';
import Ticker from './Ticker';
import '../../../styles/sass/main.css';

const Ex = ({ info }) => {
  //const { rank, nk_name, profit } = info;

  return (
    <Ticker
      className="nt-title"
      id="nt-title"
      maxRows={1}
      rowHeight={20}
      duration={3000}
      pauseOnHover={false}
    >
      <div>
        {info[0].nk_name} {info[0].profit}
      </div>
      <div>
        {info[1].nk_name} {info[1].profit}
      </div>
      <div>
        {info[2].nk_name} {info[2].profit}
      </div>
      <div>
        {info[3].nk_name} {info[3].profit}
      </div>
      <div>
        {info[4].nk_name} {info[4].profit}
      </div>
    </Ticker>
  );
};

export default Ex;
