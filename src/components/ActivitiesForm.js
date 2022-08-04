import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Tasks from "./Tasks"; 

const ActivitiesForm = () => {
  return (
    <div className="bg-#ffff square border shadow  clr-White activityForm">
      <Tabs
        defaultActiveKey="Tasks"
        transition={false}
        variant="pills"
        id="noanim-tab-example"
        className="mb-3 mt-3 border-bottom"
      >
        <Tab eventKey="Log Call"    className="font-sizes-l" title="Log Call">
        <div className="d-flex flex-row justify-content-center align-items-center ">Log Call</div>
        </Tab>
        <Tab eventKey="Tasks"  title="Tasks">
          <Tasks/>
        </Tab>
        <Tab eventKey="Event"  title="Event">
        <div className="d-flex flex-row justify-content-center align-items-center ">Event</div>
        </Tab>
        <Tab eventKey="Make Note"     title="Make Note"><div className="d-flex flex-row justify-content-center align-items-center ">Make Note</div></Tab>
        <Tab eventKey="Add Attachment"  title="Add Attachment"><div className="d-flex flex-row justify-content-center align-items-center ">Add Attachment</div></Tab>
        <Tab eventKey="Activity Set"  title="Activity Set"><div className="d-flex flex-row justify-content-center align-items-center ">Activity Set</div></Tab>
        <Tab eventKey="Custom Field"  title="Custom Field"><div className="d-flex flex-row justify-content-center align-items-center ">Custom Field</div></Tab>
      </Tabs>
    </div>
  );
};

export default ActivitiesForm;
