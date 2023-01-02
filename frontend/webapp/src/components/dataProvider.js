import {useState, useEffect } from 'react';


export default function useEntityProvider(url){

    const [entity, setData] = useState(undefined);

    let fetcher = async ()=>{
        const response = await fetch(url);
        if(response.ok){
            const entity = await response.json();
            //we have data.
            setData(entity.data);
        }
        else{
            setData(null);
        }
    }

    useEffect(()=>{fetcher()},[]);

    return entity
}
