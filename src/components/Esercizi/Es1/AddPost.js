import React, { useEffect, useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { addPost, editPost } from '../../../features/posts/postsSlice'
import { useDispatch, useSelector } from 'react-redux'

const INITIAL_STATE = {
  title: '',
  body: ''
}

const AddPost = () => {

  const { editingPost } = useSelector(state => state.postStore);
  const dispatch = useDispatch();
  const [ formData, setFormData ] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPost) {
      dispatch(editPost({ ...formData, index: editingPost.index }))
    } else {
      dispatch(addPost(formData));
    }
    setFormData(INITIAL_STATE);
  }

  useEffect(() => {
    if (editingPost) {
      setFormData(editingPost);
    }
  }, [editingPost])

  return (
    <>
      <form className="form-container" noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField value={formData.title} fullWidth onChange={handleChange} id="title" name="title" label="Title" variant="outlined" />
        <TextField value={formData.body} fullWidth onChange={handleChange} id="body" name="body" label="Body" variant="outlined" />
        <Button color='primary' size="medium" type="submit">SEND</Button>
      </form>
    </>
  )
}

export default AddPost