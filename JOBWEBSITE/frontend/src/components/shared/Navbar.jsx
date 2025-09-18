import React from "react"
import { Popover } from '@/components/ui/popover'
import { PopoverContent } from '@/components/ui/popover'
import { PopoverTrigger } from '@/components/ui/popover'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { LogOutIcon, User2 } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
const Navbar = () => {
    let [user, setUser] = useState(false);
    return (
        <div className='bg-white shadow-md p-4'>
            <div className="flex item-center justify-between mx-auto max-w-7xl h-16">
                <div>
                    <h1 className="text-2xl font-bold">
                        Job<span className="text-red-600">Portal</span>
                    </h1>
                </div>
                <div className="flex items-center gap-8">
                    <ul className="flex font-medium items-center gap-6">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to="/Jobs">Jobs</Link></li>
                        <li><Link to="/Browse">Browse</Link></li>
                    </ul>
                    {
                        !user?(
                            <div className="flex items-center gap-2">
                                <Link to="/login"><Button className="bg-blue-500 hover:bg-purple-500 text-white cursor-pointer">Login</Button></Link>
                                <Link to="/signup"><Button className="bg-blue-500 hover:bg-purple-500 text-white cursor-pointer">SignUp</Button></Link>
                            </div>

                        ):(
                    
                    <Popover>
                        <PopoverTrigger asChild>
                            <Avatar className="cursor-pointer" >
                                <AvatarImage src="https://github.com/shadcn.png" />
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent className="w-88">
                            <div className="flex gap-2 space-y-2">
                                <Avatar className="cursor-pointer" >
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                </Avatar>
                                <div>
                                    <h4 className="font-Medium">Priyanshu</h4>
                                    <p className="text-sm text-muted-foreground">hey this is Priyanshu.{" "}</p>
                                </div>
                            </div>
                            <div className="flex flex-col text-gray-600 ">
                                <div className="flex w-fit items-center gap-2 cursor-pointer">
                                    <User2/>
                                    <Button variant="link">View Profile</Button>
                                </div>
                                <div className="flex w-fit items-center gap-2 cursor-pointer">
                                    <LogOutIcon />
                                    <Button variant="link">Logout</Button>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                        )
                        }
                </div>
            </div>
        </div>
    )
}

export default Navbar
