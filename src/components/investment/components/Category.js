import React, { useState } from 'react';

const Category = () => {

    const [selected, setSelected] = useState("stock")


    const onClick = (e) => {

        setSelected(e.target.id);
        console.log("클릭발생", e);
        console.log(e.target.id);
    }


    return (


        <div className="category-container">
            <div id="category-ul">
                <div className={selected == "stock" ? "selected-li" : "unSelected-li"} id="stock" onClick={onClick}> 주식</div>
                <div className={selected == "coin" ? "selected-li" : "unSelected-li"} id="coin" onClick={onClick}>암호화폐</div>
                <div className={selected == "deposit" ? "selected-li" : "unSelected-li"} id="deposit" onClick={onClick}>예·적금</div>
                <div className={selected == "realestate" ? "selected-li" : "unSelected-li"} id="realestate" onClick={onClick}>부동산</div>
                <div className={selected == "gold" ? "selected-li" : "unSelected-li"} id="gold" onClick={onClick}>금</div>
            </div>
        </div >
    );
};


export default Category;
