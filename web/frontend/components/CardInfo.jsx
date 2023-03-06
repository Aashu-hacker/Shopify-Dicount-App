import {Card} from '@shopify/polaris';
import React from 'react';
import { useAuthenticatedFetch } from "../hooks/useAuthenticatedFetch.js"
import { useEffect } from 'react';
const CardInfo = () => {
  const currentUser={charge:true}
  const fetch=useAuthenticatedFetch()
  const handleSubmit = async () => {
        const response = await fetch("/api/shopInfo", {
            method: "GET",
        })
        if (response.status >= 200 && response.status <= 299) {
            const jsonData = await response.json()
            console.log(jsonData)
           
        }
        else {
            const jsonData = await response.json()
           
        }
}
  
useEffect(() => {
  handleSubmit()
}, [])



  return (
    <div className='mt-3'>
    {!currentUser.charge?
    <Card  sectioned>
        <div className='row'>
            <div className='col-2'>
               <p className='fw-bold text-nowrap'>Plan Information</p>
            </div>
            <div className='col-10 d-flex flex-wrap justify-content-end align-items-end'>
                <button type='button' className='btn btn-success btn-sm'>Upgrade Pro Plan</button>
            </div>
        </div>
        <div className='row'>
        <p>Free Plan</p>
        </div>
        <div className='row'>
        <p>By clicking <strong>Upgrade Pro Plan</strong>, you get all function of App's</p>
        </div>
    </Card>:
    <Card sectioned>
      <div className='row'>
            <div className='col-2'>
               <p className='fw-bold text-nowrap'>Plan Information</p>
            </div>
            <div className='col-10 d-flex flex-wrap justify-content-end align-items-end'>
                <button type='button' className='btn btn-success btn-sm'>Downgrade Plan</button>
            </div>
        </div>
        <div className='row'>
        <p>Pro Plan</p>
        </div>
        <div className='row'>
        <p>By clicking <strong>Downgrade Free Plan</strong>, you get limited function of App's</p>
        </div>
    </Card>}
    </div>
  )
}

export default CardInfo