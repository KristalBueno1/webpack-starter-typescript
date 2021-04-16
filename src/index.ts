
import db "./firebase/config";

const usuario = {
    nombre: "Kristal",
    activo: true,
    fechaNaci: 0
}

const usuariosRef = db.collection("usuarios");

// insert into usuarios...
// usuarios_ref
//     .add(usuario)

//         /db.collection('usuarios')
// .add(usuario)
// .then( docRef => {
//    console.log( docRef )
// })
// .catch(e => console.log('error', e))

// update usuarios set activo = false where...
// usuarios_ref.doc("
// yFRoW26ja8zUggGYPAGJ
// ")
//         .update({
//             activo: false
//         })

// destructivo
    // usuariosref.doc("
    // yFRoW26ja8zUggGYPAGJ
    // ")
    //         .set({
    //             nombre: mariel,
    //             activo: true,
    //             fechaNaci: 20,
    //             edad: 10
    //         })

// delete from usuarios where id= mx...
// usuariosref.doc("3XkldAO0BK044DkgxhK
// ")
// .delete({
//     nombre: "mariel",
//     fechaNaci: 20,
// })
// .then ( () =>) console.log("borrado")) 
// .catch ( e =>) console.log("error", e)) 

// select * from usuarios;

const documentos: any[] = [];

snap.forEach(snap_hijo => {
    documentos.push({
        id: snap_hijo.id,
        ...snap_hijo.data()
    });
});

    console.log(documentos)})