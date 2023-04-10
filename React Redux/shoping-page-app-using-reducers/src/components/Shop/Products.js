import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id = 'p1'
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
         <ProductItem
          id = 'p2'
          title='Test2'
          price={10}
          description='This is a secound product - amazing!'
        />
         <ProductItem
          id = 'p3'
          title='Test3'
          price={20}
          description='This is a thred product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
