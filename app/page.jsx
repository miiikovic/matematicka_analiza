
const Home = () => {
  return (
    <section className="w-full h-lvh flex flex-col">
        <div className="absolute bottom-40">
            <p className='desc text-left'>
                X-land tim. Kvalitetna edukacija.        
            </p>
            <h1 className='head_text text-left flex-1'>
                Privatni časovi iz
                <br className='max-md:hidden' />
                <span className='blue_gradient text-center'> Matematičke Analize</span>
            </h1>
            <div className="w-72 flex space-x-8">
                <div className="outline_btn cursor-pointer">SAZNAJ VIŠE</div>
                <div className="action_blue action_btn cursor-pointer">ZAPOČNI</div>
            </div>
        </div>
        
    </section>
  )
}

export default Home