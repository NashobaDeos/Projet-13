import { Component } from "react"
import { userData, Cookies } from '../apiUtilities/dataRetriever';
import { LINK } from "../apiUtilities/global";





class SignUpForm extends Component {


    constructor(props){
        super(props)
    }

    handleSubmit = (event) => {


      event.preventDefault()
      let username = event.target[0].value
      let email = event.target[1].value
      let password = event.target[2].value
      let already = []

      this.props.userList.data.forEach(user => {

          if (user.attributes.email == email){
              already.push(1)
          }
          else{
            already.push(0)
          }
      } )


      if (already.includes(1)){
        let logInfo = document.getElementsByClassName("logInfo")
        logInfo.innerHTML = "This email is already used"
        console.log("deja utilisé");
      }
      else{
          this.addUser(username, email, password)
      }

      
 
    }
    addUser = (username, email, password) =>{
    
        
      const creds = {
          "data":{
        "name": username,
        "email": email,
        "password": password
          }
    }
      fetch(`http://localhost:1337/api/user-logins`, {
          method: 'POST',
          headers:{
              'Content-type' : "application/json",
          },
          body : JSON.stringify(creds),
      }).then(function(response){
          return response.text()
      })

    }
    

    render() {
      if (userData.Status == "disconnected")
        {return (
          <>
        <form onSubmit={this.handleSubmit}>
          <label>
            
            <input
              type="text"
              name="username"
            />
            <input
              type="email"
              name="email"
            />
            <input
              type="text"
              name="password"
            />
          </label>

          <button type="submit">Submit</button>
        </form>

        
        </>
        
        
      )}
    }
  }

export default SignUpForm