var n = window.prompt('Enter the no of elemenent');
var a = [];

for(var i=0 ; i<n ;i++){
    a[i] = window.prompt('Enter the array element');
}
console.log(a);
var key = window.prompt('Enter the elem u want to search');
for(var i=1 ; i<n ; i++){
    if(a[i] == key){
       alert("your searched key is" + a[i]+" at" + i );
    }
}