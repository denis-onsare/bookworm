import React from 'react';
import { connect } from 'react-redux';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import PropTypes from 'prop-types';
import { allBooksSelector } from '../../reducers/books';
import AddBookCta from '../ctas/AddBookCta';

const Dashboard = ({ isConfirmed, books }) => (
    <div>
    
        {!isConfirmed && <ConfirmEmailMessage />}
    
        {books.length === 0 && <AddBookCta />}    
    </div>

);

Dashboard.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    isConfirmed: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
    return {
        isConfirmed: !!state.user.confirmed,
        books: allBooksSelector(state)
    }
}


export default connect(mapStateToProps)(Dashboard);