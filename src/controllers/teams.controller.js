import Team from "../models/Team";

export const renderTeams = async (req, res) => {
  const teams = await Team.find().lean();
  teams.sort((a, b) => {
    return a.pos - b.pos;
  });
  res.render("index", { teams: teams });
};
