import { FaTimes } from "react-icons/fa";

const Task = ({ value, onDelete }) => {
  return (
    <div className="task">
      <h3>
        {value.text}{" "}
        <FaTimes
          onClick={()=>onDelete(value.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{value.day}</p>
      <p>Reminder: {value.reminder ? "Yes" : "No"}</p>
    </div>
  );
};

export default Task;
