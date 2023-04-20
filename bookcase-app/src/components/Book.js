import React from 'react';
const Book = (props) => {
  const { id,
    saleInfo: {retailPrice},
    volumeInfo: {
    title,
    authors,
    description,
    imageLinks: {thumbnail}
    }
    } = props.bookItem;
    
 return (
<div key={id}>

  <h2>{title}</h2>
  <p>{authors ? authors.join(', ') : "come back soon"}</p>
  <img src={thumbnail} alt={title}></img>
  {retailPrice && <p>{retailPrice.amount}</p>}
  <p>{description ? description.substring(0, 300)+ " " : "no description"}</p>
</div>
 );
}
export default Book;

addBook()
function addBook(title) {
  console.log(`The Book '${title}' was clicked`);
}

<div>
         
{/* <button onClick={() => props.addBook(id)}>Add +</button> */} {/*React part 8 (optional) - replaced addBook with addToBookcase*/}
<button onClick={() => props.addToBookcase(id)}>Add +</button>
</div>
