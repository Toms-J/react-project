import React, { Component } from 'react'
import { getCoinsMarkets, getPing } from './api'
import CoinCard from './components/CoinCard';
import { Grid } from '@material-ui/core'
import FilterMenu from './components/FilterMenu';

const INITIAL_STATE = {
  coins: [],
  vs_currency: 'eur',
  sperkline: false,
  page: '1',
  order: 'market_cap_desc',
  itemPerPage: '25',
  category: ''
}

export default class Project extends Component {

  constructor(props) {
    super(props);

    // const [order, setOrder] = useState('market_cap_desc');
    // const [category, setCategory] = useState('');
    // const [itemPerPage, setItemPerPage] = useState('25');

    this.state = {
      ...INITIAL_STATE
    }
  }

  fetchCoinMarkets = async () => {
    const { coins, category, itemPerPage, order, sparkline, page, vs_currency } = this.state;
    const params = {
      ...(category && { category }),      // category: 'example'
      ...(itemPerPage && { itemPerPage }),
      ...(order && { order }),
      ...(page && { page }),
      ...(vs_currency && { vs_currency }),
      ...(sparkline !== undefined && { sparkline }),
    }
    const res = await getCoinsMarkets(params);
    this.setState({coins: res.data})
  }

  componentDidMount() {
    this.fetchCoinMarkets();
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    }
    )
  }

  resetFilters = () => {
    this.setState(INITIAL_STATE, () => {
      this.fetchCoinMarkets();
    });
  }

  render() {
    return (
      <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FilterMenu resetFilters={this.resetFilters} fetchCoins={this.fetchCoinMarkets} order={this.state.order} itemPerPage={this.state.itemPerPage} category={this.state.category} handleChange={this.handleChange}/>
        </Grid>
          {
            this.state.coins.map(c => {
              return (
                <Grid key={c.id} item xs={12} md={6} lg={3}>
                  <CoinCard { ...c } />
                </Grid>
              )
            })
          }
      </Grid>
      </>
    )
  }
}
