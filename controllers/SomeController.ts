// import { OK, INTERNAL_SERVER_ERROR } from 'http-status-codes';
// import { IBaseController } from './IBaseController';
// import { Request, Response } from 'express';
// import { Controller, Get, Post, Middleware, Put, Delete } from '@overnightjs/core';



// @Controller('api/product')
// export class ProductController implements IBaseController {

//     @Get(':id')
//     get(req: Request, res: Response) {
//         if (req.params.id) {
//             Product.findById(req.params.id).then((result) => {
//                 res.status(OK).json(result);
//             }).catch(err => {
//                 res.status(INTERNAL_SERVER_ERROR).json(err);
//             });
//         }
//     }

//     @Get()
//     getAll(req: Request, res: Response) {
//         Product.find().then((result) => {
//             res.status(OK).json(result);
//         }).catch(err => {
//             res.status(INTERNAL_SERVER_ERROR).json(err);
//         });
//     }

//     @Post()
//     @Middleware(upload.single('imgPath'))
//     add(req: Request, res: Response) {
//         let product = new Product();
//         product.name = req.body.name;
//         product.qty = req.body.qty;
//         product.price = req.body.price;
//         product.disc = req.body.disc ? req.body.disc : 0;
//         product.show = req.body.show ? req.body.show : true;
//         product.inStock = req.body.inStock ? req.body.inStock : true;
//         product.imgPath = req.file ? req.file.path : undefined;
//         product.multiplePrices = req.body.multiplePrices ? req.body.multiplePrices : [];
//         product.save().then(result => {
//             res.status(OK).json(result);
//         }).catch(err => {
//             res.status(INTERNAL_SERVER_ERROR).json(err);
//         });
//     }

//     @Put(':id')
//     update(req: Request, res: Response) {
//         Product.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(result => {
//             res.status(OK).json(result);
//         }).catch(err => {
//             res.status(INTERNAL_SERVER_ERROR).json(err);
//         });
//     }

//     @Delete(':id')
//     delete(req: Request, res: Response) {
//         Product.findByIdAndRemove(req.params.id).then(result => {
//             res.status(OK).json(result);
//         }).catch(err => {
//             res.status(INTERNAL_SERVER_ERROR).json(err);
//         });
//     }
// }