import { Box, Grid2 } from '@mui/material'
import FlightForm from './FlightForm';
import FlightList from './FlightList';
import LoginForm from './LoginForm';

type Props = {
    flights: Flight[];
    selectFlight: (id: string) => void;
    deleteFlight: (id: string) => void;
    flight?: Flight;
    editMode: boolean;
    closeForm: () => void;
    openForm: () => void;
    submitForm: (flight: Flight) => void;

}

export default function FlightDashboard({
    flights,
    selectFlight,
    deleteFlight,
    flight,
    editMode,
    closeForm, submitForm
}: Props) {


    return (
        <Grid2 container spacing={3}>
            <Grid2 size={8}
            sx={{top: 112}}
            >
                <FlightList
                    flights={flights}
                    selectFlight={selectFlight}
                    deleteFlight={deleteFlight} /> 
               
            </Grid2>
            <Grid2
                size={4}
                sx={{
                    //position: 'sticky',
                    top: 112,
                    alignSelf: 'flex-start'
                }}
            >
                <Box gap={2}>
                {editMode && (
                    <FlightForm
                        closeForm={closeForm}
                        flight={flight}
                        submitForm={submitForm}
                    />
                )
                    }
                    <LoginForm />
                </Box>
            </Grid2>
        </Grid2>
    )
}
