import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";

const app = express();

app.use(express.static("src/public"));

app.set("views", path.join(__dirname, "views"));

const exphbs = create({
  extname: ".hbs",
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout: "main",
  helpers: {
    inc: function (value, options) {
      return parseInt(value) + 1;
    },
    isPromoOrDesc: function (index, options) {
      if (index <= 3) {
        return "promo";
      } else if (index >= 22) {
        return "descenso";
      } else {
        return null;
      }
    },
  },
});

app.engine(".hbs", exphbs.engine);

app.set("view engine", ".hbs");

//Routes
app.use(indexRoutes);

export default app;
