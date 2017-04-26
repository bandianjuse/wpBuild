import $ from 'jquery'
import header from '../../template/header.art'
import config from './config'
import '../../style/common.css'

export default {
  init(params){
    if(params){
      $.extend(config,params);
    }
    this.publicTpl(config)
  },
  publicTpl(params){
    $('html').prepend(header(params));
  },
}
