
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to the server)
    console.log('Form Data Submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' }); // Reset the form after submission
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label} htmlFor="name">Name:</label>
        <input
          style={styles.input}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label style={styles.label} htmlFor="email">Email:</label>
        <input
          style={styles.input}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label style={styles.label} htmlFor="message">Message:</label>
        <textarea
          style={styles.textarea}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button style={styles.button} type="submit">Submit</button>
      </form>
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  label: {
    fontSize: '1.1em',
    textAlign: 'left',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1em',
  },
  textarea: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1em',
    minHeight: '100px',
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
};

export default Contact;
