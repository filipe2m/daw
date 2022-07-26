import { ITypePersistence } from "../dataschema/ITypePersistence";
import ITypeDTO from "../dto/ITypeDTO";
import { Type } from "../domain/Type";

export class TypeMapper {
  public static toDTO(type: Type): ITypeDTO {
    return {
      id: type._id,
      name: type.name,
      extension: type.extension
    } as ITypeDTO;
  }

  public static toPersistence(type: Type): ITypePersistence {
    return {
      id: type._id,
      name: type.name,
      extension: type.extension
    } as ITypePersistence;
  }

  public static toDomain(type: ITypeDTO | ITypePersistence): Type {
    return Type.create(type);
  }

}