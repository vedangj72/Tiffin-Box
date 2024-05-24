import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Absenty() {
    const { register, handleSubmit, reset } = useForm();
    const userdata = useSelector(state => state.user);
    // console.log(userdata.user);

    const onSubmit = async (formData) => {
        try {
            
            const data = {
                ...formData,
                ...userdata.user
            };
            // console.log(data);
            const response = await axios.post("http://localhost:7000/home/query", data);
            if (response) {
                alert("Data sent successfully");
                reset();
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-center">Absentee Form</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="exceed">Exceed</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="exceed"
                                        placeholder="Enter exceed value"
                                        {...register('exceed', { required: true })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="reason">Reason</label>
                                    <textarea
                                        className="form-control"
                                        id="reason"
                                        rows="3"
                                        placeholder="Enter reason"
                                        {...register('reason', { required: true })}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Absenty;
