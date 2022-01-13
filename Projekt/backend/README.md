# Backend

REST API for Docker MongoDB (v4.4.9). Data I used to fill database I took from [OpenSea](https://opensea.io/) website (all instances have url to original page). Out of the box, API should run on ```http://localhost:5000```.

</br>

## Instalation

Create MongoDB Docker image:

```s
docker container run --name mongodb -d -p 27017-27019:27017-27019 mongo:4.4.9
```

Go to backend directory and create node_modules:
```s
npm install
```

Then start API:
```s
npm start
```

You should see:
```s
Connected to MongoDB. Database name: "local"
API server listening at http://localhost:5000
```

</br>

## Users

- **GET** ```/users```
- **GET** ```/users/:user_id```
- **POST** ```/users```
- **DELETE** ```/users/:user_id```
- **PUT** ```/users/:user_id```

Example GET response:
```json
{
    "_id": "61c65677415be2edca000001",
    "nickname": "Noealzii",
    "firstname": "Sang-Hun",
    "lastname": "Park",
    "place_of_origin": "Seoul",
    "email": "noealzii@example.com",
    "phone_number": "551555246",
    "birthday": "1991-09-26T00:00:00.000Z",
    "registration_date": "2021-02-01T00:00:00.000Z",
    "url": "https://opensea.io/Noealzii",
    "logo_url": "https://lh3.googleusercontent.com/JbvWs8J7RjXjq_ois27TEU9L_Z5L_24XZ20uaJJdY2NxIr-K1W9pe-GCU3FQBH6oGpfoOdpoNkPc2gMiUvdFdmwUxeMlKCUJO--k=s0",
    "description": "A photographer living in Seoul. I like marking art through photography.",
    "__v": 0
}
```

Example POST/PUT data:
```json
{
    "nickname":"Rick",
    "firstname":"Rick", 
    "lastname":"Sanchez",
    "email": "rick@example.com",
    "phone_number": "123456789",
    "place_of_origin":"Earth (Dimension C-137)",
    "birthday":"1950-09-11",
    "logo_url":"https://logo_url.example",
    "description":"What, so everyone’s supposed to sleep every single night now? You realize that nighttime makes up half of all time?"
}
```

</br>

## Nfts

- **GET** ```/nfts```
- **GET** ```/nfts/:nft_id```
- **GET** ```/nfts/populate```
- **GET** ```/nfts/:nft_id/populate```
- **POST** ```/nfts/:author_id```
- **DELETE** ```/nfts/:nft_id```
- **PUT** ```/nfts/:nft_id```

Example GET response:
```json
{
    "_id": "61c65942d86cd8a490000010",
    "author_id": "61c65677415be2edca000002",
    "owner_id": "61c65677415be2edca000002",
    "collection_id": "61c65b95a5665cf8e0000002",
    "title": "CryptoPunk #2294",
    "created_date": "2017-12-06T00:00:00.000Z",
    "price": 110,
    "currency": "ETH",
    "image_url": "https://lh3.googleusercontent.com/JdDiC3o-pjqKBH-7VwFsL7Uf2MuiPmJUL3_i2yNGg3a3IwiKtMqWJtUX892h2apJxQZs-UGLWclPJZ5VRKM6h4EbkiS3ryA08HUR9w=w600",
    "url": "https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/2294",
    "description": "",
    "__v": 0
}
```

Example GET response (populate):
```json
{
    "_id": "61c65942d86cd8a490000010",
    "author_id": {
        "_id": "61c65677415be2edca000002",
        "nickname": "C352B5",
        "firstname": "Unnamed",
        "lastname": "Unnamed",
        "place_of_origin": "0xc352b534e8b987e036a93539fd6897f53488e56a",
        "email": "c352b5@example.com",
        "phone_number": "455155451",
        "birthday": "1983-04-15T00:00:00.000Z",
        "registration_date": "2017-01-01T00:00:00.000Z",
        "url": "https://opensea.io/0xc352b534e8b987e036a93539fd6897f53488e56a",
        "logo_url": "https://storage.googleapis.com/opensea-static/opensea-profile/22.png",
        "description": "---",
        "__v": 0
    },
    "owner_id": {
        "_id": "61c65677415be2edca000002",
        "nickname": "C352B5",
        "firstname": "Unnamed",
        "lastname": "Unnamed",
        "place_of_origin": "0xc352b534e8b987e036a93539fd6897f53488e56a",
        "email": "c352b5@example.com",
        "phone_number": "455155451",
        "birthday": "1983-04-15T00:00:00.000Z",
        "registration_date": "2017-01-01T00:00:00.000Z",
        "url": "https://opensea.io/0xc352b534e8b987e036a93539fd6897f53488e56a",
        "logo_url": "https://storage.googleapis.com/opensea-static/opensea-profile/22.png",
        "description": "---",
        "__v": 0
    },
    "collection_id": "61c65b95a5665cf8e0000002",
    "title": "CryptoPunk #2294",
    "created_date": "2017-12-06T00:00:00.000Z",
    "price": 110,
    "currency": "ETH",
    "image_url": "https://lh3.googleusercontent.com/JdDiC3o-pjqKBH-7VwFsL7Uf2MuiPmJUL3_i2yNGg3a3IwiKtMqWJtUX892h2apJxQZs-UGLWclPJZ5VRKM6h4EbkiS3ryA08HUR9w=w600",
    "url": "https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/2294",
    "description": "",
    "__v": 0
}
```

Example POST/PUT data:
```json
{
    "title": "Nft",
    "price": 1,
    "currency": "ETH",
    "image_url": "https://image_url.example",
    "url": "https://url.example",
    "description": "Description of NFT"
}
```

</br>

## Collections

- **GET** ```/collections```
- **GET** ```/collections/:collection_id```
- **POST** ```/collections.:author_id```
- **DELETE** ```/collections/:collections_id```
- **PUT** ```/collections/:collections_id```

Example GET response:
```json
{
    "_id": "61c65b95a5665cf8e0000002",
    "author_id": "61c65677415be2edca000002",
    "name": "CryptoPunks",
    "created_date": "2017-06-13T00:00:00.000Z",
    "img_url": "https://lh3.googleusercontent.com/48oVuDyfe_xhs24BC2TTVcaYCX7rrU5mpuQLyTgRDbKHj2PtzKZsQ5qC3xTH4ar34wwAXxEKH8uUDPAGffbg7boeGYqX6op5vBDcbA=h600",
    "url": "https://opensea.io/collection/cryptopunks",
    "__v": 0
}
```

Example POST/PUT data:
```json
{
    "name":"Dreamstates",
    "img_url": "https://img_url.example",
    "url":"https://url.example"

}
```

## Admin

I create it to make my life easier when it came to cleaning the database.

- **POST** ```/admin/drop``` - it will delete all nfts, users and collections 
- **POST** ```/admin/reload``` - it will delete all data and load fresh one from json file
