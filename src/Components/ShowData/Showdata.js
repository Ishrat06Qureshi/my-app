import React  , { Component } from "react"
import { Button  , Card , Table} from 'react-bootstrap';
import axios from "axios"

class ShowData  extends Component  {
    state = {
        data:{},
        error:''
    }

    componentDidMount() {
      axios.get('/studentRegistration').
      then(( data ) => this.setState(({data}))).
      catch((error) => this.setState(({error:error.message})))
    }
    render(){
        const { data } = this.state
        console.log( data)
        return( <div>
             <Card  style={{maxWidth:"1000px"}}>
                <Card.Body >
                   
                    
                    <div>
                        <Card.Text  style={{marginLeft:"-450px", marginTop:"50px" , fontWeight:"bold", fontSize:"15px" }} > Student Data </Card.Text>
                        <Table borderless style={{marginLeft:"50px" , width:"500px" , marginLeft:"315px"}}>
                            <tbody>
                                    <tr>
                                        <td style={{fontWeight:"bold", fontSize:"15px" , color:"#808080"}}>Name </td>
                                        <td>{data.name}</td> 
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold", fontSize:"15px", color:"#808080"}}>Email</td>
                                        <td>{data.email}</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold", fontSize:"15px",color:"#808080"}}>Address</td>
                                        <td>{ data.address }</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold", fontSize:"15px",color:"#808080"}}>Phone Number</td>
                                        <td>{data.number}</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold", fontSize:"15px",color:"#808080"}}>Course Name</td>
                                        <td>{data.courseName}</td>
                                    </tr>
                                   
                                   
                            </tbody>
                        </Table>
                </div>
        
                   
                    </Card.Body>
        </Card>   
                      
                
        </div>)
    }

}
export default ShowData