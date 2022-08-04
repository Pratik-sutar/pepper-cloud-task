import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ActivitiesForm from "./ActivitiesForm";
import ToDoTasks from "./ToDoTasks";
import "./Styles.css"

const ActivityTabs = () => {
  return (
    <div>
  <Tabs
      defaultActiveKey="activity"
      transition={false}
      id="noanim-tab-example"
      className="m-3 border-bottom"
      variant="pills"
    >
      <Tab eventKey="activity" title="ACTIVITY" className=" ">
        <div  className=" activityContainer">
        <ActivitiesForm/>
        <ToDoTasks/>
        </div>
      </Tab>
      <Tab eventKey="info" title="INFORMATION">
      <div className="d-flex flex-row justify-content-center align-items-center ">Information</div>
      <div className="m-5">
      <div className="trialArrowUp"></div>
      <div className="trialArrowDown"></div>
      </div>
      </Tab>
    </Tabs>
    </div>
  );
};

export default ActivityTabs;
