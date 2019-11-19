import {GET_STAFFS,STAFF_ERROR,UPDATE_STAFF, ADD_STAFF,DELETE_STAFF, GET_STAFF } from "../actions/types";
import axios from "axios";
import {setAlert } from "../actions/alertAction"


export const getStaffs = ( )=>async dispatch=>{
try {
const res = await axios.get("/api/staff")
    dispatch({
        type: GET_STAFFS,
        payload:res.data   
       }) 
} catch (error) {
    dispatch({
        type: STAFF_ERROR,
        Payload: {msg: error.response.statusText, status: error.response.status} 
    })
}

}


export const addStaff=(formData)=>async dispatch=>{
    const config ={
        headers:{
            "Content-Type": "application/json"
        }
    }  
 try {
    const res = await axios.post("/api/staff", formData, config)
    dispatch({
        type:ADD_STAFF,
        payload:res.data
    }) 
    dispatch(setAlert("staff Added", "success"))
 } catch (error) {
    dispatch({
        type: STAFF_ERROR,
        Payload: {msg: error.response.statusText, status: error.response.status} 
    })
  
 }
}


export const getStaff=(id)=>async dispatch=>{
    
    try {
        const res = await axios.get(`/api/staff/${id}`)
        dispatch({
            type: GET_STAFF,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type: STAFF_ERROR,
            Payload: {msg: error.response.statusText, status: error.response.status} 
        })
      
    }
} 



export const updateStaff=(id, formData)=>async dispatch=>{
    try {
        const res = await axios.put(`/api/staff/${id}`, formData )
        dispatch({
            type: UPDATE_STAFF,
            payload:res.data
        })
        dispatch(setAlert("staff Edited", "success"))
    } catch (error) {
        dispatch({
            type: STAFF_ERROR,
            Payload: {msg: error.response.statusText, status: error.response.status} 
        })
      
    }
} 


export const deleteStaff=(id, history)=>async dispatch=>{
    
    if (window.confirm("Are you sure? this cannont be undone")) {
    try {
        const res = await axios.delete(`/api/staff/${id}` )
        dispatch({
            type: DELETE_STAFF,
            payload:res.data
        })
        dispatch(setAlert("staff deleted", "success"))
        history.push("/dashboard")
    } catch (error) {
        dispatch({
            type: STAFF_ERROR,
            Payload: {msg: error.response.statusText, status: error.response.status} 
        })
      
    }
} 
}