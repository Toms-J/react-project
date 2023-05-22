import React from 'react'
import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core';

const PostCard = ({title, body, onDeletePost, onEditPost}) => {
  return (
    <Card className='card' variant='outlined'>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title.toUpperCase()}
        </Typography>
        <Typography variant="body2">
          {body}
          <br />
        </Typography>
        <CardActions className='actions'>
          <Button variant="outlined" color='secondary' size="small" onClick={onEditPost}>Edit</Button>
          <Button variant="contained" color='primary' size="small" onClick={onDeletePost}>Delete</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default PostCard