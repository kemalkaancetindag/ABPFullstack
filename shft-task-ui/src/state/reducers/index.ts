import { combineReducers } from "redux";
import appReducer from './appReducer'
import deparmentReducer from './departmentReducer'
import userReducer from './userReducer'
import authReducer from './authReducer'


const reducers = combineReducers({
    app: appReducer,
    department: deparmentReducer,
    user: userReducer,
    auth: authReducer
})

export default reducers

export type State = ReturnType<typeof reducers>