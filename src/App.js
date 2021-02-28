import React, {useContext, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarTop from './js/components/NavbarTop'
import injectContext from './js/store/appContext'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './js/views/index'
import Detail from './js/views/detail'
import {Context} from './js/store/appContext'


function App() {
  const {actions} = useContext(Context);
    useEffect(()=>{
        actions.fetchWorld('planets');
        actions.fetchWorld('people');
        actions.fetchWorld('vehicles');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <div className='container-fluid'>
      <div>
        <BrowserRouter>
          <NavbarTop/>
          <div>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/detail/:typeData/:index' component={Detail}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default injectContext(App);
