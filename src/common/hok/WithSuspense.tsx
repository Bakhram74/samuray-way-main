import React, {ComponentType,Suspense} from "react";



export function WithSuspense(Component:ComponentType){
     return  (props:any)=>{
       return  <Suspense fallback={<div>...loading</div>}>
             <Component/>
         </Suspense>

     }
}

