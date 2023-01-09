import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              If you have any questions or would like to work with me feel free
              to contact me.
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: agnes.pilar@yahoo.de</li>
              <li className="contact-item">Phone: +436504961424</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
