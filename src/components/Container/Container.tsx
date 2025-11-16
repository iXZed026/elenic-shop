import { ChildrenProps } from '@/types/children'

function Container({ children }: ChildrenProps) {
    return (
        <div className='xl:w-[85%] md:w-[95%] xs:w-[98%]' style={{margin:"auto"}}>
            {children}
        </div>
    )
}

export default Container