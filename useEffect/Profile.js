import React from 'react'

const Profile=(props)=>{
    const {tittle,thumbnailUrl,url}=props

    return <article className="profile-card">
           <img src={thumbnailUrl} alt="Sample thing"/>
           <h2 className={tittle}>hello everyone</h2>
           <a href={url} className='button'>details</a>
    </article>
        

}
export default Profile;