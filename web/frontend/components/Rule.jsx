import React from 'react'
import { Card, Select, TextField, Button } from '@shopify/polaris';
import { Autocomplete, Icon } from '@shopify/polaris';
import { SearchMinor } from '@shopify/polaris-icons';
import { useState, useCallback, useMemo, useReducer,useEffect } from 'react';
import { useNavigate } from '@shopify/app-bridge-react';
import { Provider, ResourcePicker } from '@shopify/app-bridge-react';
import { useAuthenticatedFetch } from "../hooks/useAuthenticatedFetch.js"

const Rule = () => {
    const navigate = useNavigate();
    const [openResource, setOpenResource] = useState(false)
    const [resourceAction, setResourceAction] = useState("")
    const fetch=useAuthenticatedFetch()
    const initialCampaignState = {
        title: {
            title: ""
        },
        offerType: {
            BxGy: 1,
            SxGy: 2
        },
        buy: {
            buy: "",
            buyPrice:"",
            buyVariantId:""
        },
        get: {
            get: "",
            getPrice:"",
            getVariantId:""
        },
        discountValue: {
            discountValue: ""
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
                return (
                    action.value == 1 ? {
                        ...state,
                        offerType: {
                            ...state.offerType,
                            BxGy: action.value
                        },
                    } : {
                        ...state,
                        offerType: {
                            ...state.offerType,
                            SxGy: action.value
                        },
                    })
            case "buy":
                return {
                    ...state,
                    buy: {
                        buy: action.value.productTitle,
                        buyPrice:action.value.price,
                        buyVariantId:action.value.variantId
                    },

                }
            case "get":
                return {
                    ...state,
                    get: {
                        get: action.value.productTitle,
                        getPrice:action.value.price,
                        getVariantId:action.value.variantId
                    },

                }
            case "discountValue":
                return {
                    ...state,
                    discountValue: {
                        discountValue: action.value,
                    },

                }
            default:
                return state;
        }
    }

    const [campaignState, dispatch] = useReducer(reducer, initialCampaignState);

    const handleCampaignChange = useCallback((e) => { dispatch({ type: "title", value: e.target.value }) }, [])

    const handleSelectOffer = useCallback((e) => { dispatch({ type: "offerType", value: e.target.value }) }, [])

     const handleDiscount = useCallback((e) => { dispatch({ type: "discountValue", value: e.target.value }) }, [])


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
             dispatch({type:"buy",value:{productTitle,price,variantId}})
        }else{
              dispatch({type:"get",value:{productTitle,price,variantId}})
        }
        setOpenResource(false)
    }

    const handleCancelPicker = () => {
        setOpenResource(false)
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
                            <select class="form-select" aria-label="Default select example" required onChange={handleSelectOffer}>
                                <option selected value={campaignState.offerType.BxGy}>Buy X Get Y</option>
                                <option value={campaignState.offerType.SxGy}>Spend X amount Get Y Free</option>
                            </select>
                        </div>
                    </div>
                </div>
            </Card>
            <Card title="Online store dashboard" sectioned>
                <div className='row'>
                    <p className='fs-6 fw-bolder'>Details</p>
                </div>
                <div className='row mt-3'>
                    <div className='col-12'>
                        <label for="basic-url" class="form-label">Buy</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" disabled
                            value={campaignState.buy.buy}/>
                           <a href='#' style={{textDecoration:"none"}}><span class="input-group-text" id="basic-addon3" onClick={()=>{setOpenResource(true);setResourceAction("buy")}}>Browse</span></a> 
                        </div>
                        <Provider config={config}>
                            <ResourcePicker resourceType="Product" open={openResource} selectMultiple={false} onSelection={handleSelectPicker} onCancel={handleCancelPicker} />
                        </Provider>
                        <div class="form-text">Choose the product using browser button</div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-6'>
                        <label for="basic-url" class="form-label">Get</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" disabled
                            value={campaignState.get.get}/>
                            <a href='#' style={{textDecoration:"none"}}><span class="input-group-text" id="basic-addon3" onClick={()=>{setOpenResource(true);setResourceAction("get")}}>Browse</span></a>
                        </div>
                        <div class="form-text">Choose the product using browser button</div>
                    </div>
                    <div className='col-6'>
                        <label for="basic-url" class="form-label">At</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='10' onChange={handleDiscount} value={campaignState.discountValue.discountValue}/>
                            <span class="input-group-text" id="basic-addon3">% off</span>
                        </div>
                        <div class="form-text">100 means free</div>
                    </div>
                </div>
            </Card>
            <div className='row mt-2'>
                <div className='col-6'>
                    <Button onClick={handleCancel}>Cancel</Button>
                </div>
                <div className='col-6 d-flex justify-content-end align-items-end'>
                    <Button primary>Save</Button>
                </div>

            </div>
        </>
    )
}

export default Rule