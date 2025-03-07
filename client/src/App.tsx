import { useEffect, useState } from "react";

function App() {
  const [flights, setFlights] = useState<Flight[]>([])

  const fetchFlights = async () => {
    const response = await fetch('http://localhost:5000/api/flight')
    const data = await response.json();
    console.log(data)
    setFlights(data)
  }

  useEffect(() => {
    fetchFlights()
  }, []);

  return (
    <>
      <h3>Fligh Log</h3>
      <ul>
        {flights.map((flight: Flight) => (
          <li key={flight.id}>
            {flight.tailNumber} - {flight.flightId}: {flight.takeoff} to {flight.landing}, {flight.duration}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
