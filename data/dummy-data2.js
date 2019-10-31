import Product from '../models/product';

const PRODUCTS = [
  new Product(
    'p1',
    'u1',
    'Lapangan Futsal Patoenk',
    'https://media.timeout.com/images/101811475/image.jpg',
    'variant of association football played on a hard court, smaller than a football pitch, and mainly indoors',
    200,
    'Futsal',
    'Gandaria City, Jakarta Selatan'
  ),
  new Product(
    'p2',
    'u1',
    'Swiming Pool',
    'https://www.brisbane.qld.gov.au/sites/default/files/styles/hero_image_mobile/public/1200x500-dunlop-park-pool-corner_0.jpg?itok=owev0y2n',
    'People swim for exercise, for fun, and as a sport',
    99.99,
    'Grill, Japanese',
    'Kebon Jeruk, Jakarta Barat'
  )
];

export default PRODUCTS;
