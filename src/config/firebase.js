import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc,getDoc, setDoc,addDoc,collection,getDocs  } from "firebase/firestore";
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBBje_pJobIBTITT4k1IibyoS8JrF6SeKA",
  authDomain: "blog-web-27c30.firebaseapp.com",
  projectId: "blog-web-27c30",
  storageBucket: "blog-web-27c30.appspot.com",
  messagingSenderId: "38546528093",
  appId: "1:38546528093:web:7207d6b88dfb1ea2753ab4",
  measurementId: "G-86N5SCND9N"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db=getFirestore(app)
const storage=getStorage()


 export async function register(user){
    const{fullname,number,Email,Password}=user
    const{user:{uid}}=await createUserWithEmailAndPassword(auth,Email, Password)

 const UserRef = doc(db, 'users', uid);
await setDoc(UserRef, {number,fullname,Password,Email});

  alert("register succesfully")


}

export async function login(user){
    const{Email,Password}=user
await signInWithEmailAndPassword(auth, Email, Password)
 alert("login successfully")
}

 export async function PostAdToDb(user){
  // const storageRef = ref(storage, 'some-child');
  const storageRef = ref(storage, `image folder/${user.image.name}`);
 await uploadBytes(storageRef, user.image)
  const url= await getDownloadURL(storageRef)
  user.image=url
  const docRef = await addDoc(collection(db,"details"),user);
  console.log(user)
  alert("successfully store data in data base");
}


 export async function getAds(){
  const querySnapshot = await getDocs(collection(db, "details"));
  console.log(querySnapshot)
  // const querySnapshot =await getDocs(query(collection(db, "details"), orderBy("createtime","desc" )));
 const ads=[]
querySnapshot.forEach((doc) => {
    console.log(doc.id, "=>" ,doc.data()); //isko me abhi comment krdeta hu tw sirf wohi ara hog bhar wala return
   const ad=doc.data()
   ad.id=doc.id

ads.push(ad)
 console.log(ads)
});
return ads

}
export async function getSingleAd(adId){
  const docRef = doc(db, "details", adId);
  const docSnap = await getDoc(docRef);
 
  if ( docSnap.exists()) {
  
    const user= docSnap.data()

   console.log("user",user)
    return user
  } else {
   
    console.log("No card !");
  }

}

 export async function getuser(uid)
{

  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
 
  if (docSnap.exists()) {

    const user=  docSnap.data()

  
  console.log(user)
    return user
  } else {
   
    console.log("No such document!");
  }
}

export{
  auth,
  onAuthStateChanged
}