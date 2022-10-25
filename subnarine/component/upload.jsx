import { useState } from 'react';
import { SubmarineFile } from './submarine';

export default function Upload() {
	const [myzip, setMyZip] = useState();

	const filehandler = (e) => {
		const reader = new FileReader();
		const [file] = e.target.files;
		let songFile;
		if (e.target.files[0]) {
			reader.readAsDataURL(file);
			if (
				e.target.files[0].type === 'application/zip' ||
				e.target.files[0].type === 'application/x-rar-compressed'
			) {
				songFile = e.target.files[0];
			} else {
				songFile = null;
			}
		}

		reader.onload = () => {
			if (reader.readyState === 2) {
				if (songFile !== null) {
					setMyZip(songFile);
					console.log('file loaded', songFile);
				} else {
					console.log('file not loaded');
				}
			}
		};
	};

	return (
		<div>
			<h1>Upload Zip file</h1>

			<input
				type='file'
				accept='application/*'
				onChange={filehandler}
				name='stem-upload'
				id='stem-upload'
			/>

			<div
				onClick={() => {
					SubmarineFile(myzip);
				}}
				style={{
					border: '1px white solid',
					color: 'white',
					maxWidth: '100%',
					cursor: 'pointer',
				}}
			>
				Submarine File
			</div>
		</div>
	);
}
