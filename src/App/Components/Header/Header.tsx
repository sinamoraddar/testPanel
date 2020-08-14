import React, { useCallback, useState } from "react";
//styles
import styles from "./Header.module.scss";
import { Link, useParams } from "react-router-dom";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const onInputChange = useCallback(({ target: { value } }) => {
    setSearchValue(value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      alert(searchValue);
    },
    [searchValue]
  );
  return (
    <header className={styles.header}>
      <div className={styles.infoContainer}>
        <div className={styles.infoContainer__rightSide}>
          <Link to="/"></Link>
          <form onSubmit={onSubmit}>
            <button type="submit"></button>
            <input
              placeholder="جستجو در دیجیکالا..."
              type="text"
              value={searchValue}
              onChange={onInputChange}
            />
          </form>
        </div>
        <div className={styles.infoContainer__leftSide}>
          <button className={styles.user}></button>
          <button className={styles.bag}></button>
        </div>
      </div>
      <div className={styles.navigationContainer}>
        <nav>
          <button>
            <div className={styles.menuIcon}></div>دسته بندی کالاها
          </button>
          <button>سوپرمارکت</button>
          <button>تخفیف ها و پیشنهادها</button>
          <button>دیجیکالای من</button>
          <button>دیجی کلاب</button>
          <button>سوالی دارید؟</button>
          <button>فروشنده شوید</button>
        </nav>
        <p>
          ارسال به اصفهان ، کاوه <span className={styles.mapPin}></span>
        </p>
      </div>
    </header>
  );
};

export default Header;
