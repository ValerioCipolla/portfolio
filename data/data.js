export const projects = [
  {
    id: 1,
    title: "School Of Code Link Tracker",
    liveLink: "https://soc-links-tracker.herokuapp.com/",
    sourceLink: "https://github.com/ValerioCipolla/soc-link-tracker-full-stack",
    techStack: "React JS, Node.js, PostgreSQL",
    description:
      "I worked on this project as a member of a team of 4 people. We were asked by SchoolOfCode to solve a problem that we encountered through the bootcamp. We thought that one of the most difficult things for us to do up until that point was to keep track of all the resources that we were shown on a daily basis! That's why we decided to create something that would help us do that. We focused on usability and accessibility, that meant creating an easy-to-use and functional user interface with React which delivered an excellent UX. Most of the time on this project I spent it looking after the back-end part (setting up the PostgreSQL database on Heroku and creating the API that serves the front-end with Node.js) and deploying the application. I also created the form to add new resources to the database using React. During this project I worked on my back-end and front-end skills, deployed a full-stack application for the first time and understood what it means to work in a team and cooperate using version control (git branching, pull requests, merge requests and code reviews).",
  },
  {
    id: 2,
    title: "myQuotes Collection",
    liveLink: "https://quote-generator-full-stack.herokuapp.com/",
    sourceLink: "https://github.com/ValerioCipolla/quote-collection-full-stack",
    techStack: "JavaScript, HTML, CSS, Node.js, PostgreSQL",
    description:
      "Halfway through the SchoolOfCode Bootcamp, we had Christmas holidays, I could not afford to stop coding for 2 weeks so I decided to work on a solo project to cement all of the knowledge acquired in the previous 6 weeks. This is the first full-stack application I ever built, I started by setting up and populating a database with quotes that I like, I then built the server and the CRUD API that would allow me to interact with the database (getting quotes by id, or author, creating new quotes, updating or deleting existing quotes). The final days were dedicated to building the front-end, at the time I didn't know how to use React yet, so I had to use pure HTML, CSS and vanilla JS. Working on this project taught me how to work with CRUD API and databases, and I also used Nodemailer for the first time, to give my users the ability to e-mail quotes to whoever they like (themselves included). Looking at the future: I plan on changing the front-end to React JS as it would make my codebase a lot easier to navigate and understand, as well as making a better user experience.",
  },
  {
    id: 3,
    title: "React Snake Game",
    liveLink: "https://react-snake-game-valeriocipolla.netlify.app/",
    sourceLink: "https://github.com/ValerioCipolla/snake-game-react",
    techStack: "React JS, CSS",
    description:
      "Right after learning React on the SchoolOfCode Bootcamp, I felt like I needed more practice, to really understand how this great library works. I could see its potential, but I didn't really grasped how it worked yet. That is why I decided to embark on a little solo project, to work on during evenings and week-ends: build the famous Snake Game - we all played it on our phones at least once in our life - and I was gonna do it using only React (and a little CSS to make it look better :D). I did NOT follow a tutorial, and I stopped myself from googling 'how to build a snake game with react' - I wanted to struggle, because I strongly believe that is what I needed to become a better software engineer. It's fair to say it was a battle, I had to figure out how to represent a snake on the screen, how to make it move and how to make it change direction. I ended up using an array of squares to create the snake, various timeouts to make it move at regular intervals and event listeners to tell the snake when and how to change directions. I can honestly say 90% of the things I know about React, I learnt them through this project, I had to work out where various states needed to live, when it was necessary to lift state up, how to use useEffect and how to clean up after myself when setting up timeouts and event listeners, how useReducer exactly works and many more things. I really do suggest you try it out by clicking the LIVE SITE button above - it's FUN! Looking at the future: I want to create the back-end for this project, to make it possible for people to enter their score once they finish playing and display a leaderboard to see what the best score is. I also want to create a tutorial where I explain HOW I built the game so other people can learn it with me.",
  },
];
