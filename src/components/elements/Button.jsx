import clsx from 'clsx';

function getClassName({ className }){
    return clsx(
        'text-white text-lg font-bold rounded-xl transition duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-opacity-50'
         
    )
}
 const sizes={
    small: 'px-4 py-3',
    medium: 'px-6  py-4',
    large: 'w-full px-4 py-3'
 }

 const variants={
    primary: 'bg-marigold focus: ring-marigold',
    secondary: 'bg-tomato focus: ring-2 ring-pink-500 ring-inset',
    dark: 'bg-black focus:ring-white'
 }



const Button = ({ 
    children,
    className,
    size='small',
    variant='secondary'
    })=> {
    return (
        <button className={clsx(
            size[size],
            variants[variant],
            getClassName({className})
        )}>
            {children}
        </button>
    );
}

export default Button;



// A tiny (228B) utility for constructing className strings conditionally.
// Also serves as a faster & smaller drop-in replacement for the classnames module.