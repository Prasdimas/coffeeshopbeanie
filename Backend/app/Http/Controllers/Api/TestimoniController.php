<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Testimoni;
use Illuminate\Http\Request;

class TestimoniController extends Controller
{
    // Menampilkan Semua Testimoni
    public function index()
    {
        $testimonis = Testimoni::all();
        return response()->json($testimonis);
    }

    // Menampilkan Testimoni Berdasarkan ID
    public function show($id)
    {
        $testimoni = Testimoni::find($id);
        if (!$testimoni) {
            return response()->json(['message' => 'Testimoni not found'], 404);
        }
        return response()->json($testimoni);
    }

    // Menambahkan Testimoni Baru
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'message' => 'required|string',
        ]);

        $testimoni = Testimoni::create($request->all());
        return response()->json($testimoni, 201);
    }

    // Mengupdate Testimoni
    public function update(Request $request, $id)
    {
        $testimoni = Testimoni::find($id);
        if (!$testimoni) {
            return response()->json(['message' => 'Testimoni not found'], 404);
        }

        $testimoni->update($request->all());
        return response()->json($testimoni);
    }

    // Menghapus Testimoni
    public function destroy($id)
    {
        $testimoni = Testimoni::find($id);
        if (!$testimoni) {
            return response()->json(['message' => 'Testimoni not found'], 404);
        }

        $testimoni->delete();
        return response()->json(['message' => 'Testimoni deleted successfully']);
    }
}
