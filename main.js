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
            <a v-bind:href='url' target="_blank">
                <button class="btn btn-secondary">{{buttontext}}</button>
            </a><br>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              {{modalbtn}}
            </button>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{modalttl}}</h5>
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
    `,
    props: ['header', 'partext', 'url', 'buttontext','modalbtn', 'modalttl', 'modalbody']
});

var mainVm = new Vue({
    el: '#app',
    data: {
        bands: [
            {
                name: 'Underoath',
                albums: 5
            }, {
                name: 'Thrice',
                albums: 9
            }, {
                name: 'Mastodon',
                albums: 7
            }
        ]
    }
});
