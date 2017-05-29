# coupon-maker

This is a a basic project to learn react and sails. 
To get started you need to have sails, nodejs, installed on your system. 
After the installation is done. 
You need to create a `.env` file in both the backend and the frontend folder. 

The `.env` file in frontend folder will look like this: 

```
REACT_APP_BASE_API_URL="http://localhost:1337"
```
Here REACT_APP_BASE_API_URL contains the base url of the backend api. 

The `.env` file in backend folder will look like this: 
```
STRIPE_API_KEY=your_stripe_secret_key
FRONT_END_ORIGIN=your_frontend_base_url 

```

You have to start two different server to run the application. 

Go to the backend folder and do an `npm install` followed by an `npm start`
Go to the frontend folder and do an `npm install` followed by an `npm start`

Thanks!
