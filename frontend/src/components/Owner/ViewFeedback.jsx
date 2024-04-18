import React from 'react';
import useFeedback from '../hooks/useFeedback';
import { Table } from 'react-bootstrap';

function ViewFeedback() {
  const feedback = useFeedback("http://localhost:7000/home/feedback");

  return (
    <div>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {feedback.map((content) => (
            <tr key={content._id}>
              <td>{content.name}</td>
              <td>{content.feedback}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ViewFeedback;
