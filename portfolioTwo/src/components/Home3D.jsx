import '/src/App.scss';
import React, { useRef, useState } from "react";
import {Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useNavigate } from "react-router-dom";
import { Text,Center, Text3D } from "@react-three/drei";
import interBoldFont from "/Inter_Bold.json?url";

function TopicSelector({topic, ...props}) {
    const meshRef = useRef()
    const textRef = useRef();
    const navigate = useNavigate();
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x += hovered ? 2 * delta : delta;
            meshRef.current.rotation.y += hovered ?  Math.sin(time) * Math.PI * 0.02 : 0;
        }
        if (textRef.current) {
            textRef.current.rotation.y = hovered ? 0 : Math.sin(time) * Math.PI * 0.2;
        }
    });
    

    const handleClick = () => {
        navigate(`/topic/${encodeURIComponent(topic)}`);
    }

    // const handleClick = useCallback(() => {
    //     navigate(`/topic/${encodeURIComponent(topic)}`);
    // }, [navigate, topic]);
    

    return(
        <group>
            <mesh
                {...props}
                ref={meshRef}
                scale={active ? 1.5 : 1}
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
                    rotation={[0, 0, 0]}>
                <Text3D 
                    letterSpacing={0.2} 
                    size={1} 
                    font={interBoldFont}
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
            <TopicSelector topic="Visual" position={[-5.2, 0,0]} />
            <TopicSelector topic="Audio" position={[5.2, 0,0]} />

            <TopicSelector topic="Graphics" position={[-5.2, -3,0]} />
            <TopicSelector topic="Mobile" position={[5.2, -3,0]} />

            <TopicSelector topic="HCI" position={[-5.2, -3*2,0]} />
            <TopicSelector topic="UX" position={[5.2, -3*2,0]} />

            <TopicSelector topic="Creative Coding" position={[-5.2, 3,0]} />
            <TopicSelector topic="Augmented Reality" position={[5.2, 3,0]} />
           </Canvas>
      </div>
    );
};

export default Home3D;