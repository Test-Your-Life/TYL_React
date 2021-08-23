import React from 'react';
import ItemStorage from './ItemStorage.js';

const ItemList = () => {

    const ItemStorage = ItemStorage;


    const inputRef = React.useRef();

    const onSubmit = (e) => {
        e.preventDefault();
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };


    const SearchForm = (
        <form id="itemlist-searchform" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" value={value} placeholder="Search.." autoFocus onChange={onChangeInput} />
        </form>
    );

    const Items = (
        <>
            {
                datas.map((data, index) => {
                    <li>{data.name} 시발</li>;
                })
            }
        </>
    );


    // const Items = (
    //     value.length > 0 ?
    //         <ul className="result">
    //             {datas.map((data, index) => { <li>시발22{index}</li> })
    //             }
    //             <p>시발</p>
    //         </ul>
    //         :
    //         <div className="empty-box">검색결과가 없습니다</div>
    // );

    return (
        <div className="itemlist-container">
            {SearchForm}
            {datas.map((data) => <li>{data.name}</li>)}
            {Items}
            <p>시발</p>

        </div >
    );
};


export default ItemList;
