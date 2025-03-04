import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

function SpinningCube() {
  const mountRef = useRef(null);
  const [rotationSpeed, setRotationSpeed] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    let lastMousePosition = { x: 0, y: 0 };

    const handleMouseMove = (event) => {
      const deltaX = event.clientX - lastMousePosition.x;
      const deltaY = event.clientY - lastMousePosition.y;

      setRotationSpeed({
        x: deltaY * 0.001, 
        y: deltaX * 0.001,
      });

      lastMousePosition = { x: event.clientX, y: event.clientY };
    };

    const animate = () => {
      cube.rotation.x += rotationSpeed.x;
      cube.rotation.y += rotationSpeed.y;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [rotationSpeed]);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
}

export default SpinningCube;
