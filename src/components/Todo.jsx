const Todo = (props) => {
    return (
      <div >
       
        {/* <h3>{props.id}</h3> */}
        <p>{props.body}</p>
        <input type="checkbox" value={props.completed}/>
      </div>
    );
  };
  
export default Todo;