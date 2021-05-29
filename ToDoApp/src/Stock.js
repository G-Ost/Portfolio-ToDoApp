import * as React from 'react';



const FilterableProductTable = props => {

    return <div>{props.children}​​</div>;

};



const SearchBar = () => {

    return (

        <div>

            <input placeholder="Search" />

            <input type="checkbox" id="stocked" name="stocked" />

            <label htmlFor="stocked">In stock</label>

        </div>

    );

};



const ProductTable = props => {

    const rows = props.products.reduce((acc, product, index, array) => {

        if (product.category !== (array[index - 1] && array[index - 1].category)) {

            acc.push(

                <ProductCategoryRow

                    category={product.category}

                    key={product.category}

                />,

            );

        }

        acc.push(<ProductRow product={product} key={product.name} />);



        return acc;

    }, []);



    return (

        <table>

            <thead>

                <tr>

                    <th>Name</th>

                    <th>Price</th>

                </tr>

            </thead>

            <tbody>{rows}​​</tbody>

        </table>

    );

};


const ProductCategoryRow = props => {

    const { category } = props;



    return (

        <tr>

            <th colSpan="2">{category}​​</th>

        </tr>

    );

};



const ProductRow = props => {

    const { stocked, name, price } = props.product;



    return (
        <tr>
            <td style={!stocked ? { color: 'red' } : {}}​​> {name}​​ </td>
            <td>{price}​​</td>
        </tr>
    );
};



const App = props => {

    return (

        <FilterableProductTable>

            <SearchBar />

            <ProductTable products={props.data} />

        </FilterableProductTable>

    );

};



export default App;