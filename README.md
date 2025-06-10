# Skip Hire Finder

This is a React application designed to display available skip sizes, pricing, and hire periods based on a specific postcode and area. It fetches data from an external API and presents it in a user-friendly, responsive card layout.

## Table of Contents

-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Running the Application](#running-the-application)
-   [Project Structure](#project-structure)
-   [API Endpoint](#api-endpoint)
-   [Styling](#styling)
-   [Responsive Design](#responsive-design)
-   [Future Improvements](#future-improvements)
-   [License](#license)

## Features

* **Dynamic Data Fetching:** Fetches skip availability and details from an external API.
* **Card-based Display:** Presents each skip as an individual card with relevant information.
* **Price Calculation:** Displays the total price including VAT.
* **Hire Period Information:** Clearly shows the number of days for the hire period.
* **"Not Allowed on Road" Warning:** Visually indicates if a skip cannot be placed on the road.
* **Loading and Error States:** Provides user feedback during data fetching and in case of errors.
* **Responsive Design:** Adapts the layout for optimal viewing on various screen sizes (desktop and mobile).

## Technologies Used

* **React:** Frontend JavaScript library for building user interfaces.
* **HTML5:** Structure of the web page.
* **CSS3:** Styling and layout, including Flexbox for responsiveness.
* **JavaScript (ES6+):** Application logic.
* **Fetch API:** For making HTTP requests to the backend.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (Node Package Manager) installed on your machine.

* **Node.js**: [Download & Install Node.js](https://nodejs.org/en/download/) (npm is included with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/LyneSultan/remwaste
    cd remwaste

    ```
    (Replace `<your-repository-url>` with the actual URL of your Git repository and `<your-project-folder>` with your project's directory name.)

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Application

After installing the dependencies, you can run the application in development mode:

```bash
npm start
