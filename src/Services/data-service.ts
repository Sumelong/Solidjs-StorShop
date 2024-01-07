
export const GetProducts = async ()=>{
    //await new Promise(resolve => setTimeout(resolve, 5000));
    const res = await fetch("http://localhost:4000/products/");
    return res.json();
}

export const GetProductBy = async (props: number | string)=>{
    const res = await fetch("http://localhost:4000/products/"+props);
    return res.json();

}

