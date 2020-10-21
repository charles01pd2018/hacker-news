# ![Hacker News Cover](/public/assets/creatives/cover.png)
A Hacker News web application created using the React framework.

## A broad overview
The hacker news web app delivers hacker news stories, just for you! Search one of your favorite hacking topics and start browsing away!
Try searching 'React' and see what pops up!

## How it works
This application relies on an external API to retrieve the hacker stories. A maximum of 20 stories are returned from the API, and these stories are automatically served in order of points - starting from highest to lowest. Data is then extrapolated from the stories, stored into Item components, and then served to the web visiter as a list. 

The program makes use of React hooks to store various states. The hooks follow a progressive sequence for when a user makes a search:
User inputs -> search term updates -> API url updates -> stories fetched and updated.

These state variables are passed to functions as inputs and React components as props.
Alternatively, functions are passed as props to handle certain state changes.

## What the web app looks like:

# ![Hacker News Demo](/public/assets/creatives/demo.png)