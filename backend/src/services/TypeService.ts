import { TypeRepositoryFactory } from "../repository/TypeRepositoryFactory";
import ITypeRepository from "../repository/ITypeRepository";
import ITypeDTO from "../dto/ITypeDTO";
import { TypeMapper } from "../mappers/TypeMapper";

export class TypeService {
  private repository: ITypeRepository;

  constructor() {
    this.repository = TypeRepositoryFactory.adminRepository();
  }

  async create(typeDto: ITypeDTO) {
    console.log("TypeService: createType: " + JSON.stringify(typeDto));
    let typeDomain = TypeMapper.toDomain(typeDto);
    let result = await this.repository.create(typeDomain);
    return TypeMapper.toDTO(result);
  }

  async getAll(){
    console.log("TypeService: getAll");

    let result = await this.repository.getAll();
    const resultInDTO = result.map((type) => {
      return TypeMapper.toDTO(type);
    });

    return resultInDTO;
  }

  async get(id: string) {
    console.log("TypeService: get: " + id);

    let result = await this.repository.get(id);
    return TypeMapper.toDTO(result);
  }

  async getByName(name: string) {
    console.log("TypeService: getByName: " + name);

    let result = await this.repository.getByName(name);
    return TypeMapper.toDTO(result);
  }

  async update(id: string, typeDto: ITypeDTO) {
    console.log("TypeService: update " + id + ": " + JSON.stringify(typeDto));

    try {

      let typeDomain = TypeMapper.toDomain(typeDto);
      let result = await this.repository.update(id, typeDomain);
      return TypeMapper.toDTO(result);
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string) {
    console.log("TypeService: delete: " + id);

    try {
      let result = await this.repository.delete(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
}