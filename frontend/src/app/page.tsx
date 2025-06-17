import ExclusiveServices from "@/components/home/exclusiveBundles"
import HowItWorks from "@/components/home/howItWorks"

export default function Home() {
  return (
    <div className="p-10">
      <div className="pt-12 md:pt-24"><HowItWorks /> </div>     
<div className="pt-12 md:pt-24"><ExclusiveServices/>
</div>   
    </div>
  )
}
