import { PrismaClient } from "@prisma/client";

import { Specification } from "../../entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: PrismaClient;

  constructor() {
    this.repository = new PrismaClient();
  }

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = await this.repository.specifications.create({
      data: {
        name,
        description,
      },
    });

    return specification;
  }

  async findByName(name: string): Promise<any> {
    const specification = await this.repository.specifications.findFirst({
      where: {
        name,
      },
    });

    return specification;
  }
}

export { SpecificationsRepository };
