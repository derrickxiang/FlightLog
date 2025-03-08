import { List, ListItem, Typography } from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";

function App() {
  const [flights, setFlights] = useState<Flight[]>([])

  const fetchFlights = async () => {
    
      await axios.get<Flight[]>('http://localhost:5000/api/flight')
        .then((res) => setFlights(res.data));
    
  }

  useEffect(() => {
    fetchFlights()
  }, []);

  return (
    <Fragment>
      <Typography variant='h3'>Fligh Log</Typography>
      <List>
        {flights.map((flight: Flight) => (
          <ListItem key={flight.id}>
            {flight.tailNumber} - {flight.flightId}: {flight.takeoff} to {flight.landing}, {flight.duration}
          </ListItem>
        ))}
      </List>
    </Fragment>
  )
}

export default App
