import polka from "polka";
import axios from "axios";
const get = (url) => axios({
    baseURL: "https://assignment.dwbt.tech/",
    method: "get",
    url
}).then(response => response.data);
const loadData = () => {
    console.log("prefetching data...");
    return Promise.all([
        get("/products"),
        get("/images")
    ]).then(([productDto, imageDto]) => productDto.products.map(product => ({ ...product, images: imageDto.images[product.sku] }))).then(data => ({ products: data })).then(data => {
        console.log("data fetched successfully...");
        return data;
    });
};
loadData().then(productResponse => {
    const port = 3333;
    console.log("starting server...");
    polka()
        .use((_, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader("Content-Type", "application/json");
        next();
    })
        .get("/products", (_, response) => response.end(JSON.stringify(productResponse)))
        .listen(port, error => {
        if (error)
            throw error;
        console.log(`api listening on port ${port}`);
    });
});
