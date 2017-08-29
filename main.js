Vue.component('mainhead', {
    template:`
        <h2 class="text-center">{{headline}}</h2>
    `,
    props: ['headline']
});

Vue.component('jumbotron', {
    template:`
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
            <h1 class="display-3">{{header}}</h1>
            <p class="lead">{{partext}}</p>
            <a v-bind:href='url' target="_blank">
                <button>{{buttontext}}</button>
            </a>
            </div>
        </div>
    `,
    props: ['header', 'partext', 'url', 'buttontext']
});



var mainVm = new Vue({
    el: '#app',
    data: {
        bands: [
            {
                name: 'Underoath',
                albums: 5,
            },
            {
                name: 'Thrice',
                albums: 9,
            },
            {
                name: 'Mastodon',
                albums: 7,
            }
        ]
    }
});
