interface PlaylistTrackObject {
  track:TrackObject;
}

interface PlaylistTracks {
  href:string;
  total: number;
  items:PlaylistTrackObject[];
}

interface PlaylistImageObject {
  url: string;
  height: number;
  width: number;
}

interface PlaylistOwner {
  href: string;
  id: string;
  display_name: string
}

interface Playlist {
  tracks: PlaylistTracks;
  href: string;
  name: string;
  id: string;
  images: PlaylistImageObject[];
  owner: PlaylistOwner;
}