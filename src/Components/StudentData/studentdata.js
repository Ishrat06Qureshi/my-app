import React , { Component} from 'react'
import { Button  , Card , Form } from 'react-bootstrap';
import studentValidation from './helper';
import axios from "axios";
class StudentData extends Component{
   state = {
    name:'',
    email:'',
    courseName:'',
    number:'',
    address:'',
    errors:{},
   }

 // to reset the state back to their initials
 reset = () => {
     this.setState(({
        name:'',
        email:'',
        courseName:'',
        number:'',
        address:'',
        errors:{},
     }))
 }
  


   // update the state when there is a change in input fields
    handleOnChange = ( event ) => {
     this.setState(({
         [event.target.name] : event.target.value
     }))
    }

    // submit the form 
    handleSubmit = ( event ) => {
        const { name , courseName , email , number , address } = this.state

        const data = {
            name,
            courseName,
            email,
            number,
            address
        }
        event.preventDefault()
        const {errors} = studentValidation( data )
        if( errors ){
             return  this.setState(({errors}))
        }
        axios.post('/studentRegistration', data ).
        then(( Response) => this.reset()).
        catch(( errors) => alert('something went wrong'))
        
    }

    render(){


        const { name , courseName , email , number , address  , errors } = this.state

        return(
            <div>
         

            <Card style = {{ width:"500px", height:"750px" , marginLeft:"550px"}}>
                    <Card.Title style={{marginTop:"30px", marginLeft:"-15px"}}>
                        <h2>Student Data</h2>
                    </Card.Title>
                    <div></div>
                    <Form style={{ width:"400px" , height:"150px"}} onSubmit = {this.handleSubmit}>
                        <Form.Group controlId="formGroup">
                            <Form.Label style={{marginTop:"30px", marginLeft:"-300px"}} >Name</Form.Label>
                            <Form.Control type="text" placeholder="Your name" 
                            style={{ textAlign:"center" ,marginLeft:"30px"}} name="name" onChange={ this.handleOnChange}
                            value = {name}
                             /> 

                            {errors.name ? <p style= {{color:'red' , marginLeft:'20px'}}>{errors.name}</p> : null  }



                            <Form.Label style={{marginTop:"30px", marginLeft:"-310px"}}>Email</Form.Label>
                            <Form.Control type="email" placeholder="enter your email address"  
                            style={{textAlign:"center",marginLeft:"30px" }}
                            name="email" onChange={ this.handleOnChange}
                            value = {email}
                            />
                            {errors.email ? <p style= {{color:'red' ,marginLeft:'20px'}}>{errors.email}</p> : null  }


                            <Form.Label style={{marginTop:"30px", marginLeft:"-260px"}}> Course Name </Form.Label>
                            <Form.Control type="text" placeholder="Course Name"  
                            style={{textAlign:"center",marginLeft:"30px"}} 
                            name="courseName" 
                            onChange={this.handleOnChange}
                            value = {courseName}
                            />
                            {errors.courseName ? <p style= {{color:'red' , marginLeft:'20px'}}>{errors.courseName}</p> : null  }


                               
                            <Form.Label style={{marginTop:"30px", marginLeft:"-250px"}}> Phone number</Form.Label>
                            <Form.Control  placeholder="phone Number"  
                            style={{textAlign:"center",marginLeft:"30px" }}
                            name="number" onChange={ this.handleOnChange}
                            value = {number}
                            />
                            {errors.number ? <p style= {{color:'red', marginLeft:'20px'}}>{errors.number}</p> : null  }

 

                            <Form.Label style={{marginTop:"30px", marginLeft:"-290px"}}>Address</Form.Label>
                            <Form.Control type="text" placeholder="address"  
                            style={{textAlign:"center",marginLeft:"30px"}} 
                            name="address" onChange={ this.handleOnChange}
                            value = { address }
                            /> 
                            {errors.address ? <p style= {{color:'red' , marginLeft:'20px'}}>{errors.address}</p> : null  }
                            
                      <Button variant="primary" style={{marginTop:"40px" , marginLeft:'65px'}} type='submit'> Submit </Button>
                      </Form.Group>
                    </Form>
               </Card>
            </div>
        )
    }
}

export default StudentData 