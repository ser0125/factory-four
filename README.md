
![Inclusion-Cloud-Digital-Engineering-1](https://github.com/ser0125/factory-four/assets/11180036/cea99f70-766d-4fd2-8498-ae0b9e781f0f)

# Factory Four App

[![forthebadge](https://forthebadge.com/images/badges/made-with-next-13.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![Vercel](https://vercelbadge.vercel.app/api/ser0125/qventus-take-home-app?style=for-the-badge)](https://qventus-take-home-hq5a273ej-ser0125.vercel.app/)
![storybook-badge-optimized](https://github.com/ser0125/qventus-take-home-app/assets/11180036/25a7303d-7795-46d8-ad3a-8157b81fb5f6)


Next JS application, responsible for validating a password following a Regex approach

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Contact Information](#contact-information)

## Installation

1. Clone the repository:

```shell
$ git clone https://github.com/ser0125/factory-four.git
```

2. Move to the folder project

```shell
$ cd factory-four
```

3. Install the dependencies

```shell
$ npm install
```

## Usage

To run the application, use the command:

```shell
$ npm run dev
```

If you open the browser in the port indicated by Next usually the 3000, you should see the Dashboard or Home page:

![image](https://github.com/ser0125/factory-four/assets/11180036/741b447b-14bf-48c0-bdfc-bc802bfdec82)


### How it works

In the `app/page.tsx` you can setup your apis and your interval timer

![image](https://github.com/ser0125/factory-four/assets/11180036/f51e4d5a-16c2-4704-bcaf-60923fad956b)


The CardComponent inside `app/components/Card.tsx` would receive a `data` props that would have all the card info

![image](https://github.com/ser0125/factory-four/assets/11180036/dc6834e6-2f96-4488-9682-5872a05c7c49)


The `useFetchApi` hook would have all the logic to do the fetch

![image](https://github.com/ser0125/factory-four/assets/11180036/2d38bd76-72c9-40e1-856d-1a5d567fd53a)


---


## Demo

The application is deployed on vercel, so you can take a look there:

https://factory-four-jet.vercel.app/

## Contributing

Your contributions are always welcome!

1. Clone repo and create a new branch: `$ git checkout -b name_for_new_branch`.
2. Make changes and test
3. Submit Pull Request with comprehensive description of changes


## License

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

The MIT License (MIT) 2023 - Sergio Llanos

## Contact Information


