import {Body, Controller, Get, HttpStatus, Param, Post, Put, Req, Res} from "@nestjs/common";
import {Materia, MateriasService} from "./materias.service";
import {MateriaPipe} from "../pipes/materia-pipe.service";
import {MATERIA_SCHEMA} from "./materias.schema";

@Controller('Materia')
export class MateriasController {

    constructor(private  materiasService: MateriasService){

    }

    //Body params
    @Post('crear')
    crearMateria(@Body(new MateriaPipe(MATERIA_SCHEMA)) bodyParams){
        const materia1 = new  Materia(
            bodyParams.codigo,
            bodyParams.nombre,
            bodyParams.descripcion,
            bodyParams.activo,
            bodyParams.fechaCreacion,
            bodyParams.numeroHorasSemana,
            bodyParams.estudianteId,
        );

        return this.materiasService.crearMateria(materia1);

    }

    @Get('listar')
    listarTodosLasMaterias(@Res () response, @Req () request){
        var arregloMaterias = this.materiasService.listarMaterias();
        if(Object.keys(arregloMaterias).length === 0){
            return response.send({
                mensaje:'No existe ninguna Materia',
                estado: HttpStatus.NOT_FOUND + ' Not found',
            });
        } else{
            return response.status(202).send(arregloMaterias);
        }

    }

    @Get('/:id')
    mostrarMateria(@Res () response, @Req () request, @Param() params){
        let arregloMateria = this.materiasService.obtenerUno(params.id);
        if(arregloMateria){
            return response.send(arregloMateria);
        } else{
            console.log('no encontrado');
            return response.status(400).send({
                mensaje:'Materia no encontrada',
                estado:HttpStatus.NOT_FOUND + ' Not found',
                URL:request.originalUrl,
            });
        }
    }

    @Put('/:id')
    modificarMateria(@Res () response, @Req () request, @Param() params, @Body(new MateriaPipe(MATERIA_SCHEMA)) body){
        let arregloMateria = this.materiasService.obtenerUno(params.id);
        if(arregloMateria){
            return response.send(
                this.materiasService.editarUno(
                    params.id,
                    body.codigo,
                    body.nombre,
                    body.descripcion,
                    body.activo,
                    body.fechaCreacion,
                    body.numeroHorasSemana,
                    body.estudianteId,
                ));
        } else{
            return response.send({
                mensaje:'Materia no encontrado. No se puede modificar',
                estado:HttpStatus.NOT_FOUND + ' Not found',
                url:request.path,
            });
        }
    }
}