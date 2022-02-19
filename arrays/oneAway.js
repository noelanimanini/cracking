const oneAway = (st1, st2) => {};

oneAway("pale", "ple");

// given two strings, write a function to check if they are one edit or zero edits away
/*
Q: given two strings, determine if the longer string can be editd by 1 or 0 times away from the shorter string. 

EX: 

"pale" and "ple"

"pale" is 1 edit away from matching "ple". => true

-both words can be of equal length
if the words are of equal length, loop through both words and store each character into a hash (frequency counter). If there is more than one word with a value of 1, then return false

^? for words both of unequal length 
*/
