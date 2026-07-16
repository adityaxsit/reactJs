import styles from './Searchbar.module.css'
function Searchbar() {
  return (
    <>
    <div className={styles.searchbar}>
      <p></p>
       <input
      type="text"
      placeholder="🔍 Search books..."
      />
       
    </div>
   
    </>
    
  );
}

export default Searchbar;