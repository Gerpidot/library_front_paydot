

const BookCard = ({ book, available, putBookTookBook }: any) => {
  return (
    <div>
      <h1>{book.title}</h1>
      <h4>id: {book.id}</h4>
      <h3>{book.author.fullName}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <button
        onClick={async () => {
          await putBookTookBook(book);
        }}
      >
        {available(book)}
      </button>
    </div>
  );
};

export default BookCard;
