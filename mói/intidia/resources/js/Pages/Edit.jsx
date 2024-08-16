import { useForm } from "@inertiajs/react";

export default function Show({ post }) {
    const { data, setData, put , processing, errors } = useForm({
        id: post.id,
        title: post.title,
        content: post.content
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/posts/${post.id}`);
    };

    return (
        <div>
            <h1 className="title">Update Data</h1>
            <div className="mx-auto">
                <form onSubmit={handleSubmit}>                    
                    <input 
                        type="text" 
                        id="title" 
                        placeholder="Title" 
                        value={data.title}
                        onChange={e => setData('title', e.target.value)} 
                        className="w-full border-2 p-2"
                    />
                    {errors.title && <div className="text-red-500">{errors.title}</div>}
                    <textarea 
                        id="content" 
                        cols="30" 
                        rows="10" 
                        placeholder="Content" 
                        value={data.content}
                        onChange={e => setData('content', e.target.value)} 
                        className="w-full border-2 p-2"
                    ></textarea>
                    {errors.content && <div className="text-red-500">{errors.content}</div>}
                    <button type="submit" className="primary-btn">Update</button>
                    
                </form>
            </div>
        </div>
    );
}