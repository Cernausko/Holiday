import firebase from "../firebase";

export const addPhoto = (data) =>{
    firebase
    .firestore()
    .collection('photo')
    .add(data)
    
}

export const getAllPhotos = (onPhotoChanged,user) =>{
    if(user !== null){
    firebase
    .firestore()
    .collection('photo')
    .where("uid", "==", user?.uid)
    .onSnapshot((snapshot)=>{
        const newPhoto = snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        }))
        onPhotoChanged(newPhoto)

    })
} 
}

export const showById = (item, id) =>{
    firebase
    .firestore()
    .collection('photo')
    .doc(id)
    .get()
    .then((docRef)=>{item(docRef.data())})
}

export const deleteWork = (id) =>{
    firebase
    .firestore()
    .collection('photo')
    .doc(id)
    .delete()
}

