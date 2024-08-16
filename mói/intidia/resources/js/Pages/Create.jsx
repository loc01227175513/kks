import { useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        content: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/posts'); // Đường dẫn tới route xử lý tạo bài viết
    };

    return (
        <>
            <h1 className="title">Create a New Post</h1>
            <div className="w-1/2 mx-auto">
                <form onSubmit={handleSubmit} method="post">
                <input
                        type="text"
                        id="title"
                        value={data.title}
                        onChange={e => setData('title', e.target.value)}
                        className="w-full border-2 p-2 mb-4"
                        placeholder="Title"
                    />
                    {errors.title && <div className="text-red-500">{errors.title}</div>}
                    <textarea
                        id="content"
                        cols="30"
                        rows="10"
                        value={data.content}
                        onChange={e => setData('content', e.target.value)}
                        className="w-full border-2 p-2"
                        placeholder="content"
                    ></textarea>
                    {errors.body && <div className="text-red-500">{errors.body}</div>}
                    <button type="submit" className="primary-btn mt-5" disabled={processing}>
                        Create Post
                    </button>
                </form>
            </div>
        </>
    );
}