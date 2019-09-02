const {spawnSync} = require('child_process');
const express = require('express');

const findVolume = /\[(\d+)%\]/;
function handleVolumeRequest(sign) {
	return (req, res) => {
		const result = spawnSync('amixer', ['set', 'Master', `2%${sign}`], {encoding: 'utf8'});
		const volumeResult = findVolume.exec(result.stdout);
		res.send(volumeResult[1]);
	};
}

const expressApp = express();
expressApp.post('/volume-up', handleVolumeRequest('+'));
expressApp.post('/volume-down', handleVolumeRequest('-'));
expressApp.listen(3000);