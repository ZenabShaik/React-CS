import React from 'react'
import { useState,useEffect } from 'react'


function User() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(function() {
        (async function(){
            try{
                setLoading(true);
                const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
                const data = await response.json();
                setUser(data);
                setLoading(false);
            }
            catch(err){
                setError(true);
                setLoading(false);
            }
        })()
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

export default User