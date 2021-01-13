// const { vue } = require("laravel-mix");

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
      ]
    }
  }
);
