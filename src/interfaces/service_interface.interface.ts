export interface ServiceInterface<T> {
  listar(): Promise<T[]>;
  buscarPorId(id: number): Promise<T | null>;
  salvar(registro: T): Promise<T>;
  atualizar(id: number, registro: Partial<T>): Promise<T>;
  excluir(id: number): Promise<void>;
}
