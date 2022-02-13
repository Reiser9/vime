import React from 'react';
import {vimeApi} from '../../api.js';

import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

const Online = () => {
	const [online, setOnline] = React.useState(0);
	const [progress, setProgress] = React.useState(true);

	React.useEffect(async () => {
		await vimeApi.get('online').then(res => {
			setOnline(res.data.total);
		}).catch(err => {
			console.log(err);
		}).finally(() => {
			setProgress(false);
		});
	}, []);

	return(
		<>
			{progress ? <CircularProgress />
			: <Typography component="p" variant="body1">
				Онлайн сервера: {online}
			</Typography>}
		</>
	)
}

export default Online;