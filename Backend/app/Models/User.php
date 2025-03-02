<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    // Definisikan nama tabel jika tidak mengikuti konvensi Laravel (jamak dari nama model)
    protected $table = 'users';

    // Menentukan kolom yang dapat diisi (mass assignable)
    protected $fillable = [
        'name',
        'email',
        'password',
        'profile_image', // Jika ada kolom image profile
    ];

    // Menentukan kolom yang tidak boleh diubah (guarded)
    // protected $guarded = [];

    // Relasi ke tabel lain, misalnya Blog dan Product (jika ada relasi)
    public function blogs()
    {
        return $this->hasMany(Blog::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function testimonis()
    {
        return $this->hasMany(Testimoni::class);
    }
}
