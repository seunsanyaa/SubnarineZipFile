import axios from 'axios';
import FormData from 'form-data';

export const SubmarineFile = async (zipfile) => {
	const url = 'https://managed.mypinata.cloud/api/v1/content';
	console.log(zipfile);
	if (zipfile) {
		const formData = new FormData();
		formData.append('files', zipfile);
		formData.append('pinToIPFS', 'false');

		//making axios POST request to Pinata ⬇️
		return (
			axios
				.post(url, formData, {
					maxBodyLength: 'Infinity',
					headers: {
						'x-api-key': process.env.SUBMARINE_PINATA_SECRET,
					},
				})

				.then(function (response) {
					console.log('success');
					return {
						success: true,
						response: response.data,
					};
				})

				// error here!!!!
				.catch(function (error) {
					console.log('an errord occured');
					return {
						success: false,
						message: error.message,
					};
				})
		);
	} else {
		console.log('an error occured');
	}
};
