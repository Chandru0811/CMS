<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;
    protected $table = "settings";
    protected $primarykey = "id";
    protected $fillable = [
        'logo',
        'mobile',
        'facebook_url',
        'insta_url',
        'youtube_url',
        'created_by',
        'updated_by',
    ];
}
