import React, { Component } from 'react';
import { Axios } from '../Utils/Axios';
import {Redirect ,useHistory} from 'react-router-dom'
class Login extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    onChange = (e) =>{
        var name=e.target.name
        console.log(name);
      this.setState({
         [name]:e.target.value
      }) 
    }
    onSubmit = (e)=>{
        (async ()=>{
            var {username,pass}=this.state;
            let data= await Axios('post','/Api/account/auth/login',{username:username,pass:pass})
            console.log(data.data.username);
            let {token}=data.data
            let usernamee=data.data.username;
            console.log(token);
            console.log(data);
            function setCookie(cname,cvalue,exdays){
                var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires" + d.toUTCString();
                console.log(expires);
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }
            setCookie('token',token,1);
            setCookie('username',usernamee,1);
            if( usernamee){
                this.setState({
                    redirect:true
                })
                // let history = useHistory();
                // history.push('/List');
            }
        })();
    }
   render (){
    let {username, pass,redirect=false} = this.state;
    if(redirect) return <Redirect to='/List'/>
       return(
          <div className="container">
              <div className="text-center">
                 <h1>Danh sách công việc</h1>
              </div>
              <br/>
              <br/>
            <div className="text-center">
                <h1>Login</h1>
            </div>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className='col-lg-6'>
                    <form >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" 
                              className="form-control" 
                              id="exampleInputEmail1" 
                              aria-describedby="emailHelp" 
                              placeholder="Enter email" 
                              name="username"
                              onChange = {this.onChange}
                              />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" 
                               className="form-control" 
                               id="exampleInputPassword1" 
                               placeholder="Password" 
                               name="pass"
                               onChange={this.onChange}
                               />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                    </form>
                </div>
                <div className='col-lg-3'></div>
            </div>

          </div>
       )
   }
}
export default Login;