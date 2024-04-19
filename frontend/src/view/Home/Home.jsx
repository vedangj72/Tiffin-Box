import React from 'react';
import { Button, Card } from 'react-bootstrap';
import useHomeData from '../../components/hooks/useHomeData';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
  const { userData, loading } = useHomeData('http://localhost:7000/home/user');
  const navigate = useNavigate();
  const { name, phone, payed, Datestart, Dateend } = useSelector(state => state.subincrease);
  console.log('Redux State:', name, phone, Datestart, Dateend, payed); 

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
  const handleSub = () => {
    navigate('/subscription');
  };

  return (
    <div>
      <div className='text-end me-5 mb-2'>
        <div className='mb-2'>
          <Button variant="outline-primary" style={{ width: "200px" }} onClick={handleNavigate}>Inform absenty</Button>
        </div>
        <div className='mt-2'>
          <Button variant="outline-primary" style={{ width: "200px" }} onClick={handleSub}>Add subscription</Button>
        </div>
      </div>
      <Card style={{ width: '28rem', height:"18rem",fontSize:"25px",backgroundColor:"#ffc30099"}} className='mx-auto p-3'>
        <Card.Body style={{fontSize:"25px"}}>
          <Card.Title >{userData.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{userData.sub ? 'Subscribed' : 'Not Subscribed'}</Card.Subtitle>
          <Card.Text className=' p-3'>
            <strong>Date Start:</strong> {new Date(userData.datestart).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}<br />
            <strong>Date End:</strong> {new Date(userData.dateend).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}<br />
            <strong>Payed:</strong> {userData.payed}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
