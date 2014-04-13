// libmath.js
// by codatronic
// this code is subject to the included license
// you can see a copy of it at http://codatronic.github.io/libmath.js/LICENSE.txt
function isTrueAdd(x, y, z) {
    var a = x + y;
    if (a == z) {
        return true;
    }else{
        return false;
    }
}


// thanks to MDN for this code
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// (as of 04/13/2014)
function randWhole(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
