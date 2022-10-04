import { FaTimes } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const Task = ({ value, onDelete, togglereminder }) => {
  return (
    <div className={`task ${value.reminder ? "reminder" : ""}`}>
      <h3>
        {value.text}
        <FaBell
          onClick={() => togglereminder(value.id)}
          style={{ color: "yellow", cursor: "pointer" }}
        />
        <FaTimes
          onClick={() => onDelete(value.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{value.day}</p>
      <p>Reminder: {value.reminder ? "Yes" : "No"}</p>
    </div>
  );
};

export default Task;
