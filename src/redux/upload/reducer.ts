import useActionTypes from "./useActionTypes"

type PropsState = {
    momentstate: String
    uploadImage: any
    porcentEnv: number
    getImageUrl: string
}

const initialState:PropsState = {
    momentstate: "upload",
    uploadImage: null,
    porcentEnv: 0,
    getImageUrl: ""
}

const uploadState = (state = initialState, action:any) => {
    switch(action.type) {
        case useActionTypes.UPLOAD: {
            return {...state, momentstate: useActionTypes.UPLOAD}
        }

        case useActionTypes.RELOAD: {
            return {...state, momentstate: useActionTypes.RELOAD, uploadImage: action.payload}
        }

        case useActionTypes.GETIMG: {
            return {...state, momentstate: useActionTypes.GETIMG, getImageUrl: action.payload}
        }

        case useActionTypes.PORCENTENV: {
            return {...state, porcentEnv: action.payload}
        }
        
        default: return state;
    }
}

export default uploadState;