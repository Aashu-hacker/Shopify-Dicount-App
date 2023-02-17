import React from 'react'
import { Card, Select, TextField,Button } from '@shopify/polaris';
import { useReducer } from 'react';

const Setting = () => {
    const settingState = []

    const options = [
        { label: 'Today', value: 'today' },
        { label: 'Yesterday', value: 'yesterday' },
        { label: 'Last 7 days', value: 'lastWeek' },
    ];
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
                            //   onChange={handleSelectChange}
                            //   value={selected}
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
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='18'/>
                                <span class="input-group-text" id="basic-addon3">px</span>
                            </div>
                        </div>
                        <div className='col-md-6 col-12'>
                        <label for="basic-url" class="form-label">Text color</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"    placeholder='#000000'/>
                                <span>
                                <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#000000"/>
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
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='16'/>
                                <span class="input-group-text" id="basic-addon3">px</span>
                            </div>
                        </div>
                        <div className='col-md-6 col-12'>
                        <label for="basic-url" class="form-label">Text color</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"    placeholder='#000000'/>
                                <span>
                                <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#000000"/>
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
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='16'/>
                                <span class="input-group-text" id="basic-addon3">px</span>
                            </div>
                        </div>
                        <div className='col-md-6 col-12'>
                        <label for="basic-url" class="form-label">Text color</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"    placeholder='#000000'/>
                                <span>
                                <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#000000"/>
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
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='65'/>
                                <span class="input-group-text" id="basic-addon3">px</span>
                            </div>
                        </div>
                        <div className='col-md-6 col-12'>
                        <label for="basic-url" class="form-label">Image Height</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"    placeholder='95'/>
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
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='NONE OF ABOVE'/>
                                <span class="input-group-text" id="basic-addon3">px</span>
                            </div>
                        </div>
                        <div className='col-md-4 col-12'>
                        <label for="basic-url" class="form-label">Font Size</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"    placeholder='18'/>
                                <span class="input-group-text" id="basic-addon3">px</span>
                            </div>
                        </div>
                        <div className='col-md-4 col-12'>
                        <label for="basic-url" class="form-label">Text color</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"    placeholder='#000000'/>
                                <span>
                                <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#000000"/>
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