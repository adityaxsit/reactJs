import styles from "./AvailableBooks.module.css";

const AvailableBooks = ({ books, searchTerm }) => {
  const foundBook =
    searchTerm.trim() === ""
      ? null
      : books.find((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()),
        );

  return (
    <div className={`available-books ${styles.availableBooks}`}>
      {searchTerm.trim() === "" ? (
        <p>Search for a book...</p>
      ) : foundBook ? (
        <p>{foundBook.title} is available ✅</p>
      ) : (
        <p>Book Not Found ❌</p>
      )}
    </div>
  );
};

export default AvailableBooks;
