import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/pg-logo.jpg'
import {redirect} from 'next/navigation'
import { getCart } from '@/lib/db/cart'
import { getServerSession } from "next-auth";
import ShoppingCartButton from './ShoppingCartButton'
import UserMenuButton from './UserMenuButton'
import { authOptions } from '../api/auth/[...nextauth]/route'


async function searchProducts(formData:FormData) {
    "use server"
    const searchQuery = formData.get('searchQuery')?.toString();

    if(searchQuery){
        redirect("/searchQuery="+searchQuery)
    }
    
}
export default async function Navbar(){
    const session = await getServerSession(authOptions);
    const cart = await getCart()
    return (
        <div className="bg-base-100">
            <div className="navbar max-w-7xl m-auto flex-col sm:flex-row">
                <div className="flex-1">
                    <Link href="/" className='btn btn-ghost text-xl normal-case '>
                        <Image src={logo} height={40} width={40} alt='pg logo' />
                        Raavan PG Cowherd
                    </Link>
                </div>
                <div className='flex-none gap-2'>
                    <form action={searchProducts}>
                        <div className='form-control'>
                            <input 
                            type="text"
                             name="searchQuery"
                             placeholder='search'
                             className='input input-bordered w-full min-w-[100px]' />
                        </div>
                    </form>
                    <ShoppingCartButton cart={cart}></ShoppingCartButton>
                    <UserMenuButton session={session}/>
                </div>
            </div>
        </div>
    )
}