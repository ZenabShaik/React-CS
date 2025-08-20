// useEffect(function() {
//             (async function(){
//                 try{
//                     setLoading(true);
//                     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//                     const data = await response.json();
//                     setUser(data);
//                     setLoading(false);
//                 }
//                 catch(err){
//                     setError(true);
//                     setLoading(false);
//                 }
//             })()
//         },[])

import userSlice from "../userSlice"; //yahan {userSlice} braces mein nahi hoga pehle main import kiya tha error aaya tha
//import { useDispatch } from 'react-redux';
const action = userSlice.actions;

export default fetchUserMiddleware = async (dispatch) => {
    try {
        dispatch(action.userLoading());
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        dispatch(action.userData(data))
    }
    catch (err) {
        dispatch(action.userError());
    }
}