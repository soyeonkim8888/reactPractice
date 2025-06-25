import type {FC} from 'react'
import type {Profile} from './data/profileData'

export type ProfileCardComponentProps = Profile

const ProfileCardComponent: FC<ProfileCardComponentProps>= props =>{
    const{name, age, email} = props
    return(
        <div>
            <p>👤 이름: {name}</p>
            <p>🎂 나이: {age}</p>
            <p>📧 이메일: {email}</p>
        </div>
    )
}

export default ProfileCardComponent
