import "./App.css"
import ProductContainer from "./components/ProductContainer";
import Product from "./components/Product";
import data from "./producst.json";

const App = () => {
    return (
        <ProductContainer>
            {data.map( product=> <Product
                key= {product.name}
                name={product.name}
                discount={product.discount}
                oldPrice={product.price}
                newPrice={product.price - product.price*product.discount / 100}
                url={product.url}
            />
            ) }
        </ProductContainer>
    );
};

export default App;