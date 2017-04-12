**Ruby on rails Rails application with  React-Redux as V-component**
===================
![Reactive Rails!](https://geeks.wego.com/content/images/2015/12/eed49439b4a4d36167ef4aa568beb94f.jpg)

### Specifications:


----------

> ### **Technologies we used:**
 -  **Ruby on rails** 
 - **React.js** 
 - **Redux**
 - **Axios** 
 - **JQuery**
 - **Bootstrap** 
 - **Node.js**
 - **NPM**


 
> ### **Configuration scripts**
 - `postinstall:` "cd app/assets/webpack && npm i",
 - `start:` "foreman start",
 - `build:` "sh -c 'rm app/assets/webpack/dist/* || true && foreman run bin/rails > - assets:precompile'",
 - `start:dev:` "foreman start -f Procfile.dev",
 - `build:dev:` "sh -c 'rm app/assets/webpack/dist/* || true && cd app/assets/webpack && npm run build:development'",
 - `rails:` "foreman run bin/rails",
 - `test:` "foreman run bin/rails test"


> ### **Setup**
1. In terminal run

- bundle i
- rake db:create
- rake db:migrate
- rails server

2. React files compiling

- npm install 
- npm run build:dev or webpack
- npm start

3. Open 
 - http://localhost:3000


 >### **About** 
 >>- *Ruby on Rails*
- *Ruby on Rails, or simply Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages. It encourages and facilitates the use of web standards such as JSON or XML for data transfer, and HTML, CSS and JavaScript for display and user interfacing. In addition to MVC, Rails emphasizes the use of other well-known software engineering patterns and paradigms, including convention over configuration (CoC), don't repeat yourself (DRY), and the active record pattern.*

 >>- *React JS*
- *It is maintained by Facebook, Instagram and a community of individual developers and corporations. According to JavaScript analytics service Libscore, React is currently being used on the websites of Netflix, Imgur, Bleacher Report, Feedly, Airbnb, SeatGeek, HelloSign, Walmart, Portfolio's, Paviljons Concept Store and others.*



