let word = prompt('Soz girin bayim')
let counter  = 0
if(word.length==0){
    alert('Soz daxil edilmeyib ')
}
else{
    for (let index = 0; index < word.length; index++) {
        if(word[index]==' '){
            ++counter
        }
    }
    alert(counter+1)
    
}
