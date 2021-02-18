const books = require('google-books-search');
const chave = 'AIzaSyBywbTT70u2eiENBzHU57HqyzN4LoWUK2w';

const search_book = (req, res) =>{

    res.render('index', {title: 'Book lover'});
}

const find_book = (req, res) => {
    const palavra = req.body.campo;
   
    books.search(palavra, function(error, results){
        if(!error){
            // results.forEach( r => console.log(r.thumbnail));
            res.render('book', {title: 'Book lover', results});
        }else{
            console.log('error');
            res.redirect('not_found');
        }
    });
    
}
const book_not_found = (req, res) =>{
    res.render('404_book', {title: 'Sem resultados'});
}

const book_details = (req, res) =>{
    const id = req.params.id;

    books.lookup(id, function(error, results) {
        if ( ! error ) {
            res.render('details', {title: 'Books lover', book: results});
        } else {
            console.log(error);
        }
    });
} 
 
module.exports = {
    search_book,
    find_book,
    book_not_found,
    book_details
}