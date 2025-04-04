import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DespesaController } from './controllers/despesa.controller';
import { DespesaCategoriaController } from './controllers/despesa_categoria.controller';
import { Despesa } from './entities/despesa.entity';
import { DespesaCategoria } from './entities/despesa_categoria.entity';
import { DespesaService } from './services/despesa.service';
import { DespesaCategoriaService } from './services/despesa_categoria.service';

@Module({
  imports: [TypeOrmModule.forFeature([Despesa, DespesaCategoria])],
  providers: [DespesaService, DespesaCategoriaService],
  controllers: [DespesaController, DespesaCategoriaController],
  exports: [],
})
export class DespesaModule {}
