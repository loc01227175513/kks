import { Link } from '@inertiajs/react';
import React from 'react';

export default function Layout({ children }) {
    return (
        <>
            <header className="bg-red-800">
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/posts/create">Create</Link>
                 
                </nav>

            </header>
            <main>
                {children}
            </main>
            <footer>Footer</footer>
    </>

    );
}
