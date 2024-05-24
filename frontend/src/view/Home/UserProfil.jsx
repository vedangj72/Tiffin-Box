import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap'; // Import Card component from React Bootstrap

function UserProfil() {
    const { id } = useParams(); 
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/home/user/${id}`);
                if (response.data.success) {
                    setUser(response.data.data); // Store user data in the state
                }
                // const USER=localStorage.getItem('user');	
                // console.log(USER);
            } catch (error) {
                console.log(`Error in fetching user data by id: ${error}`);
            }
        }
        fetchData();
    }, [id]);
    // Format date to numeric format (day/month/year)
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero-based, so add 1
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            {user ? ( 
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Age: {user.age}</Card.Subtitle>
                        <Card.Text>
                            Phone: {user.phone}<br />
                            College: {user.college}<br />
                            Start Date: {formatDate(user.datestart)}<br />
                            End Date: {formatDate(user.dateend)}
                            {/* Add other user details as needed */}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default UserProfil;
