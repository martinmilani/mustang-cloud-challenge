import { Schema, model } from "mongoose";

const teamSchema = new Schema(
  {
    pos: Number,
    equipo: String,
    imagen: String,
    pj: String,
    g: String,
    e: String,
    p: String,
    gf: String,
    gc: String,
    dg: String,
    pts: String,
  },
  {
    versionKey: false,
  }
);

export default model("Team", teamSchema);
