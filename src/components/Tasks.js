import Task from "./Task";

const Tasks = ({list, onDelete}) => {

  return (
  <>
  {
    list.map(
        (value)=> <Task key={value.id} value={value} onDelete={onDelete}/>
    )
  }
  </>
  );
};

export default Tasks;
