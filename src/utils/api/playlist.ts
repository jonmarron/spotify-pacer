import {getSession} from "next-auth/react";
import {config} from "@/utils/api/common";

export const getAccessToken = async () => {
  const session = await getSession();
  if(session && session.accessToken) return session.accessToken;
  return null;
}

export const getUsersPlaylists = async () => {
  const accessToken = await getAccessToken();
  return fetch(`${config.baseUrl}${config.me}/playlists`, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  }).then(response => response.json()).catch(err => console.error(err))
}

export const getPlaylistById = async (id:string) => {
  const accessToken = await getAccessToken();
  return fetch(`${config.baseUrl}/playlists/${id}`, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  }).then(response => response.json()).catch(err => console.error(err))
}

