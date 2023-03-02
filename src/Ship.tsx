import React from "react";
import { ListGroupItem,} from "react-bootstrap";
import {Ship} from "./Ship";

const Ship = ({ crew,passengers,cargo }: Ship) => {
  return (
    <ListGroupItem>
    <ul>
      <li>{crew}</li>
      <li>{passengers}</li>
      <li>{cargo}</li>
    </ul>
    </ListGroupItem>
  );
};

export default Ship;