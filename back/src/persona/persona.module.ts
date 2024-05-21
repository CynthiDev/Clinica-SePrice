import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaController } from './persona.controller';
import { Persona } from './entities/persona.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([
      Persona
    ])
  ],
  controllers: [PersonaController],
  providers: [PersonaService],
  exports : [PersonaService],
})
export class PersonaModule {}
