// Login.tsx
import { createSignal } from 'solid-js';
import {Title} from "@solidjs/meta";
//import { Link } from 'solid-app-router';

export  default function Login() {
    console.log("login page Called");
    const [username, setUsername] = createSignal('');
    const [password, setPassword] = createSignal('');

    const handleLogin = () => {
        // Implement your login logic here
        console.log('Logging in with:', username(), password());
    };

    return (
        <main>
            <Title>Login</Title>
            <div class="min-h-screen flex items-center justify-center bg-gray-100">
                <div class="bg-white p-8 rounded shadow-md w-96">
                    <h2 class="text-2xl font-semibold mb-6">Login</h2>

                    <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                        <div class="mb-4">
                            <label for="username"  class="block text-gray-600 text-sm font-medium mb-2">Username</label>
                            <input
                                type="text"
                                id="username"
                                class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                value={username()}
                                onInput={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div class="mb-4">
                            <label for="password" class="block text-gray-600 text-sm font-medium mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                value={password()}
                                onInput={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
                        >
                            Login
                        </button>
                    </form>

                    <div class="mt-4 text-sm text-gray-600">
                        Want a Demo? <a href="/signup" class="text-blue-500">Request Demo</a>
                    </div>
                </div>
            </div>
        </main>

    );
}

