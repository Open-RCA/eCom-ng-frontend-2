eCommerce Angular Frontend
========================

Angular frontend template for OpenRca ecommerce

## Quick cloning

```
$ git clone https://github.com/Open-RCA/eCom-ng-frontend-2
```

## Setup

```
$ npm install
```
## Creating A component
```
$ ng g c components/<component-name>
```
In this case consider components like ```navigation-bar, sidebar, footer etc```

## Creating a View or module
e.g let's create a signup view which will be a module
1. 
```
$ ng g m views/signup --routing
```

2.  
Now let's add component
```
$ ng g c views/signup
```
In this case consider a view lik ```Shopping page, Signup page, Login page, Cart Page``` 
A view can be a collections of different components to give a meaningful render to a user.

## Creating a Guard
```
$ ng g g guards/<guard-name>
```

## Creating a Service
```
$ ng g s services/<service-name>
```

## Creating a pipe
```
$ ng g p pipes/<pipe-name>
```

## Creating a directive
```
$ ng g d directives/<directive-name>
```

## Defining and Using a global `scss` styling variable

- Got to ```src/veriables.scss```
- Define your variable like ```$base-color``` variable was defined
- To use dined variables you should import the ```src/varibles.scss``` in your ```.scss``` file
- You can refere to ```src/views/test/test.component.scss``` file.

## Hanling images and Icons

 - Images will be located in ``src/assets/images`` folder
 - Icons will be located in ``src/assets/icons`` folder
 

<h1></h1>
<p>Happy coding</p>
