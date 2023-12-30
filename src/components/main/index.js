import styles from "./styles.module.css";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Shortly</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          logout
        </button>
      </nav>
      <iframe
        src="https://url-shortner-6uhu.onrender.com/url"
        title="display main content"
        style={{ width: "100vw", height: "100vh", border: "none" }}
      ></iframe>
    </div>
  );
};

export default Main;
