'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}


function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
    const re=
    {
    test: function(s)
    {
    if (s.charAt(0)=='a'&&s.charAt(s.length-1)=='a'||s.charAt(0)=='e'&&s.charAt(s.length-1)=='e'||s.charAt(0)=='i'&&s.charAt(s.length-1)=='i'||s.charAt(0)=='o'&&s.charAt(s.length-1)=='o'||s.charAt(0)=='u'&&s.charAt(s.length-1)=='u')
    {
        return true;
    }
    else
    {
        return false;
    }
    }
    
    }
    /*
     * Do not remove the return statement
     */
    return re;
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(re.test(s));
}
