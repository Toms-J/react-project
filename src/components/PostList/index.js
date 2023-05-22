import React, { useEffect, useState } from 'react'
import { Button, Card, CardContent, Typography, CardActions } from '@material-ui/core';
import './style.css'
import { useHistory } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch';
import { useSelector } from 'react-redux';

export default function PostList() {
  // const [posts, setPosts] = useState([]);
  const count = useSelector(state => state.counter.value)
  const history = useHistory();
  const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts', []);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(res => res.json())
    // .then(body => setPosts(body))
    // .catch(err => console.err(err))
  }, []);  //in un componente funzionale, utilizzando useEffect con array di dipendenze vuoto, viene simulato il didMount dei componenti a classe

  const getPostComments = (id) => {
    history.push(`/comments?postId=${id}`)
  }

  return (
    <div className='postlist-container'>
      <h1>{count}</h1>
      { error && <h1>{error}</h1>}
      { loading && <h1>Loading...</h1>}
      {
        !loading && !error && data.map((post) => (
          <Card className='card' key={post.id} variant='outlined'>
            <CardContent>
              <Typography variant="h5" component="h2">
                {post.title.toUpperCase()}
              </Typography>
              <Typography variant="body2">
                 {post.body}
                <br />
              </Typography>
            </CardContent>
            <CardActions className='actions'>
              <Button onClick={() => getPostComments(post.id)} style={{float: 'right'}} color='primary' size="medium">Comments</Button>
            </CardActions>
          </Card> 
      ))
      }
    </div>
  );
}
