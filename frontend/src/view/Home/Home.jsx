import React from 'react';
import { Table, Button } from 'react-bootstrap';
import useHomeData from '../../components/hooks/useHomeData';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { userData, loading } = useHomeData('http://localhost:7000/home/user');
  const navigate = useNavigate();

  if (loading) {
    return (
      <div>
        <h1>Loading... </h1>
      </div>
    );
  }

  const handleNavigate = () => {
    navigate('/absenty');
  };

  return (
    <div>
      <div className='text-end me-5 mb-2'>
        <div>
          <Button variant="outline-primary" onClick={handleNavigate}>Inform absenty</Button>
        </div>
      </div>
      <Table striped bordered hover variant="light" className='mt-4'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date Start</th>
            <th>Date End</th>
            <th>Sub</th>
            <th>Payed</th>
          </tr>
        </thead>
        <tbody>
          {userData && (
            <tr>
              <td>{userData.name}</td>
              <td>{new Date(userData.datestart).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
              <td>{new Date(userData.dateend).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
              <td>{userData.sub ? 'Yes' : 'No'}</td>
              <td>{userData.payed}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
