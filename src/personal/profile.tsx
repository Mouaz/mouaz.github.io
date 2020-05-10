import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { GrLinkedin } from 'react-icons/gr';
import { FaHackerrank, FaRegFilePdf, FaGithub } from 'react-icons/fa';

const linkStyle = {textDecoration: 'none', color: 'black' };

function Profile() {
    return (
        <Card style={{ width: '23rem' }}>
  <Card.Body>
  <Image src='/personal.jpg' style={{ height: '250px', width: '250px' }} roundedCircle />
    <Card.Title>Mouaz Alabsawi</Card.Title>
    <Card.Text>
      Software Engineer & daydreamer
    </Card.Text>
    <ListGroup variant="flush">
    <ListGroup.Item><a href="https://www.linkedin.com/in/mouazalabsawi"
    rel="noopener noreferrer" target="_blank" style={linkStyle}>
      <span><GrLinkedin /></span> /in/mouazalabsawi</a>
      </ListGroup.Item>
      <ListGroup.Item><a href="/Mouaz_Alabsawi_CV.pdf"
    rel="noopener noreferrer" target="_blank" style={linkStyle}>
      <span><FaRegFilePdf /></span> CV</a>
      </ListGroup.Item>
      <ListGroup.Item><a href="https://www.github.com/mouaz"
    rel="noopener noreferrer" target="_blank" style={linkStyle}>
      <span><FaGithub /></span> /mouaz</a>
      </ListGroup.Item>
      <ListGroup.Item><a href="https://www.hackerrank.com/mouaz"
    rel="noopener noreferrer" target="_blank" style={linkStyle}>
      <span><FaHackerrank /></span> /mouaz</a>
      </ListGroup.Item>
  </ListGroup>
  </Card.Body>
    <Button as="a" variant="info" href="mailto:mouaz.alabsawi@gmail.com" target="_blank">Mail me!</Button>
</Card>
    );
  }
  
  export default Profile;