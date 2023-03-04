import React from 'react'
import { Card, Select, TextField, Button } from '@shopify/polaris';
import { useReducer, useState, useCallback } from 'react';

const Setting = () => {
    // const settingState = []

    const initialSettingState = {
        font: {
            selected: "https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
        },
        productTitle: {
            fontSize: "",
            fontColor: "#000000"
        },
        OriginalProductPrice: {
            font: "",
            color: ""
        },
        DiscountedProductPrice: {
            font: "",
            color: ""
        },
        ProductImage: {
            width: "",
            height: ""
        },
        none: {
            TextMessage: "",
            FontSize: "",
            color: ""
        }
    }
    const options = [
        { label: 'Roboto', value: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap' },
        { label: 'Golos Text', value: 'https://fonts.googleapis.com/css2?family=Golos+Text&family=Roboto:wght@100&display=swap' },
        { label: 'Poppins', value: 'https://fonts.googleapis.com/css2?family=Golos+Text&family=Poppins:wght@300&family=Roboto:wght@100&display=swap' },
    ];


    const reducer = (state, action) => {
        switch (action.type) {
            case "font":
              return {
                    ...state,
                    font: {
                       selected:action.value 
                    },
                }
            case "productTitleFont":
                return{
                   ...state,
                   productTitle: {
                    ...state.productTitle,
                    fontSize:action.value,
                },

                }
            case "productTitleColor":
                return{
                    ...state,
                    productTitle: {
                     ...state.productTitle,
                     fontColor: action.value,
                 },
 
                 }
            default:
                return state;
        }
    }
    const [settingState, dispatch] = useReducer(reducer, initialSettingState);
   
    const handleSelectChange = useCallback((value) => dispatch({ type: "font", value }), []);
    
    const productTitleFontChange=useCallback((e)=>{dispatch({type:"productTitleFont",value:e.target.value})},[])
    const productTitleColorChange=useCallback((e)=>{dispatch({type:"productTitleColor",value:e.target.value})},[])
    
     
    return (
        <>
            <div className='row'>
                <p className='fs-5 fw-bold my-3'>Settings</p>
                <hr></hr>
            </div>
            <div className='row'>
                <Card title="Offer On Spend Block Settings" sectioned>
                    <div className='row mb-3'>
                        <div className='col-12'>
                            <Select
                                label="Font Family"
                                options={options}
                                onChange={handleSelectChange}
                                value={settingState.font.selected}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <p className='fs-6 fw-bolder my-3'>Product Title Settings</p>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                            <label for="basic-url" class="form-label">Font Size</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='18' onChange={productTitleFontChange} value={settingState.productTitle.fontSize}/>
                                <span class="input-group-text" id="basic-addon3">px</span>
                            </div>
                        </div>
                        <div className='col-md-6 col-12'>
                            <label for="basic-url" class="form-label">Text color</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='#000000' value={settingState.productTitle.fontColor} onChange={productTitleColorChange}/>
                                <span>
                                    <input type="color" class="form-control form-control-color" id="exampleColorInput" value={settingState.productTitle.fontColor} onChange={productTitleColorChange}/>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <p className='fs-6 fw-bolder my-3'>Original Product Price Settings</p>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                            <label for="basic-url" class="form-label">Font Size</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='16' />
                                <span class="input-group-text" id="basic-addon3">px</span>
                            </div>
                        </div>
                        <div className='col-md-6 col-12'>
                            <label for="basic-url" class="form-label">Text color</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='#000000' />
                                <span>
                                    <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#000000" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <p className='fs-6 fw-bolder my-3'>Discounted Product Price Settings</p>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                            <label for="basic-url" class="form-label">Font Size</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='16' />
                                <span class="input-group-text" id="basic-addon3">px</span>
                            </div>
                        </div>
                        <div className='col-md-6 col-12'>
                            <label for="basic-url" class="form-label">Text color</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='#000000' />
                                <span>
                                    <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#000000" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <p className='fs-6 fw-bolder my-3'>Product Image Settings</p>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                            <label for="basic-url" class="form-label">Image Width</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='65' />
                                <span class="input-group-text" id="basic-addon3">px</span>
                            </div>
                        </div>
                        <div className='col-md-6 col-12'>
                            <label for="basic-url" class="form-label">Image Height</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='95' />
                                <span class="input-group-text" id="basic-addon3">px</span>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <p className='fs-6 fw-bolder my-3'>None Of Above Message Settings</p>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 col-12'>
                            <label for="basic-url" class="form-label">Text Message</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='NONE OF ABOVE' />
                                <span class="input-group-text" id="basic-addon3">px</span>
                            </div>
                        </div>
                        <div className='col-md-4 col-12'>
                            <label for="basic-url" class="form-label">Font Size</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='18' />
                                <span class="input-group-text" id="basic-addon3">px</span>
                            </div>
                        </div>
                        <div className='col-md-4 col-12'>
                            <label for="basic-url" class="form-label">Text color</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='#000000' />
                                <span>
                                    <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#000000" />
                                </span>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className='row mt-2'>
                <div className='col-6'>
                    <Button>Cancel</Button>
                </div>
                <div className='col-6 d-flex justify-content-end align-items-end'>
                    <Button primary>Save</Button>
                </div>

            </div>

        </>
    )
}

export default Setting