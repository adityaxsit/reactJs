import styles from './Searchbar.module.css'
function Searchbar({setSearchTerm}) {
  return (
    <>
    <div className={styles.searchbar}>
      <p></p>
       <input
      type="text"
      placeholder="🔍 Search books..."
      onChange={(e) => setSearchTerm(e.target.value)}
      />
       
    </div>
   
    </>
    
  );
}

export default Searchbar;