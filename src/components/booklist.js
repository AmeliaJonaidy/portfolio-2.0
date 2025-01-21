import React from 'react';
import './ProjectDescription.css';
import { Link } from 'react-router-dom';

const BookList = () => {
  return (
    <div className="background-container"> 
      <div className="project-description">
        <h1 className="project-title">Book List Mobile App</h1>
        <p className="project-summary">
        This mobile app contains a list that shows three categories: Books I have read, Books I want to read, and Books I am currently reading. The books in the list accurately reflect my own collection. I made it this way to make it more personal, 
        and at the time, it seemed useful to create an app with a book list in order to track the books.
        </p>
        
        <h2 className="project-features-title">Technologies Used</h2>
        <p>React Native, CSS</p>

        <h2 className="project-features-title">Features</h2>
        <ul className="project-features-list">
          <li>The book list is organized into three sections: "Books I Have Read," "Books I Want to Read," and "Books I Am Currently Reading." Each section contains a list of books with details such as an image, author, description, and genre.</li>
          <li>Users can add new books to any of the three sections ("Books I Have Read," "Books I Want to Read," and "Books I Am Currently Reading") by simply entering the book's details—such as the title, author, image, description, and genre—into the app.</li>
          <li>The app also allows users to update the information for any existing books. This means if a book's details change, like a new edition or updated description, users can easily modify the book's information directly within the list.</li>
          <li>In addition, users can remove books from the list at any time. Whether a book is finished, no longer relevant, or mistakenly added, the removal feature helps keep the list accurate and organized.</li>

        </ul>

        <h2 className="project-features-title">Future Improvements</h2>
        <ul className="project-features-list">
          <li>Provide statistics such as total books read, average rating, reading habits, genres preferred, and books read per month/year.</li>
          <li>Let users rate each book they've read. This could be a star rating system, allowing users to track their personal ratings for future reference.</li>
        </ul>

        <div className="media-section">
        <img 
            src={require('../assets/img/book.png')}
            alt="immersive1" 
            style={{ width: '350px', height: 'auto' }} 
            />
                <img 
            src={require('../assets/img/book2.png')}
            alt="immersive1" 
            style={{ width: '350px', height: 'auto' }} 
            />

        </div>

        <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/P59Y30TEhrc"
        title="Book List Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="project-video"
        ></iframe>


        <div className="back-to-portfolio">
          <Link to="/myportfolio" className="back-link">Back to Other Portfolio Projects</Link>
        </div>

      </div>
    </div>
  );
};

export default BookList;
