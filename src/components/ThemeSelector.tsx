import { createEffect, createSignal } from "solid-js";
import {OutlineSun} from "~/Icons/OutlineIcons";

const LIGHT = "light";
const DARK = "dark";

export function ThemeSelectorCasher() {
    const [theme, setTheme] = createSignal(LIGHT);

    function handleClick() {
        setTheme(theme() === LIGHT ? DARK : LIGHT);
    }

    createEffect(() => {
        localStorage.setItem("theme", theme());
    });

    return (
        <button onClick={handleClick} type="button">
            <OutlineSun  width="2em"/>
        </button>
    );
}