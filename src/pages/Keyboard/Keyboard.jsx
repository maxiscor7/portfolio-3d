import React, { useState, useEffect } from 'react';
import SplineCalculator from '../../components/SplineCalculator/SplineCalculator'
import './Keyboard.css'
import Loader from '../../components/Loader/Loader';

const Keyboard = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simula una carga de recursos pesados
        setTimeout(() => {
            setIsLoading(false);
        }, 3000); // ajusta el tiempo según lo necesites
    }, []);

    return (
        <>

            <div>
                <div className='first-levex-text-container'>
                    <h1>INTERACTIVE KEYBOARD</h1>
                    <p>In this project, I created a 3D object using Spline, an intuitive tool for crafting interactive 3D experiences. The model is not just a static object; it’s designed to be fully interactive, allowing users to engage with it in multiple ways. By using their mouse, users can rotate, move, and scale the object, offering a dynamic and engaging experience.</p>
                    <p>What makes this project even more interesting is its responsiveness to keyboard inputs. The model reacts to specific keys—0, 1, 2, and Enter—demonstrating an additional layer of interactivity. This feature was particularly exciting to develop, as it provided a valuable learning opportunity in integrating user inputs with 3D objects.</p>
                    <p className='indications'>Press: 0, 1, 2, or Enter</p>
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
                                <SplineCalculator />
                            )}
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Keyboard