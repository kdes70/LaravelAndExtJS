<?php

namespace App\Http\Controllers\Nts;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NtsController extends Controller
{

    public function index()
    {
        return view('nts.index');
    }
}
