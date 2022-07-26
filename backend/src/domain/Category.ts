import ICategoryDTO from "../dto/ICategoryDTO";
import {ICategoryPersistence} from "../dataschema/ICategoryPersistence";

export class Category {
    _id?: string;
    name: string;
    types: Array<string>;

    private constructor(_id: string, name: string, types: Array<string>) {
        this._id = _id;
        this.name = name;
        this.types = types;
    }

    public static create(categoryDTO: ICategoryDTO | ICategoryPersistence ): Category {
        if (
            categoryDTO.name &&
            categoryDTO.types 
        ) {
          return new Category(
            categoryDTO.id,
            categoryDTO.name,
            categoryDTO.types
          );
        } else {
          throw new Error("Category fields can't be null");
        }
    }
}