Init
```
npx sequelize-cli init
```

Create Article Model
```
npx sequelize-cli model:generate --name Article --attributes id:integer,name:string,slug:string,image:string,body:text,published:date,author_id:integer
```
Article mudeli taiendamine
```
npx seqeulize-cli migration:create --name modify_article_fields
```
Migrate
```
npx sequelize-cli db:migrate
```
Demo data
```
npx sequelize-cli seed:generate --name demo-articles
```
Lisa andmed
```
npx sequelize-cli db:seed:all
```

Create Author Model
```
npx sequelize-cli model:generate --name Author --attributes id:integer,name:string
```
Author mudeli taiendamine
```
npx sequlize-cli migration:create --name modify_author_fields
```
Demo data
```
npx sequelize-cli seed:generate --name demo-authors
```

VAGA TAHTIS 

```
npx sequelize-cli db:seed:undo:all
npx sequelize-cli db:seed:all
```