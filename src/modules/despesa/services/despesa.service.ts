import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceInterface } from 'src/interfaces/service_interface.interface';
import { Repository } from 'typeorm';
import { CreateDespesaDto } from '../dto/despesa/create_despesa.dto';
import { UpdateDespesaDto } from '../dto/despesa/update_despesa.dto';
import { Despesa } from '../entities/despesa.entity';

@Injectable()
export class DespesaService implements ServiceInterface<Despesa> {
  constructor(
    @InjectRepository(Despesa)
    private repository: Repository<Despesa>,
  ) {}

  async listar(): Promise<Despesa[]> {
    return this.repository.find();
  }

  async buscarPorId(id: number): Promise<Despesa | null> {
    const despesa: Despesa | null = await this.repository.findOneBy({
      id,
    });

    if (!despesa)
      throw new HttpException('Despesa não encontrada!', HttpStatus.NOT_FOUND);

    return despesa;
  }

  async salvar(createDespesaDto: CreateDespesaDto): Promise<Despesa> {
    return this.repository.save(createDespesaDto);
  }

  async atualizar(
    id: number,
    updateDespesaDto: UpdateDespesaDto,
  ): Promise<Despesa> {
    const despesa = await this.repository.findOneBy({ id });

    if (!despesa)
      throw new HttpException(
        'Despesa não encontrada!',
        HttpStatus.BAD_REQUEST,
      );

    Object.assign(despesa, updateDespesaDto);

    return this.repository.save(despesa);
  }

  async excluir(id: number): Promise<void> {
    const despesa = await this.repository.findOneBy({ id });

    if (!despesa)
      throw new HttpException(
        'Despesa não encontrada!',
        HttpStatus.BAD_REQUEST,
      );

    const result = await this.repository.delete({ id });

    if (!result.affected)
      throw new HttpException(
        'Ocorreu um erro ao deletar a despesa',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
  }
}
