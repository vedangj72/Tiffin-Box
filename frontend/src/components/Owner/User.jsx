import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Form, Row, Col, Modal } from 'react-bootstrap';

function User() {
    const [user, setUser] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editUserData, setEditUserData] = useState({});
    const [editName, setEditName] = useState('');
    const [editPhone, setEditPhone] = useState('');
    const [editDateStart, setEditDateStart] = useState('');
    const [editDateEnd, setEditDateEnd] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:7000/home/user");
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchData();
    }, []);

    const handleEdit = (id, name, phone, datestart, dateend) => {
        setShowEditModal(true);
        setEditUserData({ id, name, phone });
        setEditName(name);
        setEditPhone(phone);
        setEditDateStart(datestart);
        setEditDateEnd(dateend);
    };

    const handleEditSubmit = async () => {
        try {
            const response = await axios.patch(`http://localhost:7000/home/user/${editUserData.id}`, { 
                name: editName, 
                phone: editPhone,
                datestart: editDateStart,
                dateend: editDateEnd
            });
            if (response) {
                alert("User data updated successfully");
                setShowEditModal(false);
              
            }
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    const handleDelete = async (id, name, phone) => {
        console.log("Delete", id);
        try {
            const response = await axios.delete(`http://localhost:7000/home/user/${id}`);
            if (response) {
                alert("User removed successfully");
                console.log('User removed successfully');
                // You may want to refetch the user data here
            }
        } catch (error) {
            console.error('Error removing user:', error);
        }
    };

    return (
        <div className="container mt-4 ">
            <Form className="mb-4 text-end">
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
            <div className="row" >
                {user.map((userData) => (
                    <div className="col-lg-12 mb-4" key={userData._id}>
                        <Card className="h-100 w-100" style={{ backgroundColor: "rgba(255, 195, 0, 0.6)" }}>
                            <Card.Body>
                                <Card.Title>{userData.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{userData.email}</Card.Subtitle>
                                <Card.Text>
                                    <strong>Name:</strong> {userData.username}<br />
                                    <strong>Phone:</strong> {userData.phone}<br />
                                    <strong>Payed:</strong> {userData.payed}<br />
                                    <strong>Date-start:</strong> {userData.datestart}<br />
                                    <strong>Date-end:</strong> {userData.dateend}
                                </Card.Text>
                                <Button variant="primary" className='m-2' onClick={() => handleEdit(userData._id, userData.name, userData.phone, userData.datestart, userData.dateend)}><i className="bi bi-pen-fill"></i></Button>
                                <Button variant="primary" onClick={() => handleDelete(userData._id, userData.name, userData.phone)}><i className="bi bi-trash3-fill"></i></Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            {/* Edit Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="editName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="editPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" value={editPhone} onChange={(e) => setEditPhone(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="editDateStart">
                        <Form.Label>Date Start</Form.Label>
                        <Form.Control type="date" value={editDateStart} onChange={(e) => setEditDateStart(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="editDateEnd">
                        <Form.Label>Date End</Form.Label>
                        <Form.Control type="date" value={editDateEnd} onChange={(e) => setEditDateEnd(e.target.value)} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>Close</Button>
                    <Button variant="primary" onClick={handleEditSubmit}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default User;
