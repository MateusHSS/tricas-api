import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Despesa } from './entities/despesa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Despesa])],
  providers: [],
  controllers: [],
  exports: [],
})
export class DespesaModule {}
