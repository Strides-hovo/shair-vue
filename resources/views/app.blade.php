<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="csrf-token" content="{{ @csrf_token() }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Heebo&family=Open+Sans:wght@400;700&display=swap"
        rel="stylesheet">

    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <title></title>
</head>

<body class="ltr">

    <div id="app" class="wrapper">
        <App />
    </div>

    <script src="{{ mix('/assets/js/app.js') }}"></script>
</body>

</html>


