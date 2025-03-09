import { Grid2, List, ListItem, ListItemText } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FlightForm from './FlightForm';
import FlightList from './FlightList';

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
    closeForm, openForm, submitForm
}: Props) {


    return (
        <Grid2 container spacing={3}>
            <Grid2 size={8}>
                <FlightList
                    flights={flights}
                    selectFlight={selectFlight}
                    deleteFlight={deleteFlight} /> 
               
            </Grid2>
            <Grid2
                size={4}
                sx={{
                    position: 'sticky',
                    top: 112,
                    alignSelf: 'flex-start'
                }}
            >
                {editMode && (
                    <FlightForm
                        closeForm={closeForm}
                        flight={flight}
                        submitForm={submitForm}
                    />
                )
            }
            </Grid2>
        </Grid2>
    )
}
