import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setData } from '../../components/app/exceedSlice';

function Absenty() {
    const { name, phone } = useSelector(state => state.user.user); // Accessing user data from userSlice
    // console.log("Name:", name, "Phone:", phone); // Log the values for debugging
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const onSubmit = data => {
        if (name && phone) {
            alert("Request added");
            dispatch(setData({ name, phone, exceed: data.exceed }));
        } else {
            console.log("Name or phone is undefined.");
            
        }
    };

    return (
        <div>
            <h1>Form Here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="number" {...register('exceed', { required: true })} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Absenty;
