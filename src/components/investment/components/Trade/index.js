import React, { useState } from 'react';
import Modal from './Modal.js';

const Trade = () => {
    // https://image.flaticon.com/icons/png/512/5381/5381292.png
    //https://image.flaticon.com/icons/png/512/5396/5396865.png 판매
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    const closeModal = () => {
        setModalOpen(false);
    };

    const openModal = e => {
        e.target.id === 'trade-purchase'
            ? setModalData({ header: '구매', text: '로그아웃하시겠습니까?', onAccept: closeModal })
            : setModalData({ header: '회원탈퇴', text: '탈퇴하시겠습니까?', onAccept: closeModal });
        setModalOpen(true);
    };

    return (<>
        <div className="trade-container">
            <div className="trade-item" id="trade-purchase" onClick={openModal}><div className="trade-img"><img className="trade-item" src="https://image.flaticon.com/icons/png/512/5381/5381292.png" /></div><span>구매하기</span></div>
            <div className="trade-item" id="trade-sell" onClick={openModal}><div className="trade-img"><img className="trade-item" src="https://image.flaticon.com/icons/png/512/5396/5396865.png" /></div><span>판매하기</span></div>
        </div>
        <Modal
            open={modalOpen}
            close={closeModal}
            onAccept={modalData.onAccept}
            header={modalData.header}
        >
            {modalData.text}
        </Modal>
    </>);
};


export default Trade;