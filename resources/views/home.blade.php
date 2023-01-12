<!DOCTYPE html>
<html lang="{{ app()->getLocale() ? str_replace('_', '-', app()->getLocale()) : 'ro' }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="title" title="Главная">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{'Solix'}}</title>

    <!-- Scripts -->


    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" crossorigin href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap">

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#b91d47">
    <meta name="theme-color" content="#ffffff">

    <!-- Styles -->
    <link rel="preload" href="{{asset('css/frontend.css')}}" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="{{asset('css/frontend.css')}}"></noscript>
    <link rel="preload" href="{{asset('css/slick.css')}}" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="{{asset('css/slick.css')}}"></noscript>
    <link rel="preload" href="{{asset('plugins/priority/dist/stylesheets/nav-priority.min.css')}}" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="{{asset('css/slick.css')}}"></noscript>
    <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/vuetify/2.4.11/vuetify.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <link rel="preload" href="{{asset('plugins/mobile-select/css/mobileSelect.css')}}" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="{{asset('plugins/mobile-select/css/mobileSelect.css')}}"></noscript>
    <style>
        .ymaps-2-1-78-balloon__content{
            overflow: hidden;
            margin-right: 0 !important;
            padding: 0 !important;
        }
        .ymaps-2-1-78-balloon__close-button{
            opacity: 1 !important;
            filter: invert(1);
        }
        .ymaps-2-1-78-balloon__content .card-body{
            padding:30px 35px 30px 35px !important;
        }
        .ymaps-2-1-78-balloon__content .before-border:before{
            padding:0 !important;
            left:0 !important;
        }

    </style>
    <style>
        #preloader-wrap {
            width: 100%;
            height: 100%;
            position: absolute;
        }
        #preloader-wrap #loader {
            width: 100%;
            position: fixed;
            height: 100vh;
            background-color: white;
            z-index: 9998;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        #preloader-wrap svg#logo-shape {
            display: block;
            max-width: 8em;
            margin-bottom: 10px;
        }

        #preloader-wrap svg#logo-text {
            display: block;
            max-width: 8em;
            margin-bottom: 15px;
        }

        #preloader-wrap #loader-percentage {
            display: block;
            max-width: 8em;
            font-weight: bold;
        }

        #preloader-wrap .rect {
            animation: slideOver 2s linear infinite;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
        }

        @keyframes slideOver {
            0% {
                transform: translateX(0);
            }
            50% {
                transform: translateX(50%);
            }
            100% {
                transform: translateX(100%);
            }
        }
    </style>
</head>
<body>
<link rel="preload" href="{{ asset('css/app.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="{{ asset('css/app.css') }}" type="text/css"></noscript>
<link rel="preload" href="{{ asset('css/1024.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="{{ asset('css/1024.css') }}" type="text/css"></noscript>
<link rel="preload" href="{{ asset('css/768.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="{{ asset('css/768.css') }}" type="text/css"></noscript>
<link rel="preload" href="{{ asset('css/320.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="{{ asset('css/320.css') }}" type="text/css"></noscript>
<link rel="preload" href="{{ asset('css/0.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="{{ asset('css/0.css') }}" type="text/css"></noscript>
<div id="app">
    <public></public>
</div>

<script>

</script>

<script src="{{asset('vendor.js')}}"></script>
<script src="{{asset('main.js')}}"></script>
<script src="{{asset('slick.min.js')}}" defer></script>
<script src="{{asset('plugins/priority/dist/javascripts/nav-priority.min.js')}}" defer></script>
</body>
</html>
