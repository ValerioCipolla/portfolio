export const projects = [
  {
    id: 1,
    title: "Bossa Nova Job Application Tracker (Front-End)",
    liveLink: "https://bossanova.netlify.app/",
    sourceLink:
      "https://github.com/ValerioCipolla/final-project-repo-bossa-nova",
    presentationLink: "https://www.youtube.com/watch?v=TiA1E__T4sA",
    techStack:
      "React JS, Tailwind CSS, React-Router, Cypress, React Testing Library, Auth0",
    description:
      "Our team of 6 researched, designed and built this app from scratch in 4 weeks. We were all students at the School of Code. We wanted to create a job tracker for tech workers that was better than using spreadsheets. Our app is more visually appealing, allows job filtering, has multiple fields and gives carefully selected resources for gaining a job in tech. Our application enables the user to be authenticated via their Google account or email/password. They can add new jobs, edit and delete existing jobs, filter jobs by status and company and search for useful resources to get a tech role. We used React because we wanted to learn more about this and get more practice with it. React is very flexible and allowed us to create many reusable components which reduced our development time. It’s also very fast and easy to test. We decided to use Tailwind CSS instead of traditional CSS stylesheets because it offered a faster styling process and is a mobile-first, responsive framework. Tailwind took some time to learn, however it saved us time and altering styles near the end of the 4 week project. We used auth0 for authentication and authorisation because it was easy to implement and reliable. We used React Router to enable us to make a one page app with nested routes that improved our app’s performance. React Alert was used to style alert messages on desktop and mobile connected to form validation. Finally, we utilised a table from MUI component library to have a stable, working table we could rely on.",
  },
  {
    id: 2,
    title: "Bossa Nova Job Application Tracker (Back-End)",
    liveLink: "https://bossanova.netlify.app/",
    sourceLink:
      "https://github.com/ValerioCipolla/final-project-api-bossa-nova",
    presentationLink: "https://www.youtube.com/watch?v=TiA1E__T4sA",
    techStack: "Node.js, Express.js, MongoDB, Mongoose, Jest, Supertest",
    description:
      "The app we built is a job-application tracking app. We needed an api that would allow us to store and retrieve information about users at all times. We initially thought about using PostgreSQL as a database because that is what we had been using up until that point on the bootcamp, but it didn't make much sense to use a relational database for our project, as we would have ended up with a huge table and countless repeated fields and some empty fields as well. So even though we didn't have any experience with non-relational tables yet, we decided we were going to use MongoDB. It took a few days of exploring and researching before we became familiar with it, but it was a an enjoyable and useful experience. We use Mongoose to create the document schema and mongoose CRUD operations to perform actions on the database.",
  },
  {
    id: 3,
    title: "School Of Code Link Tracker",
    liveLink: "https://soc-links-tracker.herokuapp.com/",
    sourceLink: "https://github.com/ValerioCipolla/soc-link-tracker-full-stack",
    techStack: "React JS, CSS, Node.js, Express.js, PostgreSQL, Jest",
    description:
      "I worked on this project as a member of a team of 4 people. We were asked by SchoolOfCode to solve a problem that we encountered through the bootcamp. We thought that one of the most difficult things for us to do up until that point was to keep track of all the resources that we were shown on a daily basis! That's why we decided to create something that would help us do that. We focused on usability and accessibility, that meant creating an easy-to-use and functional user interface with React which delivered an excellent UX. Most of the time on this project I spent it looking after the back-end part (setting up the PostgreSQL database on Heroku and creating the API that serves the front-end with Node.js) and deploying the application. I also created the form to add new resources to the database using React. During this project I worked on my back-end and front-end skills, deployed a full-stack application for the first time and understood what it means to work in a team and cooperate using version control (git branching, pull requests, merge requests and code reviews).",
  },
  {
    id: 4,
    title: "myQuotes Collection",
    liveLink: "https://quote-generator-full-stack.herokuapp.com/",
    sourceLink: "https://github.com/ValerioCipolla/quote-collection-full-stack",
    techStack: "JavaScript, HTML, CSS, Node.js, Express.js, PostgreSQL, Jest",
    description:
      "Halfway through the SchoolOfCode Bootcamp, we had Christmas holidays, I could not afford to stop coding for 2 weeks so I decided to work on a solo project to cement all of the knowledge acquired in the previous 6 weeks. This is the first full-stack application I ever built, I started by setting up and populating a database with quotes that I like, I then built the server and the CRUD API that would allow me to interact with the database (getting quotes by id, or author, creating new quotes, updating or deleting existing quotes). The final days were dedicated to building the front-end, at the time I didn't know how to use React yet, so I had to use pure HTML, CSS and vanilla JS. Working on this project taught me how to work with CRUD API and databases, and I also used Nodemailer for the first time, to give my users the ability to e-mail quotes to whoever they like (themselves included). Looking at the future: I plan on changing the front-end to React JS as it would make my codebase a lot easier to navigate and understand, as well as making a better user experience.",
  },
  {
    id: 5,
    title: "React Snake Game",
    liveLink: "https://react-snake-game-valeriocipolla.netlify.app/",
    sourceLink: "https://github.com/ValerioCipolla/snake-game-react",
    techStack: "React JS, CSS",
    description:
      "Right after learning React on the SchoolOfCode Bootcamp, I felt like I needed more practice, to really understand how this great library works. I could see its potential, but I didn't really grasped how it worked yet. That is why I decided to embark on a little solo project, to work on during evenings and week-ends: build the famous Snake Game - we all played it on our phones at least once in our life - and I was gonna do it using only React (and a little CSS to make it look better :D). I did NOT follow a tutorial, and I stopped myself from googling 'how to build a snake game with react' - I wanted to struggle, because I strongly believe that is what I needed to become a better software engineer. It's fair to say it was a battle, I had to figure out how to represent a snake on the screen, how to make it move and how to make it change direction. I ended up using an array of squares to create the snake, various timeouts to make it move at regular intervals and event listeners to tell the snake when and how to change directions. I can honestly say 90% of the things I know about React, I learnt them through this project, I had to work out where various states needed to live, when it was necessary to lift state up, how to use useEffect and how to clean up after myself when setting up timeouts and event listeners, how useReducer exactly works and many more things. I really do suggest you try it out by clicking the LIVE SITE button above - it's FUN! Looking at the future: I want to create the back-end for this project, to make it possible for people to enter their score once they finish playing and display a leaderboard to see what the best score is. I also want to create a tutorial where I explain HOW I built the game so other people can learn it with me.",
  },
  {
    id: 6,
    title: "change-to-upper-kata",
    liveLink: "https://github.com/ValerioCipolla/change-to-upper-kata",
    sourceLink: "https://github.com/ValerioCipolla/change-to-upper-kata",
    techStack: "Python",
    description:
      "During the bootcamp, just for one day, we were given the freedom to learn whatever we wanted for the day. I was in a group of 3 people and we decided to learn about Python. We spent about 5 hours learning the basics of it and the last hour of the day we decided to create a small game (inspired by katas on Codewars) to cement our knowledge (and challenge our friends :D). Ideating and creating the challenge was a lot of fun and it gave me an opportunity to practice the newly acquired Python skills. I really enjoyed writing the tests for the challenge (to give the users a way to check if their code works as it should), I used the unittest library for it. By clicking on any of the buttons above you can visit the GitHub repo to look at the source code, and (if you fancy a challenge) you can follow the instructions in the README to play with us!",
  },
  {
    id: 7,
    title: "Recipe Finder",
    liveLink: "https://valeriocipolla.github.io/vanilla-js-recipe-finder/",
    sourceLink: "https://github.com/ValerioCipolla/vanilla-js-recipe-finder",
    techStack: "HTML, CSS, JavaScript",
    description:
      "I built this project at the end of week 3 of the Bootcamp. That week on the course we had talked about design, css, and asynchronous operations like fetching from an API. I decided to put all of those concepts together by creating a simple application that uses a free API to fetch recipes. Rather than displaying all of the recipes together I decided to give the users the option to filter the recipes through nationality, before displaying the recipes as cards arranged in a grid created with css. Once the recipes are displayed, the user can browse through them and he/she can pick the one she likes the most, the recipes card have an onClick listener that will open up a modal with information about that particular recipe and a link to the step-by-step procedure.",
  },
  {
    id: 8,
    title: "Vanilla JavaScript Dictionary",
    liveLink: "https://valeriocipolla.github.io/vanilla-js-dictionary/",
    sourceLink: "https://github.com/ValerioCipolla/vanilla-js-dictionary",
    techStack: "HTML, CSS, JavaScript",
    description:
      "I originally built this project at the end of week 2 of the School of Code bootcamp. That week we were taught about DOM manipulation and async operations. So my partner and I decided to put everything together to build a simple application that allows the user to look up an english word and find its meaning, origins, and pronunciation (audio file included). We used the querySelector method to interact with the DOM and a free API to fetch information about the words the users can input. Later on I spent some additional time to refactor the code and to add responsiveness, so it can be used on both big and small screens. The app has some error-handling (if the word is not found, it lets the user know and advises to check the spelling) and also keeps track of the history of words that were looked up, it has a button that when clicked shows the words that were searched during that session.",
  },
  {
    id: 9,
    title: "Harry Potter Quiz",
    liveLink: "https://valeriocipolla.github.io/harry-potter-quiz-app/",
    sourceLink: "https://github.com/ValerioCipolla/harry-potter-quiz-app",
    techStack: "HTML, CSS, JavaScript",
    description:
      "I built this project about 2 months into my JavaScript journey (before starting the School of Code Bootcamp). I decided to build this because I am a huge Harry Potter fan, and I wanted to create something to challenge my friends with! I started by taking a 'mobile-first' approach in the design of this application, because (from experience) I knew if I had started with the desktop design, it would have been difficult to adapt it to a smaller screen later on, and this decision really paid off! Regarding to the logic behind it, working on this projects helped me improve on some core JavaScript data-structures skills (objects, arrays and if statements) and Web Development skills (DOM manipulation). Some of the the things I learned to use during this project: document.getElementByID(), document.createElement(), document.querySelectorAll() and template literals. Looking at the future: I'd like to improve this project by increasing the number of possible questions (building a back-end API and a database from which I can fetch the questions). If you fancy a challenge, click on the 'LIVE SITE' button above and give it a go!",
  },
  {
    id: 10,
    title: "How Many Days Old Are You?",
    liveLink: "https://valeriocipolla.github.io/how-many-days-old-App/",
    sourceLink: "https://github.com/ValerioCipolla/how-many-days-old-App",
    techStack: "HTML, CSS, JavaScript",
    description:
      "This is an other project I built before starting the School Of Code Bootcamp. I was learning about the date object in javascript, and how to use it, and I was struggling to grasp exactly how it worked, and as I always do when I am trying to figure something out, I built something with it! Learning about how the Date object works was one of the challenges, an other challenge was error handling and dealing with edge cases - what if the user inputs a non-valid date or a date that lives in the future? No-one can be minus-days olds! And finally, making things happen when a button is clicked (it was my first time using buttons in a project). Things I have learnt to use along the way: new Date(), Date.now(), Date.getTime(), document.createElement(), document.body.append(), element.addEventListener(). Click on the 'LIVE SITE' button above and find out how many spins you have been through on this planet! ",
  },
  {
    id: 11,
    title: "JavaScript Typing Animation",
    liveLink:
      "https://valeriocipolla.github.io/typing-and-erasing-Vanilla-JavaScript/",
    sourceLink:
      "https://github.com/ValerioCipolla/typing-and-erasing-Vanilla-JavaScript",
    techStack: "HTML, CSS, JavaScript",
    description:
      "My first ever project. Fresh out of the JavaScript Algorithm Scripting and Data Structure course on freeCodeCamp, I knew it was time for me to build my first thing. I was inspired by a Codepen I had seen one afternoon, I was tempted to look at the source code, but I stopped and thought `Why don't I build it myself?'. In my mind it was clear what I needed to do, within a few minutes I had a detailed plan of action, so I sat down, stared at my keyboard and... nothing happened. It was difficult to get started, without anyone or anything holding your hand through the process, but I am so glad I did. So I started with what I was comfortable with, HTML and CSS. Then I started adding very small bits of JavaScript code, I had to figure out how to grab stuff from the DOM with JavaScript, and how to change it depending on a set of different conditions. Some of the things I have learnt: document.getElementById(), Math.random(), setTimeout(), string.slice(). Slowly but surely I kept going and within a few hours I had a finished product I was - and still am - really proud of.",
  },
];
