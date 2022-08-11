export const AuthorList = ({authors}:any) => {
  

  return authors.map((author :any, index :any) => {
    return (
      <div key={index}>
        <ul>
          <li>Atutor : {author.fullName} </li>
          <li>ID : {author.id}</li>
          <ul>
            Libros:
            {author.books.map((book :any) => {
              return (
                <div key={book.id}>
                  <li>Título : {book.title}</li>
                  <li>ID : {book.id} </li>
                  <li>Prestado hace x dias</li>
                </div>
              );
            })}
          </ul>
        </ul>
      </div>
    );
  });
};
