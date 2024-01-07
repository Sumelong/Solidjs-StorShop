"use client";
import { Title } from "@solidjs/meta";
import EmptyCard from "~/components/EmptyCard";
import {For} from "solid-js";
import useCardContext from "~/Context/CartContext";


export default function Carts() {
    const {items } = useCardContext();
    const totalPrice = () => {
        return items.reduce((acc: any, current: { price: number; quantity: number; })=>{
            return acc + (current.price* current.quantity)
        },0);
    }
    const totalQuantity = () => {
            return items.reduce((acc: any, current: {quantity: number; })=>{
                return acc + current.quantity
            },0);
        }

    return (
        <main class="max-w-md my-8 mx-auto ">
            <Title>Carts</Title>
            <EmptyCard rounded={true}>
                <div class="p-1">
                    <h2 class="text-xl font-bold mb-2">Shopping Cart</h2>
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3 rounded-s-lg">
                                    Product
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Qty
                                </th>
                                <th scope="col" class="px-6 py-3 rounded-e-lg">
                                    Price
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <For each={items}>
                                {
                                    (item) => (
                                        <tr class="bg-white dark:bg-gray-800">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {item.title}
                                            </th>
                                            <td class="px-6 py-4">
                                                {item.quantity}
                                            </td>
                                            <td class="px-6 py-4">
                                                {item.price}
                                            </td>
                                        </tr>

                                    )
                                }
                            </For>

                            </tbody>
                            <tfoot>
                            <tr class="font-semibold text-gray-900 dark:text-white">
                                <th scope="row" class="px-6 py-3 text-base">Total</th>
                                <td class="px-6 py-3">{totalQuantity()}</td>
                                <td class="px-6 py-3">{totalPrice()}</td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </EmptyCard>

        </main>
    );
}