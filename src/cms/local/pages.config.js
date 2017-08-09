export default {
  '/': {
    display: 'home',
    components: {
      0: {
        template: 1,
        header: 'new from \n black dress press',
        image: './murphy.jpg',
        color: 'maroon',
        text: 'Susan Wheeler says that Ryan Murphy has written “a searingly modern A Season in Hell . . . a gaunt, spare and beautiful book.” Read more about Millbrook <a href="http://www.blackdresspress.com/murphymillbrook.html">here</a>.',
      },
      1: {
        template: 2,
        header: 'just look at these street chairs',
        image: '/streetChairs.jpg',
        color: 'teal',
        text: 'In this award-winning limited first edition by Lisa Gilman, you’ll find more than a hundred photos, along with “Notes on Abandoned Chairs” by AIGA Medal winner and design writer extraordinaire Ralph Caplan; and an introduction by Evan Hughes, award-winning furniture designer. Read more <a href="http://www.blackdresspress.com/gilmanstreetchairs.html">here</a>.',
      },
      2: {
        template: 1,
        header: 'spinning jenny still has the moves',
        image: '/spinningJenny13.jpg',
        color: 'darkGreen',
        text: 'Current issue available <a href="http://www.spinning-jenny.com/store.html">here.</a>',
      },
    },
  },
  '/news': {
    display: 'news',
  },
  '/soon': {
    display: 'coming soon',
  },
  '/about': {
    display: 'about',
  },
  '/store': {
    display: 'store',
  },
  '/friends': {
    display: 'friends',
  },
};
