import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {profileThunk} from "./users-thunks";

const CurrentUser = ({children}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(children)
}
export default CurrentUser;