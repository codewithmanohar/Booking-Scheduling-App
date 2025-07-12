import styles from "./TrainSearch.module.css";
function TrainSearch() {
  return (
    <>
      <div className={styles.container}>
        <form className={styles.searchForm}>
          <h1>Search Your train here - </h1>
          <input type="text" placeholder="Enter boarding station" />
          <input type="text" placeholder="Enter destination station" />
          <input type="date" />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default TrainSearch;
