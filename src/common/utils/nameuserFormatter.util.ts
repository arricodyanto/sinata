export function nameuserToArray(data: string) {
	const namesArray = data.split(', ');

	const formattedArray = namesArray.map((name) => {
		return { name: name };
	});

	return formattedArray;
}

export function nameuserToString(data: Array<any>) {
	const formattedString = data.join(', ');

	return formattedString;
}
