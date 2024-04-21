import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
// import { setData } from '../../components/app/exceedSlice';
import axios from 'axios';

function Absenty() {
    const { register, handleSubmit, reset } = useForm();
    // const dispatch = useDispatch();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:7000/home/query", data);
            if (response) {
                alert("Data sent Successfully");
                reset();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Form Here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name" {...register('name', { required: true })} />
                <input type="number" placeholder="Phone" {...register('phone', { required: true })} />
                <input type="number" placeholder="Exceed" {...register('exceed', { required: true })} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Absenty;
