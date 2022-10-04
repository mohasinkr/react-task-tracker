const AddTask = () => {
  return (
    <form className="add-form" onSubmit={e=>{e.preventDefault();}}>
      <div className="form-control">
        <label>Task:</label>
        <input type="text" placeholder="Enter the task" />
      </div>

      <div className="form-control">
        <label>Day and time:</label>
        <input type="text" placeholder="Enter the day and time" />
      </div>

      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block"/>
    </form>
  );
};

export default AddTask;
