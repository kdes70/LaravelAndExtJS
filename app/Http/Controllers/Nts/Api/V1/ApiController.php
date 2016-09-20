<?php

namespace App\Http\Controllers\Nts\Api\V1;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ApiController extends Controller
{

    public function read(Request $request)
    {

       /* $limit = $this->input->get('limit', TRUE) > '' ? $this->input->get('limit', TRUE) : 45;
        $offset = $this->input->get('start', TRUE);
        $sorts = json_decode($this->input->get('sort', TRUE));
        if ($sorts) {
            foreach ($sorts as $sort) {
                $orders[] = $sort->property.' '.$sort->direction;
            }
            $order_by = implode(', ', $orders);
        } else {
            $order_by = 'id asc';
        }*/

        $sorts = json_decode($request->input('sort', TRUE));

        if ($sorts) {
            foreach ($sorts as $sort) {
                $orders['property'] = $sort->property;
                $orders['direction'] = $sort->direction;
            }
           // $order_by = implode(', ', $orders);
        } else {
            $order_by = 'id asc';
        }

       //dd($sorts);

        $model = new User;

       $users = $model->orderBy($orders['property'], $orders['direction'])->get();

        return response(['items'=> $users, 'success' => true]);
    }
}
