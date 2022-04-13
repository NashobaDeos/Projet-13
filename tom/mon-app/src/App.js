import React, {Component} from 'react';
import createData from './apiUtilities/dataRetriever.js'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Accueil from './pages/Accueil';



class App extends Component{

  constructor(){
    super();
    this.state={
        userList:[]
    }

  };

  async componentDidMount(){
    const response = await fetch('http://localhost:1337/api/user-logins?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const userList = await response.json()
    this.setState({userList:userList})

    console.log(this.state.userList);
}
  
  
  render() {
    return (  
      <Router>
        <Routes>
          <Route exact path='/' element={<Accueil userList={this.state.userList} /> } />
        </Routes>
      </Router>
    );
  }
}
export default App;
