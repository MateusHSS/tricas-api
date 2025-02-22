import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateDespesaDto {
  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsNumber()
  valor?: number;

  @IsOptional()
  @IsNumber()
  categoria_id?: number;
}
