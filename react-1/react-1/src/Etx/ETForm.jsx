import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const ETForm=({track,settrack})=>{
    const [TotalAMT, setTotalAMT]=useState(0);
    const[InputValue, setInputValue]=useState(1000);
    const total =parseInt(TotalAMT);
    const value=parseInt(InputValue)
    const date=new Date().toLocaleString;
    const updateHandler=(e)=>{
        setInputValue(e.target.value)
    }
    const Addhandler=()=>{
        setTotalAMT(total+value);
        setInputValue('');
        settrack([...track,
        {
            tDate:date,
            tTotal:total,
            tAddedAmount:'-',
            tBalanceAmount:total+value
        }
    ]);
    }

    const Removehandler=()=>{
        setTotalAMT(total-value);
        setInputValue('');

        settrack([...track,
        {
            tDate:date,
            tTotal:total,
            tAddedAmount:'-',
            tRemovedAmount:value,
            tBalanceAmount:total-value
        }
    ]);


    }

return <div className="container my-4">
    <div className="row">
        <div className="col col-md-6 m-md-auto">
            <div className="gutter-gap">
                <h1 className="text-center border p-2">Expense Tracker -Basic</h1>
                <form className="border p-2 mt-5"></form>
                <h3 className="text-center">Balance:{TotalAMT}</h3>
                <div className="md-3">
                    <input type="number" value={InputValue}
                    onChange={updateHandler} placeholder="Enter Amount" className="form-control rounded-0 w-50 m-auto"/>
                    
                </div>
                <div className="mb-3 text-center">
                    <button type="button"className="btn bg-light border rounded=0 me-2"  
                    onClick={Addhandler}>ADD</button>
                    <button type="button" className="btn bg-light border rounded-0" 
                    onClick={Removehandler}>REMOVE</button>
                </div>
            </div>
        </div>
    </div>
</div>
}

export default ETForm