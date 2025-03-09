import { Container, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import FlightDashboard from "../features/FlightDashboard";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [flight, setFlight] = useState<Flight>();
  const [flights, setFlights] = useState<Flight[]>([])

  const fetchFlights = async () => {

    await axios.get<Flight[]>('http://localhost:5000/api/flight')
      .then((res) => setFlights(res.data));

  }
  const [editMode, setEditMode] = useState(false);

  const handleSelectFlight = (id: string) => {
    const selectedFlight = flights.find(f => f.id === id);

    if (selectedFlight) {
      setFlight(selectedFlight);
      setEditMode(true);
    }

    
  }

  const handleSubmitForm = (flight: Flight) => {
    
    console.log(flight)
    if (flight.id) {
      setFlight(flight);
      setEditMode(true);


    axios.put(`http://localhost:5000/api/flight/`, {flight })
    .then(() => fetchFlights());
    }
    else {
      axios.post(`http://localhost:5000/api/flight/`, {...flight })
      .then(() => fetchFlights());
    }

    console.log('Form submitted')
  }

  const handleFormClose = () => {
    setEditMode(false);
    setFlight(undefined);
  }

  const handleOpenForm = () => {
    setEditMode(true);
  }

  const handleDelete = (id: string) => {
    setFlights(flights.filter(f => f.id !== id));
  }

  useEffect(() => {
    fetchFlights()
  }, []);


  return (
    <>
      <CssBaseline />
      <NavBar
        editMode={editMode}
        setEditMode={setEditMode}
      />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <FlightDashboard
          flights={flights}
          selectFlight={handleSelectFlight}
          flight={flight}
          editMode={editMode}
          closeForm={handleFormClose}
          openForm={handleOpenForm}
          deleteFlight={handleDelete}
          submitForm={handleSubmitForm}
        />
      </Container>

    </>
  )
}

export default App
