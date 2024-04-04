let a = prompt('Bir say giriniz:');
let cavab = true;
 
// i =2 verdik cunki 1 versek 1 ve daha cox bolen kimi goturecekdir deye murekkeb olacaq hyer eded
for (let i = 2; i < a/2; i++) { 
    if (a % i == 0) {
        cavab=false
        break;
    }
}
if(!cavab){
    alert('Murekkebdir')
}
else{
    alert('Sadedir')
}
