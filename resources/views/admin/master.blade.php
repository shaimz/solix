<!DOCTYPE html>
<html>
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Admin Dashboard</title>
    <!-- Tell the browser to be responsive to screen width -->
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/vuetify/2.4.11/vuetify.min.css" rel="stylesheet">


    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/backend.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('css/all.min.css')}}" />
    <link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}" />
{{--
    <link rel="stylesheet" href="{{asset('vendors/linericon/style.css')}}" />

    <link rel="stylesheet" href="{{asset('css/themify-icons.css')}}" />
    <link rel="stylesheet" href="{{asset('css/flaticon.css')}}" />
    <link rel="stylesheet" href="{{asset('vendors/owl-carousel/owl.carousel.min.css')}}" />
    <link rel="stylesheet" href="{{asset('vendors/lightbox/simpleLightbox.css')}}" />
    <link rel="stylesheet" href="{{asset('vendors/nice-select/css/nice-select.css')}}" />
    <link rel="stylesheet" href="{{asset('vendors/animate-css/animate.css')}}" />
    <link rel="stylesheet" href="{{asset('vendors/jquery-ui/jquery-ui.css')}}" />--}}
<!-- main css -->
    {{--    <link rel="stylesheet" href="{{asset('css/app.css')}}" />
        <link rel="stylesheet" href="{{asset('css/responsive.css')}}" />--}}
    @stack('style')
</head>
<body>
<div id="app">
    <div class="wrapper">
    @auth
        <master></master>
    @endauth

    @guest
        <Login></Login>
    @endguest
    </div>
</div>
<script>
/*    let animateValue = (id, start, end, duration) => {
        if (start === end) return;
        var range = end - start;
        var current = start;
        var increment = end > start? 1 : -1;
        var stepTime = Math.abs(Math.floor(duration / range));
        var obj = document.getElementById(id);
        var timer = setInterval(function() {
            current += increment;
            obj.innerHTML = current +'%';
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }


    window.onload = () => {
        let loader = document.getElementById('preloader-wrap');
        let page = document.getElementsByClassName('wrapper')[0];

        loader.style = 'display:block';
        animateValue("loader-percentage", 0, 100, 800);
    }*/
</script>
<script src="{{asset('vendor.js')}}"></script>
<script src="{{asset('main.js')}}"></script>
<script src="{{asset('js/backend.js')}}"></script>
<script src="{{asset('js/bootstrap.min.js')}}"></script>
{{--
<script src="{{asset('js/dataTables.bootstrap4.js')}}" defer></script>--}}
{{--
<script src="{{asset('js/popper.js')}}"></script>
<script src="{{asset('js/stellar.js')}}"></script>
<script src="{{asset('vendors/lightbox/simpleLightbox.min.js')}}"></script>
<script src="{{asset('vendors/nice-select/js/jquery.nice-select.min.js')}}"></script>
<script src="{{asset('vendors/isotope/imagesloaded.pkgd.min.js')}}"></script>
<script src="{{asset('vendors/isotope/isotope-min.js')}}"></script>
<script src="{{asset('vendors/owl-carousel/owl.carousel.min.js')}}"></script>
<script src="{{asset('js/jquery.ajaxchimp.min.js')}}"></script>
<script src="{{asset('vendors/counter-up/jquery.waypoints.min.js')}}"></script>
<script src="{{asset('vendors/counter-up/jquery.counterup.js')}}"></script>
<script src="{{asset('sweetalert2/sweetalert2.min.js')}}"></script>
<script src="{{asset('js/mail-script.js')}}"></script>
--}}
{{--<script src="{{asset('js/theme.js')}}"></script>--}}
@stack('script')
</body>
</html>
