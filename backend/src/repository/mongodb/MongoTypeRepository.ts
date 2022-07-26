import { Type } from "../../domain/Type";
import typeSchema from "../../persistence/schemas/typeSchema";
import { TypeMapper } from "../../mappers/TypeMapper";
import ITypeRepository from "../ITypeRepository";
import { ITypePersistence } from "../../dataschema/ITypePersistence";

export class MongoTypeRepository implements ITypeRepository {
  constructor() {}

  async create(type: Type): Promise<Type> {
    console.log("MongoTypeRepository: create: " + JSON.stringify(type));

    try {
      const typeDataModel = TypeMapper.toPersistence(type);
      const createdType = await typeSchema.create(typeDataModel);

      return TypeMapper.toDomain(createdType);
    } catch (err) {
      throw err;
    }
  }
  
  async getAll(): Promise<Type[]> { 
    console.log("MongoTypeRepository: getAll");

    try{
      const arrayTypes = await typeSchema.find();
      const result = arrayTypes.map(type => {
          return TypeMapper.toDomain(type);
      });
      return result;
    }catch(err){
      throw err;
    } 
  }

  async get(id: string): Promise<Type> {
    console.log("MongoTypeRepository: get: " + id);

    try{
      let result = await typeSchema.findOne({_id: id});
      if(result === null) throw new Error("Could't find a type");
      return TypeMapper.toDomain(result);
    }catch(err){
        throw err;
    }
  }
  
  async update(id: string, type: Type): Promise<Type> {
    console.log("MongoTypeRepository: update: " + JSON.stringify(type));
    
    try {
      const typeDataModel = TypeMapper.toPersistence(type);

      const updateObj = {
        $set: {
          name: typeDataModel.name,
          extension: typeDataModel.extension
        },
      };

      const updateType = await typeSchema.findOneAndUpdate(
        { _id: id },
        updateObj,
        { new: true }
      );

      return TypeMapper.toDomain(updateType as unknown as ITypePersistence);
    } catch (err) {
      throw err;
    }
  }

  async delete(id: string): Promise<boolean> {
    console.log("MongoTypeRepository: delete: " + JSON.stringify(id));

    try {
      const result = await typeSchema.deleteOne({ _id: id });
      return result.acknowledged;
    } catch (err) {
      throw err;
    }
  }
}