interface Album {
  name: string;
}

interface Artist {
  name: string;
}

interface TrackObject {
  album: Album;
  artists: Artist[];
  id: string;
  name: string;
}