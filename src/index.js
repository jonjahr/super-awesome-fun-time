import 'bootstrap'
import './sass/main.scss'
import { initNav } from './js/nav'
import { initNewsletter } from './js/newsletter'


jQuery(function ($) {

  initNav()
  initNewsletter()

});
