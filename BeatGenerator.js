function GetTimings (syllables) 
{
    return beats.filter(isGreaterThanFive(syllables));
}

function GetNoteDuration (note)
{
    switch(note)
    {
        case 'f': return 1;             // f = full note
        case 'h': return 0.5;           // h = half note
        case '.': return 0.5;           // h = half break
        case 'q': return 0.25;          // q = quarter note
        case ',': return 0.25;          // q = quarter break
        case 'e': return 0.125;         // e = eigth note
        case 's': return 0.0625;        // e = sixteenth note
        case 'z': return 0.1666666;     // e = half triole note
        case 't': return 0.0833333;     // e = quarter triole note
        default:  return 0;
    }
}

var beats = [
    'f',                // 1 syllable

    'hh',               // 2 syllables

    'hqq',              // 3 syllables
    'qqh',              // 3 syllables
    'qhq',              // 3 syllables

    'qqqq',             // 4 syllables

    'qeeqq',            // 5 syllables

    'qeeeeq',           // 6 syllables

    'zzzeeee',          // 7 syllables,

    'eeeeqess',         // 8 syllables

    'tttqtttee',        // 9 syllables

    'ssssqsseee',       // 10 syllables

    'tttttteettt',      // 11 syllables

    'tttttttttttt',     // 12 syllables
];

function IsFittingCount(x, syllables) {
    return x.length == syllables;
}