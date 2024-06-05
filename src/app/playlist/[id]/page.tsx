import Trackslist from "@/Components/Playlists/TracksList";

interface DynamicPageProps {
  params: {
    id: string;
  };
}
export default function Page ({params}: DynamicPageProps) {

  return (
    <Trackslist id={params.id}/>
  )
}

