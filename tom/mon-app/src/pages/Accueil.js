import { Component } from "react";
import SignUpForm from "../component/signUp";
import LoginForm from "../component/loginUser";

class Accueil extends Component {

  constructor(props){
    super(props)
    
  }
  async componentDidMount() {
    //generalement utilisé pour les appels réseaux
    // const response = await fetch('http://localhost:1337/api/articles?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    // const articles = await response.json()
    // this.setState({articles:articles})
  }

  render () {


    return(

      <>  
        <SignUpForm userList = {this.props.userList}/>
        <p className="logInfo"></p>
        <LoginForm userList = {this.props.userList}/>
      </>
    ) 
  }
}
export default Accueil;
