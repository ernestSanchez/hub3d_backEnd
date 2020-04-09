# Hub3d
![logogit](https://user-images.githubusercontent.com/59829399/77955181-0c19c180-72d0-11ea-83b1-8d1879dd7995.png)

---

## EndPoints

- [User](#User)
- [Proyect](#Proyect)
- [Colaboration](#Colaboration)
- [Experience](#Experience)
- [Upload](#Upload)

### User

Create user:

>send all user information to the database

- Url
```html
 /register
```
- Method
```html
 post
```
- Url params
```html
 none
```
- Data params
```javascript
{
    "username":"josek",
    "name": "jose",
    "secondname": "valderrama" ,
    "email": "valderramas@valderrama",
    "password": "josekjosek",
    "habilidad": "rigger",
    "status": "student",
    "workStatus": "looking for a job",
    "location": ["barcelona"],
    "urlReel": "https://www.youtube.com/watch?v=cfRz-2wqaOA",
    "urlImageUser": "https://www.fotos-lienzo.es/blog/wp-content/uploads/2018/04/Taman%CC%83o-foto-carnet-esp.png"
}
```
- Success Response:
```javascript
{
    "succes": "added new user",
    "_id": "5e79f9891665742a8cab2dcf"
}
```
- Error Response:
```javascript
{ "error": "Username already exists", "username": josek }
```
## Login user:

>send user information and token 

- Url
```html
 /login
```
- Method
```html
 post
```
- Url params
```html
 none
```
- Data params
```javascript
{
	"username":"josek",
	"password": "josekajoseka"
}
```
- Success Response:
```javascript
{ "success": "welcome", "token": token ,_id:user[0]._id }
```
- Error Response:
```javascript
{ "error": "password null" }
```

## Get all users:

>receive all users

- Url
```html
 /users
```
- Method
```html
  get
```
- Url params
```html
 none
```
- Data params
```javascript
 none
```
- Success Response:
```javascript
all dta users
```
- example call:
```javascript
server.get('/users')
```
## Get an User
>Obtain all data from a single user.

- URL
```javascript
 /user/:id
```
- Method:
```javascript
  get
```
- URL Params

```javascript
 user "id"
```
- Data Params
```javascript
none
```

Success Response:

- Success Response:
```javascript
 single data user
```
- example call:
```javascript
server.get('/user/:id')
```
## Put an user 
>modify a user's data

- Url
```html
 /modifyUser
```
- Method
```html
 put
```
- Url params
```html
    none
```
- Data params
```javascript
{
    "_id":"5e7a5e6af36a634f4431075e",
    "username":"josek",
    "name": "jose",
    "secondname": "valderrama" ,
    "email": "valderramas@valderrama",
    "password": "josekjosek",
    "habilidad": "rigger",
    "status": "student",
    "workStatus": "looking for a job",
    "location": ["barcelona"],
    "urlReel": "https://www.youtube.com/watch?v=cfRz-2wqaOA",
    "urlImageUser": "https://www.fotos-lienzo.es/blog/wp-content/uploads/2018/04/Taman%CC%83o-foto-carnet-esp.png"
}
```
- Success Response:
```javascript
{ "succes": "user modified" }
```
- Sample Call:
```javascript
server.delete('/modifyUser');
```
  
### Proyect

Create Proyect:

>send all user information to the database

- Url
```html
 /newProyect
```
- Method
```html
 post
```
- Url params
```html
 none
```
- Data params
```javascript
{
        "User_id":"5e79f9891665742a8cab2dcf",
        "nombre": "fwf",
        "categoria": "model",
        "requierimiento": "rigger",
        "tipo":"character",
        "descripcion":"fheifhq"
    }
```
- Success Response:
```javascript
{ "succes": "added new proyect", "id": data._id }
```

## Get all proyects:

>receive all proyects

- Url
```html
 /proyects
```
- Method
```html
  get
```
- Url params
```html
 none
```
- Data params
```javascript
 none
```
- Success Response:
```javascript
all data proyects
```
- example call:
```javascript
server.get('/proyects')
```
## Get an proyect
>Obtain all data from a single proyect.

- URL
```javascript
/proyect/:id
```
- Method:
```javascript
  get
```
- URL Params

```javascript
 proyect "id"
```
- Data Params
```javascript
none
```

Success Response:

- Success Response:
```javascript
 single data proyects
```
- example call:
```javascript
server.get('/proyect/:id')
```
## Put an proyect 
> modify a proyect's data

- Url
```html
 /modifyProyect
```
- Method
```html
 put
```
- Url params
```html
    none
```
- Data params
```javascript
{
        "_id": "5e79c4511744693204fe46d5",
        "User_id":"5e79f9891665742a8cab2dcf",
        "nombre": "fwf",
        "categoria": "model",
        "requierimiento": "rigger",
        "tipo":"character",
        "descripcion":"fheifhq"
}
```
- Success Response:
```javascript
{ "succes": "modified project" }
```
- Sample Call:
```javascript
server.delete('/modifyProyect');

```
## Delete  proyect
>delete proyect

- URL
```javascript
/deleteProyect/:id
```
- Method:
```javascript
  delete
```
- URL Params

```javascript
 proyect "id"
```
- Data Params
```javascript
none
```

Success Response:

- Success Response:
```javascript
{ "succes": "proyect removed" }
```
- example call:
```javascript
server.get('/deleteProyect/:id')
```
### Colaboration

Create Colaboration:

>send all Colaboration information to the database

- Url
```html
 /newColaboration
```
- Method
```html
 post
```
- Url params
```html
 none
```
- Data params
```javascript
{
        "user_id": "",
        "proyect_id": "",
        "categoria":"",
        "descripcion":"",
        "tipoArchivo": ""
    }
```
- Success Response:
```javascript
{ "succes": "added new colaboration", "id": data._id }
```

## Get all colaborations:

>receive all colaborations

- Url
```html
 /colaborations
```
- Method
```html
  get
```
- Url params
```html
 none
```
- Data params
```javascript
 none
```
- Success Response:
```javascript
all data colaborations
```
- example call:
```javascript
server.get('/colaborations')
```
## Delete colaboration
> delete colaboration

- URL
```javascript
/deleteColaboration/:id
```
- Method:
```javascript
  delete
```
- URL Params

```javascript
colaboration "id"
```
- Data Params
```javascript
none
```

Success Response:

- Success Response:
```javascript
{ "succes": "colaboration removed" }
```
- example call:
```javascript
server.get('/deleteColaboration/:id')
```
