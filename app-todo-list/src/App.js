import React, { Component } from 'react';
import TaskForm from './Components/TaskForm';
import Control from './Components/Control';
import TaskList from './Components/TaskList';
import {Axios} from './Utils/Axios';
import  axios  from  'axios'
import {Redirect} from 'react-router-dom'
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      removeTaskForm:false,
      workList : [],
      updateCv:true,
    
    }
  }
  onToggleForm=()=>{
    this.setState({
      removeTaskForm:! this.state.removeTaskForm,
      updateCv:true,
      work:{}
    })
  }
  onCloseForm=()=>{
    console.log("cong tran");
    this.setState({
      removeTaskForm:false
    })
  }
  updateForm=(work)=>{
    this.onToggleForm();
    this.setState({
      updateCv:false,
      work:work
    })
  }
  dataCokie=()=>{
    var a=[];
    for(let i=0;i<document.cookie.split(';').length;i++){
      for(let j=0;j<document.cookie.split(';')[i].split('=');j++){
        a.push([0]);
      }
    }
    console.log(a);
    
    
  }
  logOut=()=>{
    console.log(document.cookie.length);
    var d=new Date();
    d.setTime(d.getTime())
    var expires = "expires="+ d.toUTCString();
    for(let i=0;i<=document.cookie.split(';').length;i++){
      let cname =document.cookie.split(';')[0].split('=')[0];
      let cvalue = document.cookie.split(';')[0].split('=')[1];
       document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    this.setState({
      redirect:true
    })
    // var i = 0;
    // var dem=0;
    // while (dem==0){
    //   console.log(document.cookie.length  );
    //   let cname =document.cookie.split(';')[0].split('=')[0];
    //   let cvalue = document.cookie.split(';')[0].split('=')[1];
    //   console.log(cname);
    //   console.log(cvalue);
    //   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    //   dem++;
    // }
    // let cname =document.cookie.split(';')[0].split('=')[0];
    // let cvalue = document.cookie.split(';')[0].split('=')[1];
    // console.log(cname);
    // console.log(cvalue);
    // console.log(document.cookie);
    
  }
  getCookie=(cname)=> {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  onLogin=()=>{
    this.setState({
      redirect:true
    })
  }
  onNull=()=>{
    console.log("abc");
  }
  render(){
    var {redirect=false}=this.state;
    var gcUsername=this.getCookie('username');
    var gcToken=this.getCookie('token')
    if(redirect) return <Redirect to='/'/>
    console.log(this.getCookie('username'));
    var {removeTaskForm}=this.state;
    var elmTaskForm=removeTaskForm==true ? <TaskForm 
                                              onCloseForm  ={this.onCloseForm}
                                              updateCv={this.state.updateCv}
                                              udFormCv={this.state.work}
                                              gcToken = {gcToken}
                                              />:""
   return (
      <div className="container">
        <div className="text-center">
          <div className='row'>
            <div className='col-lg-4'></div>
            <div className='col-lg-4'>
              <h1>Quản Lý Công Việc</h1>
              <hr />
            </div>
            <div className='col-lg-1'>
              
            </div>
            <div className='col-lg-3'>
                <div className="dropdown show">
                  <a className="btn btn-secondary" onClick={!this.getCookie('username') ? this.onLogin : this.onNull }>
                      {this.getCookie('username') ? <h4>{this.getCookie('username')}</h4> : 'Đăng nhập' }
                  </a>
                  <a className="btn btn-secondary" onClick={this.logOut}>
                    {this.getCookie('username') ? 'Đăng xuất' : ''}
                  </a>
                </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={removeTaskForm==false ? "":"col-xs-4 col-sm-4 col-md-4 col-lg-4"}>
             {elmTaskForm}
          </div>
          <div className={removeTaskForm==false ? "col-xs-12 col-sm-12 col-md-12 col-lg-12" : "col-xs-8 col-sm-8 col-md-8 col-lg-8"}>
           <button 
               type="button" 
               className="btn btn-primary"
               onClick={this.getCookie('username') ? this.onToggleForm : this.onLogin}
               >
                <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
              
                <TaskList  
                     updateForm={this.updateForm}
                     gcUsername={gcUsername}
                     gcToken   ={gcToken}
                     />
          </div>
        </div>
      </div>
   )
  }
}
export default App;