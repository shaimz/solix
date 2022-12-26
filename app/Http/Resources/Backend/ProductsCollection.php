<?php

namespace App\Http\Resources\Backend;

use App\Models\Backend\Advantages;
use App\Models\Backend\Categories;
use App\Models\Backend\Features;
use App\Models\Backend\ProductsTranslates;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductsCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

    }
}
