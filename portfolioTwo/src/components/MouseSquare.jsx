import '/src/App.scss';
import "/src/styles/components/MouseSquare.scss"
import React, { useRef, useState } from "react";
import {Canvas, useThree, useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { Text,Center, Text3D } from "@react-three/drei";

function TopicSelector({topic, ...props}) {
    const meshRef = useRef()
    const textRef = useRef();
    const navigate = useNavigate();
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const {size} = useThree();
    const {width, height} = size;

    const aspect = width / height;
    const cubeWidth = 1;
    const cubeHeight = cubeWidth / aspect;

    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta;
        if(hovered){
            (meshRef.current.rotation.y += 5* delta)
        }
    });

    return(
        <group>
        <mesh
        {...props}
        ref={meshRef}
        scale={[cubeWidth, cubeHeight, 1]}
        position={[0,0,0]}
        onClick={(e) => console.log('click')}
        onContextMenu={(e) => console.log('context menu')}
        onDoubleClick={(e) => console.log('double click')}
        onWheel={(e) => console.log('wheel spins')}
        onPointerUp={(e) => console.log('up')}
        onPointerDown={(e) => console.log('down')}
        onPointerOver={(e) => console.log('over')}
        onPointerOut={(e) => console.log('out')}
        onPointerEnter={(e) => console.log('enter')}
        onPointerLeave={(e) => console.log('leave')}
        onPointerMove={(e) => console.log('move')}
        onPointerMissed={() => console.log('missed')}
        onUpdate={(self) => console.log('props have been updated')}
        >
        <boxGeometry args={[1,1,1]} />
        <meshStandardMaterial color={ hovered ? 'blue' : 'green'} />
        </mesh> 
        </group>
    )
}

const MouseSquare = () => {
    return(
    <div id="container">

        <Canvas  camera={{ position: [0, 0, 100], zoom: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight color="white" position={[5,5,5]} intensity={2}/>
                <TopicSelector topic="Apple"/>
        </Canvas>

    </div>
    );
};

export default MouseSquare;