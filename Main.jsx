import img from './about-img.jpg';
import cardImg from './why-us-1.jpg';
import cardImg2 from './why-us-2.jpg';
import cardImg3 from './why-us-3.jpg';

export default function Main() {
    return (
        <main className="main">
        <section className="main-bg">
        <section className="container">
        <img src={img} className="main-img" alt="img" />
        <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda provident quasi corporis.</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <ul>
          <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
          <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
        </ul>
        </section>
        </section>

        <section className="features-list">
          <article className="article">
              <img src={cardImg} className="cardimg" />
              <h4>Our mission</h4>
              <p>Lorem ipsum dolor sit amet, consectetur
                elit, sed do eiusmod tempor ut labore et
                dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea
                commodo consequat.</p>
        </article>
        
        <article className="article">
              <img src={cardImg2} className="cardimg" />
              <h4>Our Plan</h4>
              <p>Lorem ipsum dolor sit amet, consectetur
                elit, sed do eiusmod tempor ut labore et
                dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea
                commodo consequat.</p>
        </article>

        <article className="article">
              <img src={cardImg3} className="cardimg" />
              <h4>Our Vision</h4>
              <p>Lorem ipsum dolor sit amet, consectetur
                elit, sed do eiusmod tempor ut labore et
                dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea
                commodo consequat.</p>
        </article>
        </section>

        <div className="feedback-list">
        <h2>Frequenty Asked Questions</h2>
    
            <ul className="container quest-list">
                <li>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li>Duis aute irure dolor in reprehenderit in voluptate velit</li>
            </ul>
        </div>

      </main>
    )
}