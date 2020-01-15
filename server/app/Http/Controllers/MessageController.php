<?php


namespace App\Http\Controllers;


use DB;




use Illuminate\Http\Request;
class MessageController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
    public function index() {
        $messages = DB::table('messages')->orderBy('time', 'desc')->get();
        return response()->json($messages);
    }

    public function store(Request $request) {
        error_reporting(E_ALL);
        $item = $request->input('newItem');
        $id = DB::table('messages')->insertGetId([
            'number' =>  $item['number'],  
            'message' => $item['message'],
            'success' => rand(0,1)
            ]
        );
        $returnItem = DB::table('messages')->find($id);
      
        // sleep(1); // sending sms
        return response()->json($returnItem);
    }

    public function download() {
   
        header('Content-Type: application/octet-stream; charset=utf-8');
        $messages = DB::table('messages')->orderBy('time', 'desc')->get();


        $pdf = app()->make('dompdf.wrapper');
        $pdf->loadView('logs', ['messages' => $messages]);

        return $pdf->download('logs.pdf'); 
        exit;
    }
}
