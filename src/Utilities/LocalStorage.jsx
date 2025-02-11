import {toast} from 'react-toastify'
const setItems = (key,value)=>{
    try {
        localStorage.setItem(key,JSON.stringify(value))
    } catch (error) {
        toast.error(error.code.split("/")[0].split("-").join())
    }
}
const getItems = (key) =>{
    try {
        localStorage.getItem(key)
    } catch (error) {
        toast.error(error.code.split("/")[0].split("-").join())
    }
}

export {getItems,setItems};
