import "./models/Team";
import Team from "./models/Team";

const request = require("request-promise");
const cheerio = require("cheerio");

async function scraper() {
  await Team.deleteMany({});
  const $ = await request({
    uri: "https://www.futbolargentino.com/primera-division/tabla-de-posiciones",
    transform: (body) => cheerio.load(body),
  });

  await $("tbody")
    .find("tr")
    .each((i, el) => {
      const pos = $(el).find("td:nth-child(1)").text();

      const teamName = $(el)
        .find("td.equipo")
        .find("span.d-none.d-md-inline")
        .text();

      const image = $(el).find("td").find("img").attr("data-src");

      const pj = $(el).find("td.equipo").next().text();

      const g = $(el).find("td.equipo").next().next().text();

      const e = $(el).find("td.equipo").next().next().next().text();

      const p = $(el).find("td.equipo").next().next().next().next().text();

      const gf = $(el)
        .find("td.equipo")
        .next()
        .next()
        .next()
        .next()
        .next()
        .text()
        .trim();

      const gc = $(el)
        .find("td.equipo")
        .next()
        .next()
        .next()
        .next()
        .next()
        .next()
        .text()
        .trim();

      const dg = $(el)
        .find("td.equipo")
        .next()
        .next()
        .next()
        .next()
        .next()
        .next()
        .next()
        .text()
        .trim();

      const pts = $(el)
        .find("td.equipo")
        .next()
        .next()
        .next()
        .next()
        .next()
        .next()
        .next()
        .next()
        .text()
        .trim();

      var team = new Team({
        pos: Number(pos),
        equipo: teamName,
        imagen: image,
        pj: pj,
        g: g,
        e: e,
        p: p,
        gf: gf,
        gc: gc,
        dg: dg,
        pts: pts,
      });
      team.save(function (error) {
        if (error) {
          console.log(error);
        }
      });
    });

  console.log("Data scrapped");
}

export default scraper;
