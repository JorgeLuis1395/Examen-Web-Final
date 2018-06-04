import {Injectable} from "@nestjs/common/decorators";
@Injectable()

export class EstudianteService {

    //Metodo Crear estudiante
    estudiantes: Estudiante[] = [];
    crearEstudiante(estudiante: Estudiante): Estudiante[]{
        this.estudiantes.push(estudiante);
        return this.estudiantes;
    }

    //Metodo Listar Todos los estudiante
    listarEstudiante(){
        return this.estudiantes;
    }

    //Metodo obtener un estudiante
    obtenerUno(estudianteID){

        console.log(this.estudiantes[estudianteID]);
        return this.estudiantes[estudianteID];
    }

    //Metodo editar un estudiante
    editarUno(idEstudiante, nombreEstudiante, apellidoEstudiante, fechaNacimientoEst, semestreActualEst, graduadoEstudiante){
        let estudianteeActualizado = this.obtenerUno(idEstudiante);

        estudianteeActualizado.nombres = nombreEstudiante;
        estudianteeActualizado.apellidos = apellidoEstudiante;
        estudianteeActualizado.fechaNacimiento = fechaNacimientoEst;
        estudianteeActualizado.semestreActual = semestreActualEst;
        estudianteeActualizado.graduado = graduadoEstudiante;

        return estudianteeActualizado;
    }
}


export class Estudiante {

    constructor(
        public nombres:string,
        public apellidos:string,
        public fechaNacimiento:string,
        public semestreActual:number,
        public graduado:boolean,
    ){};

}