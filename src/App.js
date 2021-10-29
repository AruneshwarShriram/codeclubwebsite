/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import './index.css';
import Home from './screens/home';
import {FullPage } from "./screens/slider"
import { ChakraProvider,ColorModeProvider } from "@chakra-ui/react"

// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { EventList } from './components/eventlist';
import { Chakra } from './components/chakra';
import {Form} from "./components/form";


import { ConvertedItem } from './components/eachteam';
import Fade from './components/gh';
import { slider } from './screens/slider';

function App(props) {
  return (
    

    <Router>
    <div>
      <Switch>
         <Route path="/home"><Home/></Route>
         <Route path="/chakra"><Chakra/></Route>
          <Route path="/form"><Form/></Route>
          
          <Route path="/converted"><ConvertedItem/></Route>
          <Route path="/test1"><Fade/></Route>
          
      </Switch>
    </div>
    </Router>
  
      
    
  );
}

export default App;
