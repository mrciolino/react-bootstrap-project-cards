# Project Card

Project Card is a React component that displays a card with a title, image, description, and links. It's built using React Bootstrap and Iconify.

## Installation
To install the package, run the following command in your project directory:

```
npm install react-bootstrap-project-card
```

## Usage
Import the component in your project and use it as follows:

```
import ProjectCard from 'project-card';

const App = () => {
  const links = [
    {
      key: 'Github',
      url: 'https://github.com/mrciolino/portfolio-site',
      icon: 'simple-icons:github',
    },
  ];

  return (
    <ProjectCard
      links={links}
      image="assets/images/portfolio.webp"
      title="Portfolio Website"
      description="The website you are on right now! Check out the source code below."
    />
  );
};
```

## Props

The component accepts the following props:

*'links'*: An array of objects with the fields *'key'*, *'url'*, and *'icon'*. Each object represents a link to be displayed on the card. *'key'* is the display text for the link, *'url'* is the URL for the link, and *'icon'* is the icon to be displayed next to the link.

*'image'*: A string representing the path to the image to be displayed on the card.

*'title'*: A string representing the title to be displayed on the card.

*'description'*: A string representing the description to be displayed on the card.

## License
Project Card is released under the MIT License.
