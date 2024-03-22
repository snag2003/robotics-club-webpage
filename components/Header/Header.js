import styles from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <img src="./img/logo.jpeg" className={styles.img} />
      <h3>Header</h3>
    </div>
  );
}
