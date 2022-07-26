import { CategoryRepositoryFactory } from "../repository/CategoryRepositoryFactory";
import ICategoryRepository from "../repository/ICategoryRepository";
import ICategoryDTO from "../dto/ICategoryDTO";
import { CategoryMapper } from "../mappers/CategoryMapper";

export class CategoryService {
  private repository: ICategoryRepository;

  constructor() {
    this.repository = CategoryRepositoryFactory.adminRepository();
  }

  async create(categoryDto: ICategoryDTO) {
    console.log("CategoryService: createCategory: " + JSON.stringify(categoryDto));
    let categoryDomain = CategoryMapper.toDomain(categoryDto);
    let result = await this.repository.create(categoryDomain);
    return CategoryMapper.toDTO(result);
  }

  async getAll(){
    console.log("CategoryService: getAll");

    let result = await this.repository.getAll();
    const resultInDTO = result.map((category) => {
      return CategoryMapper.toDTO(category);
    });

    return resultInDTO;
  }

  async get(id: string) {
    console.log("CategoryService: get: " + id);

    let result = await this.repository.get(id);
    return CategoryMapper.toDTO(result);
  }

  async update(id: string, categoryDto: ICategoryDTO) {
    console.log("CategoryService: update " + id + ": " + JSON.stringify(categoryDto));

    try {

      let categoryDomain = CategoryMapper.toDomain(categoryDto);
      let result = await this.repository.update(id, categoryDomain);
      return CategoryMapper.toDTO(result);
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string) {
    console.log("CategoryService: delete: " + id);

    try {
      let result = await this.repository.delete(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
}