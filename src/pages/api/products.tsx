import { initMongoose } from "../../../lib/mongoose";
import Product from '../../../models/Product';

export async function findAllProducts() {
  return Product.find().exec();
}

export default async function handle(req: any, res: any) {
  await initMongoose();
  const { ids } = req.query;
  if (ids) {
    const idsArray = ids.split(',');
    console.log(idsArray);
    res.json(await Product.find({ '_id': { $in: idsArray } }).exec());
  }
  else {
    res.json(await findAllProducts());
  }
}