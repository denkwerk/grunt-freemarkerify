<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>${title}</title>
    </head>
    <body>
        <h1>${title}</h1>

        <p>Some list</p>

        <ul>
            <#list list as item>
                <li>${item}</li>
            </#list>
        </ul>

        <p>&copy; ${copyright.year} by ${copyright.name}</p>
    </body>
</html>
