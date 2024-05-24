import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import useHomeData from '../../components/hooks/useHomeData';
import { useNavigate, Link } from 'react-router-dom';

function Home() {
  const { userData, loading } = useHomeData('http://localhost:7000/home/user');
  const navigate = useNavigate();
  const [deadlinemsg, setDeadlinemsg] = useState("");

  useEffect(() => {
    if (!loading && userData && userData.dateend) {
      const currentDate = new Date();
      const endDate = new Date(userData.dateend);
      const timeDiff = endDate.getTime() - currentDate.getTime();
      const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

      if (daysLeft < 3) {
        setDeadlinemsg(`Your subscription is about to expire in ${daysLeft} days`);
      } else {
        setDeadlinemsg("");
      }
    }
  }, [loading, userData]);

  if (loading || !userData || !userData.dateend) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }


  return (
    <div>
      <div className='text-end me-5 mb-2'>
        <div className='mb-2'>
        <Link to={`/absenty/${userData._id}`} variant="outline-primary" style={{ width: "200px" }}>Inform Absenty</Link>
        </div>
        
      </div>
      <Card style={{ width: '28rem', height: "18rem", fontSize: "25px", backgroundColor: "rgb(233 237 234)" }} className='mx-auto p-3'>
        <Card.Body style={{ fontSize: "25px" }}>
          <Card.Title>
            <h2>{userData.name}</h2>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{userData.sub ? 'Subscribed' : 'Not Subscribed'}</Card.Subtitle>
          <Card.Text className='p-3'>
            <strong>Start:</strong> {new Date(userData.datestart).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}<br />
            <strong>End:</strong> {new Date(userData.dateend).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}<br />
            <strong>Payed:</strong> {userData.payed}
          </Card.Text>
        </Card.Body>
        <Card.Footer>{deadlinemsg}</Card.Footer>
      </Card>
    </div>
  );
}

export default Home;
