'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface UserInputProps {
    fetch: (username:string)=>{}
}
export const UserInput:React.FC<UserInputProps> = ({fetch}) =>{
    const[username, setUsername] = useState("");

    const handleFormSubmit = (e:React.SyntheticEvent) =>{
        e.preventDefault();
        fetch(username);
    }

    const handleInputChange = async (e:React.ChangeEvent<HTMLInputElement>) =>{
        setUsername(e.target.value);
    }

    return(
        <form onSubmit={handleFormSubmit} className="flex w-1/3 m-auto">
        <Input value={username} onChange={handleInputChange} placeholder="Enter Github Username" />
        <Button className="ml-2" type="submit">Search</Button>
        </form>
    )

}
