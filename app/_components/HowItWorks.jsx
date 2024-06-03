"use client"
import React, { useState } from 'react';
import Head from 'next/head';

const HowItWorks = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Head>
        <title>How It Works | Blowfish Encryption Generator</title>
      </Head>
      <main style={styles.main}>
        <h1 style={styles.header}>How It Works</h1>
        <section style={styles.section}>
          <h2 style={styles.subHeader}>Introduction to Blowfish Encryption</h2>
          <p style={styles.paragraph}>
            Blowfish is a symmetric-key block cipher designed in 1993 by Bruce Schneier. It provides a good encryption rate in software and is extensively used in various security applications. Our app utilizes Blowfish encryption to ensure that your text data remains secure.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.subHeader}>How to Use Our App</h2>
          <ol style={styles.list}>
            <li>Enter the text you want to encrypt in the input field.</li>
            <li>Provide a secret key that will be used for the encryption process.</li>
            <li>Click the "Encrypt" button to generate the encrypted text.</li>
            <li>You can also decrypt the text by entering the encrypted message and the secret key, then clicking the "Decrypt" button.</li>
          </ol>
        </section>
        <section style={styles.section}>
          <h2 style={styles.subHeader}>Features</h2>
          <ul style={styles.list}>
            <li>Secure text encryption using Blowfish algorithm</li>
            <li>Easy-to-use interface for both encryption and decryption</li>
            <li>Instant generation of encrypted text</li>
            <li>Compatible with various devices and platforms</li>
          </ul>
        </section>
        <button onClick={toggleShowMore} style={styles.button}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
        {showMore && (
          <section style={styles.section}>
            <h2 style={styles.subHeader}>Why Choose Blowfish?</h2>
            <p style={styles.paragraph}>
              Blowfish encryption is known for its speed and effectiveness. It is not only fast but also secure, making it a preferred choice for many encryption applications. With our app, you can take advantage of these benefits to keep your text data safe.
            </p>
            <h2 style={styles.subHeader}>Technical Details</h2>
            <p style={styles.paragraph}>
              Blowfish has a 64-bit block size and a variable key length from 32 bits up to 448 bits. It uses a 16-round Feistel cipher and employs large key-dependent S-boxes. Blowfish's design makes it ideal for applications where the key does not change often, but it can be slow for applications that do require frequent key changes.
            </p>
            <h2 style={styles.subHeader}>Security Considerations</h2>
            <p style={styles.paragraph}>
              While Blowfish is considered secure, it is important to use it correctly. This includes using a strong, random key and ensuring that the encrypted data is handled securely. Additionally, because Blowfish has a block size of 64 bits, it is susceptible to birthday attacks in contexts where large amounts of data are encrypted with the same key.
            </p>
          </section>
        )}
      </main>
    </>
  );
};

export default HowItWorks

const styles = {
  main: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  section: {
    marginBottom: '2rem',
  },
  subHeader: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.5',
  },
  list: {
    paddingLeft: '1.5rem',
    fontSize: '1rem',
    lineHeight: '1.5',
  },
  button: {
    display: 'block',
    margin: '1rem auto',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
}
