import { Category } from "../../domain/Category";
import categorySchema from "../../persistence/schemas/categorySchema";
import { CategoryMapper } from "../../mappers/CategoryMapper";
import ICategoryRepository from "../ICategoryRepository";
import { ICategoryPersistence } from "../../dataschema/ICategoryPersistence";

export class MongoCategoryRepository implements ICategoryRepository {
  constructor() {}

  async create(category: Category): Promise<Category> {
    console.log("MongoCategoryRepository: create: " + JSON.stringify(category));

    try {
      const categoryDataModel = CategoryMapper.toPersistence(category);
      const createdCategory = await categorySchema.create(categoryDataModel);

      return CategoryMapper.toDomain(createdCategory);
    } catch (err) {
      throw err;
    }
  }
  
  async getAll(): Promise<Category[]> { 
    console.log("MongoCategoryRepository: getAll");

    try{
      const arrayCategorys = await categorySchema.find();
      const result = arrayCategorys.map(category => {
          return CategoryMapper.toDomain(category);
      });
      return result;
    }catch(err){
      throw err;
    } 
  }

  async get(id: string): Promise<Category> {
    console.log("MongoCategoryRepository: get: " + id);

    try{
      let result = await categorySchema.findOne({_id: id});
      if(result === null) throw new Error("Could't find a Category");
      return CategoryMapper.toDomain(result);
    }catch(err){
        throw err;
    }
  }
  
  async update(id: string, category: Category): Promise<Category> {
    console.log("MongoCategoryRepository: update: " + JSON.stringify(category));
    
    try {
      const categoryDataModel = CategoryMapper.toPersistence(category);

      const updateObj = {
        $set: {
          name: categoryDataModel.name,
          icon: categoryDataModel.icon
        },
      };

      const updateCategory = await categorySchema.findOneAndUpdate(
        { _id: id },
        updateObj,
        { new: true }
      );

      return CategoryMapper.toDomain(updateCategory as unknown as ICategoryPersistence);
    } catch (err) {
      throw err;
    }
  }

  async delete(id: string): Promise<boolean> {
    console.log("MongoCategoryRepository: delete: " + JSON.stringify(id));

    try {
      const result = await categorySchema.deleteOne({ _id: id });
      return result.acknowledged;
    } catch (err) {
      throw err;
    }
  }
}