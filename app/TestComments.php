<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TestComments extends Model
{
    protected $fillable = [
        'id', 'text'
    ];
}
