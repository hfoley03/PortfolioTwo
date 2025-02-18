import { Canvas } from '@react-three/fiber';
import '/src/App.scss';
import "/src/styles/main.scss";
import React, { useRef, useEffect } from "react";
import { Text3D, Center } from "@react-three/drei";
import { useParams } from "react-router-dom";
import interBoldFont from "/Inter_Bold.json?url";

function TitleText({ titleString }) {
    const textRef = useRef();
    const fullTitle = titleString + " Projects";
    return (
        <Center ref={textRef} key={fullTitle}>
            <Text3D 
                letterSpacing={0.05}
                font={interBoldFont} 
                size={2}
                height={0.5}
                curveSegments={16}>
                {fullTitle}
                <meshStandardMaterial attach="material" color='green' metalness={0.1} roughness={0.5}  />
            </Text3D>
        </Center>
    );
}

const TopicPageTitle3D = () => {
    const { topicName } = useParams();
    let gl;

    useEffect(() => {
        return () => {
          if (gl) {
            console.log('Disposing WebGL context for ' + topicName);
            gl.dispose();
          }
        };
      }, []);

    return (
        <div>
            <Canvas 
                  onCreated={(state) => {
                    gl = state.gl;
                  }}
            
            camera={{ position: [0, 0, 10], fov: 40 }} shadows>
                <ambientLight intensity={1} />
                <directionalLight color="white" position={[-1, 0, 4]} intensity={1} />
                <directionalLight color="white" position={[1, 0, 2]} intensity={1} />
                <TitleText titleString={topicName} />
            </Canvas>
        </div>
    );
};

export default TopicPageTitle3D;
