<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>notes app</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>,
    <nav>
        <div class="logo">Notes App</div>
    </nav>
    <div class="container">
        <form>
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" id="text" placeholder="Enter Your Title" autocomplete="off" name="title">
            </div>
            <div class="form-control">
                <label for="desc">Description</label><input type="text" id="desc" placeholder="Enter Your Desc"
                    autocomplete="off" name="desc">
            </div>
            <button class="submit">+</button>
        </form>
    </div>
    <div class="notes">
    </div>
    <script src="./notes.js"></script>
</body>

</html>