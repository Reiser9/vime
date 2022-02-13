import React from 'react';
import {skinApi} from '../../../api.js';
import {ranks} from '../../../ranks.js';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const ModerCard = ({data}) => {
	const {username, rank, playedSeconds, level} = data;

	const secondsToDhms = (seconds) => {
		seconds = Number(seconds);
		var d = Math.floor(seconds / (3600*24));
		var h = Math.floor(seconds % (3600*24) / 3600);
		var m = Math.floor(seconds % 3600 / 60);
		var s = Math.floor(seconds % 60);

		var dDisplay = d > 0 ? d + (" дн, ") : "";
		var hDisplay = h > 0 ? h + (" ч, ") : "";
		var mDisplay = m > 0 ? m + (" мин, ") : "";
		var sDisplay = s > 0 ? s + (" сек") : "";
		return dDisplay + hDisplay + mDisplay + sDisplay;
	}

	return(
		<Box sx={{border: '1px solid #2ebaee', p: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
			<Avatar sx={{width: 75, height: 'auto'}} variant="square" src={`${skinApi}/helm/${username}.png`} alt={username} />

			<Typography sx={{color: `${ranks[rank]}`, mt: 1, fontWeight: 500}} component="p" variant="body1">
				{username}
			</Typography>

			<Typography sx={{mt: 1, textAlign: 'center'}} component="p" variant="body1">
				{secondsToDhms(playedSeconds)}
			</Typography>

			<Typography sx={{mt: 1}} component="p" variant="body1">
				{level} уровень
			</Typography>
		</Box>
	)
}

export default ModerCard;