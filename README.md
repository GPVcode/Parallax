# Hoops Parallax Project

This project demonstrates an interactive parallax effect using HTML, CSS, and JavaScript with GSAP for animations. It features a basketball court background and animated basketball players that move based on the mouse position to create a depth effect.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Code Explanation](#code-explanation)

## Installation

To get started with the Hoops Parallax project, clone this repository and ensure you have a basic server setup to serve the HTML file along with its CSS and JavaScript files.

```bash
git clone https://your-repository-link
cd your-project-folder
```

## Usage

Open the `index.html` in your web browser. Move your mouse around to see the parallax effect in action on the basketball players and the court.

## Features

- Fullscreen parallax background image of a basketball court.
- Multiple layers of images with different parallax effects.
- Interactive mouse movement detection to change the perspective and depth of the scene.
- GSAP Timeline animations for a smooth initial loading effect.

## Dependencies

- GSAP 3.12.2 for animations
- Font Awesome 5.13.0 for icons

Ensure you include these in your HTML file or update the paths according to where you host these libraries.

## Code Explanation

- `index.html` contains the structure of the project, with `nav` for navigation and `main` for the primary interactive section.
- `styles/index.css` is the stylesheet that contains all the styling rules for the project.
- `app.js` contains JavaScript code that uses GSAP for timeline animations and attaches mouse move event listeners to create the parallax effect.

The JavaScript logic calculates the mouse position relative to the center of the window and adjusts the image positions based on their `data-speed` attributes to simulate depth.

## Contributing

Feel free to fork this project and submit pull requests or open issues to suggest improvements or report bugs.

Enjoy building your parallax experience!