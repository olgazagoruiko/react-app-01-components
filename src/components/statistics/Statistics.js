import React from "react";
import styles from "./Statistics.module.css";


function Statistics(props) {
  // const colorPickerOptions = [
  //   { label: "red", color: "#f44336" },
  //   { label: "green", color: "#40ff00" },
  //   { label: "blue", color: "#0080ff" },
  //   { label: "yellow", color: "#ffff00" },
  // ];
  function getRandomRgb() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = (num >> 8) & 255;
    let b = num & 255;
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
  // let colorPicker = getRandomRgb();
  return (
    <>
      <section className={styles.statistics}>
        {/* <h2 className="title">{props.title}</h2> */}
        {/* рендер по умові */}
        {props.title && <h2 className={styles.title}>{props.title}</h2>}

        <ul className={styles.stat_list}>
          {props.stats.map((item) => (
            <li
              className={styles.item}
              key={item.id}
              style={{ backgroundColor: getRandomRgb()}}
            >
              <span className={styles.label}>{item.label}</span>
              <br />
              <span className={styles.percentage}>{item.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
// Значення пропсів по замовчуванню
// Statistics.defaultProps = {title: "Upload stats" };

export default Statistics;