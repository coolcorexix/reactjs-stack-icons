# reactjs-stack-icons
ReactJs implementation of [Stack-Icons](https://github.com/StackExchange/Stacks-Icons). 

Look up available `Icon` [here](https://stackoverflow.design/product/resources/spots/#spot-illustrations) and `Spot` [here](https://stackoverflow.design/product/resources/spots/#spot-illustrations)


# Installation
```sh
yarn add reactjs-stack-icons
```

## Usage

### For client-side rendering projects (native ReactJs):

```javascript
import { Icon } from 'reactjs-stack-icons';
...
    <Icon
        name='AlertCircle' 
        height={24}
        width={24}
    />
...

```

### For NextJs projects:

```javascript
// For NextJs
const Icon = dynamic(async () => ((await import('reactjs-stack-icons')).Icon), {
  ssr: false,
});
const Spot = dynamic(async () => ((await import('reactjs-stack-icons')).Spot), {
  ssr: false,
});

...
        <Icon
            name='AlertCircle' 
            height={24}
            width={24}
        />
        <Spot
            height={24}
            width={24}
            name='Astronaut'
        />
...
```

### Advanced features:

-   Tree-shakable code 
-   Hinting name
![hinting feature](https://i.imgur.com/Kg6RzfZ.png "hinting-feature")