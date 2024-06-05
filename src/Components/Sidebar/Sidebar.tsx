'use client'
import styles from './Sidebar.module.scss'
import {useEffect, useState} from "react";
import {getUsersPlaylists} from "@/utils/api/playlist";

import Playlist from "@/Components/Playlists/Playlist";
import SButton from "@/Components/UI/SButton/SButton";
import {faHouse, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Sidebar = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    getUsersPlaylists().then(data => setPlaylists(data.items)).catch(err => console.log(err));
  }, []);

  return (
    <div className={styles['sidebar-wrapper']}>
      <div className={styles['actions-container']}>
        <SButton label={'Home'} variant={"tertiary"} iconPos={'left'} iconDef={faHouse}/>
        <SButton label={'Search'} variant={"tertiary"} iconPos={'left'} iconDef={faMagnifyingGlass}/>
      </div>
      <div className={'w-9/12 border border-b-[1px] border-[#ffffff20]'}></div>
      <div className={styles['playlists-container']}>
        {playlists && <ul>
          {playlists.map((playlist, index) => {
            return (
              <Link key={index} href={`/playlist/${playlist.id}`}>
                <li >
                  <Playlist playlist={playlist}/>
                </li>
              </Link>
            )
          })}
        </ul>}
      </div>
    </div>
  )
}

export default Sidebar;