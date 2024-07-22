# PersonalPortfolio

Welcome to the PersonalPortfolio project, an Angular-based personal portfolio site designed to showcase my work and skills. This project emphasizes front-end development to enhance my versatility, despite my primary focus on back-end, AI, and data.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features
- Single-page application built with Angular 15
- Modular structure for easy maintenance and scalability
- Dynamic components for an interactive user experience
- Integration based on the PDF version of my own curriculum vitae

## Installation

Ensure you have Angular CLI and Node.js installed. You can set up the environment using the following steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/lucas066001/PersonalPortfolio.git
    cd PersonalPortfolio
    ```

2. **Install the dependencies**:
    ```bash
    npm install
    ```

3. **Run the application**:
    ```bash
    ng serve
    ```

4. **Access the application**:
    Open your browser and navigate to `http://localhost:4200/`.

## Usage

You can start by exploring the provided components and services to understand how the portfolio is structured and how data flows through the application. The project is designed to be modular, allowing easy updates and maintenance.

## Project Structure

The project is organized into the following directories:

```
PersonalPortfolio/
├── src/
│   ├── app/
│   │   ├── body/
│   │   │   ├── footer/
│   │   │   ├── header/
│   │   │   ├── main-resume/
│   │   │   └── ...
│   │   ├── constants/
│   │   │   ├── AppTimings.ts
│   │   │   └── ...
│   │   ├── services/
│   │   │   ├── question.service.ts
│   │   │   └── ...
│   │   ├── models/
│   │   │   ├── Label.ts
│   │   │   ├── Hobbie.ts
│   │   │   └── ...
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── ...
│   ├── assets/
│   ├── environments/
│   ├── index.html
│   ├── main.ts
│   └── ...
├── angular.json
├── package.json
└── README.md
```

- `src/app/body/`: Contains all the components responsible for rendering different sections of the page.
- `src/app/constants/`: Holds all static information and data structures used throughout the application.
- `src/app/services/`: Includes services that implement various algorithms necessary for the application’s functionality.
- `src/app/models/`: Includes data structures used by the application to display practical informations.

## Dependencies

The following table lists the required dependencies and their versions:

| Package       | Version  |
|---------------|----------|
| Angular       | 15       |
| Node.js       | 20.11.1  |

## License

This project is licensed under the GPL-3.0 License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

This project is a front-end endeavor aimed at pushing my versatility, despite my primary focus on back-end, AI, and data. The project structure is designed to cluster components by utility and nature (e.g. display components, services, constants), ensuring maintainability and scalability.

Happy coding!