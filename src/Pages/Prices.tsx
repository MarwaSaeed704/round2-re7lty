import React, { useEffect, useState } from 'react'
import '../Styles/Styles.css'
import PriceCard, { PriceCardProps } from '../Components/PriceCard';
import axios from 'axios';

const Prices: React.FC = () => {
    // the second card is active by default
        const [activeCard, setActiveCard] = useState<number>(1);

    const [plans, setPlans] = useState<PriceCardProps[]>([]);

    const [error, setError] = useState<string|null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const getPlans = async () => {
        console.log(loading);
        console.log(error);
        
        try {
            
            const response = await axios.get("https://re7lty-2.digital-vision-solutions.com/api/plans");
            const transformedResponse = response.data.data.data.map((plan: PriceCardProps) => (
                {
                    id:plan.id,
                    price: plan.price,
                    type: plan.type,
                    description: plan.description,
                    features:plan.features
                }
            ))

            setPlans(transformedResponse);

        } catch (error) {
            setError("حدث خطأ أثناء جلب البيانات.");
        } finally {
            setLoading(false);
        }
        
    }


    useEffect(() => {
        getPlans();
    },[])
    
  return (
      <>
          {/* prices-section */}
          <div className='p-10 '>
              <div className='p-4 mb-10 '>
                  <p className='main-font font-black text-[#A5A5A5] text-[24px] max-md:text-[15px]'>لا تقلق حول التكلفة</p>
                  <h2 className='main-font font-black text-[#191919] text-[48px] max-md:text-[20px]'>خطط تناسب ميزانيتك</h2>
              </div>

              {/* price-cards */}
              <div className='flex w-full flex-row gap-10 max-md:flex-col max-lg:flex-col'>
                  {plans.length>0 ? plans.map((plan,index) => {
                      return (
                          <PriceCard
                              key={plan.id}
                              id={plan.id}
                              price={plan.price}
                              type={plan.type}
                              description={plan.description}
                              features={plan.features}
                              isActive={activeCard === index}
                              onClick={()=>setActiveCard(index)}
                              
                          />
                  )}) :<p>⏳ تحميل الخطط...</p>}
                
                  
              </div>
              {/* price-cards */}
              
          </div>
          {/*== prices-section ==*/}
      </>
  )
}

export default Prices
