import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateDespesaDto } from '../dto/despesa/create_despesa.dto';
import { UpdateDespesaDto } from '../dto/despesa/update_despesa.dto';
import { Despesa } from '../entities/despesa.entity';
import { DespesaService } from '../services/despesa.service';

@Controller('despesa')
export class DespesaController {
  constructor(private readonly despesaService: DespesaService) {}

  @Get()
  async listar(): Promise<Despesa[]> {
    return this.despesaService.listar();
  }

  @Get(':id')
  async buscarPorId(@Param('id') id: number): Promise<Despesa | null> {
    return this.despesaService.buscarPorId(id);
  }

  @Post()
  async criar(@Body() createDespesaDto: CreateDespesaDto): Promise<Despesa> {
    return this.despesaService.salvar(createDespesaDto);
  }

  @Patch(':id')
  async editar(
    @Param('id') id: number,
    @Body() updateDespesaDto: UpdateDespesaDto,
  ): Promise<Despesa> {
    return this.despesaService.atualizar(id, updateDespesaDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async excluir(@Param('id') id: number): Promise<void> {
    return this.despesaService.excluir(id);
  }
}
