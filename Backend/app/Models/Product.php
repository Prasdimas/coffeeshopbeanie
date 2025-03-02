<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    // Definisikan nama tabel jika tidak mengikuti konvensi Laravel (jamak dari nama model)
    protected $table = 'products';

    // Menentukan kolom yang dapat diisi (mass assignable)
    protected $fillable = [
        'name',
        'description',
        'price',
        'image',
    ];

    // Fungsi relasi (jika ada relasi antar tabel, misalnya ke tabel User)
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
