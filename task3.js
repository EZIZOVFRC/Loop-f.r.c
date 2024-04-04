let word = prompt('Söz girin');
let teyin = false;
let teyin1 = false;
let teyin2 = false;


for (let index = 0; index < word.length; index++) {
   if (word[index] == word[index].toUpperCase()) {
      teyin = true; 
   }
   if (word[index] == word[index].toLowerCase()) {
    teyin1 = true;
 }
 if (!isNaN(word[index])) {
    teyin2 = true; 
 }
}

if (teyin && teyin1 && teyin2) {
    alert('Odenir');
} else {
    alert('Odenmir');
}