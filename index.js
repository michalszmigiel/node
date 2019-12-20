const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./routes/admin/auth");
const cookieSession = require("cookie-session");
const productsRouter = require("./routes/admin/products");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["lasbefikwbefkjsnbviawloeubsmbvw543684waefg648"]
  })
);
app.use(authRouter);
app.use(productsRouter);

app.listen(3000, () => {
  console.log(`listening`);
});
