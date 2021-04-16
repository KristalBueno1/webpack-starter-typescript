
import db "./firebase/config";
import moduleName, { retornaDocumentos } from "./helpers/mostrar-documentos";
import {firestore} from "firebase"

// select from usuarios order by nombre asc, salario asc
const usuariosRef = db.collection("usuarios");
usuarios_ref
.orderBy("nombre", "desc")
.orderBy("desc")
.get().then(retornaDocumentos); 






