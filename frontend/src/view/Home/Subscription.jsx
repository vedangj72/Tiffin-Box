import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setsubincrease } from '../../components/app/subincreaseSlice';

function Subscription() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { name, phone } = useSelector(state => state.user.user);

  const onSubmit = (data) => {
    dispatch(setsubincrease({
      name,
      phone,
      Dateend: data.endDate,
      Datestart: data.startDate,
      payed: data.amountPaid,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input type="date" id="startDate" {...register('startDate', { required: true })} />
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input type="date" id="endDate" {...register('endDate', { required: true })} />
        </div>
        <div>
          <label htmlFor="amountPaid">Amount Paid</label>
          <input type="number" id="amountPaid" {...register('amountPaid', { required: true })} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Subscription;
