import {useEffect, useState} from "react";
import {getDataFromServer} from "../Services/Menu";
import IDataList  from "../Model/IDataList";
import ExpenseTracker from "./ExpenseTracker";

function ShowData(){

    const[items,setItems] = useState<IDataList[]>([]);
    const[error,setError]= useState<Error|null>(null);
    const[sum,setSum]=useState<number|null>(0);
    const[rahulspent,setRahulspent]=useState<number>(0);
    const[rameshspent,setRameshspent]=useState<number>(0);
    const[showForm,setShowForm]=useState<boolean>(false);

    var rahulspent1:number=0;
    var rameshspent1:number=0;

    useEffect(()=>{
        const fetchMenu= async() => {
            try{
                const data=await getDataFromServer();
                window.alert(data.length);
                setItems(data);

                setSum(data.reduce((result,v)=>result=result+v.price,0));
                Shares(data);
            }catch(error:any){

            }
        };fetchMenu()
    })

    const Shares=(data:IDataList[])=>{

        data.map(sams=>(
            sams.payeeName==='Rahul'?(rahulspent1=rahulspent1+sams.price):(rameshspent1=rameshspent1+sams.price)
        ))
        setRahulspent(rahulspent1);
        setRameshspent(rameshspent1);
    };

    const success=()=>{setShowForm(false)};
    const cancel=()=>{setShowForm(false)};

    return(
        <>

        <header id="page-header">Expense Tracker</header>
        <button id="Add-Button" onClick={()=>setShowForm(true)}>Add</button>
        {
            showForm && (<div className="form">

                <ExpenseTracker onTrue={success} onClose={cancel}/>
            </div>)
        }
        <>
        <div className="use-inline date header-color">Date</div>
        <div className="use-inline header-color">Product Purchase</div>
        <div className="use-inline price header-color">Price</div>
        <div className="use-inline header-color" style={{width:112}}>PayeeName</div>
        </>

        {
            items && (items.map((item,idx)=>(
                <div key={idx}>
                    <div className="use-inline data">{item.setDate}</div>
                    <div className="use-inline">{item.product}</div>
                    <div className="use-inline price">{item.price}</div>
                    <div className="use-inline">{item.payeeName}</div>
                </div>
            )))
        }

        <hr/>
        
        <div className="use-inline">Total:</div>
        <span className="use-inline total">{sum}</span>
        <br/>
        <div className="use-inline">Rahul Paid:</div>
        <span className="use-inline total rahul">{rahulspent}</span>
        <br/>
        <div className="use-inline">Ramesh Paid:</div>
        <span className="use-inline total ramesh">{rameshspent}</span>
        <br/>
        <span className="use-inline payable">{rahulspent>rameshspent?"Pay Rahul":"Pay Ramesh"}</span>
        <span className="use-inline payable price">{Math.abs((rahulspent-rameshspent)/2)}</span>
        {
            error && (<>
            {error?.message}
           </> )
        }
        

    );

}

export default ShowData;



