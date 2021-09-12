import pales from "./img/pales.svg"

const Banner = () => {
    return ( 
        <section className="banner container">
            <figure className="profile">
                <img src={pales} alt=""/>
            </figure>
            <article className="caption">
                <h1>Hi! I am Pales</h1>
                <p>I’m a Software QA Engineer, Web & Mobile Dev Enthusiast. This web is a place for me to express how much I enjoy Web Development.</p>
            </article>
        </section>
     );
}
 
export default Banner;
