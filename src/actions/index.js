
export const fetchData=(data)=>{
    return{
        type:"FETCH_DATA",
       payload:data
    }
}
export const addData=(value)=>{
    console.log("DATa value",value)
    return{
        type:"ADD_DATA",
        payload:value
        
    }
}
export const saveProduct=(value1)=>{
    return{
        type:"SAVE_PRODUCT",
        payload:value1
    }
}
