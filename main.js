import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import page from 'page';

function initThreeJs(containerId) {

const container = document.getElementById(containerId);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();


renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
container.appendChild(renderer.domElement);


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

window.addEventListener("keydown", function(e) {
    if (e.keyCode === 65) { // A
        cube.position.x -= 1;
    }
    
    if (e.keyCode === 68) { // D
        cube.position.x += 1;
    }

    if (e.keyCode === 83) { // S
        cube.position.y -= 1;
    }

    if (e.keyCode === 87) { // W
        cube.position.y += 1;
    }
});

const resetButton = document.createElement('button');
resetButton.className = 'reset-buttoN';
resetButton.innerText = 'Reset';
document.body.appendChild(resetButton);

resetButton.addEventListener('click', resetPositions);

function resetPositions() {
    cube.position.set(0, 0, 0); 
    camera.position.set(0, 0, 5); 

}




}

function initThreeJsPage2(containerId) {

    const container = document.getElementById(containerId);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
    
    
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( animate );
    container.appendChild(renderer.domElement);
    
    
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 'red' } );
    const cube2 = new THREE.Mesh( geometry, material );
    scene.add( cube2 );
    
    camera.position.z = 5;
    
    
    
    
    function animate() {
    
        cube2.rotation.x += 0.01;
        cube2.rotation.y += 0.01;
    
        controls.update();
      
        renderer.render( scene, camera );
    
    
    }
    
    window.addEventListener("keydown", function(e) {
        if (e.keyCode === 65) { // A
            cube2.position.x -= 1;
        }
        
        if (e.keyCode === 68) { // D
            cube2.position.x += 1;
        }
    
        if (e.keyCode === 83) { // S
            cube2.position.y -= 1;
        }
    
        if (e.keyCode === 87) { // W
            cube2.position.y += 1;
        }
    });
    

    }



function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
 
}



page('/', () => {
    showPage('home');
    // resetScene();
    initThreeJs('home'); 

    
});

page('/page2', () => {
    showPage('page2');
    // resetScene();
    initThreeJsPage2('page2'); 
    
});


page();