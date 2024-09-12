import { Request, Response } from "express";

//[GET] /cart
export const index = async (req: Request, res: Response)=> {
    res.render("clients/pages/cart/index", {
        pageTitle: "Giỏ hàng",
    })
}