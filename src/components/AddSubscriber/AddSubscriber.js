import React , {Component} from 'react';
import {withRouter} from 'react-router-dom';
import classes from './AddSubscriber.module.css';
//import DeleteSubscriber from './DeleteSubscriber';

class AddSubscriber extends Component{
    
    render(){
       const listSubscribers = this.props.subscribers.map((sub,index)=>{
       return (
           <div  key={index}>
           <li className={classes.Li}>{sub.name} </li><li  className={classes.Li}>{sub.phone}</li>
           </div>
       );
    });
    
    return(
                
    <div>
     <ul>
        <li  className={classes.Li}><b>Name</b></li>
        <li  className={classes.Li}><b>Phone</b></li>
        </ul>
        
        <ul>
        {listSubscribers}
        </ul>
   
        </div>
    );
   
}
}

export default withRouter(AddSubscriber);