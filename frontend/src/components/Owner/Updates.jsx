import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

function Updates() {
    const [updates, setUpdates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:7000/home/query');
                if (response) {
                    setUpdates(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData(); 
    }, []);

    const handleApprove = async (id) => {
        console.log("Approve", 	id);
        try {
            const response = await axios.delete(`http://localhost:7000/home/query/${id}`);
            if (response) {
                alert("The user update is done and romoved");
                console.log('Query approved successfully');
            }
        } catch (error) {
            console.error('Error approving query:', error);
        }
    };

    return (
        <div className="container mt-4">
            <div className="row">
                {updates.map((update) => (
                    <div className="col-lg-12 mb-4" key={update._id}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{update.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{update.phone}</Card.Subtitle>
                                <Card.Text>
                                    Exceed: {update.exceed}
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleApprove(update._id)}>Approve</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Updates;
