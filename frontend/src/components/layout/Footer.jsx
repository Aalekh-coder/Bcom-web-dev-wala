import React from 'react'
import { AiOutlineInstagram,AiOutlineYoutube, AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer>
          <div>
              <h2>BCom web dev wala</h2>
              <p>We are trying to give the best taste possible.</p> <br />

              <em>We give attention to genunine feedback.</em>

              <strong>All right received @BcomWebDev</strong>
          </div>
          
          <aside>
              <h4>Follow Us</h4>
              <a href="https://youtube.com/6packprogrammer"><AiOutlineYoutube/></a>
              <a href="https://youtube.com/6packprogrammer"><AiOutlineInstagram/></a>
              <a href="https://youtube.com/6packprogrammer"><AiFillGithub/></a>
          </aside>
    </footer>
  )
}

export default Footer
