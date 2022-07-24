import axios from "axios";
import IDataList from "../Model/IDataList";

const getDataFromServer=()=>{
    return axios.get<IDataList[]>('http://localhost:3000/').then(resp=>resp.data);
}
const postDataToServer=(newItem:Omit<IDataList,'id'>)=>{
    return axios.post<IDataList>('http://localhost:3000/',newItem,{
        headers:{
            'Content-Type':'spplication/json'
        }
    }).then(resp=>resp.data);
}
    export {
        getDataFromServer,
        postDataToServer
    
}