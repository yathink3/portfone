import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';

import sakura from '../assets/sakura.mp3';
import { HomeInfo, Loader, Chatbot } from '../components';
import { soundoff, soundon, pauseicon, playicon } from '../assets/icons';
import { Bird, Island, Plane, Sky } from '../models';

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [roDir, setRoDir] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [stopRotation, setStopRotation] = useState(true);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustBiplaneForScreenSize = () => {
    let scale, position;
    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      scale = [1.5, 1.5, 1.5];
      position = [0, -1.5, 0];
    } else {
      scale = [3, 3, 3];
      position = [0, -4, -4];
    }
    return { scale, position };
  };

  const adjustIslandForScreenSize = () => {
    let scale, position;
    if (window.innerWidth < 768) {
      scale = [0.9, 0.9, 0.9];
      position = [0, -6.5, -43.4];
    } else {
      scale = [1, 1, 1];
      position = [0, -6.5, -43.4];
    }
    return { scale, position };
  };

  const biplane = adjustBiplaneForScreenSize();
  const island = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        <HomeInfo
          currentStage={currentStage}
          startEngine={() => {
            setStopRotation(false);
            setIsPlayingMusic(true);
          }}
        />
      </div>

      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />

          <Bird />
          <Sky isRotating={isRotating} roDir={roDir} stopRotation={stopRotation} />
          <Island
            stopRotation={stopRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            roDir={roDir}
            setRoDir={setRoDir}
            setCurrentStage={setCurrentStage}
            position={island.position}
            // rotation={[0.12, 25, 0.1]}
            rotation={[0.1, 5, 0]}
            scale={island.scale}
          />
          <Plane
            stopRotation={stopRotation}
            position={biplane.position}
            rotation={roDir ? [0, 80, 0] : [0, 20, 0]}
            //  rotation={[0, 20.1, 0]}
            scale={biplane.scale}
          />
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img src={!isPlayingMusic ? soundoff : soundon} alt='jukebox' onClick={() => setIsPlayingMusic(!isPlayingMusic)} className='w-10 h-10 cursor-pointer object-contain' />
        <div className='h-2' />
        <img
          src={stopRotation ? playicon : pauseicon}
          alt='playpause'
          onClick={() => {
            if (stopRotation) {
              setStopRotation(false);
              setIsPlayingMusic(true);
            } else {
              setStopRotation(true);
              setIsPlayingMusic(false);
              setCurrentStage(0);
            }
          }}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
      <Chatbot />
    </section>
  );
};

export default Home;
