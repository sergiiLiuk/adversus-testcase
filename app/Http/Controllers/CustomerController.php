<?php

namespace App\Http\Controllers;
use App\Customer;
use Illuminate\Http\Request;
use Image;
use Illuminate\Support\Facades\Storage;

class CustomerController extends Controller
{
    public function getCustomer(Request $request, $customerId)
    {       
        $customers = Customer::all();
        $customer = Customer::findOrFail($customerId);

        // Get image from local storage
        $customer->imagePath = Storage::disk('local')->get($customer->imagePath);
        return response()->json($customer, 200);       
    }

    public function updateCustomer(Request $request, $customerId) { 
                  
        $customer  = Customer::findOrFail($customerId);
        $name = $customer->imagePath;   
        
        // Save image to local folder
        if($request->has('image')) {                                   
                $image = $request->get('image');
                
                $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                //Image::make($request->get('image'))->resize(300, 300)->save(public_path('images/').$name);                     
                //Storage::disk('public')->put($name, $request->imagePath);                
                Storage::disk('local')->put($name, $image);
            }
            
        // Update DB
        Customer::where('id', '=', $customerId)->update(['imagePath'=>$name, 'firstName'=>$request->firstName, 
        'lastName'=>$request->lastName, 'email'=>$request->email, 'phoneNumber'=>$request->phoneNumber, 'password'=>$request->password]);
        
        // Update model
        $customer->imagePath = $name;
        $customer->firstName = $request->firstName;
        $customer->lastName = $request->lastName;
        $customer->email = $request->email;
        $customer->phoneNumber = $request->phoneNumber;
        $customer->password = $request->password;
        $customer->save();
        return response()->json($customer, 200); 
    }
}