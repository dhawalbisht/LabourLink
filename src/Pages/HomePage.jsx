import React from 'react'
import Navbar from '../components/Navbar'
import '../style/HomePage.css'
import { Link } from '@mui/material'
import Write from '../components/Typewrite'

export default function HomePage() {
    
    return (
        <>
            <Navbar/>
            
            <div className='block1'>
            <div class="row-1 row"></div>
            <div class="row-2 row"></div>
            <div class="row-3 row"></div>
            <div class="row-4 row"></div>
            <div class="row-5 row"></div>
            <div class="row-6 row"></div>
            <div class="row-7 row"></div>
            <div class="row-8 row"></div>
            <div class="row-9 row"></div>
            <div class="row-10 row"></div>
            <div className="Rectangle1">
                
                <h1 className='text1'><Write/></h1>
                <p className='text2'>"Building a bridge between job seekers and employers in the labour market."</p></div>
                <div><button className='button-1'><Link src="LoginPage" className='register'>Register for Work!</Link></button></div>
                <div className="right-image1" ><img height="500px" width='700px' src='./assets/male-worker-factory.jpg'></img></div></div>
                <div className='Rectangle8'>
                   
                     
                    
                    <h2 className='text-3'>Our Aim</h2>
                    <p className='text-4'>The website aims to bridge the gap between job seekers and employers by providing a centralized platform where they can connect and fulfill their respective needs.</p>
                    </div>
                   
                    
                    <div className='block3'>
                        <div className='bg grey flex'>
                            <div>
                            <h3 className='text5'>Rating and Reviews</h3>
                            <div className='ratingblock'>
                            <div className='eclipse1'></div>
                            <div className='eclipse2'></div>
                            <div className='eclipse3'></div>
                            <div className='eclipse4'></div>
                            <div className='eclipse5'></div></div>
                            </div>

                        </div>
                    </div>
                    </>
 )       
  
}