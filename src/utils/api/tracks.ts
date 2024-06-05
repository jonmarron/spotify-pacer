import {getAccessToken} from "@/utils/api/playlist";
import {config} from "@/utils/api/common";

export const getUsersSavedTracks = async (limit?: number, offset?:number) => {
  const accessToken = await getAccessToken();
  const baseUrl = new URL(`${config.baseUrl}/tracks`);
  const params = new URLSearchParams();

  if(limit) params.append('limit', limit.toString());
  if(offset) params.append('offset', offset.toString());
  baseUrl.search = params.toString();

  return fetch(baseUrl, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  }).then(response => response.json()).catch(err => console.error(err))
}

export const getTrackAudioFeatures = async (id: string) => {
  const accessToken = await getAccessToken();
  return fetch(`${config.baseUrl}/audio-features/${id}`, {
    method: 'GET',
    headers:{
      'Authorization': `Bearer ${accessToken}`
    }
  }).then(response => response.json()).catch(err => console.error(err));
}