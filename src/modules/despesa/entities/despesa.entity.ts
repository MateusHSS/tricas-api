import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DespesaCategoria } from './despesa_categoria.entity.ts';

@Entity()
export class Despesa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column()
  valor: number;

  @Column()
  categoria_id: number;

  @ManyToOne(() => DespesaCategoria, (categoria) => categoria.id)
  categoria: DespesaCategoria;
}
