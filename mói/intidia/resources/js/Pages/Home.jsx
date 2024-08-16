import { Link, useForm } from "@inertiajs/react";
import Layout from "../Layouts/Layout";

export default function Home({ name, posts }) {
    console.log(posts);
   
    
    const { delete: destroy } = useForm();

    function submit(e, post) {
      e.preventDefault();
      destroy(`posts/${post.id}`);
    }
    return (
        <>
            <h1 className="text-center">Home {name} </h1>
            {posts.data.map((post) => (
                <div key={post.id} className="text-wrap border-2 m-4 p-3 rounded  ">
                    <div className="title">
                        {post.title}
                    </div>
                    <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                    
                    <div className="flex items-center justify-end gap-2">
                    <Link className="primary-btn" href={`/posts/${post.id}/edit`}>Edit</Link>
                    <form onSubmit={(e) => submit(e, post)}>
            <button  className="bg-red-500 rounded-md px-2 py-1 text-white">
                Delete
            </button>
        </form>
</div>
                </div>
            ))}
            <div className="flex items-center space-x-2">
                {posts.links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        className={`px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 ${link.active ? "text-blue-500" : ""}`}
                    >
                        {link.label}
                    </Link>
                    
                ))}
            </div>
            <Link href="/" className="block title mt-[1000px]">
                {new Date().toLocaleDateString()}
            </Link>
        </>
    );
}
Home.layout = (page) => <Layout children={page} title="Welcome" />;