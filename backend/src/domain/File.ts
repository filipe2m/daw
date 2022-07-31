import IFileDTO from "../dto/IFileDTO";
import {IFilePersistence} from "../dataschema/IFilePersistence";

export class File {
    _id?: string;
    name: string;
    type: string;
    category: string;
    path: string;

    private constructor(_id: string, name: string, type: string, category: string, path: string) {
        this._id = _id;
        this.name = name;
        this.type = type;
        this.category = category;
        this.path = path;
    }

    public static create(fileDTO: IFileDTO | IFilePersistence ): File {
        if (
            fileDTO.name &&
            fileDTO.type &&
            fileDTO.category &&
            fileDTO.path
        ) {
          return new File(
            fileDTO.id,
            fileDTO.name,
            fileDTO.type,
            fileDTO.category,
            fileDTO.path
          );
        } else {
          throw new Error("File fields can't be null");
        }
    }
}