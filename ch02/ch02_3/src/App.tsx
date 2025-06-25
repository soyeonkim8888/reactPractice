import  ClassComponent  from './ClassComponent'
import  ArrowComponent from './ArrowComponent'
import ProfileCardComponent from './ProfileCardComponent'
import { profiles } from './data/profileData'
import { profile } from 'console'

export default function App(){
   return(
    <>   
    <ul>
      <ClassComponent href ="http://www.google.com" text ="go to Google"/>
      <ArrowComponent href ="http://www.twitter.com" text ="go to Twitter"/> 
    </ul>

     <div>
      <h1>프로필 카드</h1>
        {
          profiles.map((item, index)=>(
            < ProfileCardComponent
              key ={index}
              name ={item.name}
              age={item.age}
              email={item.email} />
              )
            )
        }
     </div>
     </> 
  )
}