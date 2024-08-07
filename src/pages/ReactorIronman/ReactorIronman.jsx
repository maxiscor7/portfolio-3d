import React, { useState, useEffect } from 'react';
import SplineReactor from '../../components/SplineReactor/SplineReactor';
import Loader from '../../components/Loader/Loader';

const ReactorIronman = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simula una carga de recursos pesados
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // ajusta el tiempo según lo necesites
    }, []);


    return (
        <>

            <div>
                <div className='first-levex-text-container'>
                    <h1>IRONMAN NUCLEAR REACTOR 3D</h1>
                    <p>In this project, I created a 3D model of Ironman's nuclear reactor using Spline, a tool that stands out for its ease of use and versatility. Spline not only allows for the simple creation of 3D models but also facilitates their implementation across various platforms. Whether you're using React, Next.js, Three.js, or even plain HTML and JavaScript, Spline models integrate seamlessly into your projects. Additionally, it’s compatible with platforms like Webflow, making it a flexible option for both designers and web developers.</p>
                    <p>While Spline is easy to use and provides accessible features for creators of all levels, it does have certain limitations. Unlike more robust tools like Blender, Spline does not offer the same level of control or advanced functionalities for 3D modeling and animation. However, for many projects, especially those that prioritize ease of use and quick implementation, Spline is an excellent choice.</p>
                    <p>I invite you to interact with the Ironman nuclear reactor by rotating, scaling, and moving it to explore its details. This project was a great opportunity to experiment with Spline and understand its capabilities and limitations within the context of 3D web design.</p>
                </div>
                <div className='container-firstpart-sectionKeyboard3d'>
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
                            {isLoading ? (
                                <Loader />
                            ) : (
                                <SplineReactor />
                            )}
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default ReactorIronman