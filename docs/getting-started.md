# Getting started

## Installation

First step is to install it using `yarn` or `npm`:

```bash
npm install hooper-emarts

# or use yarn
yarn add hooper-emarts
```

## Use Hooper

```vue
<template>
  <hooper>
    <slide>
      slide 1
    </slide>
    <slide>
      slide 2
    </slide>
    ...
  </hooper>
</template>

<script>
import { Hooper, Slide } from 'hooper-emarts';
import 'hooper-emarts/dist/hooper.css';

export default {
  name: 'App',
  components: {
    Hooper,
    Slide
  }
};
</script>
```

:::tip
If you are using [PurgeCSS](https://www.purgecss.com/), make sure to whitelist hooper css When importing `hooper-emarts/dist/hooper.css`.
:::

## Configuring carousel

you can configure the carousel using the available [props](/api.html#props)

```vue {1}
<hooper :itemsToShow="3" :centerMode="true" pagination="no">
  <slide>
    slide 1
  </slide>
  <slide>
    slide 2
  </slide>
  ...

</hooper>
```

you can combine all settings in one object and pass it using `setting` prop

```vue {2,24-27}
<template>
  <hooper :settings="hooperSettings">
    <slide>
      slide 1
    </slide>
    <slide>
      slide 2
    </slide>
    ...
  </hooper>
</template>

<script>
import { Hooper, Slide } from 'hooper-emarts';

export default {
  name: 'App',
  components: {
    Hooper,
    Slide
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 2,
        centerMode: true
      }
    };
  }
};
</script>
```

## Dynamic slides

::: tip note
When you work with dynamic slides, it's recommended to provide the slide index.
:::

```vue {1}
<hooper :itemsToShow="3" :centerMode="true" pagination="no">
  <slide v-for="(slide, indx) in slides" :key="indx" :index="indx">
    {{ slide }}
  </slide>
  ...

</hooper>
```

## Breakpoints

you can pass an array of breaking points to the carousel settings, to specify a custom settings for different viewport sizes, else it will fall to default settings

```vue
<template>
  <hooper :settings="hooperSettings">
    <slide>
      slide 1
    </slide>
    <slide>
      slide 2
    </slide>
    ...
  </hooper>
</template>

<script>
import { Hooper, Slide } from 'hooper-emarts';

export default {
  name: 'App',
  components: {
    Hooper,
    Slide
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 2,
        centerMode: true,
        breakpoints: {
          800: {
            centerMode: false,
            itemsToShow: 3
          },
          1000: {
            itemsToShow: 6,
            pagination: 'fraction'
          }
        }
      }
    };
  }
};
</script>
```

## Addons

Hooper shipped with addons component, that add extra features to carousel

Available Addons:

- Navigation
- Pagination

### Work with Addons

```vue {11-13}
<template>
  <hooper :settings="hooperSettings">
    <slide>
      slide 1
    </slide>
    <slide>
      slide 2
    </slide>
    ...

    <hooper-navigation slot="hooper-addons"></hooper-navigation>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
} from 'hooper';

export default {
  name: 'App',
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 2,
        centerMode: true
      }
    };
  }
};
</script>
```
