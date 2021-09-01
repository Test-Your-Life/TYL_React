import React, { useState } from 'react';
import search_img from '../../../../styles/images/search_icon.png';
import RankList from './RankList';

const AllRank = ({ info }) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();
  };

  const onChangeInput = e => {
    setInputValue(e.target.value);
  };

  const SearchForm = (
    <>
      <form className="searchform-container" onSubmit={onSubmit}>
        <img className="search-image" src={search_img}></img>
        <input
          className="searchform-input"
          type="text"
          value={inputValue}
          placeholder="유저를 찾아보세요"
          autoFocus
          onChange={onChangeInput}
        ></input>
      </form>
    </>
  );

  return (
    <>
      <ul className="ranking-container">
        {SearchForm}
        <RankList info={info} />
      </ul>
    </>
  );
};

export default AllRank;
