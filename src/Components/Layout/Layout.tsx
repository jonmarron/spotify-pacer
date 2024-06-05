import {ReactNode} from "react";
import styles from './Layout.module.scss';
import Sidebar from "@/Components/Sidebar/Sidebar";
import {auth} from "@/auth";
import {SignIn} from "@/Components/SignInBtn/Sign-in";

interface LayoutProps {
  children: ReactNode;
}

const Layout = async ({children}: LayoutProps) => {
  const session = await auth();

  return (
    <div className={styles['content-wrapper']}>
      {session?
        <>
          <Sidebar/>
          <div className={styles['content']}>
            {children}
          </div>
        </>
      :
      <SignIn/>
      }
    </div>
  )
}

export default Layout;