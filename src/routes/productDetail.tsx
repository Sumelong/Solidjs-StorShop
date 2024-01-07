import {createResource, createSignal, Show} from "solid-js";
import {GetProductBy} from "~/Services/data-service";
import {useParams} from "@solidjs/router";
import CardSkeleton from "~/components/Skeletons/CardSkeleton";
import useCardContext from "~/Context/CartContext";


export default function ProductDetail() {
    const params = useParams();
    const [product] =  createResource(params.id,GetProductBy)
    const {items,setItems} = useCardContext();
     const addProduct = () =>{
         setAdding(true);
         setTimeout(()=>setAdding(false),2000)

         //check if product exist
         const exist = items.find((p: { id: any; })  => p.id ===  product().id );
         if (exist){
             //increase quantity of product
             setItems(
                 (p: { id: any; }) => p.id === product().id,
                 "quantity",
                 (q: number)=>q+1
             );
         }
         if (!exist){
             setItems([...items,{...product(),quantity:1}])
         }
         setCount(count()+1);
     };
    const removeProduct = () =>{
        setAdding(true);
        setTimeout(()=>setAdding(false),2000)
         //check if product exist
         const exist = items.find((p: { id: any; })  => p.id ===  product().id );
         if (exist){
             //increase quantity of product
             setItems(
                 (p: { id: any; }) => p.id === product().id,
                 "quantity",
                 (q: number)=>q-1
             );
         }
        setCount(count()-1);


     };

    const [count,setCount] = createSignal(0);
    const [adding,setAdding] = createSignal(false);


    return(
        <div class="my-7">
            <Show when={product()} fallback={<CardSkeleton/>}>
                <div class="grid grid-cols-5 gap-7">

                    <div class="col-span-2">
                        <img  src={product().img} alt="product image" />
                    </div>

                    <div class="col-span-3">
                        <h2 class="text-3xl font-bold mb-7">{product().title}</h2>
                        <p>{product().description}</p>
                        <p class="my-7 text-2xl">{product().price} FCFA</p>
                        <div class="relative inline-flex items-center p-3 text-sm font-medium rounded-lg bg-blue-800">
                            <button class="bg-blue-500 rounded-md inline-block border-2 hover:bg-blue-700 text-white
                                     font-bold py-2 px-4 my-2 focus:outline-none focus:shadow-outlinerounded"
                                    disabled={adding()}
                                    onclick={addProduct}>
                                +
                            </button>
                            <button class="bg-blue-500 rounded-md inline-block border-2 hover:bg-blue-700 text-white
                                     font-bold py-2 px-4 my-2 focus:outline-none focus:shadow-outlinerounded"
                                    disabled={adding()}
                                    onclick={removeProduct}>
                                -
                            </button>
                            <span class="sr-only">Notifications</span>
                            <div class="absolute inline-flex items-center justify-center w-6 h-6
                                text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2
                                dark:border-gray-900">{count()}</div>

                        </div>

                    </div>

                </div>
            </Show>
        </div>
    )

}