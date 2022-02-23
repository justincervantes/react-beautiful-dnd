# Little Program to Explore Tailwind CSS Configurations
Playground to better understand how Tailwind should be configured as per docs. As most people will generally start with CRA, Tailwind comes out of the box configured to work with typical CRA configurations (also the TS template). When trying to add this later to a non CRA project, things become a little bit harder to update as you have to edit the webpack configurations. I'm dealing with a desire to upgrade to a newer Tailwind CSS version but am having troubles configuring it in a work environment.

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
