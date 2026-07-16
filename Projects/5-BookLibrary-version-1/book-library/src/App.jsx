import "./App.css";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import BookList from "./components/BookList";

function App() {
  const books = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    rating: 5,
    genre: "Programming",
    image: "/images/clean-code.jpg",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    rating: 5,
    genre: "Self Help",
    image: "/images/atomic-habits.jpg",
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    rating: 4,
    genre: "Finance",
    image: "/images/rich-dad.jpg",
  },
];



  return (
    <>
    <Header></Header>
    <Searchbar></Searchbar>
    <BookList books={books}></BookList>
  
    </>
    
  );
}

export default App;
