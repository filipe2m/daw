import { IFilePersistence } from "../dataschema/IFilePersistence";
import IFileDTO from "../dto/IFileDTO";
import { File } from "../domain/File";

export class FileMapper {
  public static toDTO(file: File): IFileDTO {
    return {
      id: file._id,
      name: file.name,
      type: file.type,
      category: file.category,
      path: file.path
    } as IFileDTO;
  }

  public static toPersistence(file: File): IFilePersistence {
    return {
      id: file._id,
      name: file.name,
      type: file.type,
      category: file.category,
      path: file.path
    } as IFilePersistence;
  }

  public static toDomain(file: IFileDTO | IFilePersistence): File {
    return File.create(file);
  }

}