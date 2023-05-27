import React,{useState,useEffect} from 'react'
import './SanghaProfileMiddle.css'
import { db } from "./Firebase";
import Textpost from './Textpost';
import {onSnapshot, collection, orderBy,query} from "firebase/firestore";

export default function Sanghagettweet(props) {
    let [tweet, tweets] = useState([]);
    let [flag, flagship] = useState(1);

    useEffect(() => {
        const gettweets = async () => {
          const data = collection(db, "user", `${props.userid}/tweet`);
          try {
              const itemsQuery = query(data, orderBy('time'));
              const unsub = onSnapshot(itemsQuery,(s)=>{
              let l = [];
              s.forEach((m)=>{
                  l.push(m.data());
                //   console.log(m.id);
              });
                console.log(l);
              tweets(tweet = l);
              // ftextlist(texts = l)
              console.log("added")
          });
              return () => {unsub()}
          } catch (error) {
              console.log(error);
          }
      }
      if(flag === 1){
        gettweets().then(()=>{
            if(tweet.length === 0 ){
                flagship(flag = 1);
                gettweets();
            }
        })
        flagship(flag = 0);
    }else{
        return;
    }
        // gettweets(tw,tws,props.uid);
      },[]);

  return (
        <div className='bottompost'>
            {tweet?.map((d , index) => {
                return (
                        <div className='tw' key={index}>
                            <Textpost user = {props.userid} communityname = {d['sanghaname']} time = {d['date']} t = {d['time']} heading = {d['heading']} body = {d['body']}></Textpost>
                        </div>
                        );
                    }
                )
            }
        </div>
  )
}
