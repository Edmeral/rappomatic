var syllable = require("syllable");
var moby = require("moby");

function getWords(word) {
	
var synonimList = moby.search(word);

return sameSyllableList = filterBySyllables(word,synonimList);


}

function filterBySyllables(word, wordList) {
	
	var originSyllables = syllable(word);
	var newList = [];

	wordList.forEach(element => {
		if(syllable(element) == originSyllables){
			newList.push(element);
		}
	});
    return newList;
}

function syllabify(words) {
	return words.match(syllableRegex);
}


var wordToTest = "table"
const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;

var synonimAndSyllables = getWords(wordToTest); // ARRAY OF WORDS THAT ARE SYNONIMS WITH SAME SYLLABLES
console.log(synonimAndSyllables);

var spliceToSyllables = synonimAndSyllables.map(syllabify);
console.log(spliceToSyllables);
