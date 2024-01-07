// Card.js
import { createSignal } from 'solid-js';

interface CardProps {
    children: any;
    rounded: boolean;
}



export default function EmptyCard(props:CardProps){
    const [isHovered, setIsHovered] = createSignal(false);

    return (
        <div
            class="max-w-xs  bg-white rounded-lg shadow-md transform transition-all text-center
                 duration-300 ease-in-out hover:scale-105"
            classList={{"rounded-rounded-md":props.rounded}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>

            {props.children}

        </div>
    );
};

