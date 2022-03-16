let HTML = false;

const app = new Vue({
    el: '#app',
    data: {
        name: 'John Doe',
        job: 'Ziggy Tamer',
        address: '2 Place General Mellinet, 44100 Nantes',
        email: 'john.doe@example.com',
        phone: '+33 6 99 99 99 99',
        calendar: '',
        displayTips: false,
        dirty: {
            name: false,
            job: false,
            address: false,
            email: false,
            phone: false,
            calendar: false,
        }
    },
    computed: {
        urlAddress: function () {
            return 'https://maps.google.com/?q=' + this.address;
        },
        urlPhone: function () {
            return 'tel:' + this.phone;
        }
    },

    methods: {
        copyToClipboardHtml: function () {
          navigator.clipboard.writeText(document.getElementById("signature").outerHTML);
          this.displayTips = true;
          setTimeout(() => {
              this.displayTips = false;
          }, 2500);
        },
        emptyField: function (field) {
          if (false === this.dirty[field]) {
            this[field] = '';
            this.dirty[field] = true;
          }

        }

    }
});

$('.js-custom-sleeve-option').click(function(){
$(this).children('span').toggleClass('js-arrow-down js-arrow-up')
})
