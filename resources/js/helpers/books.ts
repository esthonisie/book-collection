export const shortenSummary = (text: string) => {
	const toArray = text.split(" ");

	if (toArray.length > 25) {
		toArray.length = 25;
		const chars = [".", ",", ";", ":"];

		if (chars.some(char => char === toArray[24].slice(-1))) {
			toArray[24] = toArray[24].slice(0, -1);
		}
	
		toArray.push("...");
	}
	
	
	return toArray.join(" ");
}