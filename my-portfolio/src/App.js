import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import AboutMe from './components/pages/AboutMe';
import AmmyGeorge from './components/pages/AmmyGeorge';
import CoffeeShop from './components/pages/CoffeeShop';
import EcoResort from './components/pages/EcoResort';
import ARMotor from './components/pages/ARMotor';
import Home from './components/pages/Home';
import Illustrations from './components/pages/Illustrations';
import MyWork from './components/pages/MyWork';
import NewWay from './components/pages/NewWay';
import UserInterfaces from './components/pages/UserInterfaces';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} ></Route>
          <Route path='/aboutme' exact component={AboutMe} ></Route>
          <Route path='/mywork' exact component={MyWork} ></Route>
          <Route path='/userinterfaces' exact component={UserInterfaces} ></Route>
          <Route path='/gersgarage' exact component={ARMotor} ></Route>
          <Route path='/newway' exact component={NewWay} ></Route>
          <Route path='/coffeeshop' exact component={CoffeeShop} ></Route>
          <Route path='/ecoresort' exact component={EcoResort} ></Route>
          <Route path='/ammygeorge' exact component={AmmyGeorge} ></Route>
          <Route path='/illustrations' exact component={Illustrations} ></Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
