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
    <div className="container">
      <h1 className="text-center">Feedback Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputName" {...register('name', { required: true })} />
            {errors.name && <span className="error-message">This field is required</span>}
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputDateEnd" className="col-sm-2 col-form-label">Date End:</label>
          <div className="col-sm-10">
            <input type="date" className="form-control" id="inputDateEnd" {...register('dateend', { required: true })} />
            {errors.dateend && <span className="error-message">This field is required</span>}
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPhone" className="col-sm-2 col-form-label">Phone:</label>
          <div className="col-sm-10">
            <input type="tel" className="form-control" id="inputPhone" {...register('phone', { required: true, pattern: /^\d{10}$/ })} />
            {errors.phone && <span className="error-message">Enter a valid 10-digit phone number</span>}
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputFeedback" className="col-sm-2 col-form-label">Feedback:</label>
          <div className="col-sm-10">
            <textarea className="form-control" id="inputFeedback" rows="3" {...register('feedback', { required: true })}></textarea>
            {errors.feedback && <span className="error-message">This field is required</span>}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FeedbackForm;
