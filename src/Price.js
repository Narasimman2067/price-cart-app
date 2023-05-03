import React, { useState } from "react";
import "./App.css";

function Price(props) {
  const Card = [
    {
      id: 1,
      price: PriceCard1(),
    },
    {
      id: 2,
      price: PriceCard2(),
    },
    {
      id: 3,
      price: PriceCard3(),
    },
    {
      id: 4,
      price: PriceCard4(),
    },
  ];

  return (
    <div className="App">
      {Card.map((cards, index) => (
        <div key={index}>{cards.price}</div>
      ))}
    </div>
  );
}

export default Price;

function PriceCard1() {
  return (
    <div class="sub-month">
      <h4>Free</h4>
      <nav class="nav-flex">
        <h1>
          <span>💲</span>0
        </h1>
        <p class="pricetag">/month</p>
      </nav>

      <nav class="sub-first">
        <li>
          <span>✅</span> Single User
        </li>
        <li>
          <span>✅</span> 5GB Storage
        </li>
        <li>
          <span>✅</span> Unlimited Public Projects
        </li>
        <li>
          <span>✅</span> Community Access
        </li>
      </nav>
      <nav class="subwrong">
        <li>
          <span>❌</span> Unlimited Private Projects
        </li>
        <li>
          <span>❌</span> Dedicated Phone Support
        </li>
        <li>
          <span>❌</span> Free Subdomain
        </li>
        <li>
          <span>❌</span> Monthly Status Reports
        </li>
      </nav>
      <hr id="seperator"></hr>
      <a href="">
        <button>monthly subscribe</button>
      </a>
    </div>
  );
}

function PriceCard2() {
  return (
    <div class="sub-month">
      <h4>plus</h4>
      <nav class="nav-flex">
        <h1>
          <span>💲</span>10
        </h1>
        <p class="pricetag">/month</p>
      </nav>

      <nav class="sub-first">
        <li>
          <span>✔️</span> 5 Users
        </li>
        <li>
          <span>✔️</span> 50GB Storage
        </li>
        <li>
          <span>✔️</span> Unlimited Public Projects
        </li>
        <li>
          <span>✔️</span> Community Access
        </li>
      </nav>

      <li>
        <span>✔️</span> Unlimited Private Projects
      </li>
      <li>
        <span>✔️</span> Dedicated Phone Support
      </li>
      <li>
        <span>✔️</span> Free Subdomain
      </li>
      <nav class="subwrong">
        <li>
          <span>❌</span> Monthly Status Reports
        </li>
      </nav>

      <hr id="seperator"></hr>
      <a href="">
        <button>3 month subscribe</button>
      </a>
    </div>
  );
}

function PriceCard3() {
  return (
    <div class="sub-month">
      <h4>pro</h4>
      <nav class="nav-flex">
        <h1>
          <span>💲</span>49
        </h1>
        <p class="pricetag">/month</p>
      </nav>

      <nav class="sub-first">
        <li>
          <span>✔️</span> 50 Users
        </li>
        <li>
          <span>✔️</span> 100GB Storage
        </li>
        <li>
          <span>✔️</span> Unlimited Public Projects
        </li>
        <li>
          <span>✔️</span> Community Access
        </li>
      </nav>
      <li>
        <span>✔️</span> Unlimited Private Projects
      </li>
      <li>
        <span>✔️</span> Dedicated Phone Support
      </li>
      <li>
        <span>✔️</span> Free Subdomain
      </li>
      <li>
        <span>✔️</span> Monthly Status Reports
      </li>

      <hr id="seperator"></hr>
      <a href="">
        <button>6 month subscribe</button>
      </a>
    </div>
  );
}
function PriceCard4() {
  return (
    <div class="sub-month">
      <h4>pro plus</h4>
      <nav class="nav-flex">
        <h1>
          <span>💲</span>100
        </h1>
        <p class="pricetag">/month</p>
      </nav>

      <nav class="sub-first">
        <li>
          <span>✔️</span>
          <b>Unlimited Users</b>{" "}
        </li>
        <li>
          <span>✔️</span> <b>500GB </b>Storage
        </li>
        <li>
          <span>✔️</span> Unlimited Public Projects
        </li>
        <li>
          <span>✔️</span> Community Access
        </li>
      </nav>
      <li>
        <span>✔️</span> Unlimited Private Projects
      </li>
      <li>
        <span>✔️</span> Dedicated Phone Support
      </li>
      <li>
        <span>✔️</span> Free Subdomain
      </li>
      <li>
        <span>✔️</span> Monthly Status Reports
      </li>

      <hr id="seperator"></hr>
      <a href="">
        <button>1 year subscribe</button>
      </a>
    </div>
  );
}
