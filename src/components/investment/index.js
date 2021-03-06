import React, { useState, useEffect } from 'react';
import Category from './components/Category.js';
import ItemList from './components/ItemList/index.js';
import Chart from './components/Chart/index.js';
import Prediction from './components/Prediction/index.js';
import Trade from './components/Trade/index.js';
import { useMediaQuery } from 'react-responsive';

const index = () => {
  const isPc = useMediaQuery({
    query: '(min-width: 481px)',
  });

  const [selectedItem, setSelectedItem] = useState();
  const [category, setCategory] = useState('stock');
  const [hide, setHide] = useState(false);
  const getItem = item => {
    setSelectedItem(item);
  };

  const getcategory = get_category => {
    if (get_category == 'stock' || get_category == 'coin') {
      setCategory(get_category);
      setHide(false);
    } else {
      setHide(true);
    }
  };

  return (
    <>
      <Category isPc={isPc} getcategory={getcategory}></Category>
      {hide == true ? (
        <div id="empty-space">점검 중 입니다!</div>
      ) : (
        <>
          <ItemList isPc={isPc} getItem={getItem} category={category}></ItemList>
          <Chart isPc={isPc} sendItem={selectedItem} category={category}></Chart>
          {category == 'stock' ? (
            <Prediction isPc={isPc} sendItem={selectedItem}></Prediction>
          ) : null}
          <Trade isPc={isPc} sendItem={selectedItem} category={category}></Trade>
        </>
      )}
    </>
  );
};

export default index;
