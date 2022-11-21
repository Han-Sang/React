import productData  from "data.js"

export  function ProductList(){
    // console.log(productData);
    let result = []
    productData.forEach(i => {
        result.push(<ProductInfo item = {i} key = {i.id}/>)
    } )
    return (     
        <ul>{result}</ul>
    );
}