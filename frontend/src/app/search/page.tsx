import ExclusiveServices from "@/components/home/exclusiveBundles"
import SearchResults from "@/components/search/searchResults"

export default function Home() {
  return (
    <div className="">   
          <div className=""><SearchResults /> </div>     
<div className="pt-12 md:pt-24 pb-12"><ExclusiveServices/>
</div>   
    </div>
  )
}
