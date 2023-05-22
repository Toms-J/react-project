import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import { List, ListItem, ListItemText, Typography, Divider} from '@material-ui/core';

export default function Comments() {

  const [ comments, setComments ] = useState([]);
  const { search } = useLocation();

  
  useEffect(() => {
    const params = new URLSearchParams(search);
    const id = params.get('postId');
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(res => res.json())
    .then(body => setComments(body))
    .catch(err => {console.error(err)})
    console.log(comments);
  }, [search]);

  return (
      <List>
        {
          comments.map((comment) => (
            <>
              <ListItem key={comment.id} alignItems="flex-start">
                <ListItemText
                  primary={comment.name}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {comment.email}
                      </Typography>
                      {comment.body}
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>  
          ))
        }
      </List>
  );
}
