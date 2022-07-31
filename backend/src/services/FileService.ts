import { FileRepositoryFactory } from "../repository/FileRepositoryFactory";
import IFileRepository from "../repository/IFileRepository";
import IFileDTO from "../dto/IFileDTO";
import ITypeDTO from "../dto/ITypeDTO";
import { FileMapper } from "../mappers/FileMapper";
import { TypeService } from "./TypeService";

export class FileService {
  private repository: IFileRepository;

  constructor() {
    this.repository = FileRepositoryFactory.adminRepository();
  }

  async create(fileDto: IFileDTO) {
    console.log("FileService: createFile: " + JSON.stringify(fileDto));

    const typeService: TypeService = new TypeService();
    try{
      const typeExists = await typeService.getByName(fileDto.type);
    }catch(error){
      const name = fileDto.type;
      const extension = '.'+fileDto.type.toLocaleLowerCase();
      const type: ITypeDTO = {name, extension};
      await typeService.create(type);
    }

    let fileDomain = FileMapper.toDomain(fileDto);
    let result = await this.repository.create(fileDomain);
    return FileMapper.toDTO(result);
  }

  async getAll(){
    console.log("FileService: getAll");

    let result = await this.repository.getAll();
    const resultInDTO = result.map((file) => {
      return FileMapper.toDTO(file);
    });

    return resultInDTO;
  }

  async get(id: string) {
    console.log("FileService: get: " + id);

    let result = await this.repository.get(id);
    return FileMapper.toDTO(result);
  }

  async update(id: string, fileDto: IFileDTO) {
    console.log("FileService: update " + id + ": " + JSON.stringify(fileDto));

    try {

      let fileDomain = FileMapper.toDomain(fileDto);
      let result = await this.repository.update(id, fileDomain);
      return FileMapper.toDTO(result);
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string) {
    console.log("FileService: delete: " + id);

    try {
      let result = await this.repository.delete(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
}