import React, { useState, useEffect} from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { getCategoryList } from '../../api';
import './style.css'
import { fetchCoinMarket, setFilters as setStoreFilters} from '../../features/coin/coinSlice';
import { useDispatch, useSelector } from 'react-redux';

const INITIAL_STATE = {
  vs_currency: 'eur',
  sperkline: false,
  page: '1',
  order: 'market_cap_desc',
  itemPerPage: '25',
  category: ''
}

const FilterMenu = () => {

  const ITEM_PER_PAGE_SELECT_ITEMS = ['25', '50', '100', '150', '200', '250'];
  const ORDER_SELECT_ITEMS = [
    {value: 'market_cap_asc', label: 'Market Cap Ascending'}, 
    {value: 'market_cap_desc', label: 'Market Cap Descending'},
    {value: 'volume_asc', label: 'Volume Ascending'},
    {value: 'volume_desc', label: 'Volume Descending'},
    {value: 'id_asc', label: 'ID Ascending'},
    {value: 'id_desc', label: 'ID Descending'}
  ];

  const dispatch = useDispatch();
  const { filters: storeFilters } = useSelector(state => state.coinStore)
  const [categoryList, setCategoryList] = useState([]);
  const [filters, setFilters] = useState(() => {
    if (storeFilters) {
      return storeFilters;
    }
    dispatch(setStoreFilters(INITIAL_STATE));
    return INITIAL_STATE;
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFilters(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    }
    )
  }

  const handleParams = (filters) => {
    if (filters) {
      const { category, itemPerPage, order, sparkline, page, vs_currency } = filters;
      const params = {
        ...(category && { category }),      // category: 'example'
        ...(itemPerPage && { itemPerPage }),
        ...(order && { order }),
        ...(page && { page }),
        ...(vs_currency && { vs_currency }),
        ...(sparkline !== undefined && { sparkline }),
    }
    return params;
  }
}

  const resetFilters = () => {
    setFilters(INITIAL_STATE);
    dispatch(setStoreFilters(INITIAL_STATE));
  }

  const fetchCoins = () => {
    dispatch(setStoreFilters(filters));
  }

  const fetchCategoryList = async () => {
    const res = await getCategoryList();
    setCategoryList(res.data);
  }

  useEffect(() => {
    if (storeFilters) {
      dispatch(fetchCoinMarket(handleParams(storeFilters)));
    }
  }, [storeFilters, dispatch])

  useEffect(() => {
    fetchCategoryList();
  }, []);

  return (
    <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<MenuIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div>
            <Typography>Filters</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className='filter-container'>
          <Grid container spaceing={2}>
            <Grid className='filtri' item xs={12} md={6} lg={4}>
              <FormControl style={{ width: '100%', marginBottom: 10 }} variant="outlined" >
                <InputLabel id="order-select">Order</InputLabel>
                <Select
                  labelId="order-select"
                  value={filters.order}
                  onChange={handleChange}
                  label="Order"
                  name='order'
                >
                  {
                    ORDER_SELECT_ITEMS.map((el, i) => <MenuItem key={i} value={el.value}>{el.label}</MenuItem>)
                  }
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <FormControl style={{ width: '100%', marginBottom: 10 }} variant="outlined" >
                <InputLabel id="category-select">Category</InputLabel>
                <Select
                  fullWidth
                  labelId="category-select"
                  value={filters.category}
                  onChange={handleChange}
                  label="Category"
                  name='category'
                >
                  {
                    categoryList.map((el, i) => <MenuItem key={i} value={el.category_id}>{el.name}</MenuItem>)
                  }
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <FormControl style={{ width: '100%', marginBottom: 10 }} variant="outlined" >
                <InputLabel id="item per page-select">Item per page</InputLabel>
                <Select
                  labelId="item per page-select"
                  value={filters.itemPerPage}
                  onChange={handleChange}
                  label="Item per page"
                  name='itemPerPage'
                >
                  {
                    ITEM_PER_PAGE_SELECT_ITEMS.map((el, i) => <MenuItem key={i} value={el}>{el}</MenuItem>)
                  }
                </Select>
              </FormControl>
            </Grid>

          </Grid>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button onClick={resetFilters} variant="outlined" size="small">Reset filters</Button>
          <Button onClick={fetchCoins} variant="contained" size="small" color="primary">
            Apply filters
          </Button>
        </AccordionActions>
      </Accordion>
  )
}

export default FilterMenu