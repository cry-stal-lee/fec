# 🐈 Project Summary

Project Catwalk is a single-page e-commerce web application made using React and Node/Express. This project was created by a team of four, the Marvelous Maitake, as a frontend capstone project for Hack Reactor. All client requests are routed through our server to an external API.

## ⚙️ Component Details
- The overview component features the details of a single product, allowing the user to select different styles and scroll through photos of each style. 
- The related products component displays all products related to the overview product in a carousel form. Each product card allows you to compare the related product with the current product, or to enter detailed view on the related product. The outfit component is in a similar form, and allows the user to add or remove products into the carousel. 
- The questions and answers component features various questions and answers submitted about the overview product, and also allows the user to submit their own q&a's. 
- The ratings and reviews component displays the average rating for the overview product, and also displays all of the submitted reviews for the product. Users can submit their own ratings and reviews as well.

## 💻 Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

## 👤 Usage
```
# bundles files
npm run transpile

# initializes server
npm run server

# enter api key
copy config.example.js in server folder
rename it to config.js
uncomment code and replace 'GITHUBKEY' with your personal access token

# open client
open http://localhost:3000/ in browser
```

## 🛠️ Tech Stack
- React hooks 
- React Context API
- Express/Node
- Styled Components
- Jest & React Testing Library
- CircleCI
