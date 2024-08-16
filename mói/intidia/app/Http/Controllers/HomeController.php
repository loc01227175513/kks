<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
class HomeController extends Controller
{
    public function index()
    {
        sleep(1);
        // $posts = Post::all();
        // $posts = Post::latest()->get();
        $posts = Post::latest()->paginate(5);
        return inertia('Home', [
            'name' => 'John Doe',
            'posts' => $posts
        ]);
    }
    public function about()
    {
        return inertia('About/About');
    }
}