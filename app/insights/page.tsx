import Link from "next/link"
import { ExternalLink, BookOpen, FileText, MessageSquare } from "lucide-react"

export default function Insights() {
  const articles = [
    {
      title: "How to Win Small Business Innovative Research Grants",
      url: "https://www.linkedin.com/pulse/how-win-small-business-innovative-research-grants-william-clemons-bpzme",
      date: "January 2024",
      type: "Article",
    },
    {
      title: "How to Win MRO Contracts with DoD",
      url: "https://www.linkedin.com/pulse/how-win-mro-contracts-dod-william-clemons-0ioye",
      date: "January 2024",
      type: "Article",
    },
    {
      title: "F-35: The Inside Story of the Lightning II Book Review",
      url: "https://www.linkedin.com/pulse/f-35-inside-story-lightning-ii-book-review-william-clemons-b5poe",
      date: "December 2023",
      type: "Article",
    },
  ]

  const posts = [
    {
      title: "Manufacturing Services in Government Contracting",
      url: "https://www.linkedin.com/posts/buckclemons_manufacturingservices-manufacturing-manufacturingcontracts-activity-7266579806861856768--Wr7",
      date: "February 2024",
      type: "Post",
    },
    {
      title: "Engineering Services in Government Contracting",
      url: "https://www.linkedin.com/posts/buckclemons_engineeringservices-services-servicescontracts-activity-7264748524519448579-ILZP",
      date: "February 2024",
      type: "Post",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-center mb-8">
        <BookOpen size={48} className="text-[#AE1E23] mr-4" />
        <h1 className="text-5xl font-bold text-white">Industry Insights</h1>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Articles Section */}
        <div>
          <div className="flex items-center mb-6">
            <FileText size={24} className="text-[#AE1E23] mr-2" />
            <h2 className="text-3xl font-bold text-white">Featured Articles</h2>
          </div>
          <div className="bg-[#2A2A2A] rounded-lg shadow-lg p-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className={`${index !== articles.length - 1 ? "border-b border-[#404040] pb-6 mb-6" : ""}`}
              >
                <Link href={article.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-[#E0E0E0] group-hover:text-[#AE1E23] transition-colors duration-200">
                        {article.title}
                      </h3>
                      <p className="text-[#808080] mt-2">{article.date}</p>
                    </div>
                    <ExternalLink
                      size={24}
                      className="text-[#808080] group-hover:text-[#AE1E23] transition-colors duration-200 mt-1"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Posts Section */}
        <div>
          <div className="flex items-center mb-6">
            <MessageSquare size={24} className="text-[#AE1E23] mr-2" />
            <h2 className="text-3xl font-bold text-white">Recent Posts</h2>
          </div>
          <div className="bg-[#2A2A2A] rounded-lg shadow-lg p-8">
            {posts.map((post, index) => (
              <div key={index} className={`${index !== posts.length - 1 ? "border-b border-[#404040] pb-6 mb-6" : ""}`}>
                <Link href={post.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-[#E0E0E0] group-hover:text-[#AE1E23] transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-[#808080] mt-2">{post.date}</p>
                    </div>
                    <ExternalLink
                      size={24}
                      className="text-[#808080] group-hover:text-[#AE1E23] transition-colors duration-200 mt-1"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

