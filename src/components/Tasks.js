import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Tasks.css";
import TaskList from "./TaskList";

const Tasks = () => {
  return (
    <div className="m-3">
      <div>New Task</div>
      <div className="formContainer">
        <div  className="inputTagsClass">
          <p>Task</p>
          <InputGroup>
            <Form.Control label="Task Type" />
            <DropdownButton
              variant="outline-secondary"
              id="input-group-dropdown-2"
              align="end"
            >
              <Dropdown.Item href="#">ToDo</Dropdown.Item>
              <Dropdown.Item href="#">Contact to</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </div>
        <div className="inputTagsClass">
          <p>Subject</p>
          <Form.Control type="text" />
        </div>

        <div className="inputTagsClass">
          <div>
            <p>Assigned To</p>
            <InputGroup>
              <Form.Control label="Task Type" />
              <DropdownButton
                variant="outline-secondary"
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item href="#">Ravi Kumar</Dropdown.Item>
                <Dropdown.Item href="#">Annand Pai</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </div>
          <div className="dateInputs">
            <div className="inputTagsClass">
              <p>Start date</p>
              <InputGroup>
                <Form.Control
                  label="Task Type"
                  type="date"
                  className="btnWidth"
                />
              </InputGroup>
            </div>
            <div className="inputTagsClass">
              <p>End Date</p>
              <InputGroup>
                <Form.Control
                  label="Task Type"
                  type="date"
                  className="btnWidth"
                />
              </InputGroup>
            </div>
          </div>
          <div className="margin6">
            <p>Assigned To</p>
            <InputGroup>
              <Form.Control label="Task Type" />
              <DropdownButton
                variant="outline-secondary"
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item href="#">ToDo</Dropdown.Item>
                <Dropdown.Item href="#">Contact to</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </div>
        </div>
        <div className="inputTagsClass">
          <div>
            <p>Details</p>
            <Form.Control type="text" className="textareaBox" />
            <div className="d-flex flex-row justify-content-between ">
              <Button variant="outline-secondary" className="btnWidth">
                Cancel
              </Button>
              <Button variant="outline-warning" className="btnWidth">
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TaskList/>
      </div>
    </div>
  );
};

export default Tasks;
