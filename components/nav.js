import Link from "next/link"
import Image from "next/image";

const Nav = () => {
    return (
        <div className="flex justify-center gap-2 items-center py-3 px-3 fixed right-20 top-10 z-20 bg-gray rounded-full shadow-xl">
            <div className="flex justify-center gap-2 divide-x divide-white text-white text-center font-light text-xl">
                <Link href="/" className="py-1 px-3 hover:text-tan">Home</Link>
                <Link href="/database" className="py-1 px-3 hover:text-tan">Database</Link>
                <Link href="/essentials" className="py-1 px-3 hover:text-tan">Courses</Link>
                <Link href="/visualiser" className="py-1 px-3 hover:text-tan">Tools</Link>
            </div>
            <Link href="/">
                <div className="flex justify-center items-center">
                    <Image className='w-10 h-10 rounded-full border-2 border-tan' src="/images/default_pfp.jpg" height={0} width={0} sizes="100vw" />
                </div>
            </Link>
        </div>
    )
}

export default Nav;