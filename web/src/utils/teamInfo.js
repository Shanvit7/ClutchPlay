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

export const atlanticDivision = [BOS,BKN,NYK,PHI,TOR];
export const centralDivision = [CHI,CLE,DET,IND,MIL];
export const southEastDivision = [ATL,CHA,MIA,ORL,WAS];
export const allEasternDivisions = ['Atlantic','Central','Southeast'];

// Western Conference Divisions
export const northWestDivision = [DEN,MIN,OKC,POR,UTA];
export const pacificDivision = [GSW,LAC,LAL,PHI,SAC];
export const southWestDivision = [DAL,HOU,MEM,NOP,SAS];
export const allWesternDivisions = ['Northwest','Pacific','Southwest'];

// All team logos
export const teamLogos =  [].concat(atlanticDivision,centralDivision,southEastDivision,northWestDivision,pacificDivision,southWestDivision);
