import $ from 'jquery'
export default {
  components(el,coms){
    this.forEachComs(el,coms);



  },
  forEachComs(el,coms){
    for(let key in coms){
      let com = coms[key];
      if(com.template){
        let tpl = com.template;
        $(el).append(tpl)

        if(com.components) {
           this.forEachComs('.'+com.name,com.components)
        }
      }


    }



  }
}
