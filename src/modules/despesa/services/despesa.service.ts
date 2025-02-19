import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Despesa } from '../entities/despesa.entity';

@Injectable()
export class DespesaService {
  constructor(
    @InjectRepository(Despesa)
    private despesasRepository: Repository<Despesa>,
  ) {}
}
