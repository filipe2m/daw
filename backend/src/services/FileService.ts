import { FileRepositoryFactory } from "../repository/FileRepositoryFactory";
import IFileRepository from "../repository/IFileRepository";
import IFileDTO from "../dto/IFileDTO";
import { FileMapper } from "../mappers/FileMapper";

export class FileService {
  private repository: IFileRepository;

  constructor() {
    this.repository = FileRepositoryFactory.adminRepository();
  }

  async create(fileDto: IFileDTO) {
    console.log("FileService: createFile: " + JSON.stringify(fileDto));
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