import React,{useState,useEffect} from 'react'
import './SanghaProfileMiddle.css'
import { db } from "./Firebase";
import Textpost from './Textpost';
import {onSnapshot, collection, orderBy,query} from "firebase/firestore";

// import React, { Component } from 'react'

// export default class Sanghagettweet extends Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             tweet : [],
//             flag: 1
//         };
//     }

//     gettweets = async () => {
//         const data = collection(db, "user", `${this.props.userid}/tweet`);
//         try {
//             const itemsQuery = query(data, orderBy('time'));
//             const unsub = onSnapshot(itemsQuery,(s)=>{
//             let l = [];
//             s.forEach((m)=>{
//                 l.push(m.data());
//               //   console.log(m.id);
//             });
//             //   console.log(l);
//               this.setState({ tweet: l });
            
//             // ftextlist(texts = l)
//             console.log("added")
//         });
//         this.unsubscribe = unsub;
//             // return () => {unsub()}
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     componentWillUnmount() {
//         if (this.unsubscribe) {
//           this.unsubscribe();
//         }
//         console.log("unmounted");
//       }

//     componentDidMount(){
//         if(this.state.flag === 1){
//             this.gettweets().then(()=>{
//                 if(this.state.tweet.length === 0 ){
//                     this.setState({flag : 1})
//                     this.gettweets();
//                 }
//             })
//             this.setState({flag : 0})
//             // flagship(flag = 0);
            
//         }else{
//             return;
//         }
//         console.log("mounted");
//       }


//   render() {
//     return (
//         <div className='bottompost'>
//         {this.state.tweet?.map((d , index) => {
//             return (
//                     <div className='tw' key={index}>
//                         <Textpost user = {this.props.userid} communityname = {d['sanghaname']} time = {d['date']} t = {d['time']} heading = {d['heading']} body = {d['body']}></Textpost>
//                     </div>
//                     );
//                 }
//             )
//         }
//     </div>
//     )
//   }
// }


export default function Sanghagettweet(props) {
    let [tweet, tweets] = useState([]);
    let [flag, flagship] = useState(1);

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
              // console.log(l);
              tweets(tweet = l);
            // ftextlist(texts = l)
          //   console.log("added")
        });
            return () => {unsub()}
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
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
      },[tweet]);

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
