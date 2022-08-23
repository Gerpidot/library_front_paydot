import { useContext, useEffect, useState } from "react";
import BookCard from "../components/bookCard";
import { SessionContext } from "../context/sessionProvider";

import { tookOrPutAbook } from "../utils/mutations";
import {
  AuthorListContainer,
  AuthorListStyled,
} from "../styles/styled.authorlist";

import {
  filterByTitle,
  getAllAuthor,
  getAllBooks,
  getAuthorById,
  getBookByID,
} from "../utils/quries";
import { BookCardDiv, DivCardContainer } from "../styles/styled.bookCard.js";
import { AuthorList } from "../components/authorList";
import withAuth from "../utils/hoc";
import { Book } from "../models/books";
import {
  DivMainContainer,
  DivMainMenu,
  SearchBarInput,
  MyForm,
  BtnSearch,
  Button,
} from "../styles/styled.main.module";

const MainContainer = () => {
  const mockData = [
    {
      id: 102,
      title: "El Señor de los Anillos",
      author: { id: 100, fullName: "J. R. R. Tolkien" },
      isBorrowed: true,
    },
    {
      id: 99,
      title: "El Temor de un Hombre Sabio",
      author: { id: 7, fullName: "Patrick Rothfuss" },
      isBorrowed: true,
    },
  ];
  const mockAuthor = [
    {
      id: 8,
      fullName: "Jorge Luis Borges",
      books: [
        {
          title: "El otro, el mismo",
          id: 12,
          isBorrowed: false,
          borrowedAt: "1648651244513",
        },
      ],
    },
  ];
  const { sessionData, setSessionData }: any = useContext(SessionContext);

  const [selected, setSelected] = useState(0);
  const [books, setBooks] = useState(mockData);
  const [authors, setAuthors] = useState(mockAuthor);
  const [isHidden, setIsHidden] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  useEffect(() => {
    //actualiza el valor de serachKEy
    console.log(searchKey);
  }, [searchKey]);
  /* const queries = {
    "0": getAllBooks,
    "1": getBookByID,
    "2": getAllAuthor,
    "3": getAuthorById,
  };
  let idInput: number;
  let idSuspenso;
  const argumentTransform = () => {
    const querySelected = queries[selected + ""];
*/
  /*if (hidden() == true) {
      console.log("idinput falsy");
      return querySelected(sessionData);
    } else if (hidden() == false && idInput) {
      console.log("idinput true");

      return querySelected(idInput, sessionData);
    } else {
      return;
    }
  };*/

  /* const selectedQuery = async () => {
    const selectedQuery = await argumentTransform();
    const serverResponse = await selectedQuery;
    if (!serverResponse) {
      console.log("input id de selected query undefined");
      return;
    }
    if (serverResponse.errors) {
      console.log(serverResponse.errors);
      return;
    } else if (selected == 0 || selected == 1) {
      setIsHidden(false);
      setBooks(await serverResponse);
      return;
    } else {
      setIsHidden(true);
      setAuthors(await serverResponse);
      return;
    }
  };*/
  const available = (books: any) => {
    const valor = books.isBorrowed ? "Prestado" : "Disponible";

    return valor;
  };
  const putBookTookBook = async (books: Book) => {
    const value = books.isBorrowed;
    if (!value) {
      await tookOrPutAbook(sessionData, books, !value);
     available(books.isBorrowed)
     const serverResponse = await getAllBooks(sessionData);
     setBooks(serverResponse);
      //console.log("pedir libro", sessionData, books, value);
    } else {
      await tookOrPutAbook(sessionData, books, !value);
      const serverResponse = await getAllBooks(sessionData);
      setBooks(serverResponse);
     // console.log("devolver libro", sessionData, books, value);
    }
    //selectedQuery(); Corregir acá
  };
  const hidden = () => {
    if (selected == 0 || selected == 2) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <DivMainContainer>
      <DivMainMenu>
        <form>
          {/* <select
            onChange={(event: any) => {
              setSelected(event.target.value);
            }}
          >
            <option value={0}>Buscar todos los libros</option>
            <option value={1}>Buscar libro por su Id</option>
            <option value={2}>Buscar todos los autores</option>
            <option value={3}>Buscar autor por Id</option>
          </select>
          <div>
            <input
              id="inputId"
              type="number"
              min={1}
              hidden={hidden()}
              onChange={(event) => {
                idSuspenso = event.target.value;
                idInput = parseInt(idSuspenso);
                console.log(idInput);
              }}
              placeholder="iD del Libro"
              required
            />
            </div>*/}
          <div>
            <MyForm
              action="
          "
            >
              <SearchBarInput
                type="text"
                id="searchByTitle"
                placeholder="¿Que estás buscando?"
                onChange={async (event: any) => {
                  setSearchKey(event.target.value);
                  console.log(searchKey);
                  return;
                }}
              />
              <BtnSearch
                type="button"
                onClick={async () => {
                  const response = await filterByTitle(sessionData, searchKey);
                  if (response.data === null) {
                    return;
                  }
                  setIsHidden(false);
                  setBooks(await response);

                  return;
                }}
              >
                <i className="bi bi-search"></i>
              </BtnSearch>
            </MyForm>
          </div>
          <div>
            <Button
              type="button"
              onClick={async () => {
                setIsHidden(false);
                const serverResponse = await getAllBooks(sessionData);
                setBooks(serverResponse);
              }}
            >
              Todos Los Libros
            </Button>
            <Button
              type="button"
              onClick={async () => {
                setIsHidden(true);
                const serverResponse = await getAllAuthor(sessionData);
                setAuthors(serverResponse);
              }}
            >
              Todos Los Autores
            </Button>
          </div>
        </form>
      </DivMainMenu>

      <DivCardContainer>
        {books.map((book, index) => {
          return (
            <BookCardDiv key={index} hidden={isHidden}>
              <BookCard
                book={book}
                available={available}
                putBookTookBook={putBookTookBook}
              />
            </BookCardDiv>
          );
        })}
      </DivCardContainer>
      <AuthorListContainer>
        <AuthorListStyled hidden={!isHidden}>
          <AuthorList authors={authors} />
        </AuthorListStyled>
      </AuthorListContainer>
    </DivMainContainer>
  );
};

export default withAuth(MainContainer);

/*export async function getStaticProps() {
 
  const moked={"email":"","isLoggedIn":false,"password":"","jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTY0ODA3NDI0OH0.jxiFUrpNexUJQ8-70xQiLXJ2vfYUQCAZEt5JX5N54DE"}
  const getallBooks = await getAllBooks(moked);
  console.log(getallBooks);
  return {
    props: {  book: getallBooks },
  };
}*/
