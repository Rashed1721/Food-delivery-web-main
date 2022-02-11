import React, { useState } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import logo from '../../image/Photos and Icons/logo.png'
import MainNavbar from '../MainNavbar/MainNavbar';
import css from './DishType.css'




const DishType = () => {


    return (

        <>

            <MainNavbar></MainNavbar>


            <Container>

                <h1 className='h' style={{ marginTop: '50px', marginBottom: '50px', fontSize: 50 }}>Dish Type Preference </h1>

                {/*  item container-1 */}

                <div className='iteam-container' style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }} >

                    {/* div--1 */}

                    {/* iteam-1 */}
                    <div style={{ width: '250px', height: '250px', marginBottom: 30 }}>

                        <div style={{ height: '60%', backgroundColor: '#b5a9a9', }}>

                        </div>

                        <div style={{ height: '40%', backgroundImage: " linear-Gradient( to right, #0cce87, #51b855)" }}>
                            <p style={{ fontSize: 22, marginBottom: 0 }}>African</p>

                            <button style={{ backgroundColor: 'transparent', border: 'transparent', marginRight: 15 }}>
                                <i style={{ color: 'white', fontSize: '30px' }} class="fas fa-times"></i>
                            </button>



                            <button style={{ borderRadius: '80%', width: '45px', height: '45px', border: '2px solid white', backgroundColor: 'rgb(90 187 94 / 50%)', marginLeft: 15, marginTop: 10 }}>
                                <i style={{ color: 'white', fontSize: '25px' }} class="fas fa-check"></i>
                            </button>


                        </div>
                    </div>
                    {/* iteam-2 */}
                    <div style={{ width: '250px', height: '250px', marginBottom: 30 }}>

                        <div style={{ height: '60%', backgroundColor: '#b5a9a9', }}>

                        </div>

                        <div style={{ height: '40%', backgroundImage: " linear-Gradient( to right, #0cce87, #51b855)" }}>

                            <p style={{ fontSize: 22, marginBottom: 0 }}>Asain</p>

                            <button style={{ backgroundColor: 'transparent', border: 'transparent', marginRight: 15 }}>
                                <i style={{ color: 'white', fontSize: '30px' }} class="fas fa-times"></i>
                            </button>

                            <button style={{ borderRadius: '80%', width: '45px', height: '45px', border: '2px solid white', backgroundColor: 'rgb(90 187 94 / 50%)', marginLeft: 15, marginTop: 10 }}>
                                <i style={{ color: 'white', fontSize: '25px' }} class="fas fa-check"></i>
                            </button>


                        </div>
                    </div>





                    {/* iteam-3 */}
                    <div style={{ width: '250px', height: '250px', backgroundColor: 'rgb(223 26 163 / 91%)', marginBottom: 30 }}>

                        <div style={{ height: '60%', backgroundColor: '#b5a9a9', }}>

                        </div>

                        <div style={{ height: '40%', backgroundColor: 'rgb((223 26 163 / 91%)' }}>

                            <p style={{ fontSize: 22, marginBottom: 0 }}>European</p>

                            <button style={{ borderRadius: '80%', width: '45px', height: '45px', border: '2px solid white', backgroundColor: 'transparent', marginRight: 15 }}>
                                <i style={{ color: 'white', fontSize: '30px' }} class="fas fa-times"></i>
                            </button>

                            <button style={{ backgroundColor: 'rgb(235, 23, 182)', marginLeft: 15, marginTop: 10, border: 'transparent' }}>
                                <i style={{ color: 'white', fontSize: '25px' }} class="fas fa-check"></i>
                            </button>


                        </div>
                    </div>
                    {/* iteam-4 */}
                    <div style={{ width: '250px', height: '250px', backgroundColor: 'rgb(223 26 163 / 91%)', marginBottom: 30 }}>

                        <div style={{ height: '60%', backgroundColor: '#b5a9a9', }}>

                        </div>

                        <div style={{ height: '40%', backgroundColor: 'rgb((223 26 163 / 91%)' }}>

                            <p style={{ fontSize: 22, marginBottom: 0 }}>American</p>

                            <button style={{ backgroundColor: 'transparent', border: '2px solid white', borderRadius: '80%', width: '45px', height: '45px', marginRight: 15 }}>
                                <i style={{ color: 'white', fontSize: '30px' }} class="fas fa-times"></i>
                            </button>

                            <button style={{ backgroundColor: 'rgb(235, 23, 182)', marginLeft: 15, marginTop: 10, border: 'transparent' }}>
                                <i style={{ color: 'white', fontSize: '25px' }} class="fas fa-check"></i>
                            </button>


                        </div>
                    </div>



                </div>



                {/* iteam container-2*/}


                <hr />



                <Footer></Footer>
            </Container >

        </>




    );
};

export default DishType;