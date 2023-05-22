import React, { useEffect, useState, useCallback } from 'react'
import { getCoinDetail } from '../../api'
import { useParams } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button, CircularProgress } from '@material-ui/core';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoin, fetchCoinDetail } from '../../features/coin/coinSlice';

const CoinDetail = () => {

  const { coinId } = useParams();
  const dispatch = useDispatch();
  const { coin, loading, loaded } = useSelector(state => state.coinStore);

  useEffect(() => {
    dispatch(fetchCoinDetail(coinId));
  }, [coinId, dispatch]);

  if (loading) {
    return (
      <CircularProgress
        variant="indeterminate"
        disableShrink
        size={40}
        thickness={4}
      />
    )
  }

  return (
    <>
      {loaded && (
        <Card className='card-detail'> 
          <CardMedia
            component="img"
            image={coin.image.large}
            alt="logo"
            className='coin-thumbnail'
          />
          <CardContent>
            <Typography gutterBottom variant="h1" component="div">
              {coin.name} - {coin.symbol}
            </Typography>
            <Typography variant="h5" >
              <strong>Categories: {coin.categories[0]+', '+ coin.categories[1]} <br/></strong>
              <strong>CoinGecko rank/score: {coin.coingecko_rank} / {coin.coingecko_score} <br/></strong>
              <strong>Links:</strong> <br/>
              
              {coin.links.blockchain_site.map((link, i) => {if(link) { return <a key={i} href={link} target='_blank'><Button className='btn' fullWidth >{link}</Button></a>}})}
              
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default CoinDetail
