import React from 'react'
import { Card, Select, TextField, Button } from '@shopify/polaris';
import { Autocomplete, Icon } from '@shopify/polaris';
import { SearchMinor } from '@shopify/polaris-icons';
import { useState, useCallback, useMemo } from 'react';
const Rule = () => {
    const deselectedOptions = useMemo(
        () => [
            { value: 'rustic', label: 'Rustic' },
            { value: 'antique', label: 'Antique' },
            { value: 'vinyl', label: 'Vinyl' },
            { value: 'vintage', label: 'Vintage' },
            { value: 'refurbished', label: 'Refurbished' },
        ],
        [],
    );
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState(deselectedOptions);
    const updateText = useCallback(
        (value) => {
            setInputValue(value);

            if (value === '') {
                setOptions(deselectedOptions);
                return;
            }

            const filterRegex = new RegExp(value, 'i');
            const resultOptions = deselectedOptions.filter((option) =>
                option.label.match(filterRegex),
            );
            setOptions(resultOptions);
        },
        [deselectedOptions],
    );

    const updateSelection = useCallback(
        (selected) => {
            const selectedValue = selected.map((selectedItem) => {
                const matchedOption = options.find((option) => {
                    return option.value.match(selectedItem);
                });
                return matchedOption && matchedOption.label;
            });

            setSelectedOptions(selected);
            setInputValue(selectedValue[0]);
        },
        [options],
    );

    const textField = (
        <Autocomplete.TextField
            onChange={updateText}
            label="Tags"
            value={inputValue}
            prefix={<Icon source={SearchMinor} color="base" />}
            placeholder="Search"
        />
    );
    return (
        <>
            <Card title="Online store dashboard" sectioned>
                <div className='row'>
                    <div className='col-md-6 col-12'>
                        <label for="basic-url" class="form-label">Title of Your Campaign ( Internal use only )</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='Buy X Get Y' />
                        </div>
                    </div>
                    <div className='col-md-6 col-12'>
                        <label for="basic-url" class="form-label">Offer type</label>
                        <div class="input-group">
                            <select class="form-select" aria-label="Default select example">
                                <option selected value="x">Buy X Get Y</option>
                                <option value="spend">Spend X amount Get Y Free</option>
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
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                                <span class="input-group-text" id="basic-addon3">Browse</span>
                            </div>
                            <div class="form-text">Type at least 3 characters</div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-6'>
                            <label for="basic-url" class="form-label">Get</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                                <span class="input-group-text" id="basic-addon3">Browse</span>
                            </div>
                            <div class="form-text">Type at least 3 characters</div>
                    </div>
                    <div className='col-6'>
                            <label for="basic-url" class="form-label">At</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='10'/>
                                <span class="input-group-text" id="basic-addon3">% off</span>
                            </div>
                            <div class="form-text">100 means free</div>
                    </div>
                </div>
            </Card>
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

export default Rule