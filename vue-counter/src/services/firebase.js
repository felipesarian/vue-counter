import firebase from 'firebase'

var firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

// export function testConn() {
//     console.log(db)
// }

export async function verifyEmail(email){     

    try {
        const snapshot = await db.collection('users').get()   
        let emailExists = false  
        snapshot.docs.map((doc) => {
            if(doc.data().email === email) {
                emailExists = true
            }
        }) 
        return emailExists
    } catch (error) {
        console.log(error)
    }
}

export async function verifyUser(username, password){     

    try {
        const snapshot = await db.collection('users').get()   
        var userExists, mustLogin = false
        snapshot.docs.map((doc) => {
            if(doc.data().name === username) {
                userExists = true
                if(doc.data().password === password) {
                    mustLogin = true
                }
            }
        })
        if(!userExists || !mustLogin){
            alert('Usuário ou senha incorretos')
        } 
        return mustLogin
    } catch (error) {
        console.log(error)
    }
}

export async function createUser(user){
    try {
        const created = await db.collection("users").add(user)   
        console.log(created)
    } catch (error) {
        console.log("Error writing document: ", error);
    }
}