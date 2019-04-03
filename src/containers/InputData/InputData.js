import React, {Component} from 'react';
import AddSubscriber from '../../components/AddSubscriber/AddSubscriber';
//import {Route , Link} from 'react-router-dom';
import classes from './InputData.module.css'; 

class InputData extends Component{
     
    state={
        Name: null,
        Phone: null,
        Subscribers:[]
    }

onchangeName=(event)=>{
this.setState({Name: event.target.value});

}
        
onchangePhone=(event)=>{
this.setState({Phone: event.target.value});
}

addSubscriber=()=>{
let updatedSubs= [...this.state.Subscribers];
let NewSub={
    name: this.state.Name,
    phone: this.state.Phone
    
}

updatedSubs.push(NewSub);

console.log(updatedSubs);
this.setState({Subscribers: updatedSubs});

}




//this.setState({Names: updatedNames});
        
    
    
    render(){
        
        return(
            <div>
             <div className={classes.AddSub}>ADD SUBSCRIBER</div>
            <div className={classes.InputData}>
           
            Name:<br/>
            <input type="text" onChange={this.onchangeName.bind()}/>
            <br/><br/>
            Phone: <br/>
            <input type="text" onChange={this.onchangePhone.bind()}/>
            <br/>
            <b className={classes.b}>Subscriber to be added:</b>
            <p>Name: {this.state.Name} </p>
            <p>Phone: {this.state.Phone} </p>
           <button className={classes.Button} onClick={this.addSubscriber.bind()}>ADD</button>
            <AddSubscriber subscribers={this.state.Subscribers}/>
            </div>
</div>
);
    }
}

export default InputData;
