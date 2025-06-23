"use client";

import { motion } from 'framer-motion';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Link from 'next/link';

export default function Hero() {
    const canvasRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        if (typeof window === 'undefined') return; // Ensure this runs only on client

        const currentCanvas = canvasRef.current;
        if (!currentCanvas) return;

        const scene = new THREE.Scene();
        // Adjust camera for different screen sizes
        const camera = new THREE.PerspectiveCamera(75, currentCanvas.clientWidth / currentCanvas.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: currentCanvas, alpha: true });
        renderer.setSize(currentCanvas.clientWidth, currentCanvas.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio); // For sharper rendering on high DPI screens

        let model;
        const loader = new GLTFLoader();
        loader.load('/robot_arm/scene.gltf', function (gltf) {
            model = gltf.scene;
            model.scale.set(0.6, 0.6, 0.6); // Adjusted scale for mobile

            const boundingBox = new THREE.Box3().setFromObject(model);
            const center = boundingBox.getCenter(new THREE.Vector3());
            model.position.sub(center);
            scene.add(model);
        }, undefined, function (error) {
            console.error('An error happened loading the 3D model', error);
        });

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); // Slightly increased ambient light
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // Slightly increased directional light
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        camera.position.z = 4; // Adjusted camera position for better view on smaller screens

        function animate() {
            if (!model) return; // Ensure model is loaded
            requestAnimationFrame(animate);
            model.rotation.y += 0.005;
            renderer.render(scene, camera);
        }
        animate();

        const handleResize = () => {
            if (currentCanvas) {
                camera.aspect = currentCanvas.clientWidth / currentCanvas.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(currentCanvas.clientWidth, currentCanvas.clientHeight);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
            // Dispose model, geometries, materials if necessary
            if (model) {
                scene.remove(model);
                model.traverse(object => {
                    if (object.geometry) object.geometry.dispose();
                    if (object.material) {
                        if (Array.isArray(object.material)) {
                            object.material.forEach(material => material.dispose());
                        } else {
                            object.material.dispose();
                        }
                    }
                });
            }
        };
    }, [isMounted]); // Rerun effect if isMounted changes (e.g. for HMR, though mainly for initial client-side run)

    return (
        <section className="min-h-screen bg-primary flex flex-col items-center justify-center text-secondary relative overflow-hidden pt-20 md:pt-0">
            {/* Added padding-top for mobile to avoid overlap with menu, md:pt-0 to reset on larger screens */}
            <div className="absolute inset-0 bg-primary opacity-80 z-0"></div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center px-4 sm:px-6 lg:px-8 z-10 flex-grow flex flex-col justify-center"
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-secondary">
                    Ihr Partner für <span className="text-accent">Generative KI</span> in Unternehmen
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-secondary max-w-xl mx-auto">
                    Wir unterstützen Konzerne und Mittelständler dabei, das volle Potenzial von GenAI zu erschließen – von der Strategie bis zur Implementierung wertschöpfender Anwendungsfälle.
                </p>
                <Link href="/roi" passHref>
                    <button className="bg-accent text-secondary px-6 py-3 sm:px-8 sm:py-3 rounded-lg text-base sm:text-lg hover:scale-105 transition-transform transform active:scale-95">
                        Potenzialanalyse starten
                    </button>
                </Link>
            </motion.div>
            <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] z-0"> {/* Adjusted height for responsiveness */}
                {isMounted && <canvas className="w-full h-full" ref={canvasRef} />}
            </div>
        </section>
    );
}
