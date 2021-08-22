import React, { useEffect, useState } from 'react';
import '../../../styles/sass/main.css';

const Rolling = ({ info }) => {
  const { rank, nk_name, profit } = info;
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    function tick() {
      return setTimeout(() => setValue(value + 1), 2000);
    }
  });

  function ex() {
    if (cnt == 7) {
    }
  }

  return (
    <div className="rolling-box">
      <ul id="rolling-box">
        <div>
          {rank} {nk_name} {profit}
          {/* {setCnt(cnt + 1)} */}
        </div>
        {/* <li className="card-sliding" id="first">
          <p></p>
        </li>
        <li className="" id="second">
          <p></p>
        </li>
        <li className="" id="third">
          <p></p>
        </li> */}
      </ul>
    </div>
  );
};

export default Rolling;
