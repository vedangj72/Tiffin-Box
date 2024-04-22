import React from 'react';
import useMenu from '../../components/hooks/useMenu';
import { Card, Table } from 'react-bootstrap';

function Menu() {
  const menu = useMenu();

  return (
    <div>
      <h1 className='text-center'>Menu</h1>
      <div className="row row-cols-1 row-cols-md-11 g-4">
        {menu.map((content) => (
          <div key={content._id} className="col">
            <Card>
              <Card.Body>
                <Card.Title>{content.description}</Card.Title>
                <Card.Text>Main Course: {content.sabji}</Card.Text>
                <Card.Text>Main Course Alternative: {content.sabjialternative}</Card.Text>
                <Card.Text>Date: {new Date(content.createdAt).toLocaleDateString('en-US')}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
