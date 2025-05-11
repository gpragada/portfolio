import React from "react";
import { Card, Button } from "react-bootstrap";

const PythonProject = () => {
  return (
    <Card className="mb-4" style={{ border: "1px solid #0078d4" }}>
      <Card.Body>
        <Card.Title>Sales Forecasting with Python & ML</Card.Title>
        <Card.Text>
          A robust machine learning pipeline built with Python, Pandas, and Scikit-learn to forecast sales using historical data and market trends. Integrated with Docker and deployed on AWS for scalability.
        </Card.Text>
        <Button variant="primary" href="https://github.com/gpragada/python-sales-forecast" target="_blank">
          View Source
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PythonProject;
