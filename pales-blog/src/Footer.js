import insta from "./img/instagram.svg"
import twitter from "./img/twitter.svg"
import linkedin from "./img/linkedin.svg"
import github from "./img/github.png"
import reactlogo from "./img/react-logo.svg"

const Footer = () => {
  return (
    <footer>
      <div>
          <p>Powered by</p>
          <img src={reactlogo} alt=""/>
          <img src={github} alt=""/>
      </div>
      <article>
        <section>
        <p>©Copyright 2020. All Rights Reserved | Developed with 💙</p>
        <a href="https://instagram.com/mpales7/" className="socmed" target="_blank">
          <img src={insta} alt=""/>
          <p>@mpales7</p>
        </a>
        <a href="https://twitter.com/break_habit" className="socmed" target="_blank">
          <img src={twitter} alt=""/>
          <p>@break_habit</p>
        </a>
        <a href="https://linkedin.com/in/muhammad-palestin" className="socmed" target="_blank">
          <img src={linkedin} alt=""/>
          <p>LinkedIn</p>
        </a>
        </section>
      </article>
    </footer>
  );
}
 
export default Footer;