// Require
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const routes = require('./controllers/index');

// Import connection to DB
const sequelize = require('./config/connection');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({});

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  // Custom cookie
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes)

// Connect to the database before starting the Express.js server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on: http://localhost:${PORT}`));
});