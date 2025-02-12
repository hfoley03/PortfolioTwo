import { Canvas } from '@react-three/fiber';
import '/src/App.scss';
import "/src/styles/main.scss";
import React, { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import interBoldFont from "/Inter_Bold.json?url";
// some variable the accounts for the sin cos 

// some function to change that variable 
// some function repping a topic/rectangle 
function CarouselItem({ itemText, offset, numberOfItems, carouselAngle, setHoveredState}) {
    // console.log(`item: ${itemText} num: ${offset} of ${numberOfItems}`);
    const boxRef = useRef();
    const textRef = useRef();
    const [hovered, setHover] = useState(false);
    
    const radius = 3;
    const angleOffset = (2 * Math.PI * offset) / numberOfItems;
    var position = [
        0,
        radius* Math.cos(angleOffset + carouselAngle),
        radius* Math.sin(angleOffset + carouselAngle),
    ];

    const handleClick = () => {
        navigate(`/topic/${encodeURIComponent(topic)}`);
    };

    return (
        <group>
            <mesh ref={boxRef} position={position}
                onClick={handleClick}
                onPointerOver={ (event) => {
                    if(position[2] > 0) {
                        setHover(true);
                        setHoveredState(true)
                    }
                }}
                onPointerOut={ () => {
                    setHover(false)
                    setHoveredState(false);
                    }}>
                <boxGeometry args={[6, 0.5, 0.5]} />
                <meshBasicMaterial transparent opacity={0} />
                </mesh>

            <Center ref={textRef} position={position}>
                <Text3D 
                    letterSpacing={0.0} 
                    size={1} 
                    font={interBoldFont}
                    curveSegments={16}
                    bevelEnabled
                    bevelSize={0.01}
                    bevelThickness={0.05}
                >
                    {itemText}
                    <meshStandardMaterial color={hovered ? 'blue' : 'green'} />
                </Text3D>
            </Center>
        </group>
    );
}

function CarouselManager( {topics} ){
    const [carouselAngle, setCarouselAngle] = useState(0); 
    const [isHovered, setIsHovered] = useState(false);

    useFrame(() => {
        if(!isHovered){
            setCarouselAngle((prev) => prev + 0.002); 
        }
    });

    return (
        <>
            {topics.map(({topic}, index) => (
                <CarouselItem
                key={index}
                itemText={topic}
                offset={index}
                numberOfItems={topics.length}
                carouselAngle={carouselAngle}
                setHoveredState={setIsHovered}
            />
        ))}
        </>
    );
}

const Carousel3D = () => {

    const topics = [
        { topic: "Visual"},
        { topic: "Audio" },
        { topic: "Graphics"},
        { topic: "Mobile"},
        { topic: "Creative Coding"},
        { topic: "Augmented Reality"},
        { topic: "MIDI"},
        { topic: "HCI"},
        { topic: "Hardware"},
        { topic: "UX"},
        { topic: "Website" },
        { topic: "Computer Vision"},
    ];
    return (
        <div className="fill-rest-height">
            <Canvas  
            // camera={{ position: [0,0,200], zoom: 50 }}
            camera={{ position: [0, 3, 10], fov: 50 }} 
            shadows>
                {/* <ambientLight intensity={0.5}/> */}
                <directionalLight color="white" position={[5,5,5]} intensity={2} />
                <CarouselManager topics = {topics}/>
            </Canvas>
        </div>
    );

};

export default Carousel3D;