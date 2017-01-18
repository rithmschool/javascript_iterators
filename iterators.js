// Write a function called listNames which takes in an array of songs and console.logs the name of each one.


function listNames(songArr) {
    songArr.forEach(function(song) {
        console.log(song.name);
    });
}

// Write a function called listSongDetails which takes in an array of songs and console.logs details about each one. The details should be in the following example format: "Smooth, by Santana featuring Rob Thomas (4:00)".


function listSongDetails(songArr) {
    songArr.forEach(function(song) {
        console.log(song.name + ", by " + song.artist + " (" + song.duration + ")");
    });
}

// Write a function called summerJamCount which takes in an array of songs and returns the number of songs which hit #1 on the charts in June, July, or August.

function summerJamCount(songArr) {
    var count = 0;
    songArr.forEach(function(song) {
        if (song.month >= 6 && song.month <= 8) {
            count++;
        }
    });
    return count;
}

// Write a function called getDurations which takes in an array of songs and returns an array of each song's duration.

function getDurations(songArr) {
    return songArr.map(function(song) {
        return song.duration;
    });
}

// Write a function called getDurationInSeconds which takes in an array of songs and returns an array of each song's duration in seconds.

function getDurationsInSeconds(songArr) {
    return songArr.map(function(song) {
        var durationNums = song.duration.split(":");
        var minutes = +durationNums[0];
        var seconds = +durationNums[1];
        return 60 * minutes + seconds;
    });
}

// Write a function called getMainArtists which takes in an array of songs and returns an array of the primary artists on the recordings. If there's only one artist, that artist should be returned; if there are featured artists, they should be ignored (so only the artist to the left of "featuring" is kept.)

function getMainArtists(songArr) {
    return songArr.map(function(song) {
        return song.artist.split("featuring")[0].trim();
    });
}

// Write a function called getBigHits which takes an array of songs and returns an array of songs which were number one for 10 or more weeks.

function getBigHits(songArr) {
    return songArr.filter(function(song) {
        return song.weeksAtNumberOne >= 10;
    });
}

// Write a function called getShortSongs which takes an array of songs and returns an array of songs which shorter than 3 minutes.

function getShortSongs(songArr) {
    return songArr.filter(function(song) {
        return song.duration[0] < 3;
    });
}

// Write a function called getSongsByArtist which takes in an array of artists and the name of an artist and returns an array of songs by that artist.

function getSongsByArtist(songArr, artist) {
    return songArr.filter(function(song) {
        return song.artist.match(artist);
    });
}

// Write a function called getOneHitWonders which takes in an array of songs and returns an array of songs for artists who only appear once in the original array (i.e. the song's artist property should be unique).

function getOneHitWonders(songArr) {
    var artists = songArr.map(function(song) { return song.artist; });
    return songArr.filter(function(song) {
        return artists.indexOf(song.artist) === artists.lastIndexOf(song.artist);
    });
}

// Refactor summerJamCount to use reduce!

function summerJamCount(songArr) {
    return songArr.reduce(function(count,song) {
        if (song.month >= 6 && song.month <= 8) {
            count++;
        }
        return count;
    }, 0);
}

// Write a function called getTotalDurationInSeconds which takes in an array of songs and returns the total amount of time (in seconds) it would take to listen to all of the songs. (Hint: can you use anything you've written already to help solve this problem?)

function getTotalDurationInSeconds(songArr) {
    return getDurationsInSeconds(songArr).reduce(function(start, next) {
        return start + next;
    }, 0)
}

// Write a function called getSongCountByArtist which takes in an array of songs and returns an object. The keys in the object should be artist names, and the values should be the number of songs by that artist in the orignal array.

function getSongCountByArtist(songArr) {
    return songArr.reduce(function(obj, nextSong) {
        var artist = nextSong.artist
        if (obj[artist]) {
            obj[artist]++;
        } else {
            obj[artist] = 1;
        }
        return obj;
    }, {})
}

// Write a function called averageWeeksAtNumberOne which takes in an array of songs and returns the average number of weeks that songs on the list were #1.

function averageWeeksAtNumberOne(songArr) {
    return songArr.reduce(function(start, nextSong) {
        return start + nextSong.weeksAtNumberOne;
    }, 0) / songArr.length;
}

































