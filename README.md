<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

# Auth-laravel-10-4-reactjs-jwt

- Authentication and Authorization system using react js and laravel with simple jwt based authentication.

- All the neccessary documentation links are availble here and also checkout the [react+laravel-1](https://github.com/suraj-repositories/react-laravel-1) repostitory before see this.

- [react+laravel-1](https://github.com/suraj-repositories/react-laravel-1) repository best describes how to use react with laravel, what setups needed and a simple program present there.

- you can also visit to [Auth-laravel-10-3-reactjs-jwt](https://github.com/suraj-repositories/auth-laravel-10-3-reactjs-jwt) repository to see the same authentication system without authorization

### Requirements

- In laravel install jwt auth lib
- Quick docs : [https://jwt-auth.readthedocs.io/en/develop/laravel-installation/](https://jwt-auth.readthedocs.io/en/develop/laravel-installation/)
```sh
composer require tymon/jwt-auth
```
- publish the config file : You should now have a config/jwt.php file that allows you to configure the basics of this package
```sh
php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
```

- Generate secret key : This will update your .env file with something like JWT_SECRET=foobar
```sh
php artisan jwt:secret
```

### Quick start 
- [https://jwt-auth.readthedocs.io/en/develop/quick-start/](https://jwt-auth.readthedocs.io/en/develop/quick-start/)


### Front End

- you need react router dom
```sh
npm install react-router-dom
```
- You need axios : use to communicate with backend : the code of axios is preset here - 
```sh
npm install axios
```


### What files to see 
- config\auth.php
- app\Http\Controllers\AuthController.php
- resources\views\welcome.blade.php
- resources\js  => the entire folder
- vite.config.js
- public\build\manifest.json  => this file will be created after running commands
- routes\web.php
- routes\api.php
- database\migrations\2014_10_12_000000_create_users_table.php
- app\Models\User.php