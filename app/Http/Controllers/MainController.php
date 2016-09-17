<?php

namespace App\Http\Controllers;

use App\TestUser;
use Illuminate\Http\Request;


class MainController extends Controller
{
    public function index()
    {   
        $users = TestUser::getUserAndFirstComment();
        
        return view('main.index', compact('users'));
    }


    public function getComments(Request $request, $id)
    {
        if (!$request->ajax()) {
            return response(['status' => 'success', 'data' => 'Возникла ошибка']);
        }

        $comments = TestUser::find($id)->comments;

        return response()->json(['status' => 'success', 'data' => $comments]);
    }
}
