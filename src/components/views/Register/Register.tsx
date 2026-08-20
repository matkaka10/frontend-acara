import Image from "next/image"

const Register = ( ) => {
    return(
        <div className="flex w-full items-center justify-center flex-row gap-20">
            <div className="flex w-1/3 flex-col items-center justify-center gap-10">
                <Image 
                    src="/images/general/logo.svg"
                    alt="logo"
                    width={180}
                    height={180}
                />
                <Image 
                    src="/images/ilustrations/login.svg"
                    alt="login"
                    width={1024}
                    height={1024}
                />
            </div>
        </div>
    )
}

export default Register