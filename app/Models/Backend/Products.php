<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Model;
use App\Models\Backend\Categories;
use App\Models\Backend\Features;
use App\Models\Backend\AdvantagesTranslates;
use DateTimeInterface;

class Products extends Model
{
    protected $table = 'products';
    protected $fillable = ['category_id'];

    public function features()
    {
        return $this->hasMany(Features::class, 'product_id', 'id');
    }

    public function advantage()
    {
        return $this->hasMany(AdvantagesTranslates::class, 'product_id', 'id');
    }

    public function category()
    {
        return $this->hasOne(Categories::class, 'id', 'category_id');
    }
    public function translates()
    {
        return $this->hasOne(ProductsTranslates::class, 'product_id', 'id');
    }

    /**
     * Prepare a date for array / JSON serialization.
     *
     * @param  \DateTimeInterface  $date
     * @return string
     */
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
