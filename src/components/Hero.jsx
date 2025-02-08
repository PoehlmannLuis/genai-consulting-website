"use client";

import { motion } from 'framer-motion';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Link from 'next/link'; // Import Link for navigation

export default function Hero() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000); // Reduced canvas width
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true }); // Enable alpha for transparent background
        renderer.setSize(window.innerWidth, 400); // Reduced canvas height

        // Load 3D Model
        const loader = new GLTFLoader();
        loader.load('/robot_arm/scene.gltf', function (gltf) { // Assuming you put the gltf in public/robot_arm
            const model = gltf.scene;
            model.scale.set(0.7, 0.7, 0.7); // Increased scale - make it bigger

            // Center the model (optional, if needed based on model origin)
            const boundingBox = new THREE.Box3().setFromObject(model);
            const center = boundingBox.getCenter(new THREE.Vector3());
            model.position.sub(center); // Center model at origin

            scene.add(model);

            // Animation adjustments for smoother, smaller radius rotation
            function animate() {
                requestAnimationFrame(animate);

                // Rotate around its local Y axis with a smaller increment
                model.rotation.y += 0.005; // Reduced rotation speed for smoother effect

                renderer.render(scene, camera);
            }
            animate();
        }, undefined, function (error) {
            console.error('An error happened loading the 3D model', error);
        });


        // Lighting - unchanged
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);


        camera.position.z = 5;

        return () => {
            // Cleanup on component unmount
            renderer.dispose();
        };
    }, []);

    return (
        <section className="min-h-screen bg-primary flex items-center justify-center text-secondary relative overflow-hidden">
            <div className="absolute inset-0 bg-primary opacity-80"></div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center px-4 z-10"
            >
                <h1 className="text-5xl font-bold mb-6 text-secondary">
                    GenAI-Lösungen, die <span className="text-accent">Impact</span> haben
                </h1>
                <p className="text-xl mb-8 text-secondary">
                    Ich helfe Ihnen, <b>verborgene KI-Use-Cases</b> zu finden, die einen nachweisbaren <b>Mehrwert</b> liefern.
                </p>
                {/* 1. Button links to ROI Calculation page */}
                <Link href="/roi" passHref>
                    <button className="bg-accent text-secondary px-8 py-3 rounded-lg hover:scale-105 transition-transform">
                        Jetzt Use-Case prüfen →
                    </button>
                </Link>
            </motion.div>
            <div className="absolute bottom-0 left-0 w-full h-[400px] md:h-[400px] lg:h-[400px]">
                <canvas className="w-full h-full" ref={canvasRef} />
            </div>
        </section>
    );
}
