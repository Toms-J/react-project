import React, { useState, useEffect} from 'react'
import { Grid, Button, TextField, FormControl, InputLabel, OutlinedInput } from '@material-ui/core'

export default function Form({ handleSubmit }) {

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    city: '',
    province: '',
    postCode: '',
    street: '',
    streetNumber: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  
  return (
    <>
      <form noValidate autoComplete="off">
      <Grid container spacing={3} justifyContent="flex-start" alignItems='center'>
          <Grid item xs={12} md={6} lg={4}>
          <TextField fullWidth id="name" label="NOME COMPLETO" name="fullname" variant="outlined" value={formData.fullname}/>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
          <TextField fullWidth id="email" label="EMAIL" name="email" variant="outlined" value={formData.email}/>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
          <TextField fullWidth id="password" type="password" label="PASSWORD" name="password" variant="outlined" value={formData.password}/>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
          <TextField fullWidth id="city" label="CITTA'" name="city" variant="outlined" value={formData.city}/>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
          <TextField fullWidth id="province" label="PROVINCIA" name="province" variant="outlined" value={formData.province}/>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
          <TextField fullWidth id="postCode" label="CAP" name="postCode" variant="outlined" value={formData.postCode}/>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
          <TextField fullWidth id="street" label="VIA" name="street" variant="outlined" value={formData.street}/>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
          <TextField fullWidth id="streetNumber" label="CIVICO" name="streetNumber" variant="outlined" value={formData.streetNumber}/>
          </Grid>
          <Grid item xs={12}>
          <Button variant="contained" onClick={() => handleSubmit(formData)} color="primary">INVIA</Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
