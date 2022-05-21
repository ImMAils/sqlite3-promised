# sqlite3-promised

# Установка:
- положите файл sqlite3-promise.js в корень (или удобное место, изменив путь в require, конечно же) вашего проекта.
- в основном коде `const psql = require("./promise-sqlite3.js")`

# Использование:
```

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database');

var row_get = await psql.dbGet(db, `SQL...`)
psql.dbRun(db, `SQL...`)

```
