import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    return !text
      ? alert("Enter a text to continue!")
      : onAdd(text, day, reminder);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Task:</label>
        <input
          type="text"
          placeholder="Enter the task"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>

      <div className="form-control">
        <label>Day and time:</label>
        <input
          type="text"
          placeholder="Enter the day and time"
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
      </div>

      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
