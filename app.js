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
        copyToClipboard: function () {
            HTML = false;
            document.execCommand('copy');
            this.displayTips = true;
            setTimeout(() => {
                this.displayTips = false;
            }, 2500);
        },
        copyToClipboardHtml: function () {
          HTML = true;
          document.execCommand('copy');
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


window.addEventListener('copy', function (ev) {
    var copyText = document.getElementById("signature");
    if (HTML) {
      ev.clipboardData.setData('text/plain', copyText.outerHTML);
    } else {
      ev.clipboardData.setData('text/html', copyText.outerHTML);
    }

    ev.preventDefault();
});

$('.js-custom-sleeve-option').click(function(){
$(this).children('span').toggleClass('js-arrow-down js-arrow-up')
})
