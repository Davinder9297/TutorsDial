import ExclusiveServices from "@/components/home/exclusiveBundles"
import FeaturedTutors from "@/components/home/featuredTutors"
import Hero from "@/components/home/hero"
import HowItWorks from "@/components/home/howItWorks"

export default function Home() {
  return (
    <div className="">
      <div className=""><Hero /> </div>     
      <div className="pt-36 md:pt-56"><FeaturedTutors /> </div>     
      <div className="pt-20 md:pt-28"><HowItWorks /> </div>     
<div className="pt-12 md:pt-24 pb-12"><ExclusiveServices/>
</div>   
    </div>
  )
}
