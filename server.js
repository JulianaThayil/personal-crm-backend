const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://dbUser:personalCRM@cluster0.8k8ic.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const birthdayRouter = require('./routes/birthday');
const contactsRouter = require('./routes/contacts');
const todoRouter = require('./routes/todo');
const debtRouter = require('./routes/debt');

app.use('/birthdays', birthdayRouter);
app.use('/contacts', contactsRouter);
app.use('/todo', todoRouter);
app.use('/debt', debtRouter);

// Step 3
if (process.env.NODE_ENV === 'production') {
  app.use(express.static( 'client/build' ));

  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
  });
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
