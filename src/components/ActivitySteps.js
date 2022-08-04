import React from "react";
import "./Styles.css";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";

const ActivitySteps = () => {
  return (
    <div className="m-2 p-2 shadow-sm  clr-White ">
      <div className="">
        <div className="stepFlex">
          <div>
            <div className="arrowDiv bgGreen">
              <div className="circleInArrow">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div className="ArrowUp"></div>
              <div className="ArrowDown"></div>

              <p className="arrowText">Status 1</p>
            </div>
          </div>
          <div>
            <div className="arrowDiv bgPink bodyBottomBorder">
              <div className="circleInArrow"></div>
              <div className="ArrowUp"></div>
              <div className="ArrowDown"></div>
              <p className="arrowText">New</p>
            </div>
          </div>
          <div>
            <div className="arrowDiv bgWhite">
              <div className="circleInArrow"></div>
              <div className="ArrowUp"></div>
              <div className="ArrowDown"></div>
              <p className="arrowText">Working</p>
            </div>
          </div>
          <div>
            <div className="arrowDiv bgWhite">
              <div className="circleInArrow"></div>
              <div className="ArrowUp"></div>
              <div className="ArrowDown"></div>
              <p className="arrowText">Nurturing</p>
            </div>
          </div>
          <div>
            <div className="arrowDiv bgWhite">
              <div className="circleInArrow"></div>
              <p className="arrowTextLast">Converted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitySteps;
