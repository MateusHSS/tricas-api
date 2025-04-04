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
import { CreateDespesaCategoriaDto } from '../dto/despesa_categoria/create_despesa_categoria.dto';
import { UpdateDespesaCategoriaDto } from '../dto/despesa_categoria/update_despesa_categoria.dto';
import { DespesaCategoria } from '../entities/despesa_categoria.entity';
import { DespesaCategoriaService } from '../services/despesa_categoria.service';

@Controller('despesa_categoria')
export class DespesaCategoriaController {
  constructor(private readonly service: DespesaCategoriaService) {}

  @Get()
  async listar(): Promise<DespesaCategoria[]> {
    return this.service.listar();
  }

  @Get(':id')
  async buscarPorId(@Param('id') id: number): Promise<DespesaCategoria | null> {
    return this.service.buscarPorId(id);
  }

  @Post()
  async criar(
    @Body() createDespesaCategoriaDto: CreateDespesaCategoriaDto,
  ): Promise<DespesaCategoria> {
    return this.service.salvar(createDespesaCategoriaDto);
  }

  @Patch(':id')
  async editar(
    @Param('id') id: number,
    @Body() updateDespesaCategoriaDto: UpdateDespesaCategoriaDto,
  ): Promise<DespesaCategoria> {
    return this.service.atualizar(id, updateDespesaCategoriaDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async excluir(@Param('id') id: number): Promise<void> {
    return this.service.excluir(id);
  }
}
