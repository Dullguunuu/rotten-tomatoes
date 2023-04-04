import Comment from "../models/comment.model";
import { Request, Response } from "express";
import { request } from "http";

const create = (req: Request, res: Response) => {
    res.json({ status: true });
}

const getAll = async (req: Request, res: Response) => {
    try {
        const getAllComment = await Comment.find({}).limit(5);
        res.json({ status: true, result: getAllComment });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const getOne = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const getOneComment = await Comment.findById({ _id });
        res.json({ status: true, result: getOneComment });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

export { create, getAll, getOne };
