import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function CreateBranch(req: Request, res: Response, next: NextFunction) {
    try {
        const data = await prisma.branch.create ({
            data: {
                name: "BSD",
                location : "Tangerang",
            },
        });

        res.status(200).send({
            message: "Succcess",
            data,
        })
    } catch(err) {
        next(err);
    }
}

export { CreateBranch };