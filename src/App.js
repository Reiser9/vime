import './App.css';
import {vimeApi} from './api.js';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Online from './Components/Online/Online.jsx';
import Moders from './Components/Moders/Moders.jsx';

const App = () => {
    const loadStaff = async () => {
        await vimeApi.get('online/staff').then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <Box sx={{width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', p: '2rem 0'}}>
            <Online />

            <Typography component="p" variant="h4" sx={{mt: 1}}>
                VimeTop v2
            </Typography>

            <Box sx={{width: 700, mt: 3}}>
                <TextField sx={{width: '100%'}} label="Поиск" />
            </Box>

            <Moders />
        </Box>
    );
}

export default App;
