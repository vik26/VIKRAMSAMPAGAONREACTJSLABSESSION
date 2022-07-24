import { ChangeEvent, Component } from "react";
import {postDataToServer} from "../Services/Menu";

type Props={
    onTrue:any,
    onClose:any
};

type State={
    payeeName:string,
    product:string,
    price:number,
    setDate:string
}

class ExpenseTracker extends Component<Props,State>{

    constructor(props:Props){
        super(props);
        this.state={
            payeeName:"",
            product:"",
            price:0,
            setDate:this.setDefaultDate()
        }
    }

    setDefaultDate=()=>{
        const today=new Date();
        return today.getFullYear()+"-"+('0'+(today.getMonth()+1)).slice(2)+"-"+('0'+today.getDate()).slice(-2);
    }
    setpayee=(event:ChangeEvent<HTMLSelectElement>)=>{
        this.setState({
            payeeName:event.target.value
        })
    };
    setProduct=(event:ChangeEvent<HTMLSelectElement>)=>{
        this.setState({
            product:event.target.value
        })
    };
    setPrice=(event:ChangeEvent<HTMLSelectElement>)=>{
        this.setState({
            price:parseInt(event.target.value)
        })
    };
    loggedDate=(e:ChangeEvent<HTMLSelectElement>)=>{
        this.setState({
            setDate:e.target.value
        })
    };

    submitHandler = async (event : FromEvent<HTMLElement>) =>{
        event?.preventDefault()
        //console.log(this.state)
        const finalDate = {
            ...this.state
        }
        const data = await postDataToServer(finalDate)
        //console.log(data)
        this.props.onTrue()
    }


    el=document.createElement('div');

    render(){

    }
}

export default ExpenseTracker;