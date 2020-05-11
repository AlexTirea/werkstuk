class Firebase {
    constructor(apiKey, projectId) {
        firebase.initializeApp({
            apiKey,
            projectId,
        });
        this.database = firebase.firestore();
    }
    convertQuerySnapshotToRegularArray(querySnapshot) {
        return querySnapshot.docs.map((item) => ({
            id: item.id,
            ...item.data()
        }));
    }
    get poststodosCollection() {
        return this.database.collection("posts");
    }
}

export const firebaseInstance = new Firebase('AIzaSyBM7ai3JVLsTiCVrj38iJaYEdBs4skshpE', 'werkstuk - 3 a652');