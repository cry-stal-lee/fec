# 🐈 Project Catwalk
![project-catwalk](https://user-images.githubusercontent.com/52181740/138842613-0c02e947-3083-4414-9efd-34349e9e7a37.gif)

*PROJECT CATWALK* is a single-page e-commerce web application made using React and Node/Express. All client requests are routed and authenticated through our server to an external API. This project was created by a team of four, the Marvelous Maitake. 

As tech lead and the UI/UX owner, I created our server, set up continuous integration with CircleCI, established state management with React Context, and formalized our team workflow & pull request system. I also designed and styled the entire application using styled-components. Individually, I implemented the Related Products and Your Outfit components.

## ✨ Features
- Search by product ID to bring up product page
- Built-in light and dark mode

### Overview
- Scroll through different photos of the same style using the thumbnail carousel
- Click thumbnails to view different styles of the same product
- Click on image to magnify

### Related Products & Outfit
- View all products related to the overview product by scrolling through carousel
- Clicking on product card brings you to product page
- Clicking on star brings up comparison modal between clicked product and current product
- Add and remove products to your outfit

### Questions & Answers
- View all questions and answers submitted about selected product
- Submit your own questions or add answers to questions with image upload feature
- Can mark answers as helpful or report them

### Ratings & Reviews
- Displays average rating and all submitted reviews for selected product
- Submit your own review/rating with image upload feature
- Can mark reviews as helpful or report them

## 💻 Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

## 👤 Usage
- bundle files and run server
```
npm run transpile
npm run server
```
- copy config.example.js in server folder
- rename it to config.js
- uncomment code and replace 'GITHUBKEY' with your personal access token
- open client
```
open http://localhost:3000/
```

## 🛠️ Technologies
- React hooks 
- React Context API
- Express/Node
- Styled Components
- Jest & React Testing Library
- CircleCI

## 🤝 Authors
- [@cry-stal-lee](http://github.com/cry-stal-lee)
- [@YueCodeGG](http://github.com/YueCodeGG)
- [@Kodylow](http://github.com/Kodylow)
- [@jshzglr](http://github.com/jshzglr)
