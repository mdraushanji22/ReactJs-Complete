import Styles from "./MyButton.module.css";

function MyButton() {
  let btn = "and the first ";
  let myBtn = function () {
    return "My first btn";
  };
  return (
    <div>
      <button className={Styles.button}>MyButton</button>
      <p className={Styles.para}>This is my button {btn}</p>
      <ul>
        <li>{myBtn()}</li>
      </ul>
    </div>
  );
}

export default MyButton;
