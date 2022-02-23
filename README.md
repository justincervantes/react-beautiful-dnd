# Little program to learn react-beautiful-dnd
I realize there are two popular drag and drop libraries on npm.js: react-dnd and react-beautiful-dnd. I used react-dnd for a hobby chess project, however react-beautiful-dnd is an Atlassian library which enables you to build Trello- and Jira-esque UIs. This project is a playground for learning react-beautiful-dnd. 

# Configuration notes

This project was created using the following steps:
- npx create-react-app <name> --template typescript
- cd <name>
- npm install -D tailwindcss postcss autoprefixer 
- npx tailwindcss init
- adding "./src/**/ *.{js,jsx,ts,tsx}" to the content array of tailwind.config.js (remove the space on the third star)
- adding the tailwind directives to the index.css that comes with cra (@tailwind base; @tailwind components; @tailwind utilities;)
- npm install react-beautiful-dnd @types/react-beautiful-dnd

# Usage
npm i
npm run start
