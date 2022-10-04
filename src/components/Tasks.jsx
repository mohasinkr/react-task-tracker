import Task from "./Task";

const Tasks = ({list, onDelete,togglereminder}) => {

  return (
  <>
  {
    list.map(
        (value)=> <Task key={value.id} value={value} onDelete={onDelete} togglereminder={togglereminder}/>
    )
  }
  </>
  );
};

export default Tasks;
