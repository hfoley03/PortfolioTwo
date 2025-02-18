import '/src/App.scss';
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import interBoldFont from "/Inter_Bold.json?url";

function useBounds() {
    const { viewport } = useThree();
    const [bounds, setBounds] = useState({
        left: -viewport.width / 2,
        right: viewport.width / 2,
        top: viewport.height / 2,
        bottom: -viewport.height / 2
    });

    useEffect(() => {
        const updateBounds = () => {
            setBounds({
                left: -viewport.width / 2,
                right: viewport.width / 2,
                top: viewport.height / 2,
                bottom: -viewport.height / 2
            });
        };
        
        updateBounds();
    }, [viewport]);

    return bounds;
}

const instances = []; 

function TopicSelector({ topic, initialPosition }) {
    const BOUNDS = useBounds();

    const textRef = useRef();
    const boxRef = useRef();
    const navigate = useNavigate();
    const velocity = useRef({ x: (Math.random() - 0.5) * 0.03, y: (Math.random() - 0.5) * 0.03 });
    const position = useRef([...initialPosition]);
    const [hovered, setHover] = useState(false);

    const textWidth = topic.length * 0.9;
    const textHeight = 1.2;

    useEffect(() => {
        instances.push({ position, velocity, textWidth, textHeight, topic });
        return () => {
            const index = instances.indexOf(position);
            if (index > -1) instances.splice(index, 1);
        };
    }, []);

    useFrame(() => {
        if (!hovered) {
            position.current[0] += velocity.current.x;
            position.current[1] += velocity.current.y;
        } 

        if (position.current[0] - textWidth / 2 < BOUNDS.left || position.current[0] + textWidth / 2 > BOUNDS.right) {
            velocity.current.x *= -1;
        }
        if (position.current[1] - textHeight / 2 < BOUNDS.bottom || position.current[1] + textHeight / 2 > BOUNDS.top) {
            velocity.current.y *= -1;
        }

        instances.forEach(instance => {
            if (instance.topic == topic) {
                // console.log("i am me and you are too");
                return;
            }

            const dx = parseFloat(position.current[0].toFixed(3)) - parseFloat(instance.position.current[0].toFixed(3));
            const dy = parseFloat(position.current[1].toFixed(3)) - parseFloat(instance.position.current[1].toFixed(3));
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = 1;//(textWidth + instance.textWidth) / 4;
            // console.log("Pos A:", position.current, "Pos B:", instance.position.current);
            // console.log(`dx: ${dx}, dy: ${dy}`);

            // if (distance < minDistance) {
            //     console.log(`d: ${minDistance}`);
            //     const angle = Math.atan2(dy, dx);
            //     const speed1 = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2);
            //     const speed2 = Math.sqrt(instance.velocity.current.x ** 2 + instance.velocity.current.y ** 2);      
            //     velocity.current.x = Math.cos(angle) * speed2;
            //     velocity.current.y = Math.sin(angle) * speed2;   
            //     instance.velocity.current.x = Math.cos(angle + Math.PI) * speed1;
            //     instance.velocity.current.y = Math.sin(angle + Math.PI) * speed1;
            // }
        });

        if (textRef.current && boxRef.current) {
            textRef.current.position.set(...position.current);
            boxRef.current.position.set(...position.current);
        }
    });

    const handleClick = () => {
        navigate(`/topic/${encodeURIComponent(topic)}`);
    };

    return (
        <group>
            {/* Invisible bounding box */}
            <mesh ref={boxRef} position={initialPosition} onClick={handleClick}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}>
                <boxGeometry args={[textWidth, textHeight, 0.2]} />
                <meshBasicMaterial transparent opacity={0} />
            </mesh>
            
            {/* 3D Text */}
            <Center ref={textRef} position={initialPosition}>
                <Text3D 
                    letterSpacing={0.0} 
                    size={1} 
                    font={interBoldFont}
                    curveSegments={16}
                    bevelEnabled
                    bevelSize={0.01}
                    bevelThickness={0.05}
                >
                    {topic}
                    <meshStandardMaterial color={hovered ? 'blue' : 'green'} />
                </Text3D>
            </Center>
        </group>
    );
}

const Home3D = () => {
    const topics = [
        { topic: "Harry", position: [-5, 3, 0] },
        { topic: "Denis", position: [5, 3, 0] },
        { topic: "Foley", position: [-5, 0, 0] },
        // { topic: "Mobile", position: [5, 0, 0] },
        // { topic: "Creative Coding", position: [-5, -3, 0] },
        // { topic: "Augmented Reality", position: [5, -3, 0] },
        // { topic: "MIDI", position: [-5, 6, 0] },
        // { topic: "HCI", position: [5, 6, 0] },
        // { topic: "Hardware", position: [-5, -6, 0] },
        // { topic: "UX", position: [5, -6, 0] },
        // { topic: "Website", position: [-5, 9, 0] },
        // { topic: "Computer Vision", position: [5, 9, 0] },
    ];

    return (
        <div className="fill-rest-height">
            <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight color="white" position={[5, 5, 5]} intensity={2} />
                {topics.map(({ topic, position }, index) => (
                    <TopicSelector key={index} topic={topic} initialPosition={position} />
                ))}
            </Canvas>
        </div>
    );
};

export default Home3D;
