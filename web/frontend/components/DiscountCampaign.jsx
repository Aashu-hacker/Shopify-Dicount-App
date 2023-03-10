import React from 'react'
import { Card, Select, TextField, Button } from '@shopify/polaris';
import { Autocomplete, Icon } from '@shopify/polaris';
import { SearchMinor } from '@shopify/polaris-icons';
import { useState, useCallback, useMemo, useReducer,useEffect,useRef } from 'react';
import { useNavigate } from '@shopify/app-bridge-react';
import { Provider, ResourcePicker } from '@shopify/app-bridge-react';
import { useAuthenticatedFetch } from "../hooks/useAuthenticatedFetch.js"

const DiscountCampaign = () => {
    const navigate = useNavigate();
    const [openResource, setOpenResource] = useState(false)
    const [resourceAction, setResourceAction] = useState("")
    const fetch=useAuthenticatedFetch();
    const ref=useRef()
    const initialCampaignState = {
        title: {
            title: ""
        },
        offerType: {
            offerType:""
        },
        buy: {
            buy: "",
            buyPrice:"",
            buyVariantId:"",
            buyProductId:""
        },
        spend:{
            spend:""
        },
        get: {
            get: "",
            getPrice:"",
            getVariantId:"",
            getProductId:""
        },
        discountValue: {
            discountValue: ""
        },
        endDate:{
            endDate:""
        }
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "title":
                return {
                    ...state,
                    title: {
                        title: action.value
                    },
                }
            case "offerType":
                return {
                     ...state,
                     offerType:{
                        offerType:action.value
                     }
                }
            case "buy":
                return {
                    ...state,
                    buy: {
                        buy: action.value.productTitle,
                        buyPrice:action.value.price,
                        buyVariantId:action.value.variantId,
                        buyProductId:action.value.productId
                    },

                }
            case "spend":
                return{
                    ...state,
                    spend:{
                        spend:action.value 
                    }
                }
            case "get":
                return {
                    ...state,
                    get: {
                        get: action.value.productTitle,
                        getPrice:action.value.price,
                        getVariantId:action.value.variantId,
                        getProductId:action.value.productId
                    },

                }
            case "discountValue":
                return {
                    ...state,
                    discountValue: {
                        discountValue: action.value,
                    },

                }
            case "endDate":
                return{
                    ...state,
                    endDate:{
                        endDate:action.value 
                    }
                }
            case "clear":
                return {
                    ...initialCampaignState
                }
            default:
                return state;
        }
    }

    const [campaignState, dispatch] = useReducer(reducer, initialCampaignState);

    const handleCampaignChange = useCallback((e) => { dispatch({ type: "title", value: e.target.value }) }, [])

    const handleSelectOffer = useCallback((e) => { dispatch({ type: "offerType", value: e.target.value }) }, [])

    const handleDiscount = useCallback((e) => { dispatch({ type: "discountValue", value: e.target.value }) }, [])

    const handleSpend= useCallback((e)=>{dispatch({type:"spend",value:e.target.value})},[])
    
    const handleEndDate=useCallback((e)=>{dispatch({type:"endDate",value:e.target.value})},[])

    //resource picker
    const config = {
        apiKey: `${process.env.SHOPIFY_API_KEY}`,
        host: new URLSearchParams(location.search).get("host"),
        forceRedirect: true
    };

    const handleSelectPicker = (resource) => {
        // console.log("resource", resource)
        const productId = resource.selection[0].id.split("/")[4]
        console.log(productId)
        const productTitle = resource.selection[0].title
        const price = resource.selection[0].variants[0].price;
        const variantId=resource.selection[0].variants[0].id.split("/")[4]
        if(resourceAction==="buy"){
             dispatch({type:"buy",value:{productTitle,price,variantId,productId}})
        }else{
              dispatch({type:"get",value:{productTitle,price,variantId,productId}})
        }
        setOpenResource(false)
    }

    const handleCancelPicker = () => {
        setOpenResource(false)
    }



    // form submitted
    const handleSubmit= async(e)=>{
        e.preventDefault()
        const response = await fetch("/api/createCampaign", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                 ...campaignState,
                 host:window.location.ancestorOrigins[0].split("/")[2]
            })
        })
        if (response.status >= 200 && response.status <= 299){
               const data=await response.json()
               alert(data.success)
               dispatch({type:"clear"})
               ref.current.reset()
               navigate("/")
        }else{
              const data=await response.json()
              alert(data.error)
              dispatch({type:"clear"})
              ref.current.reset()
        }
    }

    useEffect(() => {
      
    }, [])
    
    

    // const textField = (
    //     <Autocomplete.TextField
    //         onChange={updateText}
    //         label="Tags"
    //         value={inputValue}
    //         prefix={<Icon source={SearchMinor} color="base" />}
    //         placeholder="Search"
    //     />
    // );

    const handleCancel = () => {
        navigate("/")
    }
    return (
        <>
        <form class="row g-3" onSubmit={handleSubmit} ref={ref}>
            <Card title="Online store dashboard" sectioned>
                <div className='row'>
                    <div className='col-md-6 col-12'>
                        <label for="basic-url" class="form-label">Title of Your Campaign ( Internal use only )</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='Buy X Get Y' onChange={handleCampaignChange} value={campaignState.title.title} required />
                        </div>
                    </div>
                    <div className='col-md-6 col-12'>
                        <label for="basic-url" class="form-label">Offer type</label>
                        <div class="input-group">
                            <select class="form-select" aria-label="Default select example" required onChange={handleSelectOffer} >
                                <option selected value="">Please select</option>
                                <option value={1}>Buy X Get Y</option>
                                <option value={2}>Spend X amount Get Y Free</option>
                            </select>
                        </div>
                    </div>
                </div>
            </Card>
            <Card title="Online store dashboard" sectioned>
                <div className='row'>
                    <p className='fs-6 fw-bolder'>Details</p>
                </div>
                {campaignState.offerType.offerType===""?null:campaignState.offerType.offerType==="1"?
                <div className='row mt-3'>
                    <div className='col-12'>
                        <label for="basic-url" class="form-label">Buy</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
                            value={campaignState.buy.buy} required/>
                           <a href='#' style={{textDecoration:"none"}}><span class="input-group-text" id="basic-addon3" onClick={()=>{setOpenResource(true);setResourceAction("buy")}}>Browse</span></a> 
                        </div>
                        <div class="form-text">Choose the product using browser button</div>
                    </div>
                </div>
                 :
                <div className='col-6'>
                        <label for="basic-url" class="form-label">Spend Value</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='10' onChange={handleSpend} value={campaignState.spend.spend} pattern="^[0-9]*$" required/>
                            <span class="input-group-text" id="basic-addon3">amount</span>
                        </div>
                    </div>
                }
                <div className='row mt-3'>
                    <div className='col-6'>
                        <label for="basic-url" class="form-label">Get</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
                            value={campaignState.get.get} required/>
                            <a href='#' style={{textDecoration:"none"}}><span class="input-group-text" id="basic-addon3" onClick={()=>{setOpenResource(true);setResourceAction("get")}}>Browse</span></a>
                        </div>
                        <ResourcePicker resourceType="Product" open={openResource} selectMultiple={false} onSelection={handleSelectPicker} onCancel={handleCancelPicker} />
                        <div class="form-text">Choose the product using browser button</div>
                    </div>
                    <div className='col-6'>
                        <label for="basic-url" class="form-label">At</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='10' onChange={handleDiscount} value={campaignState.discountValue.discountValue} pattern="\b([1-9]|[1-9][0-9]|100)\b" required/>
                            <span class="input-group-text" id="basic-addon3">% off</span>
                        </div>
                        <div class="form-text">value must be 1 to 100 (100 means free)</div>
                    </div>
                    <div className='col-6'>
                        <label for="basic-url" class="form-label">Discount EndDate</label>
                        <div class="input-group">
                            <input type="date" class="form-control" id="basic-url" aria-describedby="basic-addon3" onChange={handleEndDate} value={campaignState.endDate.endDate}/>
                        </div>
                    </div>
                </div>
            </Card>
            <div className='row mt-2'>
                <div className='col-6'>
                    <Button onClick={handleCancel}>Cancel</Button>
                </div>
                <div className='col-6 d-flex justify-content-end align-items-end'>
                    <Button primary submit>Save</Button>
                </div>
            </div>
        </form>
        </>
    )
}

export default DiscountCampaign