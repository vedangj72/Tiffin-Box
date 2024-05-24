import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useSelector } from 'react-redux';

function FeedbackForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const userData=useSelector(state=>state.user);


  const onSubmit = async (formdata) => {
    try {
      const data={
        ...formdata,
        ...userData.user,
      }
      const response = await axios.post("http://localhost:7000/home/feedback", data);
      console.log(`Data sent successfully ${response}`);
      if (response) {
        alert(`Feedback sent successfully`);
        reset();
      }
    } catch (error) {
      console.log(`Error in sending feedback: ${error}`);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Feedback Form</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-3">
                  <label htmlFor="inputFeedback">Feedback:</label>
                  <textarea
                    className="form-control"
                    id="inputFeedback"
                    rows="3"
                    placeholder="Enter your feedback"
                    {...register('feedback', { required: true })}
                  ></textarea>
                  {errors.feedback && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-primary w-100">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;
