<?php

namespace Database\Seeders;

use App\Models\Backend\Products;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{

    protected $products = array(
        array(
            "category_id" => 1,
            "brand" => "First Solar",
            "sku" => "A1001",
            "price" => 999.99
        ),
        array(
            "category_id" => 2,
            "brand" => "SunPower",
            "sku" => "S1001",
            "price" => 899.99
        ),
        array(
            "category_id" => 3,
            "brand" => "Canadian Solar",
            "sku" => "G1001",
            "price" => 799.99
        ),
        array(
            "category_id" => 1,
            "brand" => "First Solar",
            "sku" => "A1002",
            "price" => 1099.99
        ),
        array(
            "category_id" => 2,
            "brand" => "SunPower",
            "sku" => "S1002",
            "price" => 999.99
        ),
        array(
            "category_id" => 3,
            "brand" => "Canadian Solar",
            "sku" => "G1002",
            "price" => 899.99
        ),
        array(
            "category_id" => 1,
            "brand" => "First Solar",
            "sku" => "A1003",
            "price" => 1299.99
        ),
        array(
            "category_id" => 2,
            "brand" => "SunPower",
            "sku" => "S1003",
            "price" => 1099.99
        ),
        array(
            "category_id" => 3,
            "brand" => "Canadian Solar",
            "sku" => "G1003",
            "price" => 999.99
        ),
        array(
            "category_id" => 1,
            "brand" => "First Solar",
            "sku" => "A1004",
            "price" => 1499.99
        )
    );
    public function run()
    {
        foreach ($this->products as $product) {
            Products::create([
                'category_id' => rand(1, 7),
                'available' => 1,
                'brand' => $product["brand"],
                'brand_logo' => '/storage/images/brands/thumbnail/2/_small_.png',
                'image' => '/private/images/products/6/5571_200380002223_yingli_monosol_cs5_hc-1.png',
                'document' => '',
                'sku' => $product["sku"],
                'price' => $product["price"],
            ]);
        }
    }
}
