import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import New from './component/New';
import Footer from './component/Footer'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      news: []
    }
    

  };

  componentDidMount = async() => {
    const response = await fetch('http://localhost:1337/api/pictures?populate=*', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const newsPic = await response.json()
    this.setState({ news: newsPic })
    console.log(this.state.news);

  }


  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Footer />} />
          <Route exact path='/' element={<New news={this.state.news} />} />
        </Routes>
      </Router>
    );
  }
}
export default App;