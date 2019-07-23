import React,{Component} from "react";
import axios from 'axios';
import TableRow from './TableRow'

class IndexComponent extends Component{

state = {
    serverports:[]
};

componentDidMount(){
    axios.get('http://localhost:4200/serverport')
    .then(response => {
        this.setState({serverports: response.data})
    })
    .catch(function(error){
        console.log(error) 
    })
}

tabRow=()=> {
    return this.state.serverports.map((object,i)=>{
        return <TableRow obj={object} key={i} /> ;
    })
}


    render(){
        return(
        <div style={{marginTop: 50}} className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Port</td>
                    </tr>
                </thead>
                <tbody>
                    {this.tabRow()}
                </tbody>

            </table>
        </div>)
    }
}

export default IndexComponent
