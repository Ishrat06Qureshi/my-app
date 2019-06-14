import React , { Component} from 'react';
import "../commonStyle.css";


class Signup  extends Component  {



        state = {
            // name:"",
            // address:"",
            // email:"",
            // password:"",
            answer :""
        } 
    handleOnChange = ( event ) => {
        console.log(event.target.value , event.target.name)
        this.setState(({
          [event.target.name ] : event.target.value  
        })) 
        

    }
    render() {
       const { email , password , name , address  } = this.state
      
    return(
        <div 
        className="form-container">
            {/* <form>
                 <h1>Sign Up</h1>

                 <div className="social-container">
            <a href="#" className="social">
                <i className="fab fa-facebook-f"></i> </a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
        </div>
                <input type="text"  name = "name" placeholder="name"  value={ name } onChange = { this.handleOnChange }/>
                <input type="text"  name = "address" placeholder="address"  value={ address } onChange = { this.handleOnChange }/>
                <input type="email"  name = "email" placeholder="Email"  value={ email } onChange = { this.handleOnChange }/>
                <input type="password" name = "password" placeholder="Password" value={ password  }  onChange = { this.handleOnChange } />
                <button>  Sign Up </button>

        </form> */}



<div class="custom-control custom-radio" name="answer" onChange={ this.handleOnChange}>
{/* //   {/* <input type="radio" class="custom-control-input" id="defaultCheckedDisabled2" name="disabledGroupExample" checked disabled/>
//   <label class="custom-control-label" for="defaultCheckedDisabled2">Default checked disabled</label> */}

   
  
       
        <input type="radio" class="custom-control-input" id="defaultUnchecked" name="option" value="AI" />
        <label class="custom-control-label" htmlFor="defaultUnchecked">Default unchecked</label>
        
        <br></br>
        <input type="radio" class="custom-control-input" id="defaultUnchecked1" name="option" value="cloud computing" />
        <label class="custom-control-label" htmlFor="defaultUnchecked1">Default unchecked</label>
        
        </div> 
        
        {/* <div class="custom-control custom-radio">
            <input type="radio" value="AI" name="course" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios"/> 
            <label class="custom-control-label" htmlFor="defaultUnchecked">AI</label>
            <input type="radio" value="Cloud Computing" name="course"/> Cloud Computing

        </div>  */}





 </div>
 
 
 )
    }
}


export default Signup