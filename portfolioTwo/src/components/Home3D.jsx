import '/src/App.scss';
import React, { useRef, useState } from "react";
import {Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useNavigate } from "react-router-dom";
import { Text,Center, Text3D } from "@react-three/drei";

function SceneBasic() {
    const gltf = useLoader(GLTFLoader, '/coneman.gltf');
    return (
      <primitive 
        object={gltf.scene} // Render the 3D model
        scale={[0.5, 0.5, 0.5]} // Adjust the size if necessary
        position={[0, 0, 0]} // Set the position
        rotation={[0, Math.PI / 4, 0]} // Optional rotation
      />
    );
  };

function TopicSelector({topic, ...props}) {
    const meshRef = useRef()
    const textRef = useRef();
    const navigate = useNavigate();
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta;
        if(hovered){
            (meshRef.current.rotation.y += 5* delta)
        }
    });

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if(textRef.current) {
            if(hovered){
                textRef.current.rotation.y = 0;
               
            } else {
                textRef.current.rotation.y = Math.sin(time) * Math.PI * 0.2; 

            }
        }
    });



    const handleClick = () => {
        navigate(`/topic/${encodeURIComponent(topic)}`);
    }

    return(
        <group>
        <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1.5 : 1}
        // onClick={(event) => setActive(!active)}
        onClick={handleClick}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        >
        <boxGeometry args={[1,1,1]} />
        <meshStandardMaterial color={ hovered ? 'blue' : 'green'} />
        </mesh>
        <Center  
        ref={textRef} 
        position={[
            props.position[0],
            props.position[1],
            props.position[2] +2,
        ]}
        rotation={[0, 0, 0]}
        >
            <Text3D 
              letterSpacing={0.2} 
              size={1} 
              font="/Inter_Bold.json"
              curveSegments={16}
              bevelEnabled
              bevelSize={0.01}
              bevelThickness={0.05}>
                        {topic}
                <meshStandardMaterial color= { hovered ? 'green' : 'blue'} />
            </Text3D>
        </Center>
        </group>
    )
}

const Home3D = () => {
    return(
    <div className='fill-rest-height'>
    <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight color="white" position={[5,5,5]} intensity={2}/>
            <TopicSelector topic="Apple" position={[-5.2, 0,0]} />
            <TopicSelector topic="Kiwi" position={[5.2, 0,0]} />
           </Canvas>
      </div>
    );
};

export default Home3D;