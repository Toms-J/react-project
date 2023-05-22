import React from 'react'
import { Grid } from '@material-ui/core'
import CoinCard from '../CoinCard'
import FilterMenu from '../FilterMenu'
import { getCoinsMarkets } from '../../api'
import { connect } from 'react-redux'
import { fetchCoinDetail, fetchCoinMarket } from '../../features/coin/coinSlice'

const INITIAL_STATE = {
  vs_currency: 'eur',
  sperkline: false,
  page: '1',
  order: 'market_cap_desc',
  itemPerPage: '25',
  category: ''
}

class CoinList extends React.Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     ...INITIAL_STATE
  //   };
  // }

  getCoinDetail = (id) => {
    this.props.history.push(`/coins/${id}`);
  }

  // fetchCoinMarkets = async () => {
  //   const { category, itemPerPage, order, sparkline, page, vs_currency } = this.state;
  //   const params = {
  //     ...(category && { category }),      // category: 'example'
  //     ...(itemPerPage && { itemPerPage }),
  //     ...(order && { order }),
  //     ...(page && { page }),
  //     ...(vs_currency && { vs_currency }),
  //     ...(sparkline !== undefined && { sparkline }),
  //   }
  //   this.props.coins = await this.props.fetchCoinMarket(params);
  //   // this.props.fetchCoins(res.data)
  // }

  // componentDidMount() {
  //   this.fetchCoinMarkets();
  // }

  

  render() {
  return (
    <>
      <Grid container spacing={3}>
         <Grid item xs={12}>
          <FilterMenu />
          {/* <FilterMenu resetFilters={this.resetFilters} fetchCoins={this.fetchCoinMarkets} order={this.state.order} itemPerPage={this.state.itemPerPage} category={this.state.category} handleChange={this.handleChange}/> */}
      </Grid>
        {
          this.props.coins?.map(c => {
            return (
              <Grid key={c.id} item xs={6} md={4} lg={3}>
                <CoinCard { ...c } getCoinDetail={this.getCoinDetail}/>
              </Grid>
            )
          })
        }
      </Grid>
    </>
  )
  }
}

const mapStateToProps = (state, ownProps) => ({
  coins: state.coinStore.coins,
})

export default connect(mapStateToProps, null)(CoinList);