var n = window.prompt('Enter no elements');
var a = [];
var b = [];
var temp ;

for(var i =0 ; i<n; i++){
    var arr = window.prompt("Enter your scores: ");
    a[i] = arr;
}

for(var j = 0 ; j<n ; j++){
    for (var i = j + 1 ; i<n ; i++){
        if(a[j]>a[i]){
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
            
        }
    }
    
}
console.log(a);
console.log(a.slice(-1));



