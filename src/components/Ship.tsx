import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { InterfaceShip } from "../Ship";
import "./style.css";

const Ship: React.FC<InterfaceShip> = ({
  name,
  model,
  crew,
  passengers,
  cargo_capacity,
}) => {
  return (
    <ListGroupItem>
      <div className="all">
        <div className="na">
          <h2>
            <b>Name:</b> {name}
          </h2>

          <h2>
            <b>Model:</b> {model}
          </h2>
        </div>
        <div className="spec">
          <h3>
            {" "}
            <b>Specification</b>
          </h3>
          <ul>
            <li>
              <b>Crew:</b> {crew}
            </li>
            <li>
              <b>Passengers: </b>
              {passengers}
            </li>
            <li>
              <b>Cargo_capacity: </b>
              {cargo_capacity}
            </li>
          </ul>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default Ship;
