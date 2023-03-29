import { auth } from "./Firebase";
import { db , storage } from "./Firebase";
// import { uid } from "./components/Firebase";
// import { doc,setDoc } from "firebase/firestore";
import {getDoc,doc , setDoc, arrayUnion, collection, getDocs} from "firebase/firestore";
// // import { async } from "@firebase/util";
import { onAuthStateChanged } from "firebase/auth";
// import { getStorage } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
  console.log(list)
  return list;
};

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
  console.log(list)
  return list;
};

const uploadtweet =  async (heading,body) => {
  // let name = `${file} + ${Date.now()}`;
  // uploadBytes(imageRef, file).then((e) => {
    // console.log('Uploaded a blob or file');
    let date = `${new Date(Date.now()).getDate()}/${new Date(Date.now()).getMonth() + 1}/${new Date(Date.now()).getFullYear()}`;
    onAuthStateChanged(auth, async (currentUser) => {
      // setTimeout( async () => {
        // await getDownloadURL(ref(storage, `images/${name}`)).then(async (url) => {
          const data = doc(db, "user", `${currentUser.uid}/content/tweet`);
          const snapshot = await setDoc(data,{tweets:arrayUnion({"heading" : `${heading}` ,"body":`${body}`,"date": `${date}`})},{merge: true});
          snapshot.then((r)=>{
            console.log(`uploaded the url too  ${r}`);
          })
          // let user = snapshot.data()
          // let picurl = user["picurl"];
        // })
        // .catch((error) => {
        //   console.log(error);
        // });
      // },6000);
    });
  // });
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
export {changename};
export {uploadpic};
export {uploadtweet};
export {listAllUsers};
export {listAllUsers2};
export {getsanghadata};

