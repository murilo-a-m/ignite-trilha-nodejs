import { Category } from "../entities/Category";

interface ICreateCategoryDTO {
  name: string;

  description: string;
}

interface ICategoriesRepository {
  findByName(name: string);

  list(): Promise<Category[]>;

  create({ name, description }: ICreateCategoryDTO): Promise<Category>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
