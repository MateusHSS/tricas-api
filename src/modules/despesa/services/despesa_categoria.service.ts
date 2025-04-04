import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceInterface } from 'src/interfaces/service_interface.interface';
import { Repository } from 'typeorm';
import { CreateDespesaCategoriaDto } from '../dto/despesa_categoria/create_despesa_categoria.dto';
import { UpdateDespesaCategoriaDto } from '../dto/despesa_categoria/update_despesa_categoria.dto';
import { DespesaCategoria } from '../entities/despesa_categoria.entity';

@Injectable()
export class DespesaCategoriaService
  implements ServiceInterface<DespesaCategoria>
{
  constructor(
    @InjectRepository(DespesaCategoria)
    private repository: Repository<DespesaCategoria>,
  ) {}

  async listar(): Promise<DespesaCategoria[]> {
    return this.repository.find();
  }

  async buscarPorId(id: number): Promise<DespesaCategoria | null> {
    const categoria: DespesaCategoria | null = await this.repository.findOneBy({
      id,
    });

    if (!categoria)
      throw new HttpException(
        'Categoria não encontrada!',
        HttpStatus.NOT_FOUND,
      );

    return categoria;
  }

  async salvar(
    createDespesaCategoriaDto: CreateDespesaCategoriaDto,
  ): Promise<DespesaCategoria> {
    return this.repository.save(createDespesaCategoriaDto);
  }

  async atualizar(
    id: number,
    updateDespesaCategoriaDto: UpdateDespesaCategoriaDto,
  ): Promise<DespesaCategoria> {
    const categoria = await this.repository.findOneBy({ id });

    if (!categoria)
      throw new HttpException(
        'Categoria não encontrada!',
        HttpStatus.NOT_FOUND,
      );

    Object.assign(categoria, updateDespesaCategoriaDto);

    return this.repository.save(categoria);
  }

  async excluir(id: number): Promise<void> {
    const categoria = await this.repository.findOneBy({ id });

    if (!categoria)
      throw new HttpException(
        'Categoria não encontrada!',
        HttpStatus.NOT_FOUND,
      );

    const result = await this.repository.delete({ id });

    if (!result.affected)
      throw new HttpException(
        'Ocorreu um erro ao deletar a categoria',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
  }
}
