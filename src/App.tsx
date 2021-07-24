import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './UI/Header/Header';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Main } from './UI/Main/Main';
import { useState } from 'react';
import { useEffect } from 'react';
import { Desire } from './UI/Desire/Desire';
import { Provider } from 'react-redux';
import {store} from "./BLL/store"
import { Very } from './UI/Very/Very';
import { Reason } from './UI/Reason/Reason';
import { Other } from './UI/Other/Other';
import { Author } from './UI/Authors/Author';

function App() {
  const diff=65
  let [height,setHeight]=useState(window.innerHeight-diff)
  let [isPC,setMode]=useState(window.innerWidth>760 ? true : false)
  const setSize=()=>{
    setHeight(window.innerHeight-diff)
      if(window.innerWidth>760){
        setMode(true)
      }else{
        setMode(false)
      }
  }

  useEffect(()=>{
    window.addEventListener("resize",setSize)
    return (()=>{
      window.removeEventListener("resize",setSize)
    })
  },[])
  
  return (
    <Provider store={store}>
    <HashRouter>
      <div>
        <Header/>
        <div style={{height}}>
        <Switch>
          <Route path="/desire" 
          render={()=><Desire isPC={isPC} />}/>
          <Route path="/very" 
          render={()=><Very isPC={isPC} />}/>
          <Route path="/reason" 
          render={()=><Reason isPC={isPC} />}/>
          <Route path="/other" 
          render={()=><Other isPC={isPC} />}/>
          <Route path="/author" 
          render={()=><Author isPC={isPC} />} />
          <Route path="/"
          render={()=><Main height={height}  />} />
        </Switch>
        </div>
      </div>
    </HashRouter>
    </Provider>
  );
}

export default App;
