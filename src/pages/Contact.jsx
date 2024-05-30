import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island';
import Sky from '../models/Sky';
import HomeInfo from '../components/HomeInfo';
import { Stats, OrbitControls } from '@react-three/drei';


/** 
 * * using https://gltf.pmnd.rs/ we can convert GLB and 
 * * blender files into jsx components, its a lifesaver
 */


const Contact = () => {

  //const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        poop
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent`}
        camera={{ position: [0, 2, 8], fov: 90 }}
      >
        <Suspense fallback={<Loader setCurrentStage={setCurrentStage} />}>
          <directionalLight position={[4, 1, 5]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColour="b1e1ff" groundColor={'#000000'} intensity={1} />
          <Island/>

      
          
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

export default Contact