import firebase from "firebase";

export const retornaDocumentos = (snapshot: firebase.firestore.QuerySnapchot) => {
    const documentos: any[] = [];

snap.forEach(snapHijo => {
    documentos.push({
        id: snapHijo.id,
        ...snapHijo.data()
    });
});

    console.log(documentos)})
    return documentos
}