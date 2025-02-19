import React from 'react'
import '../Styles/Styles.css'
import PriceCard from '../Components/PriceCard';

const Prices: React.FC = () => {
    const pricePlanList = [
        {
            cost: "$260",
            planType: "خطة الاقتصادية",
            planDesc: "نقدم لك إمكانية زيارة بلدان العالم بأقل التكاليف الممكنة وبأفضل الخدمات",
            item1: "بطاقات سفر في الدرجة الاقتصادية",
            item2: "حجز بفندق ثلاث نجوم",
            item3:"وجبات إفطار يومية"

        },

        {
            cost: "$520",
            planType: "خطة عائلية",
            planDesc: "هذه الخطوة مناسبة جداً إن كنت ترغب في قضاء إجازتك مع العائلة",
            item1: "بطاقات سفر في الدرجة أولى",
            item2: "حجز بفندق أربع نجوم",
            item3:"رحلات ميدانية بشكل يومي"

        },

        {
            cost: "$850",
            planType: "خطة رجال الأعمال",
            planDesc: "كونك شخص ذو ذوق خاص ستكون هذه الخطة هي ما يناسبك تماماً",
            item1: "بطاقات سفر بدرجة رجال الأعمال",
            item2: "حجز بفندق خمس نجوم",
            item3:"متابعة خاصة لإحتياجاتك"

        },
    ];
  return (
      <>
          {/* prices-section */}
          <div className='p-10 '>
              <div className='p-4 mb-10'>
                  <p className='main-font font-black text-[#A5A5A5] text-[24px] max-sm:text-[16px]'>لا تقلق حول التكلفة</p>
                  <h2 className='main-font font-black text-[#191919] text-[48px] max-sm:text-[24px]'>خطط تناسب ميزانيتك</h2>
              </div>

              {/* price-cards */}
              <div className='flex w-full flex-row gap-10 max-sm:flex-col'>
                  {pricePlanList.map((plan, index) => {
                      return (
                          <PriceCard
                              key={index}
                              cost={plan.cost}
                              planType={plan.planType}
                              planDesc={plan.planDesc}
                              item1={plan.item1}
                              item2={plan.item2}
                              item3={plan.item3}
                          />
                  )})}
                
                  
              </div>
              {/* price-cards */}
              
          </div>
          {/*== prices-section ==*/}
      </>
  )
}

export default Prices
