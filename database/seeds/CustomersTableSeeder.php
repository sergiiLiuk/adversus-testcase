<?php

use Illuminate\Database\Seeder;

class CustomersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $customer = new \App\Customer([
            'imagePath' => '1530139945.jpeg',
            'firstName' => 'Michelle',
            'lastName' => 'Obama',
            'email' => 'michelleObama@gmail.com',
            'phoneNumber' => '+4556655665',
            'password' => 'obama'             
        ]);
        $customer->save();         
    }
}
