import {pricingPlans} from '@/data/index' 
import { relative } from 'path'


export const PricingPlans = () => {
  return (
    // <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
    //     <pre className='mt-12 bg-cyan-50 p-8 font-medium text-cyan-800'>

    //     </pre>
    // </div>
    <div className='relative'>
        {/* background decorations */}
        <div className="absolute inset-0 flex flex-col">
            <div className="flex-1" ></div>
            <div className="bg-slate-50 flex-1"></div>
        </div>
    <div className='grid lg:grid-cols-3 gap-12 lg:gap-8 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {pricingPlans.map((plan)=>(
             <div className="border border-slate-200 shadow-lg p-8  bg-white rounded-2xl relative flex flex-col " key={plan.title}>
                
                <h3 className='text-lg font-semibold leading-5'>{plan.title}</h3>
                {plan.mostPopular &&  <p className='absolute top-0 bg-cyan-500 text-white px-3 py-0.5 text-sm font-semibold tracking-wide rounded-full shadow-md -translate-y-1/2'>
                        Most Popular
                    </p>}
                <p className='mt-4 text-slate-700 text-sm leading-6'>{plan.description}</p>
                <div className='mt-4 bg-slate-50 p-6 rounded-lg -mx-6'>
                    <p className='text-sm font-semibold text-slate-500 flex items-center '>
                        <span>{plan.currency}</span> 
                        <span className='text-4xl text-slate-900 ml-3'>${plan.price}</span>
                        <span className='ml-1.5'>{plan.frequency}</span>
                    </p>
                </div>  
                {/* Features */}
                 <ul className='mt-6 space-y-4 flex-1'>
                    {plan.features.map((feature)=>(
                        <li className="text-sm text-slate-700 leading-6 flex" key={feature}>
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 text-cyan-500 shrink-0'viewBox="0 0 24 24"><path d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z"
                            fill="currentColor"
                            /></svg>
                            
                            <span className='ml-3'>{feature}</span></li>
                    ))}
                 </ul>

                 {/* Call to action  */}
                 <a href="#" className={`block mt-8 px-6 py-4 text-sm font-semibold
                  leading-5 text-center rounded-lg 
                  ${
                    plan.mostPopular 
                    ? 'text-white bg-cyan-500 hover:bg-cyan-600 shadow-md'
                    : 'text-cyan-700 bg-cyan-50 hover:bg-cyan-100'
                  }
                  
                  `}>{plan.cta}</a>
            </div>
        ))}
    </div>
    </div>
  )
}
