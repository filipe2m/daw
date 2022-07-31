import ICategoryDTO from "../dto/ICategoryDTO";
import {ICategoryPersistence} from "../dataschema/ICategoryPersistence";

export class Category {
    _id?: string;
    name: string;
    icon: string;

    private constructor(_id: string, name: string, icon: string) {
        this._id = _id;
        this.name = name;
        this.icon = icon;
    }

    public static create(categoryDTO: ICategoryDTO | ICategoryPersistence ): Category {
        if (
            categoryDTO.name &&
            categoryDTO.icon 
        ) {
          return new Category(
            categoryDTO.id,
            categoryDTO.name,
            categoryDTO.icon
          );
        } else {
          throw new Error("Category fields can't be null");
        }
    }
}