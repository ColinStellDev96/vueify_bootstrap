Vue.component('mainhead', {
    template: `
        <h2 class="text-center">{{headline}}</h2>
    `,
    props: ['headline']
});

Vue.component('jumbotron', {
    template: `
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
            <h1 class="display-3">{{header}}</h1>
            <p class="lead">{{partext}}</p>
            <!-- Link Butron -->
            <a v-bind:href='url' target="_blank">
                <button class="btn btn-secondary">{{buttontext}}</button>
            </a><br>
            <!-- Modal Button -->
            <button type="button" class="btn btn-primary" data-toggle="modal" v-bind:data-target="modaltarget">
              {{modalbtn}}
            </button>
            <!-- Modal -->
            <div class="modal fade" v-bind:id="modalid" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" v-bind:id="modalid">{{modalttl}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    {{modalbody}}
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>
    `,
    props: [
        'header',
        'partext',
        'url',
        'buttontext',
        'modalbtn',
        'modalttl',
        'modalbody',
        'modaltarget',
        'modalid'
    ]
});

var mainVm = new Vue({
    el: '#app',
    data: {
        bands: [
            {
                name: 'Underoath',
                location: 'Hardcore From Tampa, Florida',
                id: 'underoath',
                url: 'http://underoath777.com/',
                buttontxt: 'Underoath Site',
                modaltarget: '#underoathtarget',
                modalid: 'underoathtarget',
                albums: 'Underoath has released 5 albums'
            }, {
                name: 'Thrice',
                location: 'Rock from Orange County, California',
                id: 'thrice',
                url: 'http://thrice.net/news/',
                buttontxt: 'Thrice Site',
                modaltarget: '#thricetarget',
                modalid: 'thricetarget',
                albums: 'Thrice has released 9 albums'
            }, {
                name: 'Mastodon',
                location: 'Metal from Atlanta, Georgia',
                id: 'mastodon',
                url: 'http://www.mastodonrocks.com/',
                buttontxt: 'Mastodon Site',
                modaltarget: '#mastodontarget',
                modalid: 'mastodontarget',
                albums: 'Mastodon has released 7 albums'
            }
        ]
    }
});
