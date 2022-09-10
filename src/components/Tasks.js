import { getValue } from "@testing-library/user-event/dist/utils";

const list = [
  {
    id: 1,
    text: "Buy groceries",
    day: "August 14th at 9.00am",
    reminder: true,
  },
  {
    id: 2,
    text: "Go to McDonalds",
    day: "August 14th at 9.00am",
    reminder: true,
  },
  {
    id: 3,
    text: "Hang out with friends",
    day: "August 14th at 9.00am",
    reminder: true,
  },
  {
    id: 4,
    text: "Start learning react",
    day: "August 14th at 9.00am",
    reminder: true,
  },
];

const Tasks = () => {
  return <>
  {
    list.map((value)=> <h3>{value.text}</h3>
    )
  }
    
  </>;
};

export default Tasks;
