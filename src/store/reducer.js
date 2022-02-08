const initialState = {
  tasks: [{title:'Buy new Phone',status:'success'},{title:'DTH Recharge',status:'pending'},{title:'Learn React',status:'pending'},{title:'Join Gym',status:'success'},{title:'Mobile Recharge',status:'pending'}]
};
const reducer = (state = initialState, action) => {
  if (action.type === 'addTask') {
    return {
      ...state,
       tasks: [...state.tasks,{title:action.val,status:'pending'}] };
  }
  if(action.type==='DeleteTask'){
    const temp = [...state.tasks];
    temp.splice(action.val,1)
    return{
      ...state,
    tasks:temp
    }
  }
  if(action.type==='DoneStatus'){
    const newTasks =[...state.tasks];
    newTasks[action.val].status ='success';
    return{
      ...state,
      tasks:newTasks
    }
  }
  if(action.type==='UndoStatus'){
    const newTasks =[...state.tasks];
    newTasks[action.val].status ='pending';
    return{
      ...state,
      tasks:newTasks
    }
  }
  return state;
};
export default reducer;
