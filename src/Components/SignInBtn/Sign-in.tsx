import {signIn} from "@/auth";
import SButton from "@/Components/UI/SButton/SButton";


export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("spotify")
      }}
    >
      <SButton label={'Sign in with Spotify'} variant={'primary'}/>

    </form>
  )
}