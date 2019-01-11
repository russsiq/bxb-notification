# bxb-notification
Vue.js component [notification] from [BixBite](https://github.com/russsiq/bixbite).

### Installation

Download library or can be installed as `npm` package:
```console
npm i bxb-notification --save-dev
```

### Getting started

To start using `bxb-notification`, you need to do is plugin installation. Somewhere in your main app.js file:
```js
// Import components to Vue application as plugins.
import Notification from 'bxb-notification';

// Install plugins to Vue application.
Vue.use(Notification);

// Create a fresh Vue application instance and attach it to the page.
const app = new Vue({
    el: '#app'
});

// Make some vue plugins methods to global.
window.Notification = app.$notification;
```

### Usage and API

Methods for calling show messages:
```js
Notification.show(options);
Notification.info(options);
Notification.success(options);
Notification.warning(options);
Notification.error(options);
```

#### Example 1
```html
<button class="btn btn-primary" @click="$notification.success({
    title: 'Remember!',
    message: 'This is simple notify message.<hr>Nice!'
})">Notify me!</button>
```

#### Example 2
```js
<script>
    Notification.show({
        title: 'Example!',
        message: 'Message from javascript.',
        type: 'warning'
    });
</script>
```

### Лицензия

bxb-notification - программное обеспечение с открытым исходным кодом, распространяющееся по лицензии [MIT license](https://choosealicense.com/licenses/mit/).
