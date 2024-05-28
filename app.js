const express = require("express");
const shopRouter = require("./routes/shop");
const adminRouter = require("./routes/admin");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/admin", adminRouter);
app.use("/", shopRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(3000);
