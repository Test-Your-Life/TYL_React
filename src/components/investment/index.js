import React from 'react';
import Category from './components/Category.js';
import ItemList from './components/ItemList/index.js';
import Chart from './components/Chart/index.js';

const index = () => {
    return (
        <>
            <h1>Investment 페이지 입니다</h1>
            <Category></Category>
            <ItemList></ItemList>
            <Chart></Chart>
        </>
    );
};

export default index;