<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div id="app">
<App></App>
</div>
<script>
            window.__user__ = @json($user)
        </script>
</body>
<script src="{{ mix('/js/app.js') }}"></script>
<!-- <script src="/js/app.js"></script> -->
</html>