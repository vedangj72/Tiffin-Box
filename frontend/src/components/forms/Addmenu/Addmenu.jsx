import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

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
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
          <Form.Control
            type="text"
            {...register('description', { required: true })}
            placeholder="Description"
            aria-label="Description"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon2">Sabji</InputGroup.Text>
          <Form.Control
            type="text"
            {...register('sabji', { required: true })}
            placeholder="Sabji"
            aria-label="Sabji"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">Sabji Alternative</InputGroup.Text>
          <Form.Control
            type="text"
            {...register('sabjialternative')}
            placeholder="Sabji Alternative"
            aria-label="Sabji Alternative"
            aria-describedby="basic-addon3"
          />
        </InputGroup>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Addmenu;
