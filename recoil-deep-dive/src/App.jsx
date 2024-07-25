import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from "./atoms"
import {useRecoilValue, RecoilRoot, useRecoilState} from "recoil"

function App() {
  

  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationsAtom);
  const messageAtomCount = useRecoilValue(messagingAtom);


  const totalNotificaitons = networkNotificationCount+ jobsAtomCount + notificationAtomCount+ messageAtomCount;
  return (
    <>

      <button>network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
        <button>jobs ({jobsAtomCount})</button>
        <button>notification ({notificationAtomCount})</button>
        <button>message ({messageAtomCount})</button>
        <button>me ({totalNotificaitons})</button> 
    </>
  )
}

export default App
