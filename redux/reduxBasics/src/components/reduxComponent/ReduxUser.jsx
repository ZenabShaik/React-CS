import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { fetchUserMiddleware } from '../../redux/middleware/userMiddleWare';

function reduxUser() {

        const {user,loading,error} = useSelector((store)=>store.userState); 
        const dispatch = useDispatch();
        useEffect(function(){
          dispatch(fetchUserMiddleware);
        },[])

        const heading = <h2>User Examples</h2>;
    
        if(loading){
            return<>{heading}
                    <h3>...loading</h3>
            </>
        }
        if(error){
            return<>{heading}
                    <h3>Error</h3>
            </>
        }
    
      return (
        <div>
            {heading}
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
      )

    }

export default reduxUser

//hi
//hi
//hi
//hello
//how are you