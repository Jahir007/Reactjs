import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ViewSlottrans() {


    const [slottrans, setSlottrans] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        let isMounted = true;

        axios.get(`/api/getSlottrans`).then(res => {
            if (isMounted) 
            {

                if(res.status === 200)
                {
                    // console.log(res.data.slottrans);
                    setSlottrans(res.data.slottrans);
                    setLoading(false);
                }
            }    
        })

        return () => {
            isMounted = false;
        }

    });


    if(loading)
    {
        return <h4>Loading Slot Transaction....</h4>
    }
    else
    {
        var showSlottransList = '';
        showSlottransList = slottrans.map((item, idx) => {
            return (
                <div className="col-md-4" key={idx}>
                    <div className="card">

                        <Link to="" >
                            <img src="" className="w-100" alt={item.type_id}  />
                        </Link>

                        <div className="card-body">
                            <Link to={`bookings/${item.slug}`}>
                                <h5>{item.type_id}</h5>
                            </Link>
                            
                        </div>
                    </div>    
                </div>

            )
        })
    }




    return (
        <div>
            <div className="py-3 bg-warning">
                <div className="container">
                    <div className="row">
                        <h6>Slottrans Page</h6>
                    </div>    
                </div>
            </div>

            <div className="py-3">
                <div className="container">
                    <div className="row">
                        {showSlottransList}
                    </div>    
                </div>
            </div>  

        </div>
    );
}

export default ViewSlottrans;