import "bootstrap/dist/css/bootstrap.min.css";
import Parent from "./components/props/Parent";

function App() {
  let foodItems = [
    "Dal",
    "Green Vegetable",
    "Roti",
    "Salad",
    "Milk",
    "Paneer",
    "Chana",
    "Butter",
    "Ghee",
    "Fruits",
  ];
  return (
    <>
      <h1>Healty Food</h1>
      <ul className="list-group">
        {foodItems.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>

      {/* 
      <React.Fragment>
      <h1>Healty Food</h1>
      <ul class="list-group">
        <li class="list-group-item">Dal</li>
        <li class="list-group-item">Green Vegetable</li>
        <li class="list-group-item">Roti</li>
        <li class="list-group-item">Salad</li>
        <li class="list-group-item">Milk</li>
      </ul> 
        </React.Fragment>*/}
      <Parent />
    </>
  );
}

export default App;
