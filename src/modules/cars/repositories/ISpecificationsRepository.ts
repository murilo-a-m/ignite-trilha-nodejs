import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
  name: string;

  description: string;
}

interface ISpecificationsRepository {
  create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification>;

  findByName(name: string): any;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
