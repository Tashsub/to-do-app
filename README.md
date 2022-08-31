# Increase your productivity with this Single Page MERN APP. :chart_with_upwards_trend: 

I often find myself having lots of tasks to do throughout the day. Why not expierment with the ins and outs of a To Do App. 
The App allows for a user to create a task, update a task, delete a task and read the existing tasks. Tasks can be 
This side project was to see how far I could push my React skills and my CSS. Overall this was a good experience. 

## Live APP / Final Result 

The Web App can be accessed on the link below

[Live App Can be viewed here](https://to-do-app-rocket.herokuapp.com/)

Currently the live app has no login system, which is a feature that is being worked on to allow for multiple users. 

# Feature List

- Create/Read/Update/Delete tasks. 
- Tasks are accompanied by a description.
- Tasks can be marked as important
- The front end view allows for easy filters to applied. ie only show the uncompleted tasks. 
- Modal appears to edit and create tasks.  
- When completing actions such as create or delete tasks users are made aware if action has been successful. 

## Prototyping 

The Idea started of with a prototype design that was made in Figma. The designgs eveloved over time, where the initial designs and ideas can be seen below. 

[The Figma designs can be viewed here](https://www.figma.com/file/hgbQvzJaLgxaykmIgUexjM/To-Do-App?node-id=0%3A1)


# Tech Stack :computer:

This application was made using a MERN approach. 

Meaning the primary tools were: 

- MongoDB - for storing the data
- Node/Express - for the server and api
- React - for the front end
- Heroku - easily deploy the frontend and backend on one instance. Ideally in the future it would be good to have the backend and front end running on two different servers. 

The frontend consisted of React and SCSS. 

## API Endpoints

There application makes use of **REST** technology and uses 4 endpoints. 
- Post task: to create a new task. There is validation here when the modal appears such as, the task name can not be empty. 
- Put Task: update an existing task. 
- Get tasks: gets all the tasks from the DB. 
- Delete task: deletes a task from the list. 

## Database Design

The database design was also thought about. Although one of the benefits of using MongoDB is to have embedded relations the database design seen below proves to be better since a user can have many tasks and allows for flexible changes to be made. 

[Database design](https://lucid.app/lucidchart/44b77d5a-5a63-4511-84db-15443248a106/edit?viewport_loc=-173%2C-134%2C2705%2C1534%2C0_0&invitationId=inv_5773ada6-3309-4762-9643-da3eccf85c99#)

---

### Useful resources


(checkboxes package source 1)[https://pretty-checkbox.netlify.app/docs/checkbox/]

(checkboxes package source 2)[https://lokesh-coder.github.io/pretty-checkbox/#basic-checkbox]

https://mui.com/

https://stryker-mutator.io/

(Types in MongoDb)[https://kb.objectrocket.com/mongo-db/mongoose-schema-types-1418] (refs in mongodb)[https://www.youtube.com/watch?v=7xYMulfv-PU&ab_channel=MicroUrb] (Toast Messages)[https://jossmac.github.io/react-toast-notifications/]

# Future improvements

Use loading animations for loading background and etc.. (loading animations)[https://www.npmjs.com/package/react-loader-spinner]

(Deploying solution, refer back for later use)[https://www.youtube.com/watch?v=5dQC2JUd27g&ab_channel=LamaDev]
