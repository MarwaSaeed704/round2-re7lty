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
    // const pricePlanList = [
    //     {
    //         cost: "$260",
    //         planType: "خطة الاقتصادية",
    //         planDesc: "نقدم لك إمكانية زيارة بلدان العالم بأقل التكاليف الممكنة وبأفضل الخدمات",
    //         item1: "بطاقات سفر في الدرجة الاقتصادية",
    //         item2: "حجز بفندق ثلاث نجوم",
    //         item3:"وجبات إفطار يومية"

    //     },

    //     {
    //         cost: "$520",
    //         planType: "خطة عائلية",
    //         planDesc: "هذه الخطوة مناسبة جداً إن كنت ترغب في قضاء إجازتك مع العائلة",
    //         item1: "بطاقات سفر في الدرجة أولى",
    //         item2: "حجز بفندق أربع نجوم",
    //         item3:"رحلات ميدانية بشكل يومي"

    //     },

    //     {
    //         cost: "$850",
    //         planType: "خطة رجال الأعمال",
    //         planDesc: "كونك شخص ذو ذوق خاص ستكون هذه الخطة هي ما يناسبك تماماً",
    //         item1: "بطاقات سفر بدرجة رجال الأعمال",
    //         item2: "حجز بفندق خمس نجوم",
    //         item3:"متابعة خاصة لإحتياجاتك"

    //     },
    // ];

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
