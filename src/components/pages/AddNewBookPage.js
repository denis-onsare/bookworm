import React from 'react';
import SearchBookForm from '../forms/SearchBookForm';
import { Segment }from 'semantic-ui-react';
import BookForm from '../forms/BookForm';
import axios from 'axios';

class AddNewBookPage extends React.Component {
    state = {
        book: null
    }
    
    onBookSelect = (book) => {
        this.setState({book});
        axios.get(`/api/books/fetch_pages?goodreadsId=${book.goodreadsId}`)
            .then(res => res.data.pages)
            .then(pages => this.setState({book: {...book, pages}}));
    };

    addBook = () => console.log('submitting...');

    render () {
        return (
        <Segment>
            <h1>Add New Book To Your Collection</h1>
            <SearchBookForm onBookSelect={this.onBookSelect}/>

           {this.state.book && <BookForm submit={this.addBook} book={this.state.book}/>}
        </Segment>
        );
    }
}

export default AddNewBookPage;