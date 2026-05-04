import Link from "next/dist/client/link";

export default function Footer() {
    return (
        <footer className="mt-10 py-10 bg-linear-to-t from-black via-[#021400] to-[#163d00] h-90 lg:h-100 flex flex-col items-center gap-6 w-full">
            <h2 className="to-white  text-[2rem] font-bold lg:text-[3rem]">HERMANN RICHY</h2>
            <button className="border-b w-[95%] md:w-[80%] lg:w-[90%] border-green-400"></button>
            <nav className="flex gap-4 text-sm md:text-lg lg:text-xl lg:gap-8 md:gap-6 ">
                <Link href="/" className="hover:text-primary transition-colors">Acceuil</Link>
                <Link href="/#about" className="hover:text-primary transition-colors">À propos</Link>
                <Link href="/#projects" className="hover:text-primary transition-colors">Projets</Link>
                <Link href="/#faq" className="hover:text-primary transition-colors">FAQs</Link>
                <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </nav>
            <nav className="flex gap-4 md:gap-6 lg:gap-8">
                <Link href="#" className="flex items-center justify-center border border-white/50 bg-green-800/30 backdrop-blur-md backdrop-filter rounded-full p-2 lg:p-4" >
                  <svg  viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6 lg:h-10 lg:w-10">
                              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                              <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)" fill="#ffffff">
                              <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#161]">
                  </path>
                            </g>
                           </g>
                           </g>
                    </svg>
                </Link>
                <Link href="#" className="flex items-center justify-center border border-white/50 bg-green-800/30 backdrop-blur-md backdrop-filter rounded-full p-2 lg:p-4" ><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-facebook h-6 w-6 lg:h-10 lg:w-10" viewBox="0 0 16 16">
                             <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                </Link>
                <Link href="#" className="flex items-center justify-center border border-white/50 bg-green-800/30 backdrop-blur-md backdrop-filter rounded-full p-2 lg:p-4" >
                      <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-instagram h-6 w-6 lg:w-10 lg:h-10" viewBox="0 0 16 16">
                         <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                        </svg>
                </Link>
                <Link href="#" className="flex items-center justify-center border border-white/50 bg-green-800/30 backdrop-blur-md backdrop-filter rounded-full p-2 lg:p-4" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github h-6 w-6 lg:w-10 lg:h-10" viewBox="0 0 16 16">
                           <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                </Link>  
            </nav>
               <div className="flex flex-col items-center lg:flex-row justify-between gap-2 w-full mt-6 lg:px-8">
                 <p className="text-sm lg:text-lg">© 2026 Hermann Richy. Tous droits réservés.</p>
                 <span className="flex gap-2 mt-1 justify-center  ">
                    <Link href="#" className="text-sm lg:text-base hover:text-primary transition-colors">Confidentialité</Link>
                    <span >|</span>
                    <Link href="#" className="text-sm lg:text-base hover:text-primary transition-colors">Conditions d'utilisation</Link>
                    <span>|</span>
                    <Link href="#" className="text-sm lg:text-base hover:text-primary transition-colors">Cookies</Link>
                    <span >|</span>
                    <Link href="#" className="text-sm lg:text-base hover:text-primary transition-colors">Licences</Link>
                 </span>
               </div>
        </footer>
        )
}

