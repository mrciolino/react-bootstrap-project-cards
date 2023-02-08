import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import React from 'react';
import './ProjectCard.css';


// This is a functional component that is used to display a card with a title, image, description, and links
// It takes in a prop object with the following fields: image, title, description, and links
// Each field in links is an array with the first element being the URL and the second element being the icon

// {
//     "image": "https://via.placeholder.com/150",
//     "title": "Project Title",
//     "description": "Project Description",
//     "links": [
//         {
//             "key": "github",
//             "url": "https://github.com",
//             "icon": "mdi:github"
//         }
//     ]
// }

const ProjectCard = ({ links, image, title, description }) => {
    return (
        <Card className='project col-sm-12 col-md-4 col-lg-3 flex-grow-1'>
            <Card.Img variant="top" src={image} style={{ objectFit: 'cover' }} height="150vw" alt={title} />
            <Card.Body>
                <Card.Title as="h4">{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                {links.map(({ key, url, icon }) => (
                    <Button className="m-1 primary" key={key} variant="primary" size="sm" href={url}>
                        <Icon className="m-1" icon={icon} /> {key}
                    </Button>
                ))}
            </Card.Body>
        </Card>
    );
};

ProjectCard.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
        }),
    ).isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ProjectCard;
