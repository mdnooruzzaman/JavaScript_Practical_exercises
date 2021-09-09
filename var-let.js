//var and let
function sayhello (){
    for(var i=0 ; i<5 ; i++){
        console.log(i);
    }
   console.log(i); 
}
sayhello()

//templete literal
var msg = `This text
can span multiple times`;
 console.log(msg);               

 let post = {
    title: 'JavaScript Template Literals',
    excerpt: 'Introduction to JavaScript template literals in ES6',
    body: 'Content of the post will be here...',
    tags: ['es6', 'template literals', 'javascript']
};
console.log(post);

let {title, excerpt, body, tags} = post;

var postHtml = `<article>
<header>
    <h1>${title}</h1>
</header>
<section>
    <div>${excerpt}</div>
    <div>${body}</div>
</section>
<footer>
    <ul>
      ${tags.map(tag => `<li>${tag}</li>`).join('\n      ')}
    </ul>
</footer>`;

var age = 10 ;
var height = 5.6;

var name1 = `Ram is ${age} years older and his height ${height}`
console.log(name1);


