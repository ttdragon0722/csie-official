import { useState,useEffect} from 'react';

const useRWD=(pixel)=>{
    const [mobile,setMobile]=useState(false);

    const handleRWD=()=>{
        if(window.innerWidth>=pixel)
            setMobile(true);
        else
            setMobile(false);
    }

    useEffect(()=>{
    
        window.addEventListener('resize',handleRWD);
        handleRWD(); //加入此行
        
        return(()=>{
            window.removeEventListener('resize',handleRWD);
        })
    // eslint-disable-next-line 
    },[]);

    return mobile;
}

export default useRWD;