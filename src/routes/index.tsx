import { Title } from "@solidjs/meta";
import Card from "~/components/Card";
import {createResource, For, Show} from "solid-js";
import {Product} from "~/model/product";
import CardSkeleton from "~/components/Skeletons/CardSkeleton";
import EmptyCard from "~/components/EmptyCard";
import {A} from "@solidjs/router";
import {GetProducts} from "~/Services/data-service";

/*const fetchData = async ()=>{
    //await new Promise(resolve => setTimeout(resolve, 5000));
    const res = await fetch("http://localhost:4000/products/");
    return res.json();
}*/


export default function Home() {
const [products] = createResource(GetProducts)
    //console.log(products());
  return (
      <>
          <Title>ESA-Home</Title>
          <Show when={products()}  fallback={<CardSkeleton/>}>
              <div class="grid grid-cols-4 my-4 mx-4 gap-10" >
                  <For each={products()}>{(product:Product)=>(
                      <EmptyCard rounded={true}>
                          <img class=" px-5 py-5 rounded-md"
                               src={product.img} alt="Product Image"/>
                          <div class="px-4 py-3 font-bold text-xl mb-2">{product.title}</div>
                          <A href={"/product/"+product.id}
                             class="bg-blue-500 rounded-md inline-block border-2 hover:bg-blue-700 text-white
                                     font-bold py-2 px-4 my-2 focus:outline-none focus:shadow-outlinerounded"
                          >View Product</A>
                      </EmptyCard>)}
                  </For>
              </div>
          </Show>
      </>
  );
}
