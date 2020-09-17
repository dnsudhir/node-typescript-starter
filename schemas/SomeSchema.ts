// import { Schema, createConnection } from "mongoose";
// import * as autoIncrement from 'mongoose-auto-increment';

// const connection = createConnection("mongodb:URI_STRING");

// autoIncrement.initialize(connection);

// const CategorySchema = new Schema({
//     code: { type: String, required: false, unique: true, trim: true },
//     name: { type: String, required: true, unique: true, trim: true },
//     imgPath: { type: String, required: false, trim: true },
//     show: { type: Boolean, required: false, default: true },
//     orderSeq: { type: Number, required: false },
//     productTypes: [{ type: Schema.Types.ObjectId, ref: 'ProductType' }]
// }, {
//     timestamps: true
// });

// CategorySchema.plugin(autoIncrement.plugin, {
//     model: 'Product',
//     field: 'code',
//     startAt: 100,
//     incrementBy: 1
// });

// export default CategorySchema;
