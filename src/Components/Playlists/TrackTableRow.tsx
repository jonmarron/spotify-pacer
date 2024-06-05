import styles from './TrackTableRow.module.scss'
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import SButton from "@/Components/UI/SButton/SButton";
import {useEffect, useMemo, useState} from "react";
import {getTrackAudioFeatures} from "@/utils/api/tracks";

interface TrackTableRowProps {
  track: TrackObject;
}

const TrackTableRow = ({track}: TrackTableRowProps) => {

  const [tempo, setTempo] = useState(0)
  useEffect(() => {
    getTrackAudioFeatures(track.id).then((response) => setTempo(response.tempo));
  }, [track.id]);


  const artists = useMemo(()=> {
    return track.artists.map(artist => {
      return artist.name
    }).join(', ')
  }, [track])

  return(
    <div className={styles['table-row-wrapper']}>
      <div className={styles['track-name']}>
        {track.name}
      </div>
      <div className={styles['album-name']}>
        {track.album.name}
      </div>
      <div className={styles['artists-name']}>
        {artists}
      </div>
      <div>
        {Math.floor(tempo)}
      </div>
      <div className={styles['track-actions']}>
        <SButton label={''} variant={'secondary'} iconDef={faPlus} iconPos={'left'}/>
      </div>
    </div>
  )
}
export default TrackTableRow