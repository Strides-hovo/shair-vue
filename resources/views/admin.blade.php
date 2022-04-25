<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Heebo&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/style.min.css') }}">
    <title>name</title>
</head>

<body>
<div class="wrapper">
    <div class="content">
        <div class="container" id="app">

            {{--<router-view></router-view>--}}
            <App></App>

        </div>
    </div>
</div>

<script src="{{ asset('js/app.js') }}"></script>
</body>

</html>

