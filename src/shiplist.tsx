import { useState, useEffect } from "react";
import { Container, ListGroup } from "react-bootstrap";
import axios from "axios";
import { InterfaceShip } from "./Ship";
import Ship from "./components/Ship";

const ShipList = () => {
  const [ships, setShips] = useState<InterfaceShip[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://swapi.dev/api/starships/`);
      setShips(result.data.results);
    };
    fetchData();
  }, []);
  return (
    <Container>
      <ListGroup>
        {ships.map((ship) => (
          <Ship key={ship.id} {...ship} />
        ))}
      </ListGroup>
    </Container>
  );
};

export default ShipList;
