'use client'
import { useState } from 'react'
import { UserInput } from './UserInput'
import { getUserDetails } from "./getUserDetails"
import { UserCard } from './UserCard'

export default function Home() {
  const [userData, setUserData] = useState({
    avatar_url: '',
    name: '',
    public_repos: '',
    repos_url: '',
    url: '',
    followers: '',
    following: '',
    bio: '',
    html_url: ''
  })

  const fetchData = async (username:string) => {
    const userData = await getUserDetails(username);
    setUserData(userData);
  }
  return (
    <main className="min-h-screen p-12">
      <div className='flex-column justify-center m-auto'>
      <p className='text-5xl font-medium mb-5 flex justify-center'>Github Profile Data</p>
      <UserInput fetch={fetchData}/>
      </div>
      
      <UserCard user={userData}/>
    </main>
  )
}
