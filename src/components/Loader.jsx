import { Html, useProgress } from '@react-three/drei'

function Loader({setCurrentStage}) {
  const { progress } = useProgress()

  return <Html >{progress} % loaded</Html> 
}


export default Loader