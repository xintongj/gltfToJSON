import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set the camera position
camera.position.z = 5;

// Load the GLTF model
const loader = new GLTFLoader();
loader.load('assets/tank.gltf', (gltf) => {
    const model = gltf.scene;
    scene.add(model);
    
    // Convert the model to JSON
    const json = model.toJSON();

    // Output the JSON data to the console or save it
    console.log(JSON.stringify(json, null, 2));
    
}, undefined, (error) => {
    console.error('An error occurred while loading the model:', error);
});

// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
