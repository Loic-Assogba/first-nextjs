interface GlassProps {
    nombre: string;
    description: string;
}

export function Glass ({nombre, description}: GlassProps) {
    return (
          <button className='bg-white/30 backdrop-filter backdrop-blur-sm px-4 py-2 rounded-lg w-fit  mt-4 flex flex-col items-start'><h1 className="text-base md:text-xl">{nombre}</h1><p className="text-xs md:text-lg">{description}</p></button>
    )
}