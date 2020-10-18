import React from 'react';
import Landing from './components/Dashboard.js/landing';
import { BrowserRouter ,Route } from 'react-router-dom'
import Navbar from '../src/components/Dashboard.js/Navbar'


import Business from './components/navbar-elements/business';
import Tech from './components/navbar-elements/tech';
import Sports from './components/navbar-elements/sports';
import Science from './components/navbar-elements/science';
import Health from './components/navbar-elements/health';
import World from './components/navbar-elements/world';
import Top from './components/body-elements/Top'
import Latest from './components/body-elements/Latest'
import Feature from './components/body-elements/Feature'
import Body from './components/Dashboard.js/body'

function App() {
  return (
    <BrowserRouter>
             <div >
                    <Navbar />
                    <Route exact path='/'          component={ Landing }/>                 
                    <Route       path='/home'      component={ Landing }/>

                    <Route       path='/world'     component={ World }/>
                    <Route       path='/business'  component={ Business }/>
                    <Route       path='/science'   component={ Science }/>
                    <Route       path='/sports'    component={ Sports }/>
                    <Route       path='/tech'      component={ Tech }/>
                  
                    <Route       path='/health'    component={ Health }/>
                    <Body />
                    
                    <Route      exact path='/home/top'       component={ Top }/>
                    <Route      exact path='/home/latest'    component={ Latest }/>
                    <Route      exact path='/home/feature'   component={ Feature }/>
                    <Latest />
                   
                    
                    
              </div>
    </BrowserRouter>
  
  );
}

export default App;
