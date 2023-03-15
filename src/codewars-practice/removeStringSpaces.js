function noSpace(x){
    return x.replace(/\s+/g, '');
}

//This function takes a string str as input and uses the replace() method to replace all occurrences of one or more whitespace characters (i.e., spaces, tabs, or newlines) with an empty string, effectively removing them.
//
// The /\s+/g regular expression pattern matches one or more whitespace characters, and the g flag indicates that the pattern should be applied globally to the entire string.
//
// The function then returns the resulting string with all the spaces removed.