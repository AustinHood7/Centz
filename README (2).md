# **Centz**

A react-flask based web application to provide a platform for providing real-time data on cryptocurrency. This web app focuses on helping find the top current crypto and visualize trends using the Google Charts API.

### Built With
- [![React][react.js]][react-url]
- [![Flask][flask]][flask-url]


## **Table of Contents**
1. [Project Basics](#basics)
2. [Design Diagrams](#design)
3. [Resources](#resources)
4. [Things To Do](#todo)
5. [Blog Posts](#blogs)
6. [Problems](#problems)
7. [Deprecated](#deprecated)
8. [Acknowledgments](#acknowledgments)

&nbsp;

## [Project Basics](#basics)
### Project Members
| Name               | Email                        |
|--------------------|------------------------------|
| Christian Apostoli |                              |
| Jake Hanson        | jwhanson6816@eagle.fgcu.edu  |
| Austin Hood        |                              |

&nbsp;

### **Project Deadlines**
 - Sep 6: Project Proposal (DONE)
 - Oct 2: Rough Draft due - use case diagram, SCMR (Dont know what this is)
 - Oct 14: Project Check-in 1 (DONE)
 - Oct 21: Project Prototype/Release 1
 - Nov 6: Project Check-in 2
 - Nov 20: Final Check-in - Presentation Draft
 - Nov 29: Group Presentation / Demo
 - Dec 16: Project / Report Due (ideally completed far before this date)

&nbsp;

### **Original Project Proposal**
We will be building a web application that will take cryptocurrency data and use this to build analytics including graphs and charts based on the user's choice of coins and timelines. Essentially, the user will be able to build a profile of their investments and utilize the analytics of these investments to help them make well-informed decisions.

The data that is gathered from the Coinranking API. The user will have the option of saving specific coin data to a database. We have an idea of what to save to the database (coin UUID, name,  price, datetime etc.) but need to get more into development before deciding on exactly what data to save. We would like to implement a database element to the application to give users the option to recall data that they saw previously. We also hope to implement a feature that sends notifications (via email or text) when a coin reaches a certain price or range of prices.

The application has a ReactJS (JavaScript) front-end and a Flask (Python) back-end. The data will be retrieved through the Coinranking API which returns data in a JSON format. We are currently hosting the web application through Heroku, but due to their recent act of removing the free tier, we may be switching deployment services. Other options include AWS or Firebase, but we are still considering others.

&nbsp;

## [Design Diagrams](#design)
### Figma
  - See entire design [here](https://www.figma.com/file/6ZBvvhyBGC0SRtxnL6WHp7/Stock-Page-Design) (updated Sep 11 2022)

### Use Case Diagram
![Use Case Diagram](/docs/useCase.png)

### Component Diagram
![Component Diagram](/docs/component.png)

&nbsp;

## [Resources](#resources)
 - [GitHub](https://github.com/AustinHood7/Centz) - [Heroku App](http://centz.herokuapp.com)
 - Front-end: ReactJS
    - [React Google Charts](https://react-google-charts.com/), ...
 - Back-end: Python
    - Flask, requests, ...
 - API(s): [Coinranking](https://developers.coinranking.com/api/documentation) - [Google Charts](https://developers.google.com/chart)
 - Deployment: [Heroku](https://www.heroku.com/)

&nbsp;

## [Things To Do](#todo)
See [Issues page](https://github.com/AustinHood7/Centz/issues) or [Kanban board](https://github.com/users/AustinHood7/projects/1)

&nbsp;

## [Blog Posts](#blogs)
[Git Source Control](/docs/git.pdf)

[Initial React + Flask Setup](/docs/setup.pdf)

&nbsp;

## [Problems](#problems)
 - .gitignore - include node_modules (from React), venv (from Python virtual environment) [React](https://github.com/AustinHood7/Centz/blob/main/client/.gitignore), [Python]((https://github.com/AustinHood7/Centz/blob/main/.gitignore))
 - Epoch time - convert to normal time
 - Graphs - y-axis option must be removed so that the graph displays properly
 - Pip/python - globally install before developing; if issue persists, install within repo directory
 - File structure - see repo for simple integration as opposed to old style with "client" (frontend) and "flask" (backend) folders
 - Git/source control - see [Git blog post](#blogs) (from Austin)
 - Deployment - front end runs on localhost:3000 by default; back end runs on localhost:5000 by default; include "proxy: localhost:5000" in React's package.json, so that any data being transferred on :5000

&nbsp;

## [Deprecated](#deprecated)
### **Project Ideas**
 - Stock Trading bot
 - Stock data analysis
    - Take data by web  scraping or AP
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

## [Acknowledgements](#acknowledgements)

- https://github.com/jfg357 (why referenced?)
- https://medium.com/wealthy-bytes/the-easiest-way-to-use-a-python-virtual-environment-with-git-401e07c39cde
- https://www.youtube.com/watch?v=h96KP3JMX7Q&t=1258s

<!-- Markdown Links and Images -->

[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[flask]: https://img.shields.io/badge/Flask-e0dede?style=for-the-badge&logo=flask&logoColor=000000
[flask-url]: https://flask.palletsprojects.com/en/2.2.x/
