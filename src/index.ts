
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
    // usuarios_ref.doc("
    // yFRoW26ja8zUggGYPAGJ
    // ")
    //         .set({
    //             nombre: mariel,
    //             activo: true,
    //             fechaNaci: 20,
    //             edad: 10
    //         })
