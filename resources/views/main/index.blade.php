@extends('layouts.master')
<?php
    function showModal($id,  $data = [])
    {
        $toJSON = json_encode($data);
        return "showModal('$id', $toJSON)";
    }
?>
@section('content')
    <div class="row"  id="app">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Список пользователей</div>

                <div class="panel-body">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Пользователь</th>
                                <th>Последний коментарий</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        @if($users)
                            @foreach($users as $user)
                                <tr>
                                    <th>{{$user->id}}</th>
                                    <td>{{$user->name}}</td>
                                    <td>{{$user->text}}</td>
                                    <td>
                                        <button @click="{{ showModal('commentModel', $user) }}"
                                                title="Все комментарии пользователя"
                                                class="btn btn-xs btn-info view_comments">
                                            <span class="glyphicon glyphicon-comment"></span>
                                        </button>
                                        <button
                                                title="Сделать перевод"
                                                class="btn btn-xs btn-primary view_comments">
                                                <span class="glyphicon glyphicon-rub"></span>
                                        </button>
                                    </td>
                                </tr>

                            @endforeach
                        @endif
                        </tbody>
                    </table>
                </div>
            </div>
        </div>



        <!-- app -->
        <!-- use the modal component, pass in the prop -->
        <modal id="commentModel" body=""  title="First Modal"></modal>


    </div>

@endsection