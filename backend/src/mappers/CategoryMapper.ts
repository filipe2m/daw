import { ICategoryPersistence } from "../dataschema/ICategoryPersistence";
import ICategoryDTO from "../dto/ICategoryDTO";
import { Category } from "../domain/Category";

export class CategoryMapper {
  public static toDTO(category: Category): ICategoryDTO {
    return {
      id: category._id,
      name: category.name,
      icon: category.icon
    } as ICategoryDTO;
  }

  public static toPersistence(category: Category): ICategoryPersistence {
    return {
      id: category._id,
      name: category.name,
      icon: category.icon
    } as ICategoryPersistence;
  }

  public static toDomain(category: ICategoryDTO | ICategoryPersistence): Category {
    return Category.create(category);
  }

}