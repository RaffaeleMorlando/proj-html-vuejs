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
        }
      ],
      faculties: [
        {
          'img':'img/Gavel-v2.png',
          'title': 'Law Faculty',
          'second-img': 'img/Gavel-Illustration-e1556884768193.png',
          'para': 'Learning from world-leading academics and practitioners, you’ll not only receive an outstanding grounding in the theory of law, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.'
        },
        {
          'img': 'img/Coins-tabs-v2.png',
          'title': 'Economy',
          'second-img': 'img/Economy.png',
          'para': 'Economics focuses on the behaviour and interactions of economic agents and how economies work. Microeconomics analyzes basic elements in the economy, including individual agents and markets, their interactions, and the outcomes of interactions, including unemployment of resource.'
        },
        {
          'img': 'img/Medicine-tabs-v2.png',
          'title': 'Medicine',
          'second-img': 'img/Medicine.png',
          'para': 'Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease. Medicine encompasses a variety of health care practices evolved to maintain and restore health by the prevention and treatment of illness.'
        },
        {
          'img': 'img/Computer-tabs-v2.png',
          'title': 'Computer Science',
          'second-img': 'img/Computer-Science.png',
          'para': 'Computer science is the study of processes that interact with data and that can be represented as data in the form of programs. It enables the use of algorithms to manipulate, store, and communicate digital information. A computer scientist studies the theory of computation software systems.'
        },
        {
          'img': 'img/Palette-tabs-v2.png',
          'title': 'Graphic Design',
          'second-img': 'img/Graphic-Design.png',
          'para': 'Graphic design is the process of visual communication and problem-solving through the use of typography, photography and illustration. The field is considered a subset of visual communication and communication design, but sometimes the term ``graphic design`` is used synonymously.'
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
          'para': ' Cupiditate tempore, laborum quasi culpa provident reiciendis sapiente tenetur sed, iste, repudiandae iusto.'
        },
        {
          'background': 'img/theme_slider3_bg-1.jpg',
          'title': 'Lead.Inspire.Win!',
          'para': 'Nobis perspiciatis veritatis deserunt ab impedit, sed nisi nemo quasi laudantium, ipsum, in quaerat ad eaque sapiente autem eius possimus amet accusamus voluptatibus!'
        }
      ],
      dropdownList: [
        'Item',
        'Item',
        'Item',
        'Item',
        'Item'
      ],
      dropdown: false,
      dropdownOpen: false,
      animation: 'animate__animated animate__fadeOutDown dropdown-container',
      currentItem: null,
      showArrow: false,
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
      showDropdown: function(index) {
        this.currentItem = index;
        this.dropdownOpen = true;
        this.animation = 'animate__animated animate__fadeInUp dropdown-container';
      }
    }
  }
);