/**
 * Create document element.
 * @param type
 * @param options
 */
const createElement = function (type:string, options?:object|any) {
   const elm:any = document.createElement(type);
   if(options){
       Object.keys(options).forEach((itm:any): void =>{
           elm[itm] = options[itm];
       })
   }
   return elm;
};

export default createElement;