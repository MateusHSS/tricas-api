import { IsOptional, IsString } from 'class-validator';

export class UpdateDespesaCategoriaDto {
  @IsOptional()
  @IsString()
  descricao?: string;
}
