import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { checkValidity } from '../../../auth/userSlice';
import AssetTotal from '../presentational/AssetTotal';
import AssetGraph from '../presentational/AssetGraph';
import AssetList from '../presentational/AssetList';
import cash_icon from '../../../../styles/images/cash_icon.png';
import stock_icon from '../../../../styles/images/stock_icon.png';
import coin_icon from '../../../../styles/images/coin_icon.png';

const AssetConatiner = () => {
  const todayTime = () => {
    var today = new Date();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = month + '/' + day;

    return dateString;
  };

  const validity = useSelector(checkValidity);
  const [asset, setAsset] = useState(0);
  const [cash, setCash] = useState(0);

  const [coinAsset, setCoinAsset] = useState(0);
  const [coinProfit, setCoinProfit] = useState(0);
  const [coinToday, setCoinToday] = useState('');
  const [coinPercent, setCoinPercent] = useState(0);

  const [stockAsset, setStockAsset] = useState(0);
  const [stockProfit, setStockProfit] = useState(0);
  const [stockToday, setStockToday] = useState('');
  const [stockPercent, setStockPercent] = useState(0);

  let match = useRouteMatch();

  useEffect(() => {
    if (validity)
      axios.get('asset').then(res => {
        setAsset(res.data.asset);
        setCash(res.data.cash.amount);

        setCoinAsset(res.data.coin.coinAsset);
        setCoinProfit(res.data.coin.coinProfit);
        if (coinProfit == 0 && coinAsset == 0) setCoinPercent(0);
        else
          setCoinPercent(
            (res.data.coin.coinProfit / (res.data.coin.coinAsset - res.data.coin.coinProfit)) * 100,
          );

        setStockAsset(res.data.stock.stockAsset);
        setStockProfit(res.data.stock.stockProfit);
        if (stockProfit == 0 && stockAsset == 0) setStockPercent(0);
        else
          setStockPercent(
            (res.data.stock.stockProfit /
              (res.data.stock.stockAsset - res.data.stock.stockProfit)) *
              100,
          );

        if (res.data.stock.stockProfit < 0) setStockToday('-');
        else if (res.data.stock.stockProfit > 0) setStockToday('+');

        if (res.data.coin.coinProfit < 0) setCoinToday('-');
        else if (res.data.coin.coinProfit > 0) setCoinToday('+');
      });
  }, [validity]);

  const data = [
    {
      id: 'TYL',
      data: [
        {
          x: '20.4',
          y: 1000000,
        },
        {
          x: '20.5',
          y: 870000,
        },
        {
          x: '20.6',
          y: 1010000,
        },
        {
          x: '20.7',
          y: 946000,
        },
        {
          x: '20.8',
          y: 990420,
        },
        {
          x: '20.9',
          y: 1000000,
        },
      ],
    },
  ];

  const AssetBox = [
    {
      title: '현금',
      link: 'cash',
      img: cash_icon,
      total: cash,
    },
    {
      title: '주식',
      link: 'stock',
      img: stock_icon,
      total: stockAsset,
      today: stockToday,
      value: stockProfit,
      percent: stockPercent,
    },
    {
      title: '암호화폐',
      link: 'coin',
      img: coin_icon,
      total: coinAsset,
      today: coinToday,
      value: coinProfit,
      percent: coinPercent,
    },
  ];

  return (
    <>
      <AssetTotal asset={asset.toLocaleString('ko-KR')} />
      <AssetGraph data={data} />
      <AssetList AssetBox={AssetBox} match={match} />
    </>
  );
};

export default AssetConatiner;
