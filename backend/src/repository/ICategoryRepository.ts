import { Category } from "../domain/Category";

export default interface ICategoryRepository {
  create: (category: Category) => Promise<Category>;
  getAll: () => Promise<Category[]>;
  get: (id: string) => Promise<Category>;
  update: (id:string, category: Category) => Promise<Category>;
  delete: (id:string) => Promise<boolean>;
}