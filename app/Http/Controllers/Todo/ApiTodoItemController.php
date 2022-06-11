<?php

namespace App\Http\Controllers\Todo;

use App\Http\Controllers\Controller;
use App\TodoItem;
use Illuminate\Http\Request;

class ApiTodoItemController extends Controller
{
    /**
     * Returns todos as json response
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function todos(Request $request)
    {
        $todos = TodoItem::where('user_id', '=', auth('api')->user()->id)->get();
        return response()->json($todos);
    }

    /**
     * Creates and stores todoItem to database.
     * @param Request $request
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        /**
         * Valiate the name
         */
        $this->validate($request, [
            'name' => [ 'required',  'string', 'min:5', 'max:50', 'unique:todo_items,name' ]
        ]);

        $todoItem = new TodoItem();
        $todoItem->name = $request->name;
        $todoItem->user_id = auth('api')->user()->id;
        $todoItem->save();

        return $todoItem;
    }

    /**
     * Updates a todo item
     * @param Request $request
     * @param TodoItem $todoItem
     * @return TodoItem
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, TodoItem $todoItem)
    {
        /**
         * Validate the request,
         * Exempt the current TodoItem if the name has not changed
         */
        $this->validate($request, [
            'name' => [ 'required', 'string', 'min:5', 'max:50', 'unique:todo_items,name,'.$todoItem->id ]
        ]);

        $todoItem->name = $request->name;
        $todoItem->save();

        return $todoItem;
    }

    public function destroy(Request $request, TodoItem $todoItem)
    {
        $todoItem->delete();
        return response()->json(null, 204);
    }
}
