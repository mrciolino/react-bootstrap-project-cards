import { Container } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = ({ data }) => {
    return (
        <Container className='d-flex flex-wrap justify-content-center'>
            {data.map((project, index) => (<ProjectCard key={index} {...project} />))}
        </Container>
    );
};

export default Projects;
