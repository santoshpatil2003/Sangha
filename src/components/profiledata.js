import { auth } from "./Firebase";
import { db , storage } from "./Firebase";
// import { uid } from "./components/Firebase";
// import { doc,setDoc } from "firebase/firestore";
import {getDoc,doc , setDoc, arrayUnion, collection, getDocs, updateDoc,arrayRemove} from "firebase/firestore";
// // import { async } from "@firebase/util";
import { onAuthStateChanged } from "firebase/auth";
// import { getStorage } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const getsanghamembers = async (memberlist,members,uid) =>{
  // console.log(uid)
    const data = doc(db, "user", `${uid}`);
    await getDoc(data).then((d) => {
       members(memberlist =  d.data()['members']);
    });
}

const getuser = async (user,data1,userdata,id,userid) => {
    onAuthStateChanged(auth, async (currentUser) => {
      try{
          const data = doc(db, "user", `${currentUser.uid}`);
          const snapshot = await getDoc(data);
          data1.current = currentUser.uid;
          userid(id = currentUser.uid);
          userdata(user = snapshot.data());
      } catch(e){
        console.log(`the uid is null ${e}.`);
      }
    });
  }
const getsanghadata = async ( uid , sanghadata , sanghauser ) =>{
  try{
    const data = doc(db, "user", `${uid}`);
    const snapshot = await getDoc(data);
    sanghadata(sanghauser = snapshot.data());
} catch(e){
  console.log(`the uid is null ${e}.`);
}
}

const useruid = (uid,uids,useruid) =>{
  onAuthStateChanged(auth, async (currentUser) => {
    console.log(currentUser.uid);
    if(currentUser.uid === useruid){
      uids(uid = true);
    }else{
      uids(uid = false);
    }
});
}

  // const storage = getStorage();
  // const imageRef = ref(storage, 'images');

const uploadpic = (file) => {
  let name = `${file} + ${Date.now()}`;
  const imageRef = ref(storage, `images/${name}`);
  uploadBytes(imageRef, file).then((e) => {
    console.log('Uploaded a blob or file');
    onAuthStateChanged(auth, async (currentUser) => {
      setTimeout( async () => {
        await getDownloadURL(ref(storage, `images/${name}`)).then(async (url) => {
          const data = doc(db, "user", `${currentUser.uid}`);
          const snapshot = await setDoc(data,{"picurl" : `${url}`},{merge: true});
          snapshot.then((r)=>{
            console.log(`uploaded the url too  ${r}`);
          })
          // let user = snapshot.data()
          // let picurl = user["picurl"];
        })
        .catch((error) => {
          console.log(error);
        });
      },6000);
    });
  });
}

const listAllUsers = async () => {
  // List batch of users, 1000 at a time.
  let list = [];
  try{
    const data = collection(db,'user');
    const snapshot = await getDocs(data)
    snapshot.forEach((e) => {
      if(e.data()['Sangha']){
        // console.log(e.data()['Sangha']);
        list.push(e.data());
      }
    })
} catch(e){
  console.log(`the uid is null ${e}.`);
}
  return list;
};

const joined = (joined, join , uid) =>{
  onAuthStateChanged(auth, async (currentUser) => {
    const data = doc(db, "user", `${currentUser.uid}`);
    // const snapshot = await getDoc(data);
    // const data = doc(db, "user", `${currentUser.uid}/content/tweet`);
    // const snapshot = await setDoc(data,{tweets:arrayUnion({"heading" : `${heading}` ,"body":`${body}`,"date": `${date}`,"uid": `${currentUser.uid}`, "sanghaname": `${snapshot2.data()["sanghaname"]}`})},{merge: true});
    await getDoc(data).then((e) => {
        e.data()['memberof'].forEach(async (d) => {
          let id = d['uid'];
          if(uid === id){
            join(joined = true);
          }
        });
    });
    // snapshot.then((r)=>{
    //   console.log(`uploaded the url too  ${r}`);
    // })
});
}

const leave = (picurl,foundername,sanghaname,uid,onhide,joined,join) =>{
  onAuthStateChanged(auth, async (currentUser) => {
    const data2 = doc(db, "user", `${currentUser.uid}`);
    await updateDoc(data2,{memberof:arrayRemove({"picurl": `${picurl}`,"foundername" : `${foundername}` ,"sanghaname":`${sanghaname}`,"uid": `${uid}`})});
    const data = doc(db, "user", `${uid}`);
    await getDoc(data2).then( async (e)=>{
      await updateDoc(data,{members:arrayRemove({"picurl": `${e.data()['picurl']}`,"name" : `${e.data()['name']}` ,"username":`${e.data()['username']}`,"uid": `${currentUser.uid}`})});
    });
    onhide();
    join(joined = false);
  });
}

const listAllUsers2 = async () => {
  // List batch of users, 1000 at a time.
  let list = [];
  try{
    const data = collection(db,'user');
    const snapshot = await getDocs(data)
    snapshot.forEach((e) => {
      
        // console.log(e.data()['Sangha']);
        list.push(e.data());
    })
} catch(e){
  console.log(`the uid is null ${e}.`);
}
  return list;
};

const listjoinedsangha = async (lists,list) => {
  // List batch of users, 1000 at a time.
  // let list2 = [];
  onAuthStateChanged(auth, async (currentUser) => {
    try{
      const data = doc(db,'user',`${currentUser.uid}`);
      await getDoc(data).then((e) => {
            list(lists = e.data()['memberof']);
      })
    } catch(e){
      console.log(`the uid is null ${e}.`);
    }
  });
  // return list2;
};

