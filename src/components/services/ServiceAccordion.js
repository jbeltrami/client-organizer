import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ServiceAccordion = props => {
  const { label, date, price, description } = props;
  return (
    <Accordion className="col-12">
      <Card>
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey="0"
            className="d-flex w-100"
          >
            <span className="">{label}</span>
            <span className="ml-auto">{date}</span>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p>
              <span>Price: </span> ${price}
            </p>
            <p>{description}</p>

            <button className="btn btn-info">Update</button>
            <button className="btn btn-danger ml-5">Delete</button>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default ServiceAccordion;
