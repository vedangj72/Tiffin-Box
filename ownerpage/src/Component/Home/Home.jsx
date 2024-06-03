import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Form, Row, Col, Modal } from 'react-bootstrap';

function Home() {
    const [user, setUser] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editUserData, setEditUserData] = useState({});
    const [editName, setEditName] = useState('');
    const [editPhone, setEditPhone] = useState('');
    const [editDateStart, setEditDateStart] = useState(Date);
    const [editDateEnd, setEditDateEnd] = useState(Date);
    const [search, setSearch] = useState('');
    const [editCompleted, setEditCompleted] = useState(false);

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
    }, [editCompleted]);

    const formatDate = (date) => {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = String(d.getFullYear()).slice(-2);
        return `${day}/${month}/${year}`;
    };

    const handleEdit = (id, name, phone, datestart, dateend) => {
        setShowEditModal(true);
        setEditUserData({ id, name, phone });
        setEditName(name);
        setEditPhone(phone);
        setEditDateStart(formatDate(datestart));
        setEditDateEnd(formatDate(dateend));
    };

    const handleEditSubmit = async () => {
        try {
            const formattedDateStart = formatDate(editDateStart);
            const formattedDateEnd = formatDate(editDateEnd);

            const response = await axios.patch(`http://localhost:7000/home/user/${editUserData.id}`, { 
                name: editName, 
                phone: editPhone,
                datestart: formattedDateStart,
                dateend: formattedDateEnd
            });
            if (response) {
                alert("User data updated successfully");
                setShowEditModal(false);
                setEditCompleted(prev => !prev);  // Toggle the editCompleted state to trigger useEffect
            }
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:7000/home/user/${id}`);
            if (response) {
                alert("User removed successfully");
                setEditCompleted(prev => !prev);  // Toggle the editCompleted state to trigger useEffect
            }
        } catch (error) {
            console.error('Error removing user:', error);
        }
    };

    const filteredUsers = user.filter(userData => 
        userData.name.toLowerCase().includes(search.toLowerCase()) ||
        String(userData.phone).toLowerCase().includes(search.toLowerCase()) ||
        userData.college.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <Form className="mb-4 text-end">
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </Col>
                </Row>
            </Form>
            <div className="row">
                {filteredUsers.map((userData) => (
                    <div className="col-lg-12 mb-4" key={userData._id}>
                        <Card className="h-100 w-100" style={{ border: "1px solid black", borderRadius: "15px", padding: "20px" }}>
                            <Card.Header><h3>{userData.name}</h3></Card.Header>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted">{userData.email}</Card.Subtitle>
                                <Card.Text>
                                    <Row>
                                        <Col className="text-start"><strong>Name:</strong> {userData.name}</Col>
                                        <Col className="text-start"><strong>Phone:</strong> {userData.phone}</Col>
                                        <Col className="text-start"><strong>Age:</strong> {userData.age}</Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col className="text-start"><strong>Payed:</strong> {userData.payed}</Col>
                                        <Col className="text-start"><strong>College:</strong> {userData.college}</Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col className="text-start"><strong>Address:</strong> {userData.address}</Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col className="text-start"><strong>Start Date:</strong>{formatDate(userData.datestart)}</Col>
                                        <Col className="text-start"><strong>End Date:</strong> {formatDate(userData.dateend)}</Col>
                                    </Row>
                                </Card.Text>
                                <Button variant="primary" className="m-2" onClick={() => handleEdit(userData._id, userData.name, userData.phone, userData.datestart, userData.dateend)}><i className="bi bi-pen-fill"></i></Button>
                                <Button variant="danger" onClick={() => handleDelete(userData._id)}><i className="bi bi-trash3-fill"></i></Button>
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

export default Home;
