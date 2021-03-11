

export default function Footer() {
    return (
        <footer className="main-footer">
        <div className="container">
        <div className="index-columns">
        
          <section className="appointment">
          <h2>Contact us</h2>
          <form className="appointment-form" action="#" method="POST">
                        <p className="appointment-item">
                            <label for="appointment-date"></label>
                            <input id="appointment-date" type="text" name="date"  placeholder="Your Name" /> 
                        </p>
                        <p className="appointment-item">
                            <label for="appointment-time"></label>
                            <input id="appointment-time" type="email" name="datetime"  placeholder="Your Email" /> 
                        </p>
                        <p className="appointment-item">
                            <label for="appointment-name"></label>
                            <input id="appointment-name" type="text" name="name"  placeholder="Subject" /> 
                        </p>
                        <p className="appointment-item">
                            <label for="appointment-phone"></label>
                            <input type="text" name="phone" placeholder="Your Phone" /> 
                        </p>
                        <button type="submit" className="button">Отправить</button>
                    </form>
            </section>
          
          <section className="contacts">
          <ul >
            <li>A108 Adam Street
                New York, NY 535022</li>
            <li>info@example.com</li>
            <li>+1 5589 55488 55s</li>
          </ul>
          </section>
            </div>
            

            <section className="footer-copyright">
                  <p>Copyright <em>Siimple</em><br />
                  All Rights Reserved</p>
            </section>
            </div>
      </footer>
    )
}