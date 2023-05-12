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

const FilterMenu = ({ order, category, itemPerPage, handleChange, fetchCoins, resetFilters }) => {

  const ITEM_PER_PAGE_SELECT_ITEMS = ['25', '50', '100', '150', '200', '250'];
  const ORDER_SELECT_ITEMS = [
    {value: 'market_cap_asc', label: 'Market Cap Ascending'}, 
    {value: 'market_cap_desc', label: 'Market Cap Descending'},
    {value: 'volume_asc', label: 'Volume Ascending'},
    {value: 'volume_desc', label: 'Volume Descending'},
    {value: 'id_asc', label: 'ID Ascending'},
    {value: 'id_desc', label: 'ID Descending'}
  ];

  const [categoryList, setCategoryList] = useState([]);

  const fetchCategoryList = async () => {
    const res = await getCategoryList();
    setCategoryList(res.data);
  }

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
            <Grid className='filtri' item xs={12} md={6} lg={3}>
              <FormControl style={{ width: '100%' }} variant="outlined" >
                <InputLabel id="order-select">Order</InputLabel>
                <Select
                  labelId="order-select"
                  value={order}
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

            <Grid item xs={12} md={6} lg={3}>
              <FormControl style={{ width: '100%' }} variant="outlined" >
                <InputLabel id="category-select">Category</InputLabel>
                <Select
                  fullWidth
                  labelId="category-select"
                  value={category}
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

            <Grid item xs={12} md={6} lg={3}>
              <FormControl style={{ width: '100%' }} variant="outlined" >
                <InputLabel id="item per page-select">Item per page</InputLabel>
                <Select
                  labelId="item per page-select"
                  value={itemPerPage}
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