import React,{Component} from "react";
import axios from 'axios';

class CreateComponent extends Component{

    state={
        name:'',
        port: ''
    }

    onChangeHostName=(e)=> {
        this.setState({
            name: e.target.value
        });
    }

    onChangePortName = (e)=> {
        this.setState({
            port: e.target.value
        });
    }
    
    onSubmit=(e) => {
        e.preventDefault();

        const serverport = {
            name: this.state.name,
            port: this.state.port
        }
            console.log(serverport)

        axios.post('http://localhost:4200/serverport/add',  JSON.stringify(serverport), {headers:{'Content-Type': 'application/json'}})
        .then(res => console.log(res.data));
            this.setState({
                name: '',
                port: ''
            })
    }

    render(){
        return(
        <div style={{marginTop: 50}}>
            <h3>Add New Server</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Add Host Name: </label>
                    <input type="text" className="form-control" onChange={this.onChangeHostName}/>
                </div>
                <div className="form-group">
                    <label>Add Server Port: </label>
                    <input type="text" className="form-control" onChange={this.onChangePortName}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Add Node Server" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        )
    }
}

export default CreateComponent
