import * as Yup from 'yup';

export type Product = {
  id: string;
  name: string;
  type: string;
  category: string;
  subcategory: string;
  gauge: number;
  capacity: string;
  barrelLength: string;
  barrelType: string;
  chokes: string;
  sights: string;
  lop: string;
  barrelFinish: string;
  stock: string;
  length: string;
  weight: number;
  price: number;
  sku: string;
};

export const ProductSchema = Yup.object().shape({
  sku: Yup.string().required(),
  title: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
});
