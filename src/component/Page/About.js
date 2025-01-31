import React, { useState } from 'react';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  // Function to handle the toggle of extra information
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.text}>
        Welcome to <span style={styles.highlight}>Crakers Clearout</span>, your one-stop destination for the finest crackers. We are passionate about creating delicious, crispy, and healthy crackers that bring joy to every bite.
      </p>
      <button style={styles.button} onClick={toggleShowMore}>
        {showMore ? 'Read Less' : 'Read More'}
      </button>
      {showMore && (
        <div style={styles.extraInfo}>
          <p>
            Our mission is to elevate your snacking experience with a variety of flavors and textures that satisfy every taste bud. Whether you're looking for the perfect companion to your cheese platter or a wholesome snack on the go, we've got you covered.
          </p>
          <p>
            Thank you for choosing <span style={styles.highlight}>Crakers Clearout</span>—where every cracker makes a difference!
          </p>
        </div>
      )}
    </div>
  );
};

// Inline styles for the component
const styles = {
  container: {
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    maxWidth: '800px',
    padding: '30px',
    margin: '0 auto',
    textAlign: 'center',
    marginTop: '50px',
  },
  title: {
    fontSize: '2.5em',
    color: '#ff7043',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.1em',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  highlight: {
    color: '#ff7043',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ff7043',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#e35d34',
  },
  extraInfo: {
    marginTop: '10px',
    fontSize: '0.95em',
    color: '#666',
  },
};

export default About;
