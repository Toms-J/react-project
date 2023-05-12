import React, { useState, useEffect} from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App';
import Project from './Project.js';
import Form from './Form.js'
import MyTable from './Table';

// const element = <h1 className="red" id="underline">Ciao</h1>;  // codice JSX, esensione di Javascript
// const element2 = React.createElement('h1', {className: 'red', id: 'underline'}, 'Hello');
// root.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
//   <Image />
// );

// REGOLE JSX
//  - ritornare un singolo elemento
//  - usare camelcase per gli attributi html
//  - usare className invece che class
//  - chiudere ogni elemento come in html standard, o con self closing tag o con tag apertura/chiusura



// COMPONENTI
// I componenti vanno costruiti con la lettera maiuscola



// ReactDOM.render(<App />,
//   document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Project />
    {/* <App /> */}
  </>
);