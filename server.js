const bodyParser=require('body-parser');
const express=require('express');
const app=express();
//parse requests of content-type -application/json
// app.use(bodyParser.json());
// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

//route example
app.get("/", (req, res) => {
    res.json({ message: "Welcome to mysql restful-api" });
  });
  require("./app/routes/customer.routes.js")(app);

  // set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

