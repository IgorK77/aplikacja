import { useState, useEffect } from "react";
import { Container, ListGroup } from "react-bootstrap";
import axios from "axios";
import {Ship} from "./Ship";

const ShipList = () => {
  const [ships, setShips] = useState<Ship[]>([]);
  

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://swapi.dev/api/starships/`);
      setShips(result.data);
    };
    fetchData();
  });
return (
    <Container>
      <ListGroup>
        {ships.map((ship) => (
          <ShipList key={ship.id} {...ship} />
        ))}
      </ListGroup>
    </Container>
  );
};

export default ShipList;