import { Type } from "../domain/Type";

export default interface ITypeRepository {
  create: (type: Type) => Promise<Type>;
  getAll: () => Promise<Type[]>;
  get: (id: string) => Promise<Type>;
  getByName: (name: string) => Promise<Type>;
  update: (id:string, type: Type) => Promise<Type>;
  delete: (id:string) => Promise<boolean>;
}