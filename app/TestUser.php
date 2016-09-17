<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class TestUser extends Model
{

    /**
     * Получаем всех пользователей и их последнии комментарии
     * @return bool
     */
    public static function getUserAndFirstComment()
    {
        $result = DB::select(DB::raw(
            "SELECT u.id, u.name, IF(ISNULL( c.text),\"нет комментариев\", c.text) as text
              FROM test_users u
            LEFT JOIN(
                SELECT
                     test_comments.user_id, MAX(test_comments.id) AS last_cid
                    FROM test_comments
                    GROUP BY test_comments.user_id
                )uc ON u.id=uc.user_id
            LEFT JOIN test_comments c ON c.id=uc.last_cid"));
        
        return $result ? $result : false;
    }


    public function comments()
    {
        return $this->hasMany('App\TestComments', 'user_id', 'id');
    }




}
