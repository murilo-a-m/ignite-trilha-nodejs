import { PrismaClient } from "@prisma/client";

import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepositpory";

class CategoriesRepository implements ICategoriesRepository {
  private repository: PrismaClient;

  constructor() {
    this.repository = new PrismaClient();
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const category = this.repository.categories.create({
      data: {
        name,

        description,
      },
    });

    return category;
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.categories.findMany();

    return categories;
  }

  async findByName(name: string) {
    const category = await this.repository.categories.findFirst({
      where: {
        name,
      },
    });

    return category;
  }
}

export { CategoriesRepository };