const uploadtweet =  async (heading,body) => {
    let date = `${new Date(Date.now()).getDate()}/${new Date(Date.now()).getMonth() + 1}/${new Date(Date.now()).getFullYear()}`;
    onAuthStateChanged(auth, async (currentUser) => {
          const data2 = doc(db, "user", `${currentUser.uid}`);
          const snapshot2 = await getDoc(data2);
          const data = doc(db, "user", `${currentUser.uid}/content/tweet`);
          await setDoc(data,{tweets:arrayUnion({"heading" : `${heading}` ,"body":`${body}`,"date": `${date}`,"uid": `${currentUser.uid}`, "sanghaname": `${snapshot2.data()["sanghaname"]}`})},{merge: true});
          await getDoc(data2).then((e) => {
              e.data()['members'].forEach(async (d) => {
                let id = d['uid'];
                const data3 = doc(db, "user", `${id}/content/tweet`);
                await setDoc(data3,{tweets:arrayUnion({"heading" : `${heading}` ,"body":`${body}`,"date": `${date}`,"uid": `${currentUser.uid}`, "sanghaname": `${snapshot2.data()["sanghaname"]}`})},{merge: true});
              });
          });
          // snapshot.then((r)=>{
          //   console.log(`uploaded the url too  ${r}`);
          // })
    });
}

const deletetweet =  async (heading,body,date) => {
  // let date = `${new Date(Date.now()).getDate()}/${new Date(Date.now()).getMonth() + 1}/${new Date(Date.now()).getFullYear()}`;
  onAuthStateChanged(auth, async (currentUser) => {
        const data2 = doc(db, "user", `${currentUser.uid}`);
        const snapshot2 = await getDoc(data2);
        const data = doc(db, "user", `${currentUser.uid}/content/tweet`);
        await updateDoc(data,{tweets:arrayRemove({"heading" : `${heading}` ,"body":`${body}`,"date": `${date}`,"uid": `${currentUser.uid}`, "sanghaname": `${snapshot2.data()["sanghaname"]}`})});
        await getDoc(data2).then((e) => {
           try {
            e.data()['members'].forEach(async (d) => {
              let id = d['uid'];
              const data3 = doc(db, "user", `${id}/content/tweet`);
              await updateDoc(data3,{tweets:arrayRemove({"heading" : `${heading}` ,"body":`${body}`,"date": `${date}`,"uid": `${currentUser.uid}`, "sanghaname": `${snapshot2.data()["sanghaname"]}`})});
            });
           } catch (error) {
              console.log(error);
           }
        });
        // snapshot.then((r)=>{
        //   console.log(`uploaded the url too  ${r}`);
        // })
  });
}

const joining =  async (sanghauid,onhide,joined,join) => {
  // let date = `${new Date(Date.now()).getDate()}/${new Date(Date.now()).getMonth() + 1}/${new Date(Date.now()).getFullYear()}`;
  onAuthStateChanged(auth, async (currentUser) => {
        const data2 = doc(db, "user", `${sanghauid}`);
        const data = doc(db, "user", `${currentUser.uid}`);
        await getDoc(data).then(async (d) => {
          await setDoc(data2,{members:arrayUnion({"picurl": `${d.data()['picurl']}`,"uid" : `${currentUser.uid}`,"name": `${d.data()['name']}`, "username" : `${d.data()['username']}`})},{merge: true});
        });
        await getDoc(data2).then(async (d)=>{
          await setDoc(data,{memberof:arrayUnion({"picurl": `${d.data()['picurl']}`,"uid" : `${sanghauid}`,"sanghaname": `${d.data()['sanghaname']}`, "foundername" : `${d.data()['foundername']}`})},{merge: true});
        });
        onhide();
        join(joined = true);
        // snapshot.then((r)=>{
        //   console.log(`uploaded the url too  ${r}`);
        // })
  });
}

const gettweets =  async (tweet,tweets) => {
  onAuthStateChanged(auth, async (currentUser) => {
    const data = doc(db, "user", `${currentUser.uid}/content/tweet`);
    const snapshot = await getDoc(data);
  try {
    tweets(tweet = await snapshot.data()['tweets']);
    console.log(snapshot.data()['tweets'][0]['body']);
  } catch (error) {
    console.log("undedined name tweets");
  }
});
}

const getsanghatweets =  async (tweet,tweets,uid) => {
    const data = doc(db, "user", `${uid}/content/tweet`);
    const snapshot = await getDoc(data);
  try {
    tweets(tweet = await snapshot.data()['tweets']);
    console.log(snapshot.data()['tweets'][0]['body']);
  } catch (error) {
    console.log("undedined name tweets");
  }
}

const totalmembers = (uid , l,lf) => {
  const data = doc(db, "user", `${uid}`);
  // let  l = 0; 
  getDoc(data).then((e)=> {
     lf(l = `${e.data()['members'].length}/${e.data()['maxmember']}`);
  });
  console.log(l);
}

const changename = (newname) => {
  // let name = `${file} + ${Date.now()}`;
  onAuthStateChanged(auth, async (currentUser) => {
    setTimeout( async () => {
        const data = doc(db, "user", `${currentUser.uid}`);
        const snapshot = await setDoc(data,{"sanghaname" : `${newname}`},{merge: true});
        snapshot.then((r)=>{
          console.log(`uploaded the url too  ${r}`);
        })
        // let user = snapshot.data()
        // let picurl = user["picurl"];
      .catch((error) => {
        console.log(error);
      });
    },2000);
  });
}

export {getuser};
export {listjoinedsangha};
export {useruid};
export {joining};
export {leave};
export {joined};
export {changename};
export {uploadpic};
export {uploadtweet};
export {deletetweet};
export {gettweets};
export {getsanghatweets};
export {listAllUsers};
export {listAllUsers2};
export {getsanghadata};
export {totalmembers};
export {getsanghamembers};

