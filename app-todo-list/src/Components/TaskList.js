import React, { Component } from 'react';
import {Axios} from '../Utils/Axios';
class TaskList extends Component{
  constructor(props){
    super(props);
    this.state={
      workList:[]
    }
  }
  componentDidMount(){
     (async ()=>{
        let workList= await Axios('get','/Api/workList/');
        console.log(workList.data);
        this.setState({
          workList:workList.data
        })
    })();
  }
  onUpdate=(work)=>{
    console.log(work);
  this.props.updateForm(work);
   
  }
  onDelete=(work)=>{
    (async ()=>{
      var data={
        _id:work._id
      }
      let abc=await Axios('delete','/Api/workList/',data);
      console.log(abc);
      
      let workList= await Axios('get','/Api/workList/');
      console.log(this.props.dataWorkList);
      this.setState({
        workList:workList.data ? workList.data:this.props.dataWorkList
      })
      alert('Xóa công việc thành công')
  })();
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
  render(){
    var gcUsername=this.getCookie('username');
    console.log(gcUsername);
      var {workList}=this.state;
    var workcv=workList.map((work,index)=>{
        return (
          <tr key={index}>
          <td>{index}</td>
        <td>{work.nameWork}</td>
          <td className="text-center">
            <span className={work.status == false?"label label-danger" : "label label-success"}>
              {work.status==false ? 'Ẩn':'Kích hoạt'}
            </span>
          </td>
          <td className="text-center">
            <button 
                 type="button" 
                 className="btn btn-warning"
                 onClick={()=>this.onUpdate(work)}
                 >
              <span className="fa fa-pencil mr-5" />Sửa
            </button>
            &nbsp;
            <button 
                  type="button" 
                  className="btn btn-danger"
                 onClick={()=>this.onDelete(work)}
                  >
              <span className="fa fa-trash mr-5" />Xóa
            </button>
          </td>
        </tr>
        )
    })
    return(
         <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
       {gcUsername ? workcv : <tr><td><h3>""</h3></td></tr>}
        </tbody>
      </table>
    )
  }
}
export default TaskList;