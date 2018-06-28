<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $fillable = ['imagePath', 'firstName', 'lastName', 'email', 'phoneNumber', 'password'];
}
