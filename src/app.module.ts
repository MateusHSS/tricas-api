import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppDataSource } from './config/typeorm.config';
import { DespesaModule } from './modules/despesa/despesa.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(AppDataSource.options),
    DespesaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
