# Project Card

Project Card is a React component that displays a card with a title, image, description, and links. It's built using React Bootstrap and Iconify.

![Project Card](/public/project_cards.png)

## Installation
To install the package, run the following command in your project directory:

```
npm install react-bootstrap-project-card
```

## Usage
Import the component in your project and use it as follows:

```
import Projects from 'react-bootstrap-project-cards'
import Data from './data.json'

<Projects data={Data.projects} />
```

## Data

The component expects an array of objects which is specified in the `props` below. Here is an example:

```
{
    "projects": [
        {
            "image": "https://picsum.photos/id/9/200/300.webp",
            "title": "Project Title",
            "description": "Project Description",
            "links": [
                {
                    "key": "Website",
                    "url": "https://www.matthewciolino.com/",
                    "icon": "gg:website"
                }
            ]
        },
        ...
}
```

## Props

The component accepts the following props:
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| links | Array of objects | Yes | Each object should contain the fields `key`, `url`, and `icon`. `key` is the display text for the link, `url` is the URL for the link, and `icon` is the icon to be displayed next to the link. |
| image | String | Yes | Path to the image to be displayed on the card.|
| title | String | Yes | Title to be displayed on the card.|
| description  | String | Yes | Description to be displayed on the card.|


## License
Project Card is released under the MIT License.
