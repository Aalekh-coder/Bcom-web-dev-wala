import React from 'react'
import MenuCard from './MenuCard'
import burger1 from "../../assets/burger1.png"
import burger2 from "../../assets/burger2.png"
import burger3 from "../../assets/burger3.png"

function Menu() {
  const addToCardHandler = (itemNum) => {

  }


  return (
    <section id='menu'>
      <h1>Menu</h1>

      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title="Cheese Burger"
          handler={addToCardHandler}
          delay={0.1}
        />

        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={500}
          title=" non veg Cheese Burger"
          handler={addToCardHandler}
          delay={0.3}

        />

        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={600}
          title="veg gargic Cheese Burger"
          handler={addToCardHandler}
          delay={0.6}

        />

      </div>


    </section>
  )
}

export default Menu
