import styles from "./SearchForm.module.css";

export default function SearchForm({ inputRef, onSearch }) {
  function handleChange() {
    console.log(inputRef.current.value);
  }

  return (
    <form className={styles.form} onSubmit={onSearch}>
      <input
        ref={inputRef}
        type="text"
        onChange={handleChange}
        placeholder="검색어를 입력해주세요"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        검색
      </button>
    </form>
  );
}
