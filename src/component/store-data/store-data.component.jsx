import './store-data.style.scss'
import React from 'react'
import { emailRegex } from '../regEx/Regex';

class StoreData extends React.Component{
    constructor(props){
        super(props);
        this.state={          
            name:"",
            email:"",
            password:"",
            errors:{}
        };

    }

    handleEmailChange=(e) =>{
        this.setState({email: e.target.value});
        console.log(this.state)
     };

     handleNameChange=(e) =>{
        this.setState({name: e.target.value});
        console.log(this.state)
     };

     handlePasswordChange=(e) =>{
        this.setState({password: e.target.value});
        console.log(this.state)
     };

    validatingForm = () =>{
        const {name,email,password}= this.state;
        let isValid = true;
        const errors= {};

        if(name.includes("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")){
            errors.wrongInput="Wrong input";
            isValid=false;
        }
        if(!emailRegex.test(email)){
            errors.wrongInput="Wrong input"
            isValid=false;
        }
        if(password.trim().length<8){
            errors.wrongInput="Invalid password"
            isValid=false; 
        }
        this.setState({errors})
        return isValid;
    }

    handleSubmit=(e) =>{
        this.state(e.target.value)
        //e.preventDefault();
        // const {name,email, password } = this.state
        // console.log({name: name.value, email: email.value, password: password.value })
        this.validatingForm();
    }

    // onHandleEvent = (event) => {
    //     const { id, value } = event.target;
    //     this.setState((prevState) => ({
    //       ...prevState,
    //       [id]: value,
    //     }));
    //     console.log(this.state)
    //   };

    //   onHandleEvent = event => {
    //     console.log(event.target)
    //     this.setState ({
    //      [event.target.name]: event.target.value,
    //     })
    //        console.log(this.state)
    //    };


    render(){
        return(
            <>
            <div className='field'>
            <pre>{JSON.stringify(this.state, undefined, 2)}</pre>
            <form className='login' onSubmit={this.handleSubmit}>
            <h1>Login Page</h1>
                <label><b>User Name: </b></label> 
                <input type="text"  placeholder="Username" value={this.state.name} onChange={this.handleNameChange}/>
                <br></br>
                <label><b>Email:</b></label> 
                <input type="text"  placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
                <br></br>
                <label><b>Password: </b></label>
                <input type="Password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/><br></br>
                <input type="button" name='button' value="Log In Here"></input>
                <br></br> 
                {Object.keys(this.state.errors).map((key) =>{
                    return <div key={key}>{this.errors[key]}</div>
                })}
            </form>

            </div>
            </>
        )
    }

}

export default StoreData
