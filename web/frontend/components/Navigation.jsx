import React from 'react'
// import {Button} from '@shopify/polaris';
const Navigation = () => {
  return (
    <>
    <div className='container-fluid'>
    <div className='row mt-3'>
    <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 '>
      <div className='d-flex justify-content-between flex-wrap'>
      <div className='btn-group mb-3'>
      <button type="button" class="btn btn-outline-secondary btn-sm me-2 rounded-2">How to use?</button>
      <button type="button" class="btn btn-outline-secondary btn-sm me-2 rounded-2">Dashboard</button>
      <button type="button" class="btn btn-outline-secondary btn-sm rounded-2">Settings</button>
      </div>
      <button type="button" class="btn btn-success btn-sm mb-3">Support/FAQ</button>
      </div>
    </div>
    
      {/* <div className='col-xxl-1 col-xl-1 col-lg-2 col-md-2 col-3'>
      <button type="button" class="btn btn-outline-secondary btn-sm">How to use?</button>
      </div>
      <div className='col-xxl-1 col-xl-1 col-lg-2 col-md-2 col-3'>
      <button type="button" class="btn btn-outline-secondary btn-sm">Dashboard</button>
      </div>
      <div className='col-xxl-1 col-xl-1 col-lg-2 col-md-2 col-3'>
      <button type="button" class="btn btn-outline-secondary btn-sm">Settings</button>
      </div>
      <div className=' col-4 col-md-8 d-flex flex-wrap justify-content-md-end align-items-md-end'>
          <button type="button" class="btn btn-success btn-sm">Support/FAQ</button>
      </div> */}
    </div>
    </div>
    <hr></hr>
    </>
  )
}

export default Navigation