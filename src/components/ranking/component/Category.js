import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import SwitchTab from './SwitchTab';

const Category = () => {
  const isPc = useMediaQuery({
    query: '(min-width: 481px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 480px)',
  });

  const [selected, setSelected] = useState('all');

  const onClick = e => {
    setSelected(e.target.id);
  };

  return (
    <>
      <ul className="category-container" id={isPc ? null : 'm'}>
        <div
          className={selected == 'all' ? 'selected-category' : 'unselected-category'}
          id="all"
          onClick={onClick}
        >
          전체
        </div>
        <div
          className={selected == 'stock' ? 'selected-category' : 'unselected-category'}
          id="stock"
          onClick={onClick}
        >
          주식
        </div>
        <div
          className={selected == 'coin' ? 'selected-category' : 'unselected-category'}
          id="coin"
          onClick={onClick}
        >
          암호화폐
        </div>
        <div
          className={selected == 'deposit' ? 'selected-category' : 'unselected-category'}
          id="deposit"
          onClick={onClick}
        >
          예·적금
        </div>
        <div
          className={selected == 'gold' ? 'selected-category' : 'unselected-category'}
          id="gold"
          onClick={onClick}
        >
          금
        </div>
        <div
          className={selected == 'estate' ? 'selected-category' : 'unselected-category'}
          id="estate"
          onClick={onClick}
        >
          부동산
        </div>
      </ul>

      <SwitchTab id={selected} isPc={isPc} />
    </>
  );
};

export default Category;
