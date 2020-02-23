import React, { Component } from 'react';
import {Axios} from '../Utils/Axios';
import axios from 'axios';
class TaskForm extends Component{
  constructor(props){
    super(props);
    this.state={
      nameWork:'',
      status:"false"
    }
  }
  removeAddToList=()=>{
    console.log("gfgfgf");
   this.props.onCloseForm();
   console.log("cong 2 tuổi");
  }
  onChange=(event)=>{
    var name=event.target.name;
    var value=event.target.value;
    this.setState({
      [name]:value
    })
  }
  s_headers=()=>{
    return {
      Authorization: 'Basic ' + this.props.gcToken
    }
  }
  onSubmit=(e)=>{
    (async ()=>{
      var data={
            nameWork:this.state.nameWork,
            status:this.state.status
          }
       Axios('post','/Api/workList/add',data);
    })()
   }
   onSubmitUpdate=(e)=>{
     console.log(this.props.udFormCv);
     (async()=>{
       var data={
         _id:this.props.udFormCv._id,
        nameWork:this.state.nameWork,
        status:this.state.status
       }
       Axios('put','/Api/workList/',data);
     })()
   }
   onCancel=(e)=>{
     e.preventDefault();
     this.setState({
       nameWork : ''
     })
   }
  render(){
    console.log(this.s_headers());
    
    console.log(this.state.nameWork);
    var udFormCv=this.props.udFormCv ;
   
    return(
      <div className="panel panel-warning">
        <div className="panel-heading" style={{display: 'flex'}}>
    <h3 className="panel-title">{this.props.updateCv == true ?'Thêm Công Việc' : 'Thay đổi công việc'}</h3>
          <i style={{ paddingLeft: '170px'}} 
            className="far fa-times-circle"
            onClick={()=>this.removeAddToList()}
            ></i>
        </div>
        <div className="panel-body">
          <form  onSubmit={udFormCv._id ?  this.onSubmitUpdate : this.onSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input 
                  type="text" 
                  className="form-control"
                  name="nameWork"
                  value={this.state.nameWork==''? '' : this.state.nameWork}
                  onChange={this.onChange}
                  />
            </div>
            <label>Trạng Thái :</label>
            <select 
                  className="form-control" 
                  required="required"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button 
                  type="submit" 
                  className="btn btn-warning"
                >{this.props.updateCv == true ? "thêm" : "Sửa"}</button>&nbsp;
              <button  className="btn btn-danger" onClick={this.onCancel}>Hủy Bỏ</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default TaskForm;