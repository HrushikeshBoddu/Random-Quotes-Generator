const Quotes = [

    {
        QuotesName : "I try to create sympathy for my characters, then turn the monsters loose." ,
        Authors : "—Stephen King"
    }   
    ,
    {
        QuotesName : "Prose is architecture, not interior decoration." ,
        Authors : "—Ernest Hemingway"
    }
    , 
    {
        QuotesName :"It's none of their business that you have to learn to write. Let them think you were born that way." ,
        Authors : "—Ernest Hemingway"
    }
    ,
    {
        QuotesName : "Most writers regard the truth as their most valuable possession, and therefore are most economical in its use." ,
        Authors : "—Mark Twain"
    }
    ,
    {
        QuotesName : "And as imagination bodies forth The forms of things unknown, the poet's pen Turns them to shapes and gives to airy nothing  A local habitation and a name." ,
        Authors : "—William Shakespeare (from A Midsummer Night’s Dream)"
    }
    ,
    {
        QuotesName : "If you can tell stories, create characters, devise incidents, and have sincerity and passion, it doesn't matter a damn how you write." ,
        Authors : "—Somerset Maugham"
    }
    ,
    {
        QuotesName : "To produce a mighty book, you must choose a mighty theme." ,
        Authors : "—Herman Melville"
    }
    ,
    {
        QuotesName : "It is perfectly okay to write garbage—as long as you edit brilliantly.",
        Authors : "—C. J. Cherryh"
    }
    ,
    {
        QuotesName : "It took me fifteen years to discover I had no talent for writing, but I couldn't give it up because by that time I was too famous." ,
        Authors :"—Robert Benchley"
    }
    ,
    {
        QuotesName : "Any man who keeps working is not a failure. He may not be a great writer, but if he applies the old-fashioned virtues of hard, constant labor, he'll eventually make some kind of career for himself as writer." ,
        Authors : "—Ray Bradbury"
    }
    ,
    {
        QuotesName : "If you have other things in your life—family, friends, good productive day work—these can interact with your writing and the sum will be all the richer.",
        Authors : "—David Brin"
    }

]

 // accessing the Elements
 const  AuthorsQuotes = document.getElementsByClassName('Quote')
 const Authors = document.querySelector('.Author')

const CallFunction = function(){
    let  FindRandomIndex = Math.floor(Math.random()*Quotes.length)
    AuthorsQuotes[0].innerHTML  = Quotes[FindRandomIndex].QuotesName
    Authors.innerHTML  = Quotes[FindRandomIndex].Authors
    
}

 // accessing the Elements for color change
 const colorChangeing = document.getElementsByClassName('coloring')
//  console.log(colorChangeing);


function DifferentColorMaker(){
    const ColourGeneartor = '123456789ABCDEF'
    let ColorGenerator = '#'
    for(i= 0 ; i<5 ; i++){
        var a = Math.floor(Math.random()*ColourGeneartor.length)
        var index = ColourGeneartor[a]
        ColorGenerator+=index;
    }
     ColorGenerator+=index;
     console.log(ColorGenerator);
    console.log(document.body.style.backgroundColor = ColorGenerator);

}







