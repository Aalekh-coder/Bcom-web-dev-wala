import React from 'react'
import { motion } from "framer-motion";
import me from "../../assets/profile.jpg"

function Founder() {
  const options = {
    initial: {
        x: "-100%",
        opacity: 0,
    },
    whileInView: {
        x: 0,
        opacity: 1,
    }

};

  return (
    <section className='founder'>
      <motion.div {...options}>
        <img src={me} height={200} width={200} />
        <h3>Aalekh</h3> 
        <p>Hey, Everyone I am Aalekh, the founder of bcom web dev wala
          <br />
          our aim to create the most functional websites
        </p>
      </motion.div>

    </section>
  )
}

export default Founder
