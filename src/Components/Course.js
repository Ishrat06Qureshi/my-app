import React , { Component} from 'react';
import "../commonStyle.css";


class Signup  extends Component  {



        state = {
         selected_Courses : ["AI" , "Cloud Computing"] ,
         unSelected_Courses :[],
         new_course:"",
        } 
    handleOnChange = ( event ) => {
        this.setState(({
          [event.target.name ] : event.target.value  
        })) 
        

    }
    render() {
       const {selected_Courses , unSelected_Courses , new_course  } = this.state
    return(
        <div 
        className="form-container">
            <form>
                 <h1>Sign Up</h1>
                  
                <ul>
                    { selected_Courses.map(( course ) => {
                      <li> <Check course_name={ course }/></li>
                    })}
                </ul>
                <button>  Sign Up </button>

        </form>
       </div>)
    }
}

const Uncheck = ( { name }) => {
  return(<div>

  </div>)
}

const Check = ( { course_name }) => {
  return(<div>
      <div class="custom-control custom-radio">
        <input type="radio" class="custom-control-input" id="defaultCheckedDisabled2" name="disabledGroupExample" checked disabled/>
        <label class="custom-control-label" for="defaultCheckedDisabled2">{course_name}</label>
</div>
  </div>)
}

export default Signup