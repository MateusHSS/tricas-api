import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Despesa } from './despesa.entity';

@Entity()
export class DespesaCategoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @OneToMany(() => Despesa, (despesa) => despesa.categoria_id)
  despesas: Despesa[];
}
