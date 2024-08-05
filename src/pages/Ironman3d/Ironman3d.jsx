import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './Ironman3d.css';


const Ironman3d = () => {

    const { scene } = useGLTF('/ironman-helmet/Iron_man_helmet_new_version.glb');

    return (
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
        </div>
    );
}

export default Ironman3d