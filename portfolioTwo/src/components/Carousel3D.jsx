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
    const navigate = useNavigate();
    const [hovered, setHover] = useState(false);

    const words = itemText.split(" ");

    
    const radius = 3;
    const angleOffset = (2 * Math.PI * offset) / numberOfItems;
    var position = [
        0,
        1*radius* Math.cos(angleOffset + carouselAngle),
        2*radius* Math.sin(angleOffset + carouselAngle) - radius,
    ];

    var opacity = (position[2] + radius) / (2 * radius);
    opacity = Math.max(0, Math.min(1, opacity)); 

    const handleClick = () => {
        if(hovered) navigate(`/topic/${encodeURIComponent(itemText)}`);
    };

    return (
        <group>
            <mesh ref={boxRef} position={position}
                onClick={handleClick}
                onPointerOver={ (event) => {
                    if(position[2] > 0.5) {
                        setHover(true);
                        setHoveredState(true)
                    }
                }}
                onPointerLeave={ () => {
                    setHover(false)
                    setHoveredState(false);
                    }}
                    >
                <boxGeometry args={[3, 1, 0.5]} />
                <meshBasicMaterial transparent opacity={0.0} color={'grey'}/>
                {/* <meshPhongMaterial shininess={100}/> */}
                </mesh>

            <Center ref={textRef} position={position} rotateY={Math.PI}>
                {words.length === 2 ? (
                    <>
                        <Text3D size={0.3} font={interBoldFont} position={[0, 0.2, 0]}>
                            {words[0]}
                            <meshStandardMaterial color={ hovered ? 'green' : [opacity, opacity, opacity]} metalness={0} roughness={0.2} />
                            </Text3D>
                        <Text3D size={0.3} font={interBoldFont} position={[+0.0, -0.2, 0]}>
                            {words[1]}
                            <meshStandardMaterial color={ hovered ? 'green' : [opacity, opacity, opacity]} metalness={0} roughness={0.2} />
                            </Text3D>                   
                    </>

                ) : 
                ( <Text3D 
                    letterSpacing={0.05} 
                    size={0.3} 
                    font={interBoldFont}
                    curveSegments={16}
                    // bevelEnabled
                    // bevelSize={0.01}
                    // bevelThickness={0.005}
                    // bevelOffset={0.02}
                    // bevelSegments={1}                      //color={ hovered ? 'green' : [opacity, opacity, opacity]}
                >
                    {words[0]}
                    <meshStandardMaterial color={ hovered ? 'green' : [opacity, opacity, opacity]} metalness={0} roughness={0.2} />
                </Text3D>
                )}
            </Center>
        </group>
    );
}

function CarouselManager( {topics} ){
    const [carouselAngle, setCarouselAngle] = useState(0); 
    const [isHovered, setIsHovered] = useState(false);

    useFrame(() => {
            setCarouselAngle((prev) => prev + 0.002); 
        
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

    let gl;

    useEffect( () => {
        return () => {
            if (gl){
                console.log('Disposing WebGL context Carousel3D');
                gl.dispose();
            }
        };
    }, []);

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
            onCreated={ (state) => {
                gl = state.gl;
            }}
            camera={{ position: [0, 0, 10], fov: 40 }} 
            shadows>
                <ambientLight intensity={0.5}/>
                <directionalLight color="green" position={[-1,0,25]} intensity={1} />
                <directionalLight color="green" position={[1,0, 25]} intensity={1} />
                <directionalLight color="white" position={[0,1, 25]} intensity={0.5} />
                {/* <directionalLight position={[0,-2,10]} intensity={1} /> */}
                <CarouselManager topics = {topics}/>
            </Canvas>
        </div>
    );

};

export default Carousel3D;