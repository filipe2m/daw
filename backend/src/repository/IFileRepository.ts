import { File } from "../domain/File";

export default interface IFileRepository {
  create: (file: File) => Promise<File>;
  getAll: () => Promise<File[]>;
  get: (id: string) => Promise<File>;
  update: (id:string, file: File) => Promise<File>;
  delete: (id:string) => Promise<boolean>;
}