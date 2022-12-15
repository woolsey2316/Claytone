/**
 * Primary file for extracting proper schema structured objects
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import dateToString from '../../helpers/date';
import Product from '../../models/product';

/**
 * Get product object with schema typing
 * @param id
 */
const getProduct = async (id: string) => {
  const product = await Product.findById(id);
  return {
    ...product._doc,
    _id: product.id,
    createdAt: dateToString(product._doc.createdAt),
    updatedAt: dateToString(product._doc.updatedAt),
  };
};

/**
 * Get product object with schema typing
 * @param product
 */
const transformProduct = (product) => {
  return {
    ...product._doc,
    _id: product.id,
    createdAt: dateToString(product._doc.createdAt),
    updatedAt: dateToString(product._doc.updatedAt),
  };
};

export { getProduct, transformProduct };
