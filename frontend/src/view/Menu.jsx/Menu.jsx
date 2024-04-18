import React from 'react';
import useMenu from '../../components/hooks/useMenu';
import { Table } from 'react-bootstrap';

function Menu() {
    const menu = useMenu();

    return (
        <div>
            <h1 className='text-center'>Menu</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Main Course</th>
                        <th>Main Course</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {menu.map((content) => (
                        <tr key={content._id}>
                            <td>{content.description}</td>
                            <td>{content.sabji}</td>
                            <td>{content.sabjialternative}</td>
                            <td>{new Date(content.createdAt).toLocaleDateString('en-US')}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Menu;
