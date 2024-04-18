import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// import { loginSuccess } from '../../app/userSlice';
import { setUserData } from '../../app/dataSlice';
import { useSelector } from 'react-redux';



function UserAdd() {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const userData=useSelector((state) => state.userdata.userData.age);
    const User=useSelector((state) => state.userdata);

    const onSubmit = async (data) => {
        try {
            const newUser = await axios.post("http://localhost:7000/home/user", data);
            dispatch(setUserData(newUser.data));
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
    console.log(userData);
    console.log(User);
    // console.log(userData);

    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name:</label>
                    <input type="text" {...register('name', { required: true })} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" {...register('age')} />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" {...register('phone', { required: true })} />
                </div>
                <div>
                    <label>College:</label>
                    <input type="text" {...register('college', { required: true })} />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" {...register('address', { required: true })} />
                </div>
                <div>
                    <label>Subscription:</label>
                    <input type="checkbox" {...register('sub')} />
                </div>
                <div>
                    <label>Amount Paid:</label>
                    <input type="number" {...register('payed')} />
                </div>
                <div>
                    <label>Start Date:</label>
                    <input type="date" {...register('datestart', { required: true })} />
                </div>
                <div>
                    <label>End Date:</label>
                    <input type="date" {...register('dateend', { required: true })} />
                </div>
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}

export default UserAdd;
