import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DespesaCategoria } from './despesa_categoria.entity';

@Entity()
export class Despesa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column('decimal', { precision: 10, scale: 2 })
  valor: number;

  @Column({
    nullable: true,
  })
  categoria_id: number;

  @ManyToOne(() => DespesaCategoria, (categoria) => categoria.id)
  @JoinColumn({ name: 'categoria_id' })
  categoria: DespesaCategoria;
}
