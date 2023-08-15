import React, { useState, useEffect, useRef } from "react";
import Gamecard from "./Gamecard";

export default function Datafetcher({ search }) {
  const [gamedata, Setgamedata] = useState([]);
  const [hasMatchingGames, setHasMatchingGames] = useState(false);
  const gamecount = useRef(null);

  useEffect(() => {
    const url =
      "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c133e98427msh74b3dde9bdc4cbbp1f4a67jsn619cf82b6173",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((Response) => Response.json())
      .then((data) => {
        Setgamedata(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // Check if there are matching games
    const matchingGames = gamedata.filter(
      (ele) =>
        ele.title &&
        ele.title.toLowerCase().indexOf(search.toLowerCase()) === 0
    );
    setHasMatchingGames(matchingGames.length > 0);
  }, [gamedata, search]);

  return (
    <>
      {gamedata.length > 0 && (
        <div ref={gamecount} className="row">
          {gamedata.map((ele, index) => {
            if (
              ele.title &&
              ele.title.toLowerCase().indexOf(search.toLowerCase()) === 0
            ) {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                  <Gamecard data={ele}></Gamecard>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}

      {gamedata.length > 0 && !hasMatchingGames && (
        <h4 className="nofound">No matching games found.</h4>
      )}
    </>
  );
}
