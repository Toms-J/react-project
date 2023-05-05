import React, {useState, useEffect} from 'react';
import Card from './components/Card';
import { Button } from '@material-ui/core';

const char = {
    
          id: 361,
          name: "Toxic Rick",
          status: "Dead",
          species: "Humanoid",
          type: "Rick's Toxic Side",
          gender: "Male",
          origin: {
            name: "Alien Spa",
            url: "https://rickandmortyapi.com/api/location/64"
          },
          location: {
            name: "Earth",
            url: "https://rickandmortyapi.com/api/location/20"
          },
          image: "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
          episode: [
            "https://rickandmortyapi.com/api/episode/27"
          ],
          url: "https://rickandmortyapi.com/api/character/361",
          created: "2018-01-10T18:20:41.703Z"
}

// const Card = (props) => {
//     const { image, name, status, species } = props.character;
//     return (
//     <div className='card'>
//         <img src={image}></img>
//         <h2>{name}</h2>
//         <p>{status} - {species}</p>
//     </div>
// )}


const App = () => {
    // const [data, setData] = useState([]);
    
    // useEffect(() => {
    //     fetch('https://rickandmortyapi.com/api/character')
    //     .then(res => res.json())
    //     .then(body => {
    //         setData(body.results);
    //     })
    // })
    return (
        <section className='card-section'>
            {/* {data.map((el, index) => { */}
                {/* <Card character={char} key={char.id}></Card> */}
            {/* })} */}
            {/* <Profile username="Tommaso"></Profile> */}
            <Button color="secondary" size="large" variant="outlined">Hello World</Button>
        </section>
    )
}

export default App