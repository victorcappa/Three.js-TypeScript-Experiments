import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const scene2 = new THREE.Scene();
const scene3 = new THREE.Scene();
const scene4 = new THREE.Scene();

// scene.background = new THREE.Color(0x00ff00);
// scene2.background = new THREE.Color(0xff0000);
// scene3.background = new THREE.Color(0xee82ee);
// scene4.background = new THREE.Color(0x0000ff);

const camera1 = new THREE.PerspectiveCamera(75, 1, 0.1, 10);
const camera2 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
const camera3 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
const camera4 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);

camera1.position.z = 2;
camera2.position.y = 1;
camera2.lookAt(new THREE.Vector3(0, 0, 0));
camera3.position.z = 1;
camera4.position.x = 1;
camera4.lookAt(new THREE.Vector3(0, 0, 0));

const canvas1 = document.getElementById("c1") as HTMLCanvasElement;
const canvas2 = document.getElementById("c2") as HTMLCanvasElement;
const canvas3 = document.getElementById("c3") as HTMLCanvasElement;
const canvas4 = document.getElementById("c4") as HTMLCanvasElement;

const renderer1 = new THREE.WebGLRenderer({ canvas: canvas1 });
renderer1.setSize(200, 200);
const renderer2 = new THREE.WebGLRenderer({ canvas: canvas2 });
renderer2.setSize(300, 300);
const renderer3 = new THREE.WebGLRenderer({ canvas: canvas3 });
renderer3.setSize(400, 400);
const renderer4 = new THREE.WebGLRenderer({ canvas: canvas4 });
renderer4.setSize(500, 500);

//document.body.appendChild(renderer.domElement)

new OrbitControls(camera1, renderer1.domElement);
new OrbitControls(camera2, renderer2.domElement);
new OrbitControls(camera3, renderer3.domElement);
new OrbitControls(camera4, renderer4.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
	color: 0xff0000,
	wireframe: true,
});
const material2 = new THREE.MeshBasicMaterial({
	color: 0x00ff00,
	wireframe: true,

	// green in hex is 0x00ff00
});
const material3 = new THREE.MeshBasicMaterial({
	color: 0x0000ff,
	wireframe: true,

	// blue in hex is 0x0000ff
});
const material4 = new THREE.MeshBasicMaterial({
	color: 0xee82ee,
	wireframe: true,

	// give the value of violet in hex is 0xee82ee
});

const cube = new THREE.Mesh(geometry, material);
const cube2 = new THREE.Mesh(geometry, material2);
const cube3 = new THREE.Mesh(geometry, material3);
const cube4 = new THREE.Mesh(geometry, material4);

scene.add(cube);
scene2.add(cube2);
scene3.add(cube3);
scene4.add(cube4);

function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.005;
	cube.rotation.y += 0.005;
	cube2.rotation.x += 0.005;
	cube2.rotation.y += 0.005;
	cube3.rotation.x += 0.005;
	cube3.rotation.y += 0.005;
	cube4.rotation.x += 0.005;
	cube4.rotation.y += 0.005;

	render();
}

function render() {
	renderer1.render(scene, camera1);
	renderer2.render(scene2, camera2);
	renderer3.render(scene3, camera3);
	renderer4.render(scene4, camera4);
}

animate();
