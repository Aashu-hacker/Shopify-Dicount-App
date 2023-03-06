import React from 'react'
import { useAppBridge } from '@shopify/app-bridge-react';
import { Fullscreen } from '@shopify/app-bridge/actions';
import { useState,useRef,useEffect } from 'react';
import {useNavigate} from '@shopify/app-bridge-react';
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux';
import {openFullScreen,closeFullScreen} from "../redux/fullScreenReducer.js"


const Navbar = () => {
  const app = useAppBridge()
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const fullscreenState = useSelector((state) => state.fullScreen)
  const fullscreen = Fullscreen.create(app);
  
  const ref=useRef()
  const handleFullScreenEnter = () => {
    fullscreen.dispatch(Fullscreen.Action.ENTER);
    dispatch(openFullScreen())
    ref.current.click()
  }
  const handleFullScreenExit = () => {
    fullscreen.dispatch(Fullscreen.Action.EXIT);
    dispatch(closeFullScreen())
    ref.current.click()
  }
  
  const closeCanvas=(link)=>{
    ref.current.click();
    if(link!=="tour"){
      navigate(`/${link}`)
    }else{
         
    }
  }

  
  return (
    <>
      <nav class="navbar navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand text-center" href="#">
            <img src="https://www.activecartapp.com/wp-content/uploads/2018/10/Active-Cart-Logo1200x1200.png" alt="Logo" width="40" height="35" class="d-inline-block align-text-top me-1" />
            Active Cart ‑ Buy X Get Y
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <p class="offcanvas-title fs-4" id="offcanvasDarkNavbarLabel">Active Cart ‑ Buy X Get Y</p>
              <button type="button" ref={ref} class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <div className='row'>
                <div className="col-12 mb-5">
                  <a href='#' className='text-decoration-none text-white' onClick={()=>closeCanvas("tour")}> <p className='fs-5'>How to use?</p></a>
                </div>
                <div className="col-12 mb-5">
                  <a href='#' className='text-decoration-none text-white' onClick={()=>closeCanvas("")}> <p className='fs-5'>Dashboard</p></a>
                </div>
                <div className="col-12 mb-3">
                  <a href='#' className='text-decoration-none text-white' onClick={()=>closeCanvas("settings")}> <p className='fs-5'>Settings</p> </a>
                </div>
                <hr></hr>
                <div className="col-12 mb-5">
                  <a href='#' className='text-decoration-none text-white' onClick={()=>closeCanvas("supportFAQ")}> <p className='fs-5'>Support/FAQ</p></a>
                </div>
                <div className="col-12 mb-5">
                  <a href='#' className='text-decoration-none text-white' onClick={fullscreenState.fullScreen?handleFullScreenExit:handleFullScreenEnter}>
                    {!fullscreenState.fullScreen ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-fullscreen" viewBox="0 0 16 16">
                      <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-fullscreen-exit" viewBox="0 0 16 16">
                      <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z" />
                    </svg>}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar