//function to swap the case of each character
function swapCase(string){
    /* Split the string into individual characters
     Then use the map function to iterate over each character
  Convert the character to uppercase if it's currently lowercase, and vice versa*/
  return string.split("").map(item => (item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase())).join("");
}
console.log(swapCase('Samuel Ogera is a Software Developer'));
