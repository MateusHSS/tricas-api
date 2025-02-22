import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDespesaDto } from '../dto/despesa/create_despesa.dto';
import { UpdateDespesaDto } from '../dto/despesa/update_despesa.dto';
import { Despesa } from '../entities/despesa.entity';

@Injectable()
export class DespesaService {
  constructor(
    @InjectRepository(Despesa)
    private despesasRepository: Repository<Despesa>,
  ) {}

  async listar(): Promise<Despesa[]> {
    return this.despesasRepository.find();
  }

  async buscarPorId(id: number): Promise<Despesa | null> {
    const despesa: Despesa | null = await this.despesasRepository.findOneBy({
      id,
    });

    if (!despesa)
      throw new HttpException(
        'Despesa não encontrada!',
        HttpStatus.BAD_REQUEST,
      );

    return despesa;
  }

  async salvar(createDespesaDto: CreateDespesaDto): Promise<Despesa> {
    return this.despesasRepository.save(createDespesaDto);
  }

  async atualizar(
    id: number,
    updateDespesaDto: UpdateDespesaDto,
  ): Promise<Despesa> {
    const despesa = await this.despesasRepository.findOneBy({ id });

    if (!despesa)
      throw new HttpException(
        'Despesa não encontrada!',
        HttpStatus.BAD_REQUEST,
      );

    Object.assign(despesa, updateDespesaDto);

    return this.despesasRepository.save(despesa);
  }

  async excluir(id: number): Promise<void> {
    const despesa = await this.despesasRepository.findOneBy({ id });

    if (!despesa)
      throw new HttpException(
        'Despesa não encontrada!',
        HttpStatus.BAD_REQUEST,
      );

    const result = await this.despesasRepository.delete({ id });

    if (!result.affected)
      throw new HttpException(
        'Ocorreu um erro ao deletar a despesa',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
  }
}
