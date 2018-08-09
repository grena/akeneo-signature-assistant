const app = new Vue({
    el: '#app',
    data: {
        name: 'Bob Parr',
        job: 'Super Hero',
        address: '2 Place General Mellinet, 44100 Nantes',
        email: 'john.doe@example.com',
        phone: '+336 32 86 59 36',
        displayTips: false
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
            document.execCommand('copy');
            this.displayTips = true;
            setTimeout(() => {
                this.displayTips = false;
            }, 2500);
        }
    }
});


window.addEventListener('copy', function (ev) {
    var copyText = document.getElementById("signature");
    ev.clipboardData.setData('text/html', copyText.outerHTML);
    ev.preventDefault();
});
