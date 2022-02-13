import React from 'react';
import {vimeApi} from '../../api.js';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

import ModerCard from './ModerCard/ModerCard.jsx';

const Moders = () => {
	const [moders, setModers] = React.useState('');
	const [progress, setProgress] = React.useState('');

	React.useEffect(async () => {
		await vimeApi.get('online/staff').then(res => {
			setModers(res.data);
		}).catch(err => {
			console.log(err);
		}).finally(() => {
			setProgress(false);
		});
	}, []);

	React.useEffect(() => {
		let data = Object.keys(moders).map(d => {
			return moders[d];
		});
		setModers(data);
	}, []);

	return(
		<Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3}}>
			{progress ? <CircularProgress />
			: <Box sx={{width: '100%', maxWidth: 700, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2}}>
				{moders?.map((d, id) => <ModerCard key={id} data={d} />)}
			</Box>}

			<Button variant="contained" sx={{p: '.5rem 3rem', mt: 2}}>
				Обновить
			</Button>
		</Box>
	)
}

export default Moders;