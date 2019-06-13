import React , { Component} from 'react'
import { Button  , Card , Form } from 'react-bootstrap';

import "./index.css"

class Signin  extends Component  {



        state = {
            email:"",
            password:"",
        } 
 


    handleOnChange = ( event ) => {
        this.setState(({
          [event.target.name ] : event.target.value  
        })) 
        

    }
    render() {
       const { email , password } = this.state
    return(
        <div class="form-container sign-up-container">
            <form>
                 <h1>Sign in</h1>

                 <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
        </div>
                <input type="email"  name = "email" placeholder="Email"  value={ email }/>
                <input type="password" name = "password" placeholder="Password" value={ password  } />
                <button>  Sign In </button>

        </form>
       </div>)
    }
}

export default Signin
