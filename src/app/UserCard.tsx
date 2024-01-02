import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { githubResponse } from "./getUserDetails"
import { Button } from "@/components/ui/button"
import { Link } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserCardProps {
    user: githubResponse
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {

    return (
        <>
            {user.name &&
                <Card className="justify-center m-auto mt-10 w-1/3">
                    <CardHeader className="flex-row items-center justify-between">
                        <CardTitle>{user.name} </CardTitle>
                        <Avatar>
                            <AvatarImage src={user.avatar_url} />
                        </Avatar>
                    </CardHeader>
                    {user.bio &&
                        <CardHeader>
                            <CardDescription>
                                {user.bio}
                            </CardDescription>
                        </CardHeader>
                    }
                    <CardContent>
                        <p>Public Repositories: {user.public_repos}</p>
                        <p>Followers: {user.followers}</p>
                        <p>Following: {user.following}</p>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button asChild><a href={user.html_url}>Visit Profile</a></Button>
                    </CardFooter>
                </Card>
            }
        </>

    )
}