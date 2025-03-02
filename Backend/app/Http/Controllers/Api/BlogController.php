<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    // Menampilkan Semua Blog
    public function index()
    {
        $blogs = Blog::all();
        return response()->json($blogs);
    }

    // Menampilkan Blog Berdasarkan ID
    public function show($id)
    {
        $blog = Blog::find($id);
        if (!$blog) {
            return response()->json(['message' => 'Blog not found'], 404);
        }
        return response()->json($blog);
    }


    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',  // Validasi file gambar
        ]);

        // Menyimpan file gambar jika ada
        if ($request->hasFile('image')) {
            // Ambil file gambar
            $image = $request->file('image');

            // Generate nama file unik
            $imageName = time() . '.' . $image->getClientOriginalExtension();

            // Menyimpan gambar ke folder public/images
            $image->storeAs('public/images', $imageName);

            // Menyimpan URL file gambar
            $imageUrl = Storage::url('images/' . $imageName);
        } else {
            $imageUrl = null; // Jika tidak ada gambar, set null
        }

        // Menyimpan data blog ke database, termasuk URL gambar (jika ada)
        $blog = Blog::create([
            'title' => $request->title,
            'content' => $request->content,
            'image' => $imageUrl, // Menyimpan URL gambar
        ]);

        // Mengembalikan response JSON dengan data blog yang baru saja disimpan
        return response()->json($blog, 201);
    }

    // Mengupdate Blog
    public function update(Request $request, $id)
    {
        $blog = Blog::find($id);
        if (!$blog) {
            return response()->json(['message' => 'Blog not found'], 404);
        }

        $blog->update($request->all());
        return response()->json($blog);
    }

    // Menghapus Blog
    public function destroy($id)
    {
        $blog = Blog::find($id);
        if (!$blog) {
            return response()->json(['message' => 'Blog not found'], 404);
        }

        $blog->delete();
        return response()->json(['message' => 'Blog deleted successfully']);
    }
}
