'use client'

import {useEffect, useState} from "react";
import {getUsersPlaylists} from "@/utils/api/playlist";
import {getUsersSavedTracks} from "@/utils/api/tracks";

export function SignOut() {

  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getUsersPlaylists().then(data => setPlaylists(data.items))
    getUsersSavedTracks(50, 0).then(data => {
      setTracks(data.items);
      console.log(data);
    });
  }, []);

  return (
    <>
      <ul>
        {playlists?.map((playlist: Playlist, index) => {
          return (
            <li key={index}>{playlist.name}</li>
          )
        })}
      </ul>
      <br/>
      <ul>
        {tracks?.map((track:{track:{name:string}}, index) => {
          return (
            <li key={index}>{track.track.name}</li>
          )
        })}
      </ul>
    </>
  )
}