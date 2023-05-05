import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
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



root.render(
  <App />
);