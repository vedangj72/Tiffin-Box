import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function Addmenu() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post('http://localhost:7000/home/menu', formData);
      if (response.status === 200 || response.status === 201) {
        console.log(response.data);
        alert(`Menu ${formData.description} created successfully`);
        reset();
      } else {
        console.error('Error:', response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Add Menu</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          {/* <label htmlFor="description" className="form-label">Description</label> */}
          <input
            type="text"
            className="form-control"
            id="description"
            {...register('description', { required: true })}
            placeholder="Description"
            aria-label="Description"
          />
        </div>
        <div className="mb-3">
          {/* <label htmlFor="sabji" className="form-label">Sabji</label> */}
          <input
            type="text"
            className="form-control"
            id="sabji"
            {...register('sabji', { required: true })}
            placeholder="Sabji"
            aria-label="Sabji"
          />
        </div>
        <div className="mb-3">
          {/* <label htmlFor="sabjiAlternative" className="form-label">Sabji Alternative</label> */}
          <input
            type="text"
            className="form-control"
            id="sabjiAlternative"
            {...register('sabjiAlternative')}
            placeholder="Sabji Alternative"
            aria-label="Sabji Alternative"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Addmenu;
