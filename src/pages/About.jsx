import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react';
import Loader from '../components/Loader';
import Sky from '../models/Sky';
import RaceTrack from '../models/RaceTrack';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import HomeInfo from '../components/HomeInfo';
import * as THREE from 'three';



const About = () => {

  let camera = new THREE.PerspectiveCamera(75, 1.5, 0.1, 1000);

  let [x,y,z] = [0,75,100];
  camera.position.set(x, y, z);
  camera.lookAt(0,0,30);

  //let [x,y,z] = [0,10,90]; this is a good road view
  
  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        About
      </div>  

      <Canvas
        className={`bg-transparent`}
        camera={camera}
      >
        <Suspense fallback={<Loader />}>
          <hemisphereLight skyColour="b1e1ff" groundColor={'#000000'} intensity={.5} />
          <RaceTrack />
          <Sky/>
        
        </Suspense>
      </Canvas>
    </section>
  )
}

export default About;