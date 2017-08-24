// @flow
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
    components: {
      0: {
        template: 3,
        header: 'we have some words for you',
        image: '/gammaRays.gif',
        color: 'softOrange',
        text: 'Check out what Kate Colby has to <a href="http://blog.pshares.org/index.php/sixthth-sense-attempting-to-fill-the-explanatory-gap/">say</a> about Ryan Murphy.',
      },
    },
  },
  '/soon': {
    display: 'coming soon',
    components: {
      0: {
        template: 4,
        header: 'coming soon from black dress press',
        color: 'softOrange',
        text: 'like the header on this page, this page is coming soon. they tell us that this is meta.',
      },
    },
  },
  '/about': {
    display: 'about',
    components: {
      0: {
        template: 4,
        header: 'about <br /> black dress press',
        color: 'black',
        text: 'Founded in New York City, Black Dress Press is an independent literary small press and the publisher of the literary magazine <a href="www.spinning-jenny.com"><i>Spinning Jenny</i></a>.',
      },
    },
  },
  '/store': {
    display: 'store',
  },
  '/friends': {
    display: 'friends',
  },
};
