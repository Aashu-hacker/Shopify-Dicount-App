import { Card } from '@shopify/polaris';
import React from 'react';
import { ButtonGroup, Button,Icon} from '@shopify/polaris';
import {useNavigate} from '@shopify/app-bridge-react';
import {
    NoteMinor,
    ViewMinor,
    DeleteMinor
} from '@shopify/polaris-icons';

const CardTable = () => {
    const navigate = useNavigate();
    const offerArray = [
        {
            title: "",
            type: {

            },
            status: "",
        }
    ]

    const handleOpenRule=()=>{
        navigate("/rule")
    }
    return (
        <>
            <div className='row mt-3 mb-3'>
                <div className='col-md-5'>
                    <p className='fw-bolder fs-4'>Active Cart List</p>
                </div>
                <div className='col-md-7 d-flex flex-wrap justify-content-md-end align-items-md-end'>
                    <button type='button' className='btn btn-success btn-sm'>Create Active Cart Offer</button>
                </div>
            </div>
            <Card sectioned>
                <table class="table table-hover">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Type</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td><ButtonGroup segmented>
                                    <Button>
                                        <Icon
                                            source={ViewMinor}
                                            color="base"
                                        />
                                    </Button>
                                    <Button onClick={handleOpenRule}>
                                    <Icon
                                            source={NoteMinor}
                                            color="base"
                                        />
                                    </Button>
                                    <Button>
                                    <Icon
                                            source={DeleteMinor}
                                            color="base"
                                        />
                                    </Button>
                                </ButtonGroup>
                                </td>
                            </tr>
                            <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </table>
            </Card>
        </>

    )
}

export default CardTable