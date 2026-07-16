import styles from "./BookCard.module.css";

function BookCard({ book }) {
  return (
    <div className={styles.card}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <img
          src={book.image}
          alt={book.title}
          className={styles.bookImage}
        />

        <div className={styles.bookInfo}>
          <h2>{book.title}</h2>

          <p className={styles.author}>{book.author}</p>

          <div className={styles.rating}>
            {"⭐".repeat(book.rating)}
          </div>

          <span className={styles.genre}>
            {book.genre}
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div>
        <button className={styles.button}>
          📑 Add to Shelf
        </button>
      </div>
    </div>
  );
}

export default BookCard;