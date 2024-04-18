import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './FeedbackForm.css'; // Import your CSS file

function FeedbackForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:7000/home/feedback", data);
      console.log(`Data sent successfully ${response}`);
      if (response) {
        alert(`Response sent from ${data.name}`);
        reset();
      }
    } catch (error) {
      console.log(`Error in sending feedback: ${error}`);
    }
  };

  return (
    <div className="feedback-container">
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="feedback-form"> 
        <div className="form-group"> 
          <label>Name:</label>
          <input type="text" {...register('name', { required: true })} />
          {errors.name && <span className="error-message">This field is required</span>} 
        </div>
        <div className="form-group">
          <label>Date End:</label>
          <input type="date" {...register('dateend', { required: true })} />
          {errors.dateend && <span className="error-message">This field is required</span>}
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="tel" {...register('phone', { required: true, pattern: /^\d{10}$/ })} />
          {errors.phone && <span className="error-message">Enter a valid 10-digit phone number</span>}
        </div>
        <div className="form-group">
          <label>Feedback:</label>
          <textarea {...register('feedback', { required: true })} />
          {errors.feedback && <span className="error-message">This field is required</span>}
        </div>
        <button type="submit" className=" btn btn-primary">Submit</button>       </form>
    </div>
  );
}

export default FeedbackForm;
