<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    // Definisikan nama tabel jika tidak mengikuti konvensi Laravel (jamak dari nama model)
    protected $table = 'blogs';

    // Menentukan kolom yang dapat diisi (mass assignable)
    protected $fillable = [
        'title',
        'content',
        'image',  // Pastikan ini sesuai dengan kolom di tabel
    ];

    // Menentukan kolom yang tidak boleh diubah (guarded)
    // protected $guarded = [];

    // Fungsi relasi (jika ada relasi antar tabel, misalnya ke tabel User)
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
