# Portfolio - Karolína Krejčová

This is my personal portfolio website, designed to showcase my skills and projects. It is a fully responsive web application combining a modern React frontend with a reliable PHP backend.

## 🚀 Features

- **Dynamic Content:** Skills and projects are dynamically loaded from a MySQL database.
- **Interactive UI:** Built with a mix of React components and vanilla JavaScript for smooth navigation.
- **Contact Form:** A functional contact form using PHPMailer to send messages directly to email.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices using CSS.

## 🛠 Tech Stack

### Frontend

- **React:** Used for dynamic sections (Skills & Projects).
- **JavaScript:** Used for Navbar logic, and contact form handling (Async/Await, Fetch API).
- **HTML5 & CSS3:** Structural layout and custom styling.
- **Axios:** For seamless API communication with the backend.

### Backend & Database

- **PHP:** Handles database communication and server-side logic.
- **PHPMailer:** A library used for secure SMTP email delivery.
- **MySQL:** Database management for storing project and skills data.

## ⚙️ Setup Instructions

To run this project locally, follow these steps:

### 1. Database Setup

- Import the `database.sql` file provided in this repository.

### 2. Backend Configuration

- Navigate to the `php/` folder.
- Create a file named `config.php` (this file is ignored by Git for security).
- Use the following template and fill in your credentials:

### 3. Install Dependencies

- Run these commands in your terminal:
- Frontend (React): `npm install`
- Backend (PHP Libraries): `composer install`. Ensure you have Composer installed.

### 4. Run the Project

- Start your local server (XAMPP/Apache)
- In the project terminal, start the React development server: `npm start`
