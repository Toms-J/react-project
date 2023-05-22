import React, { useEffect, useState } from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, CircularProgress, Grid, Button, TextField, FormControl, InputLabel, OutlinedInput } from '@material-ui/core'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import WithLoader from './HOC/withLoader';
import Wrapper from './components/Wrapper';
import Count1 from './components/Wrapper/Count1';
import Count2 from './components/Wrapper/Count2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams,
  useLocation
} from "react-router-dom";
import Comments from './components/CommentsList';
import Es1 from './components/Esercizi/Es1/Es1';
import Es2 from './components/Esercizi/Es2/Es2';

export default function App() {

  // const [ users, setUsers] = useState([]);

  // const handleSubmit = (user) => {
  //   if (users.find(el => el.email == user.email)) {
  //     return alert('Utente già iscritto');
  //   }
  //   setUsers([ ...users, user ]);
  // }

  // const deleteUser = user => {
  //   const newUsers = users.filter(el => el.email !== user.email);
  //   setUsers(newUsers);
  // }

  return (
    <>
        <Router>
          <Switch>
            <Route path="/playground">
              <Es2 />
            </Route>
            <Route path="/posts">
              {/* <PostList /> */}
            </Route>
            <Route path="/comments"> 
              <Comments />
            </Route>
          </Switch>
        </Router>
    </>
  )
}

//   this.props.history.push(`/comments?postID=${post.id}`);
// }

// const PostList = ({ posts }) => {
//   return (
//     <>
//       {
//         posts.map(post => (
//           <article style={{border: '1px solid gray', borderRadius: 6, marginBottom: 10, padding: 10 }}>
//             <h3 style={{textTransform: 'uppercase'}}>{post.title}</h3>
//             <p>{post.body}</p>
//             <Button variant='fullfilled' onClick={goToComments(post)}>Comments</Button>
//           </article>
//         ))
//       }
//     </>
//   );
// };

// const PostListWithLoader = WithLoader(PostList);

// const Users = () => {
//   // const { id } = useParams();
//   // const [ foundUser, setFoundUser ] = useState();
// const {search} = useLocation();

// const USERS = [
//   {id: 1, name: 'Tommaso'},
//   {id: 2, name: 'Luca'},
//   {id: 3, name: 'Dario'},
//   {id: 4, name: 'Lorenzo'}
// ];

//   const [ users, setUsers] = useState(USERS);

//   // useEffect(() => {
//   //   const user = users.find(user => user.id === Number(id))
//   //   setFoundUser(user?.name || 'Nessun utente trovato')
//   // }, [id]);

//   useEffect(() => {
//     const params = new URLSearchParams(search);
//     const name = params.get('name');
//     setUsers(USERS.filter(user => user.name.includes(name)));
//   }, [ search ]);

//   return (
//   <>
//     <h1>Users</h1>
//     <ul>
//       {users.map((user, i) => <li key={i}>{user.name}</li>)}
//     </ul>
//   </>
//   );
// }



// const INITIAL_FORM_STATE = {
//   fullname: '',
//     email: '',
//     password: '',
//     city: '',
//     province: '',
//     postCode: '',
//     street: '',
//     streetNumber: ''
// }

// const Form = ({ handleSubmit }) => {

//   const [formData, setFormData] = useState(INITIAL_FORM_STATE);

//   const checkSubmit = () => {
//     const {fullname, email, password, city, province, street, streetNumber, postCode} = formData;
//     return !fullname || !email || !password || !city || !province || !street || !streetNumber || !postCode;
//   }

//   const onSubmit = () => {
//     handleSubmit(formData);
//     setFormData(INITIAL_FORM_STATE);
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => {
//       return {
//         ...prevState,
//         [name]: value
//       }
//     })
//   }
  
//   return (
//     <>
//       <Grid container spacing={3} justifyContent="flex-start" alignItems='center'>
//           <Grid item xs={12} md={6} lg={4}>
//           <TextField fullWidth onChange={handleChange} id="name" label="NOME COMPLETO" name="fullname" variant="outlined" value={formData.fullname}/>
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//           <TextField fullWidth onChange={handleChange} id="email" label="EMAIL" name="email" variant="outlined" value={formData.email}/>
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//           <TextField fullWidth onChange={handleChange} id="password" type="password" label="PASSWORD" name="password" variant="outlined" value={formData.password}/>
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//           <TextField fullWidth onChange={handleChange} id="city" label="CITTA'" name="city" variant="outlined" value={formData.city}/>
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//           <TextField fullWidth onChange={handleChange} id="province" label="PROVINCIA" name="province" variant="outlined" value={formData.province}/>
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//           <TextField fullWidth onChange={handleChange} id="postCode" label="CAP" name="postCode" variant="outlined" value={formData.postCode}/>
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//           <TextField fullWidth onChange={handleChange} id="street" label="VIA" name="street" variant="outlined" value={formData.street}/>
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//           <TextField fullWidth onChange={handleChange} id="streetNumber" label="CIVICO" name="streetNumber" variant="outlined" value={formData.streetNumber}/>
//           </Grid>
//           <Grid item xs={12}>
//           <Button disabled={checkSubmit()} variant="contained" onClick={onSubmit} color="primary">SUBMIT</Button>
//           </Grid>
//         </Grid>
//     </>
//   )
// }

// const MyTable = ({deleteUser, users}) => {

//   return (
//       <>
//       <TableContainer component={Paper}>
//     <Table aria-label="simple table">
//       <TableHead>
//         <TableRow>
//           <TableCell>Fullname</TableCell>
//           <TableCell>Email</TableCell>
//           <TableCell>Address</TableCell>
//           <TableCell align="center">Delete</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {
//           !users?.length &&
//           <TableRow>
//             <TableCell colSpan={4} style={{textAlign: 'center'}}>Nessun utente iscritto</TableCell>
//           </TableRow>
//         }
//         {users?.map((user, i) => (
//           <TableRow key={i}>
//             <TableCell component="th" scope="row">{user.fullname}</TableCell>
//             <TableCell>{user.email}</TableCell>
//             <TableCell>
//               {`${user.street} ${user.streetNumber}, ${user.city} (${user.province}) - ${user.postCode}`}
//             </TableCell>
//             <TableCell align="center"><DeleteOutlineIcon style={{cursor: 'pointer'}} onClick={() => deleteUser(user)}/></TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </TableContainer>
//   </>
//   )
// }