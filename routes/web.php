<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Backend\AdminController;
use App\Http\Controllers\Backend\NewsController;
use App\Http\Resources\Backend\ProductsCollection;
use App\Models\Backend\CareersTranslates;
use App\Models\Backend\Products;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Backend\Requests\ProductsController;
use App\Http\Controllers\ProductsController as ProductController;
use App\Http\Controllers\Backend\Requests\RequestsController;

$languageRoutes = function() {
    Route::post('project/{id}', [Backend\ProjectsController::class, 'show'])->where('id', '[0-9]+');
};
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/admin', function () {
    return view('admin.master');
});

Route::post('/login', [Backend\AdminController::class, 'login'])->name('login');
Route::post('/logout', [Backend\AdminController::class, 'logout']);

Route::get('logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index');

Route::group(['prefix' => 'admin'], function(){
    Route::get('user-session', [AdminController::class, 'userData']);

    Route::group(['prefix' => 'request-products'], function () {
        Route::get('/', [Backend\Requests\ProductsController::class, 'index']);
        Route::get('{id}', [Backend\Requests\ProductsController::class, 'getRequest']);
        Route::post('/', [Backend\Requests\ProductsController::class, 'updateStatus']);
        Route::post('email/{id}', [Backend\Requests\NotificationController::class, 'send']);
    });

    Route::group(['prefix' => 'request-services'], function () {
        Route::get('/', [Backend\Requests\ServicesController::class, 'index']);
        Route::get('{id}', [Backend\Requests\ServicesController::class, 'getRequest']);
        Route::post('/', [Backend\Requests\ServicesController::class, 'updateStatus']);
    });

    Route::group(['prefix' => 'request-calls'], function () {
        Route::get('/', [Backend\Requests\CallsController::class, 'index']);
        Route::get('{id}', [Backend\Requests\CallsController::class, 'getRequest']);
        Route::post('/', [Backend\Requests\CallsController::class, 'updateStatus']);
    });

    Route::post('/requests/mail',[Backend\Requests\RequestsController::class,'sendEmail']);

    Route::post('request', [Backend\Requests\RequestsController::class, 'create']);
    Route::post('request-delete', [Backend\Requests\RequestsController::class, 'delete']);

    Route::group(['prefix' => 'get-products'], function () {
        Route::post('/', [Backend\ProductsController::class, 'index']);
    });

    Route::post('/duplicate', [Backend\ProductsController::class, 'copy']);

    Route::post('/change',[Backend\Requests\RequestsController::class,'seen']);

    Route::get('get-news/{lang}', [Backend\NewsController::class, 'index'])->where('lang', '[0-3]');

    Route::get('products/{id}/{lang}', [Backend\ProductsController::class, 'show'])->where('id', '[0-9]+')->where('lang', '[0-9]+');
    Route::post('products/{id}/edit', [Backend\ProductsController::class, 'edit'])->where('id', '[0-9]+');
    Route::post('products/{id}', [Backend\ProductsController::class, 'update'])->where('id', '[0-9]+');
    Route::post('products/add', [Backend\ProductsController::class, 'store']);
    Route::post('products/status', [Backend\ProductsController::class, 'toggle']);
    Route::get('products/{id}/delete', [Backend\ProductsController::class, 'destroy']);

    Route::get('projects/{id}/{lang}', [Backend\ProjectsController::class, 'show'])->where('id', '[0-9]+')->where('lang', '[0-9]+');
    Route::post('projects/{id}/edit', [Backend\ProjectsController::class, 'edit'])->where('id', '[0-9]+');
    Route::post('projects/add', [Backend\ProjectsController::class, 'store']);
    Route::post('projects/{id}', [Backend\ProjectsController::class, 'update'])->where('id', '[0-9]+');
    Route::post('projects/status', [Backend\ProjectsController::class, 'toggle']);
    Route::get('projects/{id}/delete', [Backend\ProjectsController::class, 'destroy']);
    Route::post('projects/types', [Backend\ProjectsController::class, 'getTypes']);


    Route::get('news/{id}/{lang}', [Backend\NewsController::class, 'show'])->where('id', '[0-9]+')->where('lang', '[0-9]+');;
    Route::post('news/{id}/edit', [Backend\NewsController::class, 'edit'])->where('id', '[0-9]+');
    Route::post('news/add', [Backend\NewsController::class, 'store']);
    Route::post('news/{id}', [Backend\NewsController::class, 'update'])->where('id', '[0-9]+');
    Route::post('news/status', [Backend\NewsController::class, 'toggle']);
    Route::get('news/{id}/delete', [Backend\NewsController::class, 'destroy']);

    Route::get('careers/{id}/{lang}', [CareersController::class, 'show'])->where('id', '[0-9]+')->where('lang', '[0-9]+');;
    Route::post('careers/{id}/edit', [CareersController::class, 'edit'])->where('id', '[0-9]+');
    Route::post('careers/add', [CareersController::class, 'store']);
    Route::post('careers/{id}', [CareersController::class, 'update'])->where('id', '[0-9]+');
    Route::post('careers/status', [CareersController::class, 'toggle']);
    Route::get('careers/{id}/delete', [CareersController::class, 'destroy']);

    Route::post('services', [ServicesController::class, 'index']);
    Route::post('service', [ServicesController::class, 'show'])->where('id','[0-9]+');


    Route::post('reset', [Backend\AdminController::class, 'reset']);

    Route::get('requests/all', [Backend\AdminController::class, 'getCountRequests']);

    Route::get('/{any}', [Backend\HomeController::class, 'admin'])->where('any', '.*');
});

Route::get('/get-projects', [Backend\ProjectsController::class, 'index']);
Route::get('/get-total',[Backend\ProjectsController::class,'total']);
Route::get('/get-bytype',[Backend\ProjectsController::class,'totalByType']);

Route::post('/projects/more', [Backend\ProjectsController::class, 'getProjectsByLanguage']);
Route::post('/products/more', [Backend\ProductsController::class, 'getProductsByLanguage']);

Route::get('/user-lang/get', [HomeController::class, 'getUserLang']);
Route::get('/user-lang/set/{lang}', [HomeController::class, 'setUserLang']);

Route::post('/categories', [CategoriesController::class, 'getCategories']);
Route::post('/category', [CategoriesController::class, 'getCategory']);
Route::post('/get-category', [CategoriesController::class, 'getCategoryById']);

Route::post('request', [RequestsController::class, 'create']);

Route::post('/news', [NewsController::class, 'getNews']);
Route::post('/news/language', [NewsController::class, 'getNews']);
Route::post('/news/all', [NewsController::class, 'getNewsTotal']);

Route::get('/product/{id}/{lang}',[ProductController::class, 'show']);
Route::post('/brands', [CategoriesController::class, 'getBrandsByCategory']);

Route::post('/careers', [CareersController::class, 'getCareers']);
Route::post('/career', [CareersController::class, 'getCareer']);

Route::post('/subscribe',[SubscriberController::class,'insert']);

Route::get('/sitemap.xml', [SitemapController::class, 'index']);

$languageRoutes();


Route::get('/{lang}/{any}', [HomeController::class, 'index'])->name('home');
Route::get('{any}', [HomeController::class, 'index'])->where('any','.*')->name('home');
