const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeeeeee);
const textura = new THREE.TextureLoader();
const matcap = textura.load("../images_texture/black-and-white-details-of-moon-texture-concept.jpg")

var loader = new THREE.TextureLoader();
loader.load('../image_fondo/space.png', function(texture){
    scene.background = texture;
})

const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.RingGeometry(0.5, 1, 16)
const material = new THREE.MeshMatcapMaterial()
material.matcap = matcap;
material.flatShading = true;
const anillo = new THREE.Mesh(geometry,material);
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x0000000 } ) );
scene.add( line );
scene.add(anillo);
/* scene.fog = new THREE.Fog(0x00fffff ,1, 15); */

camara.position.z = 5;
camara.position.y = -2;
camara.position.x = -4;

function animate(){
    requestAnimationFrame(animate)
    anillo.rotation.z += 0.04
    anillo.rotation.y += 0.04
    anillo.rotation.x += 0.04
    line.rotation.y += 0.04
    line.rotation.x += 0.04
    line.rotation.z += 0.04
    renderer.render(scene, camara)
}
animate();