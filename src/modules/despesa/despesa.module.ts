import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DespesaController } from './controllers/despesa.controller';
import { Despesa } from './entities/despesa.entity';
import { DespesaService } from './services/despesa.service';

@Module({
  imports: [TypeOrmModule.forFeature([Despesa])],
  providers: [DespesaService],
  controllers: [DespesaController],
  exports: [],
})
export class DespesaModule {}
