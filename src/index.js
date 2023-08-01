module.exports = function toReadable (number) {
		const numNames = [
			"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
			"ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
		];
	
		const tensNames = [
			"", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
		];

		function convertLessThanThousand(number) {
			if (number === 0) return 'zero';
			if (number < 20) return numNames[number];
			if (number < 100) return tensNames[Math.floor(number / 10)] + (number % 10 !== 0 ? ' ' + numNames[number % 10] : '');
			return numNames[Math.floor(number / 100)] + ' hundred' + (number % 100 !== 0 ? ' ' + convertLessThanThousand(number % 100) : '');
		}
	
		if (number === 1000) {
			return 'one thousand';
		}
	
		// Convert the given number to a readable string
		return convertLessThanThousand(number);
	}
