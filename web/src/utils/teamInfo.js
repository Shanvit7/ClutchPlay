import {
  BKN,
  LAC,
  LAL,
  ATL,
  BOS,
  NOP,
  NYK,
  SAC,
  SAS,
  OKC,
  ORL,
  WAS,
  TOR,
  IND,
  PHI,
  POR,
  PHX,
  DAL,
  DET,
  DEN,
  GSW,
  HOU,
  CHA,
  CLE,
  CHI,
  MEM,
  MIL,
  MIA,
  MIN,
  UTA,
} from "react-nba-logos";

// Eastern Conference Divisions

export const atlanticDivision = [BOS, BKN, NYK, PHI, TOR];
export const centralDivision = [CHI, CLE, DET, IND, MIL];
export const southEastDivision = [ATL, CHA, MIA, ORL, WAS];
export const allEasternDivisions = ["Atlantic", "Central", "Southeast"];

// Western Conference Divisions
export const northWestDivision = [DEN, MIN, OKC, POR, UTA];
export const pacificDivision = [GSW, LAC, LAL, PHX, SAC];
export const southWestDivision = [DAL, HOU, MEM, NOP, SAS];
export const allWesternDivisions = ["Northwest", "Pacific", "Southwest"];

// All team logos
export const teamLogos = [].concat(
  atlanticDivision,
  centralDivision,
  southEastDivision,
  northWestDivision,
  pacificDivision,
  southWestDivision
);

export const nbaTeams = new Map([
  ["ATL", ATL],
  ["BOS", BOS],
  ["BKN", BKN],
  ["CHA", CHA],
  ["CHI", CHI],
  ["CLE", CLE],
  ["DAL", DAL],
  ["DEN", DEN],
  ["DET", DET],
  ["GSW", GSW],
  ["HOU", HOU],
  ["IND", IND],
  ["LAC", LAC],
  ["LAL", LAL],
  ["MEM", MEM],
  ["MIA", MIA],
  ["MIL", MIL],
  ["MIN", MIN],
  ["NOP", NOP],
  ["NYK", NYK],
  ["OKC", OKC],
  ["ORL", ORL],
  ["PHI", PHI],
  ["PHX", PHX],
  ["POR", POR],
  ["SAC", SAC],
  ["SAS", SAS],
  ["TOR", TOR],
  ["UTA", UTA],
  ["WAS", WAS],
]);

export const test = new Map([["BKN", BKN]]);
