import styles from './Playlist.module.scss'
import Image from "next/image";

interface PlaylistProps {
  playlist: Playlist;
}

const Playlist = ({playlist}: PlaylistProps) => {
  return (
    <div className={styles['playlist-container']}>
      {playlist.images.length > 0 &&
        <div className={'h-12 w-12 aspect-square rounded-md overflow-clip flex justify-center items-center'}>
          <Image src={playlist.images[0].url} height={50} width={50} alt="" className={'h-full w-full object-cover'}/>
        </div>
      }
      <div>
        <p className={'text-md font-semibold'}>{playlist.name}</p>
        <p className={'text-sm text-text-mute'}>{playlist.owner.display_name}</p>
      </div>
    </div>
  )
}

export default Playlist