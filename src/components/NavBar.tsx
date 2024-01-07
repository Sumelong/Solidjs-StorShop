"use client";


import {A} from "@solidjs/router";

export  const NavBar = () => (
        <nav>
            <A href="/">Home</A>
            <A href="/about">About</A>
            <A href="/help">Help</A>
            <A href="/login">Login</A>
            <A href="/carts">Cart</A>
        </nav>

);

export default NavBar;

