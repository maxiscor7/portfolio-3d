import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './Ironman3d.css';
import SliderLevex from '../../components/SliderLevex/SliderLevex'
import slider1 from '../../assets/slider-ironman1.jpeg'
import slider2 from '../../assets/slider-ironman2.jpeg'
import slider3 from '../../assets/slider-ironman3.jpeg'
import slider4 from '../../assets/slider-ironman4.jpeg'
import slider5 from '../../assets/slider-ironman5.jpeg'
import slider6 from '../../assets/slider-ironman6.jpeg'
import slider7 from '../../assets/slider-ironman7.png'
import Loader from '../../components/Loader/Loader';

const images = [
    { src: slider1, alt: 'Primera imagen' },
    { src: slider2, alt: 'Segunda imagen' },
    { src: slider3, alt: 'Tercera imagen' },
    { src: slider4, alt: 'Cuarta imagen' },
    { src: slider5, alt: 'Quinta imagen' },
    { src: slider6, alt: 'Sexta imagen' },
    { src: slider7, alt: 'Septima imagen' },
];


const Ironman3d = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simula una carga de recursos pesados
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // ajusta el tiempo según lo necesites
    }, []);

    const { scene } = useGLTF('/ironman-helmet/Iron_man_helmet_new_version.glb');

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className='container-sectionironman3d'>
                    <div className='first-levex-text-container'>
                        <h1>IRONMAN HELMET 3D</h1>
                        <p>The world of 3D modeling is vast and fascinating, highlighting Blender as a powerful tool in this field. Blender not only allows the creation of complex 3D models, but also offers a wide range of functionality for working with a particle system, fluid simulations, gravity effects and animations. Blender's ability to combine these features opens up endless creative possibilities.</p>
                        <p>In this project, I used Blender to model Iron Man's iconic helmet, exploring various techniques to create a detailed and visually stunning model.</p>

                    </div>


                    <div className='container-firstpart-sectionironman3d'>

                        <div className='container-mouse-indications'>
                            <div className='container-icon-mouse-click'>
                                <div className='mouse-design'>
                                    <div className='click-left' style={{ backgroundColor: "red" }}></div>
                                    <div className='click-right'></div>
                                    <div className='click-scroll' style={{ backgroundColor: "#292828" }}></div>
                                </div>
                                <label>Left Click: Rotate</label>
                            </div>
                            <div className='container-icon-mouse-click'>
                                <div className='mouse-design'>
                                    <div className='click-left'></div>
                                    <div className='click-right' style={{ backgroundColor: "red" }}></div>
                                    <div className='click-scroll' style={{ backgroundColor: "#292828" }} ></div>
                                </div>
                                <label>Right Click: Move around</label>
                            </div>
                            <div className='container-icon-mouse-click'>
                                <div className='mouse-design'>
                                    <div className='click-left'></div>
                                    <div className='click-right'></div>
                                    <div className='click-scroll' style={{ backgroundColor: "red" }}></div>
                                </div>
                                <label>Scroll: Scale</label>
                            </div>
                        </div>

                        <div className='container-orbital'>

                            <div className='container-canva-helmet3d'>
                                <Canvas>

                                    <directionalLight position={[10, 10, 5]} intensity={1} />
                                    <primitive
                                        object={scene}
                                        scale={2.6}
                                        position={[0, -8.3, -1]}  // Ajusta la posición aquí
                                        rotation={[-0.1, 0, 0]}   // Ajusta la rotación aquí
                                    />
                                    <OrbitControls
                                        enableZoom={true}
                                        enablePan={true}
                                        enableRotate={true}
                                        target={[0, -2.6, -1]} // Establece el punto de órbita
                                        maxPolarAngle={Math.PI / 2} // Limita la inclinación para evitar rotaciones invertidas
                                    />
                                    <spotLight
                                        position={[-10, -10, -10]}
                                        angle={0.8}
                                        penumbra={0.5}
                                        intensity={100}
                                        castShadow
                                    />
                                    <hemisphereLight
                                        skyColor={'#ffffff'} // Color de la luz del cielo
                                        groundColor={'#444444'} // Color de la luz del suelo
                                        intensity={1}
                                    />
                                </Canvas>

                            </div>
                        </div>
                    </div>


                    <div className='first-levex-text-container'>
                        <h1>CHALLENGES</h1>
                        <p>When I tried to use this model on my website, I found that the way I had generated the textures was not the most suitable. There is a specific workflow that needs to be followed to bake these textures, which is essential for correctly visualizing them with other technologies, such as in this case, using React.js along with Three.js, Drei, and Fiber. Due to this, the images shown below may not exactly match the rendered 3D model.</p>
                        <p>Working with different materials, models, and types of user interaction presents a wide range of possibilities. Blender offers an almost infinite universe of options, from creating 3D models for 3D printing—allowing ideas that once only existed in the digital realm to become tangible—to producing movies with high-quality CGI effects.</p>

                    </div>

                    <SliderLevex images={images} />

                </div>
            )}
        </>
    );
}

export default Ironman3d