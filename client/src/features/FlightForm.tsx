import { Box, Paper, Typography, TextField, Button } from '@mui/material'
import React, { FormEvent } from 'react'
import DateTimeInput from '../app/DateTimeInput'
import { useForm } from 'react-hook-form'
import { DateTimePicker } from '@mui/x-date-pickers'
import axios from 'axios'

type Props = {
    flight?: Flight,
    closeForm: () => void,
    submitForm: (flight: Flight) => void
}
export default function FlightForm({
    flight,
    closeForm,
    submitForm
}: Props) {
    
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const newFlight: Flight = {
            tailNumber: formData.get('tailNumber') as string,
            flightId: formData.get('flightId') as string,
            takeoff: formData.get('takeoff') as string,
            landing: formData.get('landing') as string,
            duration: formData.get('duration') as string
        }
        console.log(newFlight)

        if (flight) newFlight.id = flight.id;

        submitForm(newFlight as Flight);
    }    
    return (
        <Paper sx={{ borderRadius: 3, padding: 3 }}>
            <Typography variant="h5" color='primary' gutterBottom>
                Add Flight
            </Typography>
            <Box component="form" 
                autoComplete="off"
                onSubmit={onSubmit}
                sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
                <TextField 
                    label="Tail Number"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name='tailNumber'
                    required
                    value={flight?.tailNumber}
                />
                <TextField 
                    label="Flight ID"
                    variant="outlined"
                    size="small"
                    name='flightId'
                    fullWidth
                    required
                    value={flight?.flightId}
                />
                <TextField 
                    label="Take Off"
                    variant="outlined"
                    size="small"
                    name='takeoff'
                    datatype='datetime-local'
                    fullWidth
                    required
                    value={flight?.landing}
                />
                <TextField 
                    label="Landing"
                    variant="outlined"
                    size="small"
                    name='landing'
                    datatype='datetime-local'
                    fullWidth
                    required
                    value={flight?.landing}
                />
                <TextField 
                    label="Duration"
                    variant="outlined"
                    size="small"
                    name='duration'
                    fullWidth
                    required
                    value={flight?.duration}
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end',gap: 2 }}>
                    <Button variant='contained'
                        color='primary' type='submit'>
                        Save
                    </Button>
                    <Button variant='contained' color='secondary' onClick={closeForm}>
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Paper>
    )
}
