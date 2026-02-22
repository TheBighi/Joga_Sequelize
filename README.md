Init
```
npx sequelize-cli init
```

Create Model
```
npx sequelize-cli model:generate --name Article --attributes id:integer,name:string,slug:string,image:string,body:text,published:date,author_id:integer
```

Migrate
```
npx sequelize-cli db:migrate
```
Mudeli taiendamine
```
npx sequlize-cli migration:create --name modify_article_fields
```