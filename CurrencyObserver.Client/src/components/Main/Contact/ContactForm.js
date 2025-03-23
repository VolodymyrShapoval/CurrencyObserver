import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
    details: '',
    consent: false,
  });

  const [showAdvanced, setShowAdvanced] = useState(false); // Стан для керування видимістю додаткових налаштувань

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  const saveToFile = async (data) => {
    try {
      const fileHandle = await window.showSaveFilePicker({
        suggestedName: 'form-data.json',
        types: [
          {
            description: 'JSON File',
            accept: { 'application/json': ['.json'] },
          },
        ],
      });

      const writable = await fileHandle.createWritable();
      await writable.write(JSON.stringify(data, null, 2));
      await writable.close();
      alert('Data saved successfully!');
    } catch (error) {
      console.error('Error saving the file:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert('Please give your consent to proceed.');
      return;
    }

    const user = {
      name: formData.name,
      email: formData.email,
      question: formData.question,
      details: formData.details, // Включаємо details в об'єкт
      consent: formData.consent,
    };

    saveToFile(user);
  };

  const toggleAdvancedSettings = (e) => {
    e.preventDefault();
    setShowAdvanced((prev) => !prev);
  };

  return (
    <div className="contact-form-block">
      <form id="contact-form" onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          placeholder="Name: "
          required
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          id="email"
          type="email"
          placeholder="Email: "
          required
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          id="question"
          type="text"
          placeholder="Your question: "
          value={formData.question}
          onChange={handleInputChange}
        />
        <div>
          <a href="#" onClick={toggleAdvancedSettings}>
            {showAdvanced ? 'Hide advanced settings' : 'Show advanced settings'}
          </a>
          {showAdvanced && (
            <div className="additional-info-container">
              <textarea
                id="details"
                placeholder="Details"
                value={formData.details} // додаємо value, щоб значення синхронізувалося з formData
                onChange={handleInputChange} // додайте onChange для textarea
              ></textarea>
            </div>
          )}
        </div>
        <div className="checking">
          <input
            id="consent"
            type="checkbox"
            checked={formData.consent}
            onChange={handleInputChange}
          />
          <p>I give my consent to data processing</p>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;

