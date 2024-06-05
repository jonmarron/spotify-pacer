'use client'
import {useEffect, useState} from "react";
import {getPlaylistById} from "@/utils/api/playlist";
import TrackTableRow from "@/Components/Playlists/TrackTableRow";

interface TracksListProps {
  id:string;
}
const Trackslist = ({id}:TracksListProps) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getPlaylistById(id).then(response => {
      console.log(response);
      setTracks(response.tracks.items)
    }).catch(err => console.error(err))
  }, [id]);

  return (
    <ul className={'w-[1200px]'}>
      {tracks && tracks.map((track:PlaylistTrackObject, index) => {
        return (
          <li key={index}>
            <TrackTableRow track={track.track}/>
          </li>
        )
      })}
    </ul>
  )
}

export default Trackslist