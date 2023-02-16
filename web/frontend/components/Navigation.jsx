import React from 'react'
// import {Button} from '@shopify/polaris';
const Navigation = () => {
  return (
    <>
    <div className='container-fluid'>
    <div className='row mt-3'>
      <div className='col-4 col-md-2'>
      <button type="button" class="btn btn-outline-secondary btn-sm">How to use?</button>
      </div>
      <div className='col-4 col-md-1'>
      <button type="button" class="btn btn-outline-secondary btn-sm">Dashboard</button>
      </div>
      <div className='col-4 col-md-1'>
      <button type="button" class="btn btn-outline-secondary btn-sm">Settings</button>
      </div>
      <div className=' col-4 col-md-8 d-flex flex-wrap justify-content-md-end align-items-md-end'>
          <button type="button" class="btn btn-success btn-sm">Support/FAQ</button>
      </div>
    </div>
    </div>
    <hr></hr>
    </>
  )
}

export default Navigation