import {ref,onMounted,onUnmounted} from 'vue'
export default function useMouse(target:HTMLElement|Window|string,callback?:(x:number,y:number)=>void){
    const x=ref(0)
    const y=ref(0)

    useEventListener(target,'mousemove',(event)=>{
        const {pageX,pageY}=event;
        x.value=pageX
        y.value=pageY
        callback&&callback(pageX,pageY)
    })
   

}
function useEventListener(
    target: HTMLElement | Window | string,
    event: keyof HTMLElementEventMap,
    callback: (this: HTMLElement, ev: any) => any) {
    onMounted(() => {
      (typeof target === 'string' ? document.querySelector(target) as HTMLElement : target).addEventListener(event, callback)
    })
    onUnmounted(() => (typeof target === 'string' ? document.querySelector(target) as HTMLElement : target).removeEventListener(event, callback))
  }