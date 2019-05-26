var syllable = require("syllable");
var moby = require("moby");

function syllabify(word) {
	const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;
	return word.match(syllableRegex);
}

function getRhymingWords(word1, word2) {
	// Get only the synonyms that have the same last syllable as the input word

	const synonyms1 = [word1, ...moby.search(word1)]
	const synonyms2 = [word2, ...moby.search(word2)]

	const syllables1 = synonyms1.map(syllabify)
	const syllables2 = synonyms2.map(syllabify)

	const results = []

	for (let i = 0; i < syllables1.length; i++) {
		for (let j = 0; j < syllables2.length; j++) {
			const candidate1 = syllables1[i]
			const candidate2 = syllables2[j]
			if (candidate1 !== null && candidate2 !== null && candidate1[candidate1.length - 1] === candidate2[candidate2.length - 1] && synonyms1[i] !== synonyms2[j])
				return [candidate1, candidate2]
		}
	}
	return [word1, word2]

	// TODO:
	// Go through multiple syllables and return the tuple that share the maximum number of matched syllables
}

module.exports = getRhymingWords



// function filterBySyllables(word, wordList) {	
// 	var originSyllables = syllable(word);
// 	var newList = [];

// 	wordList.forEach(element => {
// 		if (syllable(element) == originSyllables) {
// 			newList.push(element);
// 		}
// 	});
// 	return newList;
// }


// function getWords(word) {
// 	var synonimList = moby.search(word);
// 	return sameSyllableList = filterBySyllables(word, synonimList);
// }

// var wordToTest = "table"

// var synonimAndSyllables = getWords(wordToTest); // ARRAY OF WORDS THAT ARE SYNONIMS WITH SAME SYLLABLES
// // console.log(synonimAndSyllables);

// var spliceToSyllables = synonimAndSyllables.map(syllabify);
// console.log(spliceToSyllables);


// console.log(syllabify('table'))

// const word1 = 'cry'
// const synonyms1 = [word1, ...moby.search(word1)]
// const syllables1 = synonyms1.map(syllabify)
// console.log(syllables1)