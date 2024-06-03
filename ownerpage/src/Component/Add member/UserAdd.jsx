import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function UserAdd() {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const newUser = await axios.post("http://localhost:7000/home/user", data);
            console.log(newUser);
            if (newUser.status === 201 || newUser.status === 200) {
                alert(`User ${data.name} created successfully`);
                console.log(`User ${data.name} created successfully`);
                reset();
            } else {
                console.log(`Failed to create user: ${newUser.status}`);
            }
        } catch (error) {
            console.log(`Error in creating user: ${error}`);
        }
    };

    return (
        <div className="container mt-4">
            <h1>Add User</h1>
            <form onSubmit={handleSubmit(onSubmit)} className=' text-start'>
                <div className="mb-3 text-start">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" {...register('name', { required: true })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age:</label>
                    <input type="number" className="form-control" id="age" {...register('age')} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input type="text" className="form-control" id="phone" {...register('phone', { required: true })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="college" className="form-label">College:</label>
                    <input type="text" className="form-control" id="college" {...register('college', { required: true })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address:</label>
                    <input type="text" className="form-control" id="address" {...register('address', { required: true })} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="sub" {...register('sub')} />
                    <label className="form-check-label" htmlFor="sub">Subscription</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="payed" className="form-label">Amount Paid:</label>
                    <input type="number" className="form-control" id="payed" {...register('payed')} />
                </div>
                <div className="mb-3">
                    <label htmlFor="datestart" className="form-label">Start Date:</label>
                    <input type="date" className="form-control" id="datestart" {...register('datestart', { required: true })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="dateend" className="form-label">End Date:</label>
                    <input type="date" className="form-control" id="dateend" {...register('dateend', { required: true })} />
                </div>
                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
        </div>
    );
}

export default UserAdd;
