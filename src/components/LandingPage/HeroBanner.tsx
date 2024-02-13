import { url } from "inspector";



export default function HeroBanner(){
    return (
        <div
  className="relative bg-cover bg-no-repeat p-12 text-center lg:h-[80vh] h-[50vh] lg:w-full w-auto  "
  style={{backgroundImage: 'url(static/images/banner-img-1.jpg)' }}>
  <div
    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
    style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
    <div className="flex h-full items-center justify-center">
      <div className="text-white">
        <h2 className="mb-4 text-4xl font-semibold">Example</h2>
        <h4 className="mb-6 text-xl font-semibold">NOUS SOMMES DES EXPERTS DANS NOTRE DOMAINE</h4>
        <button
          type="button"
          className="rounded border-2 border-red-500 bg-red-500 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-red-300 hover:bg-red-300 hover:text-neutral-800 focus:border-red-300 focus:bg-red-300 focus:text-neutral-50  focus:outline-none focus:ring-0 active:border-red-300 active:bg-red-300 active:text-neutral-50  dark:hover:bg-red-300 dark:hover:bg-opacity-10"
         >
          Dommander un devis
        </button>
      </div>
    </div>
  </div>
</div>
    )
}