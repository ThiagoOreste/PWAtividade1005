import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Caixa from './view/components/layout';
import { Imagem } from './view/components/layout';
import { Label } from './view/components/layout';
import { TextField } from './view/components/layout';
import { Text } from './view/components/layout';
import { Botao } from './view/components/layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Caixa/>
  <Imagem/>
  <Label/>
  <TextField/>
  <Text/>
  <Botao/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

