class IconProps {
    height?: string | number = "1em";
    width?: string | number = "1em";
    text?:string |number =0;

}

export  function OutlineSun(props:IconProps) {
    return (
        <svg fill="none" stroke-width="0"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            viewBox="0 0 24 24"
            height={props.height} width={props.width}
            style="overflow: visible; color: currentcolor;">
            <path stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z">

        </path>
        </svg>
);
}

export function OutlineShoppingCart(props:IconProps) {
    return (
        <svg fill="none" stroke-width="0"
             xmlns="http://www.w3.org/2000/svg"
             stroke="currentColor" viewBox="0 0 24 24"
             height={props.height} width={props.width}
             style="overflow: visible; color: currentcolor;">
            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z">
            </path>
            <text id="myText" x="10" y="13" font-size="8" font-weight="bold" fill="black">{props.text}</text>
        </svg>
    );
}

export function OutlineShoppingCartPlus(props:IconProps) {
    return (
        <svg fill="none" stroke-width="2"
             xmlns="http://www.w3.org/2000/svg"
             class="icon icon-tabler icon-tabler-shopping-cart-plus"
             width={props.width} height={props.height}
             viewBox="0 0 24 24" stroke="currentColor"
             stroke-linecap="round" stroke-linejoin="round"
             style="overflow: visible; color: currentcolor;">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M17 17h-11v-14h-2"></path>
            <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13"></path>
            <path d="M15 6h6m-3 -3v6"></path>
        </svg>
    );
}
export function OutlineShoppingCartX(props:IconProps) {
    return (
        <svg fill="none" stroke-width="2"
             xmlns="http://www.w3.org/2000/svg"
             class="icon icon-tabler icon-tabler-shopping-cart-x"
             width={props.width} height={props.height}
             viewBox="0 0 24 24"
             stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17h-11v-14h-2"></path><path d="M6 5l8 .571m5.43 4.43l-.429 3h-13"></path><path d="M17 3l4 4"></path><path d="M21 3l-4 4"></path></svg>
    );
}
