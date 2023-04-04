import Theater from "../models/theater.model";
import { Request, Response } from "express";
import { request } from "http";

const create = (req: Request, res: Response) => {
    res.json({ status: true });
}

const getAll = async (req: Request, res: Response) => {
    try {
        const getAllTheater = await Theater.find({}).limit(5);
        res.json({ status: true, result: getAllTheater });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const getOne = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const getOneTheater = await Theater.findById({ _id });
        res.json({ status: true, result: getOneTheater });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

export { create, getAll, getOne };
