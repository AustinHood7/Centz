# **Centz**

A react-flask based web application to provide a platform for providing real-time data on cryptocurrency (based on Coinranking API data). This web app focuses on helping find the top current crypto and visualize trends using the Google Charts API.

# [Deployment (Heroku)](https://coin-graphs.herokuapp.com/)
Access will end Jan 1st, 2023.

### Built With

- [![React][react.js]][react-url]
- [![Flask][flask]][flask-url]

## **Table of Contents**

1. [How to Use](#how-to-use)
2. [Project Basics](#project-basics)
3. [Design Diagrams](#design-diagrams)
4. [Resources](#resources)
5. [Things To Do](#things-to-do)
6. [Blog Posts](#blog-posts)
7. [Problems](#problems)
8. [Pre-development Planning](#pre-development-planning)
9. [Acknowledgments](#acknowledgments)

&nbsp;

## How to Use

### Start
Navigate to [Centz](https://centz.herokuapp.com) or [Backup](https://coin-graphs.herokuapp.com)

### First Page
Default cryptocurrency coin selected is Bitcoin, and the default time period is 24 hours. \
You may hover over the graph and line in order to see the specific price and time.

### Changing the time period
On the right side of the screen, click on the "24h" dropdown selection, and choose your desired value. \
After clicking your value, you must click the "Update Time Period" button in order for the graph to change. \
This will be evident from the graph animation as well as the "Showing data for:" label beneath the button. \
This value may be changed an indefinite amount of times.

### Changing the selected cryptocurrency/coin
On the left side of your screen, you may click any of the coins. This will change the data shown on the rest of the screen, replacing each section with data accurate to your newly selected coin. \
After you select a new coin, the time period will default back to 24 hours. This may be changed (see above), but the time period will not stay in effect with each newly chosen coin. \
You may choose as many different coins as you would like to within your time on the website.

### Navigating to another page
On the top of your screen will be three buttons: \
[Search icon] - future implementation; will search through various coins, but clicking the coin yields no results. \
[Centz icon] - clicking this will direct you to the main page where you may select coins and see visual graph data. \
[About page] - clicking this will direct you to the about page where you can see a short section on what Centz is and how to use it. It also contains information about the team that created Centz, as well as their contact information.

&nbsp;

## Project Basics

### Project Members

| Name               | LinkedIn                                       |
| ------------------ | ---------------------------------------------- |
| Christian Apostoli | https://www.linkedin.com/in/christianapostoli/ |
| Jake Hanson        | https://www.linkedin.com/in/jakewhans/         |
| Austin Hood        | https://www.linkedin.com/in/austin-hood7/      |                        

&nbsp;

### **Project Deadlines**

- Sep 6: Project Proposal (DONE)
- Oct 14: Project Check-in 1 (DONE)
- Oct 21: Project Prototype/Release 1 (DONE)
- Nov 6: Project Check-in 2 (DONE)
- Nov 7: Deliverable Basic functional product (DONE)
- Nov 20: Final Check-in - Presentation Draft (DONE)
- Nov 29: Group Presentation / Demo (DONE)
- Dec 9: Project / Report Due (DONE)

&nbsp;

### **Presentation**
Here is the presentation for our project [Centz Presentation](https://docs.google.com/presentation/d/e/2PACX-1vRvB3jB3dTh8HM2Z2G4U86L9UZ5Se1Th1lz_PZGIco4JyxJaC9ZAfvbrsxuo7_JUw9uIoVVALk_YjUN/pub?start=false&loop=false&delayms=3000)

&nbsp;

### **Programming Standards**
We are following [Google Style Guides](https://google.github.io/styleguide/) as closely as possible

### **Original Project Proposal**

We will be building a web application that will take cryptocurrency data and use this to build analytics including graphs and charts based on the user's choice of coins and timelines. Essentially, the user will be able to build a profile of their investments and utilize the analytics of these investments to help them make well-informed decisions.

The data that is gathered from the Coinranking API. The user will have the option of saving specific coin data to a database. We have an idea of what to save to the database (coin UUID, name, price, datetime etc.) but need to get more into development before deciding on exactly what data to save. We would like to implement a database element to the application to give users the option to recall data that they saw previously. We also hope to implement a feature that sends notifications (via email or text) when a coin reaches a certain price or range of prices.

The application has a ReactJS (JavaScript) front-end and a Flask (Python) back-end. The data will be retrieved through the Coinranking API which returns data in a JSON format. We are currently hosting the web application through Heroku, but due to their recent act of removing the free tier, we may be switching deployment services. Other options include AWS or Firebase, but we are still considering others.

### **Updated Project Summary (11/26/2022)**

We will be building a web application that will take cryptocurrency data and use this to build analytics including graphs and charts based on the user's choice of coins and timelines. Essentially, the user will be able to utilize the analytics of these investments to help them make well-informed decisions.

The data is gathered from the Coinranking API. Future implementations include allowing the user to have the option of saving specific coin data to a database. We have an idea of what to save to the database (coin UUID, name, price, datetime/epoch time etc.) but need to get more into development before deciding on exactly what data to save. We would like to implement a database element to the application to give users the option to recall data that they saw previously. In the future, we also hope to implement a feature that sends notifications (via email or text) when a coin reaches a certain price or range of prices.

The application has a ReactJS (JavaScript) front-end (user interface) and a Flask (Python) back-end (server). The data will be retrieved through the Coinranking API which returns data in a JSON format. We are currently hosting the web application through Heroku, but due to their recent act of removing the free tier, we may be switching deployment services. Other options include AWS or Firebase, but we are still considering others. As of 11/28/2022, Heroku no longer has a free tier. However, considering our great experience with Heroku and ease of deployment, we will be utilizing Heroku's Basic (previously Hobby) tier in order to continue showing off Centz.

&nbsp;

## Design Diagrams

### Figma

- See entire design [here](https://www.figma.com/file/6ZBvvhyBGC0SRtxnL6WHp7/Stock-Page-Design) (updated Sep 11 2022)

### Use Case Diagram

Needs to be updated <br>
![Use Case Diagram](/docs/useCase.png)

### Component Diagram

Updated 11/10/22 <br>
![Component Diagram](/docs/componentv2.png)

&nbsp;

## Resources

- [GitHub](https://github.com/AustinHood7/Centz) - [Heroku App](http://centz.herokuapp.com)
- Front-end: ReactJS
  - [React Google Charts](https://react-google-charts.com/), ...
- Back-end: Python
  - Flask, requests, ...
- API(s): [Coinranking](https://developers.coinranking.com/api/documentation) - [Google Charts](https://developers.google.com/chart)
- Deployment: [Heroku](https://www.heroku.com/)

&nbsp;

## Things To Do

See [Issues page](https://github.com/AustinHood7/Centz/issues) or [Kanban board](https://github.com/users/AustinHood7/projects/1)

&nbsp;

## Blog Posts

[Git Source Control](/docs/git.pdf)

[Initial React + Flask Setup](/docs/setup.pdf)

&nbsp;

## Problems

- .gitignore - include node_modules (from React), venv (from Python virtual environment) [React](https://github.com/AustinHood7/Centz/blob/main/client/.gitignore), [Python](<(https://github.com/AustinHood7/Centz/blob/main/.gitignore)>)
- Epoch time - convert to normal time
- Graphs - y-axis option must be removed so that the graph displays properly
- Pip/python - globally install before developing; if issue persists, install within repo directory
- File structure - see repo for simple integration as opposed to old style with "client" (frontend) and "flask" (backend) folders
- Git/source control - see [Git blog post](#blogs) (from Austin)
- Deployment - front end runs on localhost:3000 by default; back end runs on localhost:5000 by default; include "proxy: localhost:5000" in React's package.json, so that any data being transferred on :5000
- POST requests - after much trial and error, settled on using Axios React library, which made POST requests super easy. For more information, see Home.js, Graphs.jsx and Sidebar.jsx; POST requests send user data from front-end to back-end, including time period of graph and UUID of coin that is selected from the sidebar.

&nbsp;

## Pre-development Planning

### **Project Ideas**

- Stock Trading bot
- Stock data analysis
  - Take data by web scraping or API
  - Real time analysis with graphs on user's choice of companies
  - Send notifications to user on when to buy or sell
- Web scraper
  - Shopping Center (web scrape and save to database)
- Application tracker for SWE positions/internships
- Chatbot with amazon lex
- Reddit bot that gathers some data

### **Ideas for frameworks**

- Front-end
  - Javascript
  - React
  - Angular (Typescript based)
  - C# (ASP.NET)
  - Flutter
  - Vue JS
- Back-end
  - Database
    - Relational
      - MS SQL Server
  - Python
    - Flask
    - Django
  - Cloud
    - AWS
    - Firebase
      - This works well with Vue
    - Railway
    - Vercel
      - Works well with Node.js
    - Heroku

&nbsp;

## Acknowledgements

- [What to do with venv when putting Flask on Git](https://medium.com/wealthy-bytes/the-easiest-way-to-use-a-python-virtual-environment-with-git-401e07c39cde)
- [Hosting Flask React App on Heroku](https://www.youtube.com/watch?v=h96KP3JMX7Q)
- [Coinranking API Documentaion](https://developers.coinranking.com/api/documentation/coins)

<!-- Markdown Links and Images -->

[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[flask]: https://img.shields.io/badge/Flask-e0dede?style=for-the-badge&logo=flask&logoColor=000000
[flask-url]: https://flask.palletsprojects.com/en/2.2.x/
