# TravelGo Frontend (By Snigdha)

## Project Description
TravelGo is a user-friendly frontend web application designed to help travelers explore hotels, read travel blogs, and manage their favorite hotels efficiently. The application provides an interactive and responsive interface, allowing users to filter hotels by country, view detailed hotel descriptions, and read travel blogs. 

This project is built using **React.js** for UI development, and it follows a modular component structure for better code maintainability. It features dynamic content fetching, intuitive navigation, and a well-structured UI/UX design.

## Features
- **Home Page:** Displays featured blogs and hotels with quick navigation.
- **Hotels Page:** Lists hotels and provides a country-based filtering system.
- **Hotel Details Page:** Offers detailed insights into a selected hotel, including room types, amenities, policies, and reviews.
- **Blog Details Page:** Displays full content of a blog when clicked.
- **Favourites Page:** Allows users to save and manage their favorite hotels.
- **About Page:** Provides an overview of the TravelGo platform.
- **Responsive Design:** Ensures accessibility across different devices.
- **API Integration:** Fetches hotel and blog data dynamically.

---

## Folder Structure
```
src/
│── assets/
│   ├── css/Banner.css          # CSS for Banner component
│   ├── Countries.js            # List of countries for hotel filtering
│
│── components/
│   ├── Banner.jsx              # Banner component
│   ├── BlogCard.jsx            # Blog card component
│   ├── Footer.jsx              # Footer component
│   ├── Header.jsx              # Header/Navbar component
│   ├── HotelCard.jsx           # Hotel card component
│
│── hooks/
│   ├── useHotels.js            # API calls for fetching hotels
│   ├── useBlogs.js             # API calls for fetching blogs
│
│── pages/
│   ├── About.jsx               # About page
│   ├── BlogDetails.jsx         # Blog details page
│   ├── Favourites.jsx          # Favourites page
│   ├── HomePage.jsx            # Homepage
│   ├── HotelDetails.jsx        # Hotel details page
│   ├── Hotels.jsx              # Hotels listing page
│
│── App.js                      # Main App component
│── main.jsx                    # Entry point of React application
│── README.md                   # Project documentation
```

---

## Technologies Used
- **React.js** - Frontend framework
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling components
- **HTML5** - Markup language
- **Fetch API** - Fetching data from backend
- **React Hooks** - State and effect management

---

## Installation & Setup
Follow these steps to set up the TravelGo frontend project locally:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/travelgo-frontend.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd travelgo-frontend
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Start the development server:**
   ```sh
   npm run dev
   ```
   The application will be available at `http://localhost:5173` (or as indicated in the terminal).

---

## Deployment
To build and deploy the project:
```sh
npm run build
```
I have used **Vercel** to deploy the application.


