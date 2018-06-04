import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EstudianteController} from "./estudiante/estudiante.controller";
import {EstudianteService} from "./estudiante/estudiante.service";
import {MateriasController} from "./materias/materias.controller";
import {MateriasService} from "./materias/materias.service";
import {AutorizacionController} from "./autorizacion.controller";

@Module({
  imports: [],
  controllers: [AppController, EstudianteController, MateriasController, AutorizacionController],
  providers: [AppService, EstudianteService, MateriasService],
})
export class AppModule {}
