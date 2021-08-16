import "./styles.css";
import { useState } from "react";

const foodDB = {
  Indian: [
    { title: "Hyderabadi Dum Biryani", rating: "4.5/5" },
    { title: "Paneer Butter Masala", rating: "3.5/5" },
    { title:"Tandoori Chicken", rating:"4.2/5" }
  ],

  Continental: [
    {
      title: "French Fries",
      rating: "5/5"
    },
    {
      title: "Burger",
      rating: "4.5/5"
    },
    {
      title:"Lasagne",
      rating:"3.5/5"
    }
  ],
  Italian: [
    {
      title: "pasta",
      rating: "3.5/5"
    },
    {
      title: "pizza",
      rating: "5/5"
    },
    {
      title:"Spagetti",
      rating:"4.5/5"
    }
  ]
};

var foodInDB = Object.keys(foodDB);
console.log(foodInDB);

export default function App() {
  const [foodType, setFoodType] = useState(false);
  function ClickEventHanler(food) {
    setFoodType(food);
    console.log(food);
  }

  return (
    <div className="App" style={{ width: "800px" }}>
      <h2>
        <span role="img">🍕 </span>
        Tasty Food Recon
      </h2>
      <div>Check out my favorite food. Select a cusine</div>
      {/* <button onClick={ClickEventHanler}>Indian</button>
      <button>Continental</button>
      <button>Italian</button> */}

      <div>
        {foodInDB.map((item) => {
          return (
            <button key={item} onClick={() => ClickEventHanler(item)}>
              {item}
            </button>
          );
        })}
      </div>
      <hr></hr>
      <div style={{ textAlign: "left" }}>
        <ul style={{ listStyle: "none" }}>
          {foodType &&
            foodDB[foodType].map((food) => (
              <li
                key={food.title}
                style={{
                  padding: "1rem",
                  margin: "1rem 0rem",
                  border: "1px solid #9CA3AF",
                  borderRadius: "0.5rem",
                  width: "70%"
                }}
              >
                <div style={{ fontSize: "larger", margin: "0.5rem" }}>
                  
                  {food.title}
                </div>
                <div style={{ fontSize: "smaller", margin: "0.5rem" }}>
                  
                  {food.rating}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
