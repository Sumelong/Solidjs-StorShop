// Card.js
import { createSignal } from 'solid-js';
import Counter from "~/components/Counter";

interface CardProps {
    rounded: boolean;
    image: string;
    title: string;
    price: number;
}

export default function Card(props:CardProps){
    const [quantity, setQuantity] = createSignal(1);
    const [isHovered, setIsHovered] = createSignal(false);

    const handleAddToCart = () => {
        // Implement your "Add to Cart" logic here
        console.log(`Added ${quantity()} ${props.title} to the cart`);
    };

    return (
        <div /*class="max-w-xs overflow-hidden shadow-lg  bg-white"*/
             class="max-w-xs  bg-white rounded-lg shadow-md transform transition-all text-center
                 duration-300 ease-in-out hover:scale-105"
             classList={{"rounded-rounded-md":props.rounded}}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>

            <img class="w-full h-25 object-cover rounded-md"
                 src={props.image} alt={props.title} />
            <div class="px-4 py-3">
                <div class="font-bold text-xl mb-2">{props.title}</div>
                {/*<div class="text-gray-700 text-base">{props.description}</div>*/}
            </div>

            <div class="px-6 py-3">
                <div class="text-gray-700 text-base">${props.price}</div>
                <div class="flex items-center mt-4">
                    <label class="mr-2">Quantity:</label>
                    <input
                        type="number"
                        min="1"
                        value={quantity()}
                        class="border rounded-md px-2 py-1 text-sm"
                        onInput={(e) => setQuantity(parseInt(e.target.value, 10))}
                    />
                </div>
            </div>

            <div class="px-6 py-4">
                <button
                    onClick={handleAddToCart}
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 focus:outline-none focus:shadow-outline
                    rounded"
                    /*style={{ opacity: isHovered() ? 1 : 0 }}*/>
                    Add to Cart
                </button>
            </div>

        </div>

    );
}
