export const AuthorList = ({ authors }: any) => {
  return authors.map((author: any, index: any) => {
    //const donde=author.book.borrowedTo;
    return (
      <div key={index}>
        <ul>
          <li>Autor : {author.fullName} </li>
          <li>ID : {author.id}</li>
          <ul>
            Libros:
            {author.books.map((book: any) => {
              const fecha = () => {
                if (book.isBorrowed === true) {
                  const d = parseInt(book.borrowedAt);
                  const borrowedAt = new Date(d).toLocaleString();
                  return "Prestado el día " + borrowedAt;
                } else {
                  return "Libro disponible";
                }
              };
              return (
                <div key={book.id}>
                  <li>Título : {book.title}</li>
                  <li>ID : {book.id} </li>
                  <li>{fecha()}</li>
                </div>
              );
            })}
          </ul>
        </ul>
      </div>
    );
  });
};
