import React from 'react';
//https://search.pstatic.net/sunny/?src=https%3A%2F%…%2F_images%2Ffavicon.ico&type=f30_30_png_expire24 삼성이미지

const ItemStorage = () => {

    const [Item, setItem] = React.useState([
        {
            id: '1',
            name: '삼성전자',
            imageUrl: 'https://search.pstatic.net/sunny/?src=https%3A%2F%…%2F_images%2Ffavicon.ico&type=f30_30_png_expire24',

        },
        {
            id: '2',
            name: '엘지',
            imageUrl: 'https://search.pstatic.net/sunny/?src=https%3A%2F%…%2F_images%2Ffavicon.ico&type=f30_30_png_expire24',

        },
    ]);

    return (
        <>
            <ul>
                {Item.map((data, index) => <li></li>)}
            </ul>
        </>
    );

};

export default ItemStorage;
