import React, {Component} from 'react';

class Home extends Component{
render(){
    return(
        <div style={{marginTop:'30px', fontFamily:"Russo One", color: 'teal'}}>
            <h1>Mollelwa's Node server Listing App</h1>
            <h3>made with react, express and mongodb</h3>
            <h6>Have fun, Inspired by @Krunal</h6>
            <img style={{display:'block', margin: 'auto'}} src="https://microless.com/cdn/products/38990-hi.jpg"></img>
        </div>
    )
}
}

export default Home