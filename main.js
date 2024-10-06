import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();


renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 'blue' } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;




function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

    controls.update();
  
	renderer.render( scene, camera );


}

document.onkeydown = function(e) {
    if(e.keyCode === 65) {
        cube.position.x -= 1;
        console.log("teste")
    }

    if(e.keyCode === 68) {
        cube.position.x += 1;
        console.log("teste")
    }

    if(e.keyCode === 83) {
        cube.position.y -= 1;
        console.log("teste")
    }

    if(e.keyCode === 87) {
        cube.position.y += 1;
        console.log("teste")
    }
}
