import { File } from "../../domain/File";
import fileSchema from "../../persistence/schemas/fileSchema";
import { FileMapper } from "../../mappers/FileMapper";
import IFileRepository from "../IFileRepository";
import { IFilePersistence } from "../../dataschema/IFilePersistence";

export class MongoFileRepository implements IFileRepository {
  constructor() {}

  async create(file: File): Promise<File> {
    console.log("MongoFileRepository: create: " + JSON.stringify(file));

    try {
      const fileDataModel = FileMapper.toPersistence(file);
      const createdFile = await fileSchema.create(fileDataModel);

      return FileMapper.toDomain(createdFile);
    } catch (err) {
      throw err;
    }
  }
  
  async getAll(): Promise<File[]> { 
    console.log("MongoFileRepository: getAll");

    try{
      const arrayFiles = await fileSchema.find();
      const result = arrayFiles.map(file => {
          return FileMapper.toDomain(file);
      });
      return result;
    }catch(err){
      throw err;
    } 
  }

  async get(id: string): Promise<File> {
    console.log("MongoFileRepository: get: " + id);

    try{
      let result = await fileSchema.findOne({_id: id});
      if(result === null) throw new Error("Could't find a tutorial");
      return FileMapper.toDomain(result);
    }catch(err){
        throw err;
    }
  }
  
  async update(id: string, file: File): Promise<File> {
    console.log("MongoFileRepository: update: " + JSON.stringify(file));
    
    try {
      const fileDataModel = FileMapper.toPersistence(file);

      const updateObj = {
        $set: {
          name: fileDataModel.name,
          type: fileDataModel.type,
          category: fileDataModel.category
        },
      };

      const updateFile = await fileSchema.findOneAndUpdate(
        { _id: id },
        updateObj,
        { new: true }
      );

      return FileMapper.toDomain(updateFile as unknown as IFilePersistence);
    } catch (err) {
      throw err;
    }
  }

  async delete(id: string): Promise<boolean> {
    console.log("MongoFileRepository: delete: " + JSON.stringify(id));

    try {
      const result = await fileSchema.deleteOne({ _id: id });
      return result.acknowledged;
    } catch (err) {
      throw err;
    }
  }
}