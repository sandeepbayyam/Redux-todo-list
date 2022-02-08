import React from 'react';
import {connect } from 'react-redux'
const Todolist = (props)=>{
  const [newtask,setNewTAsk]=React.useState('');
  return(
    <div>
      <h3>Todolist</h3>
      <input type="text" onChange={(e)=>{setNewTAsk(e.target.value)}}/>
      &nbsp;&nbsp;
      <button onClick={()=>{props.dispatch({type:'addTask',val:newtask})}}>Add Task</button>
      <hr/>
        {
          props.tasks.map((t,index)=>{
            return (
            <div>
              <li className={t.status==='success'?'success':'pending'}>
              {t.title}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button className={t.status==='success'?'undo':'done'}  onClick={()=>{props.dispatch({type:'DoneStatus',val:index})}}>Done</button>
              &nbsp;
              <button className={t.status==='success'?'done':'undo'}  onClick={()=>{props.dispatch({type:'UndoStatus',val:index})}}>undo</button>
              &nbsp;
              <button  onClick={()=>{props.dispatch({type:'DeleteTask',val:index})}}>Delete</button>
              </li>
              <hr/>
              </div>
          )
          })
        }
    </div>
  )
}
export default connect(store=>store)(Todolist)