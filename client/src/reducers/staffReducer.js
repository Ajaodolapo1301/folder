import {GET_STAFFS,STAFF_ERROR, ADD_STAFF,GET_STAFF, DELETE_STAFF, UPDATE_STAFF  } from "../actions/types";


const initialState=  { 
    staffs: [],
    staff: {},
    isLoading:true,
    error: {}
}


export default function(state = initialState, action) {
        switch (action.type) {
            case GET_STAFFS:
                return{
                    ...state,
                    staffs: action.payload,
                    isLoading: false
                }
                case ADD_STAFF:
                return {
                    staffs: [...state.staffs, action.payload],
                    isLoading: false
                }
                case GET_STAFF:
                    return{
                        ...state,
                        staff: action.payload,
                        isLoading:false
                    }
                    case STAFF_ERROR:
                        return{
                            ...state,
                            error: action.payload,
                            isLoading:false
                        }
                    case UPDATE_STAFF:
                            return{
                                ...state,
                                staffs: state.staffs.map(staff=> staff.id === action.payload.id ? (staff= action.payload): staff)
                            }
                            case DELETE_STAFF:
                                return{
                                    ...state,
                                    staffs: state.staffs.filter(staff=>staff.id !==action.payload)
                                }
            default:
                return state;
        }
}