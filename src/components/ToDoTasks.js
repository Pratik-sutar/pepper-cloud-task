import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faTableList } from "@fortawesome/free-solid-svg-icons/faTableList";
import "./Styles.css";
import "./Tasks.css";

const TasksPerformed = [
  {
    id: "01",
    task: "Informed Products Feature",
    message: "You contacted with",
    name: "Charles Gomez",
    time: "13 Nov 2018 05:49 AM",
    icon: faPhone,
    iconClass: "blueIcon",
  },
  {
    id: "02",
    task: "Send Products Brochure",
    message: "You added a To Do task with",
    name: "Arun Varsh",
    time: "10 Nov 2018 06:49 AM",
    icon: faCheck,
    iconClass: "greenIcon",
  },
  {
    id: "03",
    task: "Informed Products Feature",
    message: "You contacted with",
    name: "Charles Gomez",
    time: "13 Nov 2018 5:49 AM",
    icon: faTableList,
    iconClass: "greenIcon",
  },
  {
    id: "04",
    task: "Informed Products Feature",
    message: "You contacted with",
    name: "Charles Gomez",
    time: "13 Nov 2018 5:49 AM",
    icon: faPhone,
    iconClass: "blueIcon",
  },
  {
    id: "05",
    task: "Informed Products Feature",
    message: "You contacted with",
    name: "Charles Gomez",
    time: "13 Nov 2018 5:49 AM",
    icon: faCheck,
    iconClass: "greenIcon",
  },
];
const ToDoTasks = () => {
  return (
    <div className="bg-#ffff square border shadow-sm clr-White toDoForm">
      <div className="p-2 border-bottom">
        <InputGroup>
          <Form.Control label="Task Type" placeholder="Filter by date" />
          <DropdownButton
            variant="outline-secondary"
            id="input-group-dropdown-2"
            align="end"
          >
            {TasksPerformed.map((item) => (
              <Dropdown.Item href="#">{item.time}</Dropdown.Item>
            ))}
          </DropdownButton>
        </InputGroup>
      </div>
      <div className="toDoContent">
        {TasksPerformed &&
          TasksPerformed.map((item) => (
            <div className="d-flex  flex-wrap m-3 square border justify-content-between toDoTasksList ">
              <div className={item.iconClass}>
                <FontAwesomeIcon
                  icon={item.icon}
                  className="circleIcon p-2 m-2"
                />
              </div>
              <div className="w-75 lh-1 p-2 mt-1 f-1">
                <p>
                  {" "}
                  <b> {item.task}</b>
                </p>
                <p className="hideText">
                  {item.message} <span className="clr-gold">{item.name}</span>
                </p>
                <p>{item.time}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ToDoTasks;
