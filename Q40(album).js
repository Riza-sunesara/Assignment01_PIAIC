"use strict";
function make_album(artist, album_title, tracks) {
    let object = {
        artist_name: artist,
        album: album_title,
        track_number: tracks
    };
    return object;
}
console.log(make_album("Alan", "South", 5));
console.log(make_album("Lana", "so amazing"));
console.log(make_album("Harry", "Show me"));
