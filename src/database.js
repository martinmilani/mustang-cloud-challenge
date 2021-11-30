import { connect } from "mongoose";
import Team from "./models/Team";
import scrapper from "./scrapper";
import { INTERVAL_TIME, MONGODB_URI } from "./config";

(async () => {
  try {
    //Conect to db
    const db = await connect(MONGODB_URI);
    console.log("DB connected to ", db.connection.name);

    //Initialize  Scrapper
    scrapper();

    async function intervalFunc() {
      //clean DB
      scrapper();
    }

    setInterval(intervalFunc, INTERVAL_TIME);
  } catch (error) {
    console.log(error);
  }
})();
