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
                <meshBasicMaterial transparent opacity={0} color={'pink'}/>
                </mesh>

            <Center ref={textRef} position={position} rotateY={Math.PI}>
                {words.length === 2 ? (
                    <>
                        <Text3D size={0.3} font={interBoldFont} position={[0, 0.2, 0]}>
                            {words[0]}
                            <meshStandardMaterial color={ hovered ? 'blue' : [opacity, opacity, opacity]} metalness={0} roughness={0.2} />
                            </Text3D>
                        <Text3D size={0.3} font={interBoldFont} position={[+0.0, -0.2, 0]}>
                            {words[1]}
                            <meshStandardMaterial color={ hovered ? 'blue' : [opacity, opacity, opacity]} metalness={0} roughness={0.2} />
                            </Text3D>                   
                    </>

                ) : 
                ( <Text3D 
                    letterSpacing={0.05} 
                    size={0.3} 
                    font={interBoldFont}
                    curveSegments={16}
                >
                    {words[0]}
                    <meshStandardMaterial color={ hovered ? 'blue' : [opacity, opacity, opacity]} metalness={0} roughness={0.2} />
                </Text3D>
                )}
            </Center>
        </group>
    );
}

function CarouselManager( {topics} ){
    const [carouselAngle, setCarouselAngle] = useState(0); 
    const [isHovered, setIsHovered] = useState(false);
    const { mouse } = useThree();
    var maxSpeed = 0.02;
    var speedControl = 0.1;

    useFrame(() => {



            if(mouse.y < 0.05 && mouse.y > -0.05){
                speedControl = 0.0;
            }
            else if (mouse.x < -0.9 || mouse.x > 0.9  ){
                speedControl = 0.1;
            } 
            else {
                speedControl = -1*mouse.y;
            }

            if(mouse.x == 0){
                speedControl = 0.05;
            }

            setCarouselAngle((prev) => prev + maxSpeed * speedControl); 
        
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

function MovingSphere() {
    const meshRef = useRef();
    const { mouse } = useThree();
  
    useFrame(() => {
      meshRef.current.position.x = mouse.x * 5;
      meshRef.current.position.y = mouse.y * 5;
    //   console.log(mouse.y);
    });
  
    return (
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
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
                <ambientLight intensity={0.05}/>
                <directionalLight color="pink" position={[-1,0,25]} intensity={1} />
                <directionalLight color="purple" position={[1,0, 25]} intensity={1} />
                <directionalLight color="white" position={[0,1, 5]} intensity={0.25} />
                <directionalLight color="white" position={[0,-1, 5]} intensity={0.25} />
                <directionalLight position={[0,-2,10]} intensity={1} />
                <CarouselManager topics = {topics}/>
                {/* <MovingSphere/> */}
            </Canvas>
        </div>
    );

};

export default Carousel3D;