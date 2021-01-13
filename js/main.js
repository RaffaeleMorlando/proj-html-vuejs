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
          'dropdown': true
        },
        {
          'section': 'Purchase',
          'dropdown': true
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
      ]
    }
  }
);
