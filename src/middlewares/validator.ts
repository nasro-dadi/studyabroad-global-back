import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

export const validateQuery = (schema: AnyZodObject) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      await schema.parseAsync(req.query);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          error: error.errors[0].message,
        });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };
};
