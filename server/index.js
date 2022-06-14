const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const colors = require("colors");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const connectDB = require("./config/db");
const schema = require("./schema/schema");

const app = express();

connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
