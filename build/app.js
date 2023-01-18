let btn = document.querySelector("button");
let quote = document.querySelector("blockquote p");
let person = document.querySelector("cite");
console.log(btn,quote,person)

const quotes = [
    {quote:'"Any person capable of angering you becomes your master"',
     person: 'Epictetus'},
    {quote:'“Java is to Javascript what car is to Carpet.”',
     person: 'Chris Heilmann'},
    {quote:'“No man is free who cannot control himself.”',
     person: 'Pythagoras'},
    {quote:'“If I had an hour to solve a problem I\'d spend 55 minutes thinking about the problem and five minutes thinking about solutions.”',
     person: 'Einstein'},
    {quote:'“Any application that can be written in JavaScript, will eventually be written in JavaScript.”',
     person: 'Jeff Atwood'},
    {quote:'"C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do it blows your whole leg off"',
     person: 'Bjarne Stroustrup'},
    {quote:'“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”',
     person: 'Martin Fowler'},
    {quote:'"What one man can do, another can do."',
     person: 'Charles Morse '},
    {quote:'“Code is like humor. When you have to explain it, it\'s bad.”',
     person: 'Cory House'},
    {quote:'“If I only had an hour to chop down a tree, I would spend the first 45 minutes sharpening my axe.”',
     person: 'Abraham Lincoln'},
];

btn.addEventListener("click",function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.textContent = quotes[random].quote;
    person.textContent = "-" + quotes[random].person;
});