console.log(GetTimings(5));

/// Returns a beat pattern (spread over a 4-beats-bar) for a number of syllables.
function GetTimings (syllables) 
{
    var beats = GetAllBeats();
    var possibleBeats = beats.filter(word => word.length == syllables);
    var selectedBeat = possibleBeats[Math.floor(Math.random(possibleBeats.length))]; // return one of them

    var durations = GetDurationArray(selectedBeat);

    return durations;
}

function GetDurationArray (beat)
{
    var durationArray = [beat.length];
    for (i = 0; i < beat.length; i++)
    {
        durationArray[i] = GetNoteDuration(beat[i]);
    }

    return durationArray;
}

/// Returns the beats each note type lasts.
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

/// All possible beats, length is syllables.
function GetAllBeats()
{
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

        'tttttttttttt'      // 12 syllables
    ];

    return beats;
}

/// Compare two integers and return true if they match.
function IsFittingCount(x, syllables) {
    return x.length == syllables;
}