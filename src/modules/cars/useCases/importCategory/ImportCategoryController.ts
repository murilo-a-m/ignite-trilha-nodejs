import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request.body;
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    await importCategoryUseCase.excecute(file);

    return response.send();
  }
}

export { ImportCategoryController };
