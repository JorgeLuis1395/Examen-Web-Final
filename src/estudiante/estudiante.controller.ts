import {Body, Controller, Get, HttpStatus, Param, Post, Put, Req, Res} from "@nestjs/common";
import {EstudianteService,Estudiante} from "./estudiante.service";
import {EstudiantePipe} from "../pipes/estudiante-pipe.service";
import {ESTUDIANTE_SCHEMA} from "./estudiante.schema";


@Controller('Estudiante')
export  class EstudianteController {

    constructor(private  estudianteService: EstudianteService){

    }
    //Body params
    @Post('crear') //uso pipe
    crearEstudiante(@Body(new EstudiantePipe(ESTUDIANTE_SCHEMA)) bodyParams) {
            const estudiante1 = new Estudiante(
                bodyParams.nombres,
                bodyParams.apellidos,
                bodyParams.fechaNacimiento,
                bodyParams.semestreActual,
                bodyParams.graduado,
            );
            return this.estudianteService.crearEstudiante(estudiante1);
    }

    @Get('listar')
    listarTodosLosEstudiantes(@Res () response, @Req () request){
        var arregloEstudiantes = this.estudianteService.listarEstudiante();
        if(Object.keys(arregloEstudiantes).length === 0){
            return response.send({
                mensaje:'No existe ningun estudiante',
                estado: HttpStatus.NOT_FOUND + ' Not found',
            });
        } else{
            return response.status(202).send(arregloEstudiantes);
        }

    }


    @Get('/:id')
    mostrarEstudiante(@Res () response, @Req () request, @Param() params){

        let arregloEstudiante = this.estudianteService.obtenerUno(params.id);
        if(arregloEstudiante){
            return response.send(arregloEstudiante);
        } else{
            console.log('no encontrado');
            return response.status(400).send({
                mensaje:'Estudiante no encontrado',
                estado:HttpStatus.NOT_FOUND + ' Not found',
                URL:request.originalUrl,
                //cabeceras: request.headers,
            });
        }

    }

    @Put('/:id') //Uso pipe
    modificarEstudiante(@Res () response, @Req () request, @Param() params, @Body(new EstudiantePipe(ESTUDIANTE_SCHEMA)) body){
        let arregloEstudiante = this.estudianteService.obtenerUno(params.id);
        if(arregloEstudiante) {
            return response.send(
                this.estudianteService.editarUno(
                    params.id,
                    body.nombres,
                    body.apellidos,
                    body.fechaNacimiento,
                    body.semestreActual,
                    body.graduado
                ));
        } else{
            return response.send({
                mensaje:'Estudiante no encontrado. No se puede modificar',
                estado:HttpStatus.NOT_FOUND + ' Not found',
                url:request.path,
               //headers: request.headers,
            });
        }
    }
}

