import Movie from "../models/movie.model";
import { Request, Response } from "express";
import { request } from "http";

const create = (req: Request, res: Response) => {
    res.json({ status: true });
}


const getAll = async (req: Request, res: Response) => {
    try {
        const getAllMovie = await Movie.find({}).limit(5);
        res.json({ status: true, result: getAllMovie });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const getOne = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const getOneMovie = await Movie.findById({ _id });
        res.json({ status: true, result: getOneMovie });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};
export { create, getAll, getOne };
