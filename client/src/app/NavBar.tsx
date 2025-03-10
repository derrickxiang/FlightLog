import { Group, } from '@mui/icons-material'
import { Box, AppBar, Toolbar, Typography, Button, Container, MenuItem, } from '@mui/material'

type Props = {
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
}

export default function NavBar({
    editMode,
    setEditMode
}: Props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"
                sx={{
                    backgroundImage: 'linear-gradient(45deg, #182a73 0%, #218aae 70%, #20a7ac 89%)'

                }}>
                <Container maxWidth="xl">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <MenuItem  sx={{ display: 'flex', gap: 2 }}>
                                <Group fontSize="large" />
                                <Typography sx={{position: 'relative'}} variant="h5" fontWeight='bold'>
                                    Flight Tracker
                                </Typography>
                                
                            </MenuItem>
                        </Box>
                        <Box>
                        <MenuItem sx={{
                            fondSize: '1.2.rem', textTransform: 'none', fontWeight: 'bold',
                        }}>
                               Flight List
                            </MenuItem>
                        </Box>
                        <Button size='medium'
                            variant="contained"
                            onClick={() => setEditMode(true)}
                            disabled={ editMode }
                            color="secondary"
                            sx={{ fontWeight: 'bold' }}>
                            Add Flight
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}
