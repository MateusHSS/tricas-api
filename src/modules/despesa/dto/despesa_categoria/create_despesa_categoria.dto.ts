import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDespesaCategoriaDto {
  @IsNotEmpty()
  @IsString()
  descricao: string;
}
