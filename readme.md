# JavaScript Iterators

This repository consists of additional questions on several JavaScript iterators: `forEach`, `map`, `filter`, and `reduce`. If you need a refresher on these methods, check out our [free course materials](https://www.rithmschool.com/courses/intermediate-javascript-part-2).

The problems all assume you have access to the song data in the `data.js` file. To use that data, throw it into the Chrome console, or use a tool like [JSBin](jsbin.com) or [Repl.it](repl.it) to copy and paste the data before you start trying to solve these problems.

### `forEach`

1. Write a function called `listNames` which takes in an array of songs and console.logs the name of each one.
2. Write a function called `listSongDetails` which takes in an array of songs and console.logs details about each one. The details should be in the following example format: "Smooth, by Santana featuring Rob Thomas (4:00)".
3. Write a function called `summerJamCount` which takes in an array of songs and returns the number of songs which hit #1 on the charts in June, July, or August.

### `map`

1. Write a function called `getDurations` which takes in an array of songs and returns an array of each song's duration.
2. Write a function called `getDurationInSeconds` which takes in an array of songs and returns an array of each song's duration in seconds.

### `filter`

1. Write a function called `getBigHits` which takes an array of songs and returns an array of songs which were number one for 10 or more weeks.
2. Write a function called `getShortSongs` which takes an array of songs and returns an array of songs which are 3 minutes or shorter.
3. Write a function called `getSongsByArtist` which takes in an array of artists and the name of an artist and returns an array of songs by that artist.
4. Write a function called `getOneHitWonders` which takes in an array of songs and returns an array of songs for artists who only appear once in the original array.

### `reduce`

1. Refactor `summerJamCount` to use reduce!
2. Write a function called `getTotalDurationInSeconds` which takes in an array of songs and returns the total amount of time (in seconds) it would take to listen to all of the songs. (Hint: can you use anything you've written already to help solve this problem?)
3. Write a function called `getSongCountByArtist` which takes in an array of songs and returns an object. The keys in the object should be artist names, and the values should be the number of songs by that artist in the orignal array.
4. Write a function called `averageWeeksAtNumberOne` which takes in an array of songs and returns the average number of weeks that songs on the list were #1.