const app = new Vue(
  {
    el: '#app',
    data: {
      itemNavbarHeader: [
        {
          'section': 'Home',
          'dropdown': true
        },
        {
          'section': 'Courses',
          'dropdown': true
        },
        {
          'section': 'About Us',
          'dropdown': false
        },
        {
          'section': 'News',
          'dropdown': true
        },
        {
          'section': 'Pages',
          'dropdown': true
        },
        {
          'section': 'Contact',
          'dropdown': false
        },
        {
          'section': 'Purchase',
          'dropdown': false
        },
      ],
      faculties: [
        {
          'img':'img/Gavel-v2.png',
          'title': 'Law Faculty'
        },
        {
          'img': 'img/Coins-tabs-v2.png',
          'title': 'Economy'
        },
        {
          'img': 'img/Medicine-tabs-v2.png',
          'title': 'Medicine'
        },
        {
          'img': 'img/Computer-tabs-v2.png',
          'title': 'Computer Science'
        },
        {
          'img': 'img/Palette-tabs-v2.png',
          'title': 'Graphic Design'
        }
      ],
      latestCourse: [
        {
          'img': 'img/Decisions-icon.png',
          'title': 'Make Better Decisions',
          'teacher': 'James Colins',
          'price': '$21.00'
        },
        {
          'img': 'img/Speaker-icon.png',
          'title': 'How to be a speaker',
          'teacher': 'James Colins',
          'price': 'Free'
        },
        {
          'img': 'img/Network-icon.png',
          'title': 'Network Introductions',
          'teacher': 'James Colins',
          'price': 'Free'
        },
        {
          'img': 'img/Brand-icon.png',
          'title': 'Brand Management',
          'teacher': 'James Colins',
          'price': 'Free'
        }
      ],
      partnersLogos: [
        'img/partner-2.png',
        'img/partner-3.png',
        'img/partner-4.png',
        'img/partner-5.png',
        'img/partner-6.png',
        'img/partner-8.png',
        'img/partner-1.png',
        'img/partner-7.png'
      ],
      footerLinkSectionOne: ['Request a website','Browse Themes','Payment options','Support System','Checkout','Purchase Theme'],
      footerLinkSectionTwo: [
        'Purchase Theme',
        'Our Benefits',
        'Our Team',
        'Our Services',
        'Other Products',
        'My account'
      ],
      categories: [
        'economy',
        'desgin',
        'coaching',
        'business',
        'medicine',
        'law',
        'fitness',
      ],
      currentIndex: 0,
      backgroundsHeader: [
        {
          'background':'img/theme_slider1_bg-1.jpg',
          'title': 'Showcase your courses',
          'para': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis perferendis, dolorum quas odio expedita doloremque?'
        },
        {
          'background':'img/theme_slider2_bg-1.jpg',
          'title': 'Key to your success',
          'para': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis perferendis, dolorum quas odio expedita doloremque?'
        },
        {
          'background': 'img/theme_slider3_bg-1.jpg',
          'title': 'Lead.Inspire.Win!',
          'para': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis perferendis, dolorum quas odio expedita doloremque?'
        }
      ],
      showArrow: false
    },
    methods: {
      slideLeft: function() {
        if(this.currentIndex <= 0) {
          this.currentIndex = this.backgroundsHeader.length - 1;
        } else {
          this.currentIndex--;
        }
      },
      slideRight: function() {
        if(this.currentIndex >= this.backgroundsHeader.length - 1) {
          this.currentIndex = 0;
        } else {
          this.currentIndex++;
        }
      },
      showDropdown: function() {
        console.log('dropdown');
      },
      showArrows: function() {
        console.log(this.showArrow);
      }
    }
  }
);