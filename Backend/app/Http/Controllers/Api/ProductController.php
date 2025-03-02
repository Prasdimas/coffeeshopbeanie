<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    // Menampilkan Semua Produk
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    // Menampilkan Produk Berdasarkan ID
    public function show($id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        return response()->json($product);
    }

    // Menambahkan Produk Baru
    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|numeric',
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

        // Menyimpan data produk ke database, termasuk URL gambar (jika ada)
        $product = Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'image' => $imageUrl, // Menyimpan URL gambar
        ]);

        // Mengembalikan response JSON dengan data produk yang baru saja disimpan
        return response()->json($product, 201);
    }

    // Mengupdate Produk
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        $product->update($request->all());
        return response()->json($product);
    }

    // Menghapus Produk
    public function destroy($id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        $product->delete();
        return response()->json(['message' => 'Product deleted successfully']);
    }
}
