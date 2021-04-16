
import db "./firebase/config";
import moduleName, { retornaDocumentos } from "./helpers/mostrar-documentos";
import {firestore} from "firebase"

const usuarioRef= db.collection('usuarios');

    usuarioRef.orderBy('usuario')

        .get().then(retornaDocumento) 
const btnNext = document.createElement('button');
    btnNext.innerText = 'Next page';

    document.body.append( btnNext)

let lastDocument: any =null;
    btnNext.addEventListener('click', () => {
const query = usuarioRef

            .orderBy('nombre')
            .startAfter(lastDocument)

query.limit(2).get().then(snap =>{
        lastDocument = snap.docs[ snap.docs.length -1];
        
        retronarDocumento(snap);
})

});
btnNext.click();




