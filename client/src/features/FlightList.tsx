import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Typography } from '@mui/material';

type Props = {
    flights: Flight[];
    selectFlight: (id: string) => void;
    deleteFlight: (id: string) => void;

}

const FlightList = ({
    flights,
    selectFlight,
    deleteFlight
}: Props) => {
    return (
        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
            <Typography variant="h5" color='primary' gutterBottom>
                Flight List
            </Typography>
            {flights.map((flight: Flight) => (
                <Card elevation={3} sx={{ borderRadius: 3, p: 2 }} key={flight.id}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CardHeader
                            avatar={<Avatar sx={{ bgcolor: 'primary.main' }}>{flight.tailNumber[0]}</Avatar>}
                            title={flight.tailNumber}
                            subheader={flight.flightId}

                        />
                    </Box>
                    <Divider sx={{ mb: 3 }} />

                    <CardContent sx={{ p: 0 }}>
                        <Box display='flex' flexDirection='column' gap={2} mr={2}>
                            <Typography variant="body2" noWrap>
                                Take Off: {flight.takeoff.substring(0, 19).replace('T', ' ')}
                            </Typography>
                            <Typography variant="body2" noWrap>
                                Landing: {flight.landing.substring(0, 19).replace('T', ' ')}
                            </Typography>
                            <Typography variant="body2" noWrap>
                                Duration: {flight.duration} hours
                            </Typography>
                        </Box>

                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', pb: 2 }}>

                        <Button size='small'
                            color='primary'
                            variant='contained'
                            onClick={() => selectFlight(flight.id!)}
                        >View</Button>
                        <Button size='small'
                            color='warning'
                            variant='contained'
                            onClick={() => deleteFlight(flight.id!)}
                        >Delete</Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    );
};

export default FlightList;