import React, {useState} from 'react';
import Book from './components/Book';
import data from './models/books.json';

function App() {
  const [books] = useState(data);
  return books.map((book) => <Book key={book.id} bookItem={book}/>);
}

export default App;
