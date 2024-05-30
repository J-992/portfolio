import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Sky from '../models/Sky';
import HomeInfo from '../components/HomeInfo';
import { Stats, OrbitControls } from '@react-three/drei';
import HobbitHouse from '../models/HobbitHouse';

/** 
 * * using https://gltf.pmnd.rs/ we can convert GLB and 
 * * blender files into jsx components, its a lifesaver
 */


const Home = () => {

  //const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(5);

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        <div>
          <HomeInfo
            stage={[currentStage]} />
        </div>
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent`}
        camera={{ position: [0, 2, 8], fov: 90 }}
      >
        <Suspense fallback={<Loader setCurrentStage={setCurrentStage} />}>

          <hemisphereLight skyColour="#000000" groundColor={'#000000'} intensity={0.5} />
          <pointLight position={[-7, 3.5, -4]} color={'#FFE5B4'} intensity={20} />
          <pointLight position={[8.5, 3, -3]} color={'#FFE5B4'} intensity={20} />
          <pointLight position={[0.5, 3.5, -2]} color={'#FFE5B4'} intensity={20} />
          <HobbitHouse setCurrentStage={setCurrentStage} />
          <Sky />
          <OrbitControls
            keys={{
              LEFT: 'ArrowLeft',
              UP: 'ArrowUp',
              RIGHT: 'ArrowRight',
              DOWN: 'ArrowDown'
            }}
            dampingFactor={0.1}
            maxDistance={100}
            minDistance={1}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home