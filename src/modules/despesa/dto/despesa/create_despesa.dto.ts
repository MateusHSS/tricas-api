import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDespesaDto {
  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsNumber()
  valor: number;

  @IsOptional()
  @IsNumber()
  categoria_id?: number;
}
