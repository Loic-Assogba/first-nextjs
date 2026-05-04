interface GlassProps {
    nombre: string;
    description: string;
}

export function Glass ({nombre, description}: GlassProps) {
    return (
          <button className='bg-white/10 border border-white/20 shadow-xl backdrop-filter backdrop-blur-md px-4 py-2 rounded-2xl w-fit  mt-4 flex flex-col items-start'><h1 className="text-base md:text-xl">{nombre}</h1><p className="text-xs md:text-lg">{description}</p></button>
    )
}