import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { login } from '../../features/user/userSlice'

const INITIAL_STATE = {
  email: '',
  password: ''
}

const Login = () => {

  const [ formData, setFormData ] = useState(INITIAL_STATE);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData))
    setFormData(INITIAL_STATE);
  }

  return (
    <form className="form-container" noValidate autoComplete='on' onSubmit={handleSubmit}>
        <TextField value={formData.email} fullWidth onChange={handleChange} id="email" name="email" label="Email" variant="outlined" />
        <TextField type="password" value={formData.password} fullWidth onChange={handleChange} id="password" name="password" label="Password" variant="outlined" />
        <Button color='primary' size="medium" type="submit">Login</Button>
      </form>
  )
}

export default Login