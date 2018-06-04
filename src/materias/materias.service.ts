import { Injectable} from "@nestjs/common/decorators";

@Injectable()
export class MateriasService {

    //Metodo Crear Materia
    materia: Materia[] = [];
    crearMateria(materia: Materia): Materia[]{
        this.materia.push(materia);
        return this.materia;
    }

    //Metodo Listar Todos los materias
    listarMaterias(){
        return this.materia;
    }

    //Metodo obtener un materia
    obtenerUno(materiaID){

        console.log(this.materia[materiaID]);
        return this.materia[materiaID];
    }

    //Metodo editar un materia
    editarUno(materiaID, codigo, nombre, descripcion, activo, fechaCreacion, numeroHorasSemana, estudianteId){
        let materiaActualizada = this.obtenerUno(materiaID);

        materiaActualizada.codigo = codigo;
        materiaActualizada.nombre = nombre;
        materiaActualizada.descripcion = descripcion;
        materiaActualizada.activo = activo;
        materiaActualizada.fechaCreacion = fechaCreacion;
        materiaActualizada.numeroHorasSemana = numeroHorasSemana;
        materiaActualizada.estudianteId = estudianteId;

        return materiaActualizada;
    }

}


export class Materia {
    constructor(
        public codigo:number,
        public nombre:string,
        public descripcion:string,
        public activo:boolean,
        public fechaCreacion:string,
        public numeroHorasSemana:number,
        public estudianteId:number,
    ){};
}