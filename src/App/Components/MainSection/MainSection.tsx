import React from "react";
//images
import manImage from "Assets/Images/man.png";
//styles
import styles from "./MainSection.module.scss";
const MainSection = () => {
  return (
    <div className={styles.mainSection}>
      <div className={styles.upperPart}>
        <div className={styles.rightSide}>
          <figure>
            <img src={manImage} alt="احسان پرستگاری" />
            <figcaption>
              <ul>
                <li>
                  <h4>نام و نام خانوادگی:</h4>
                  <p>احسان پرستگاری</p>
                </li>
                <li>
                  <h4>شماره تلفن:</h4>
                  <p>545454555</p>
                </li>
                <li>
                  <h4>کد ملی:</h4>
                  <p>12707973010</p>
                </li>
                <li>
                  <h4>چست الکترونیک:</h4>
                  <p>ehsan.pari991@gmail.com</p>
                </li>
                <li>
                  <h4>شماره کارت:</h4>
                  <p>6219-8610-3860-1786</p>
                </li>
                <li>
                  <h4>خبرنامه</h4>
                  <button className={styles.toggleButton}></button>
                </li>
              </ul>
            </figcaption>
          </figure>
          <button className={styles.editButton}></button>
        </div>
        <div className={styles.leftSide}></div>
      </div>
    </div>
  );
};

export default MainSection;
