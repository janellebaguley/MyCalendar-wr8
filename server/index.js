require('dotenv').config()
const express = require('express'),
      ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const massive = require("massive");
const app = express();
app.use(express.json());



massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
  console.log("db connected");
  
});

// app.use(session({
//   resave: false,
//   saveUninitialized: true,
//   secret: SESSION_SECRET,
//   cookie: {maxAge: 1000 * 60 * 60 *24 * 365}
// }));

app.get('/auth/session-user', ctrl.getSessionUser)

app.get('/api/events', ctrl.getCalEvents)
// app.put('/api/search', ctrl.searchEvent)
app.post('/api/event', ctrl.addEvents)
app.delete('/api/event/:id', ctrl.deleteEvent)

app.listen(SERVER_PORT, () => console.log(`running on port ${SERVER_PORT}`));