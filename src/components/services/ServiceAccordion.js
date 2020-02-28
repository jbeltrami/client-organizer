import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const ServiceAccordion = props => {
  const { label, date, price, description, serviceId } = props;

  return (
    <Accordion className='col-12'>
      <Card>
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            variant='link'
            eventKey='0'
            className='d-flex w-100'
          >
            <span className=''>{label}</span>
            <span className='ml-auto'>{date}</span>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            <p>
              <span>Price: </span> ${price}
            </p>
            <p>{description}</p>

            <NavLink to={`/update-service/${serviceId}`}>
              <button className='btn btn-info'>Update</button>
            </NavLink>
            <NavLink to={`/delete-service/${serviceId}`}>
              <button className='btn btn-danger ml-5'>Delete</button>
            </NavLink>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default ServiceAccordion;
