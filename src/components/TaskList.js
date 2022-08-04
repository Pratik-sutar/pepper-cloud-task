import React from "react";
import Table from "react-bootstrap/Table";
import "./Tasks.css";

const TastsListDetails = [
  {
    id: "01",
    subject: "Sample",
    type: "To Do",
    assignedTo: "Ravi Kumar",
    dueDate: "13 Nov 2018",
    status: "Not Started",
  },
  {
    id: "02",
    subject: "Sample",
    type: "To Do",
    assignedTo: "Annand Pai",
    dueDate: "16 Nov 2018",
    status: "Not Started",
  },
  {
    id: "03",
    subject: "Sample",
    type: "To Do",
    assignedTo: "Jai Ramesh",
    dueDate: "12 Dec 2018",
    status: "Not Started",
  },
  {
    id: "04",
    subject: "Sample",
    type: "To Do",
    assignedTo: "Allen Gomez",
    dueDate: "13 Oct 2018",
    status: "Not Started",
  },
  {
    id: "05",
    subject: "Sample",
    type: "To Do",
    assignedTo: "Allen Gomez",
    dueDate: "12 Sep 2018",
    status: "Not Started",
  },
];
const TaskList = () => {
  return (
    <div className="mt-3">
      <div>Task List</div>

      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Subject</th>
            <th>Type</th>
            <th>Assigned To</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        {TastsListDetails.map((item) => (
          <tbody className="border-white">
            <tr>
              <td>{item.id}</td>
              <td>{item.subject}</td>
              <td>{item.type}</td>
              <td>{item.assignedTo}</td>
              <td>{item.dueDate}</td>
              <td>{item.status}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default TaskList;
