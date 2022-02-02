
const initialState = {
    isDesktop:true
}

export default function resizeReducer(state=initialState, action){

    
    switch(action.type){
        case 'resize':{
            return{
                ...state,
                isDesktop:action.isDesktop
            }
        }

        default :
            return state
    }
}