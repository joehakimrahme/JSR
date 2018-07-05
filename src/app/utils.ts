export function choice(stuff) {
    // Returns a random element in an array
    var idx = Math.floor(Math.random() * stuff.length);
    return stuff[idx];
}

export function shuffle(a) {
    // Use the modern version of the Fisher–Yates shuffle algorithm:
    // Shamelessly copied from https://stackoverflow.com/a/6274381/403401
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
