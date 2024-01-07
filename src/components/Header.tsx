"use client";

import Logo from "~/components/Logo";
import NavBar from "~/components/NavBar";
import {createEffect, createSignal} from "solid-js";
import {OutlineShoppingCart, OutlineSun} from "~/Icons/OutlineIcons";
import {A} from "@solidjs/router";
import useCardContext from "~/Context/CartContext";


const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false)
const [theme, setTheme] = createSignal(true)

function toggleTheme () {
     setTheme(!theme());
}


export default function Header() {
     const {items } = useCardContext();
     const quantityAdded = () => {
        return items.reduce((acc: any, current: { quantity: any; })=>{
            return acc + current.quantity
        },0);
    }
    return(
        <>
            <div class="mx-auto flex max-w-7xl items-center px-6 lg:px-8" >
                <button onClick={toggleTheme} type="button">
                    <OutlineSun  width="2em"/>
                </button>
                <A href="/carts">
                    <OutlineShoppingCart width="2em" text={quantityAdded()}/>
                </A>
            </div>
            <header class="bg-blend-darken"
                    classList={{"bg-neutral-900":theme(),"text-white":theme()}}>
                <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <Logo/>
                    <NavBar/>
                    {/* <div class="flex lg:hidden">
                    <button
                        type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen( true)}>
                        <span class="sr-only">Open main menu</span>
                    </button>
                </div>*/}
                    {/*<div class="cursor-pointer" onclick={toggleTheme}>
                    <OutlineSun  width="2em"/>
                </div>*/}
                    {/*<button onClick={toggleTheme} type="button">
                        <OutlineSun  width="2em"/>
                    </button>
                    <p>{theme()? "Dark Theme":"light Theme"}</p>*/}
                </nav>
            </header>
        </>

        

    );
}