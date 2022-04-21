import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {Link, useHistory } from "react-router-dom";
import swal from "sweetalert";

function ViewGuest(props)
{

    const history = useHistory();

    const [loading, setLoading] = useState(true);
    const [guest, setGuest] = useState([]);
    const [slottrans, setSlottrans] = useState([]);


    useEffect(() => {

        let isMounted = true;

        const guest_slug = props.match.params.slug;
        axios.get(`/api/fetchguest/${guest_slug}`).then(res => {
            if (isMounted) 
            {

                if(res.data.status === 200)
                {
                    setGuest(res.data.guest_data.guest);
                    setSlottrans(res.data.guest_data.slottrans);
                    setLoading(false);
                }
                else if(res.data.status === 400)
                {
                    swal("Oops!", res.data.message, "");
                    history.push("/404");
                }

                else if (res.data.status === 404)
                {
                    history.push('/bookings')
                    swal("Oops!", res.data.message, "error");
                }
            }

        })

        return () => {
            isMounted = false;
        };
    }, [props.match.params.slug, history]);


    if(loading)
    {
        return <h4>Loading Guest Details....</h4>
    }
    else
    {
        var showGuestList = '';
        showGuestList = guest.map((item,idx) => {

            return (
                <div className="col-md-3" key={idx}>
                    <div className="card">
                        <Link to="">
                        <img src={`http://localhost:8000/${item.image}`} className="w-100" alt={item.image} />
                        </Link>
                        <div className="card-body">
                        <Link to="">
                            <h5>{item.lc_number}</h5>
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
                        <h6>Slot Transaction / DataView </h6>
                    </div>    
                </div>
            </div>

            <div className="py-3">
                <div className="container">
                    <div className="row">
                        {showGuestList}
                    </div>    
                </div>
            </div>  

        </div>
    )

}

export default ViewGuest;