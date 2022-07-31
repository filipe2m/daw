import ITypeDTO from "../dto/ITypeDTO";
import {ITypePersistence} from "../dataschema/ITypePersistence";

export class Type {
    _id?: string;
    name: string;
    extension: string;

    private constructor(_id: string, name: string, extension: string) {
        this._id = _id;
        this.name = name;
        this.extension = extension;
    }

    public static create(typeDTO: ITypeDTO | ITypePersistence ): Type {
        if (
            typeDTO.name,
            typeDTO.extension
        ) {
          return new Type(
            typeDTO.id!,
            typeDTO.name,
            typeDTO.extension
          );
        } else {
          throw new Error("Type fields can't be null");
        }
    }
}