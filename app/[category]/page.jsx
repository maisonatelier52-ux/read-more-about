

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CategoryArticlelist from '@/components/categorycomponents/CategoryArticlelist'

function Page() {
  const categories = [
    { name: 'CELEBRITY', href: '/celebrity' },
    { name: 'FINANCE', href: '/finance' },
    { name: 'FOOD', href: '/food' },
    { name: 'MAKE-UP', href: '/makeup' },
    { name: 'MARKETING', href: '/marketing' },
  ]

  // Featured articles with complete data structure
  const articles = [
    {
      id: 1,
      slug: "politics-marocco-stock-market-turbulence",
      title: "The Politics Behind Marocco's Stock Market Turbulence Last Year",
      category: "POLITICS",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      imageAlt: "Stock market analysis",
      excerpt: "An in-depth look at the political factors that influenced Morocco's volatile stock market performance.",
      type: "normal",
      date: "15/01/2026",
      author: {
        name: "Tom Sauk",
        image: "https://i.pravatar.cc/150?img=12",
        website: "https://example.com/tom-sauk",
        bio: "Political analyst and economics writer with expertise in Middle Eastern markets.",
        social: {
          facebook: "#",
          instagram: "#",
          twitter: "#",
          youtube: "#"
        }
      },
      content: [
        {
          type: "paragraph",
          text: "The political landscape of Morocco has significantly influenced its stock market performance over the past year..."
        }
      ]
    },
    {
      id: 2,
      slug: "expanding-peaceful-political-climate",
      title: "Expanding Peaceful Political Climate Gears up for this Election",
      category: "POLITICS",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      imageAlt: "Political climate",
      excerpt: "As elections approach, the political atmosphere shows signs of constructive dialogue and cooperation.",
      type: "normal",
      date: "18/01/2026",
      author: {
        name: "Sarah Mitchell",
        image: "https://i.pravatar.cc/150?img=17",
        website: "https://example.com/sarah-mitchell",
        bio: "Political correspondent covering domestic and international affairs.",
        social: {
          facebook: "#",
          instagram: "#",
          twitter: "#",
          youtube: "#"
        }
      },
      content: [
        {
          type: "paragraph",
          text: "The upcoming election season is marked by unprecedented levels of civil discourse..."
        }
      ]
    },
    {
      id: 3,
      slug: "things-you-didnt-know-american-politicians",
      title: "Things You Didn't Know About the American Past Politicians",
      category: "POLITICS",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      imageAlt: "American political history",
      excerpt: "Fascinating facts and untold stories about the politicians who shaped American history.",
      type: "normal",
      date: "20/01/2026",
      author: {
        name: "James Wilson",
        image: "https://i.pravatar.cc/150?img=18",
        website: "https://example.com/james-wilson",
        bio: "History professor and author specializing in American political history.",
        social: {
          facebook: "#",
          instagram: "#",
          twitter: "#",
          youtube: "#"
        }
      },
      content: [
        {
          type: "paragraph",
          text: "American political history is filled with remarkable stories that rarely make it into textbooks..."
        }
      ]
    },
    {
      id: 4,
      slug: "harvard-student-candidates-results",
      title: "New Harvard Student Candidates Presented Minutes Before Results",
      category: "POLITICS",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      imageAlt: "Harvard election",
      excerpt: "Last-minute candidate announcements shake up Harvard's student government elections.",
      type: "exclusive",
      date: "22/01/2026",
      author: {
        name: "Emily Chen",
        image: "https://i.pravatar.cc/150?img=19",
        website: "https://example.com/emily-chen",
        bio: "Education reporter covering campus politics and student movements.",
        social: {
          facebook: "#",
          instagram: "#",
          twitter: "#",
          youtube: "#"
        }
      },
      content: [
        {
          type: "paragraph",
          text: "In an unexpected turn of events, several new candidates emerged just minutes before the election results were announced..."
        }
      ]
    },
  ]

  // List articles with complete data structure
  const listArticles = [
    {
      id: 5,
      slug: "sanders-conservative-college-visit",
      title: "Sanders Gets Respectful Welcome at Conservative College",
      category: "CELEBRITY",
      image: "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=300&h=200&fit=crop",
      imageAlt: "Sanders at college",
      excerpt: "A groundbreaking visit that brought together diverse political perspectives in an atmosphere of mutual respect and open dialogue.",
      type: "normal",
      date: "29/09/2025",
      author: {
        name: "Tom Sauk",
        image: "https://i.pravatar.cc/150?img=12",
        website: "https://example.com/tom-sauk",
        bio: "Political analyst and economics writer with expertise in Middle Eastern markets.",
        social: {
          facebook: "#",
          instagram: "#",
          twitter: "#",
          youtube: "#"
        }
      },
      content: [
        {
          type: "paragraph",
          text: "In a remarkable display of political civility, Senator Sanders received a warm welcome at a traditionally conservative institution..."
        }
      ]
    },
    {
      id: 6,
      slug: "small-business-success-timing",
      title: "Now is the Time to Think About Your Small-Business Success",
      category: "CELEBRITY",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop",
      imageAlt: "Small business",
      excerpt: "Expert insights on navigating the changing landscape of entrepreneurship and building sustainable growth in competitive markets.",
      type: "normal",
      date: "28/09/2025",
      author: {
        name: "Tom Sauk",
        image: "https://i.pravatar.cc/150?img=13",
        website: "https://example.com/tom-sauk",
        bio: "Business consultant and entrepreneurship advocate.",
        social: {
          facebook: "#",
          instagram: "#",
          twitter: "#",
          youtube: "#"
        }
      },
      content: [
        {
          type: "paragraph",
          text: "The current economic climate presents unique opportunities for small business owners willing to adapt and innovate..."
        }
      ]
    },
    {
      id: 7,
      slug: "detroit-minority-business-program",
      title: "Program Will Lend $10M to Detroit Minority Businesses",
      category: "CELEBRITY",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=200&fit=crop",
      imageAlt: "Detroit business program",
      excerpt: "New initiative aims to bridge the funding gap and empower local entrepreneurs with access to capital and mentorship programs.",
      type: "breaking",
      date: "27/09/2025",
      author: {
        name: "Tom Sauk",
        image: "https://i.pravatar.cc/150?img=14",
        website: "https://example.com/tom-sauk",
        bio: "Economic development reporter focusing on community initiatives.",
        social: {
          facebook: "#",
          instagram: "#",
          twitter: "#",
          youtube: "#"
        }
      },
      content: [
        {
          type: "paragraph",
          text: "A groundbreaking $10 million lending program has been announced to support minority-owned businesses in Detroit..."
        }
      ]
    },
    {
      id: 8,
      slug: "kansas-city-national-companies",
      title: "Kansas City Has a Massive Array of Big National Companies",
      category: "CELEBRITY",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop",
      imageAlt: "Kansas City skyline",
      excerpt: "The heartland hub continues to attract major corporations, creating jobs and driving economic growth across the region.",
      type: "normal",
      date: "26/09/2025",
      author: {
        name: "Tom Sauk",
        image: "https://i.pravatar.cc/150?img=15",
        website: "https://example.com/tom-sauk",
        bio: "Regional business correspondent covering Midwest economy.",
        social: {
          facebook: "#",
          instagram: "#",
          twitter: "#",
          youtube: "#"
        }
      },
      content: [
        {
          type: "paragraph",
          text: "Kansas City's business landscape has transformed dramatically, with numerous Fortune 500 companies establishing significant presence..."
        }
      ]
    },
    {
      id: 9,
      slug: "olympic-athlete-trump-tweets-kimmel",
      title: "Olympic Athlete Reads Donald Trump's Mean Tweets on Kimmel",
      category: "CELEBRITY",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop",
      imageAlt: "Late night show",
      excerpt: "Hilarious late-night segment showcases the lighter side of competitive sports and social media commentary.",
      type: "exclusive",
      date: "25/09/2025",
      author: {
        name: "Tom Sauk",
        image: "https://i.pravatar.cc/150?img=16",
        website: "https://example.com/tom-sauk",
        bio: "Entertainment and sports journalist.",
        social: {
          facebook: "#",
          instagram: "#",
          twitter: "#",
          youtube: "#"
        }
      },
      content: [
        {
          type: "paragraph",
          text: "In a memorable appearance on Jimmy Kimmel Live, an Olympic gold medalist took on the viral 'Mean Tweets' segment..."
        }
      ]
    },
    {
      id: 10,
      slug: "future-ai-modern-workplace",
      title: "The Future of Artificial Intelligence in Modern Workplace",
      category: "TECHNOLOGY",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=200&fit=crop",
      imageAlt: "AI in workplace",
      excerpt: "How AI is transforming industries and reshaping the way we work, collaborate, and innovate in the digital age.",
      type: "normal",
      date: "24/09/2025",
      author: {
        name: "Sarah Mitchell",
        image: "https://i.pravatar.cc/150?img=17",
        website: "https://example.com/sarah-mitchell",
        bio: "Technology writer specializing in AI and workplace innovation.",
        social: {
          facebook: "#",
          instagram: "#",
          twitter: "#",
          youtube: "#"
        }
      },
      content: [
        {
          type: "paragraph",
          text: "Artificial intelligence is no longer a futuristic concept but a present reality transforming how we approach work..."
        }
      ]
    },
    {
      id: 11,
      slug: "startup-culture-myths-reality",
      title: "Startup Culture: Breaking Down the Myths and Reality",
      category: "BUSINESS",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop",
      imageAlt: "Startup office",
      excerpt: "An honest look at what it really takes to succeed in the startup world, beyond the glamorous headlines.",
      type: "normal",
      date: "23/09/2025",
      author: {
        name: "James Wilson",
        image: "https://i.pravatar.cc/150?img=18",
        website: "https://example.com/james-wilson",
        bio: "Startup advisor and venture capital analyst.",
        social: {
          facebook: "#",
          instagram: "#",
          twitter: "#",
          youtube: "#"
        }
      },
      content: [
        {
          type: "paragraph",
          text: "The startup culture is often romanticized, but the reality involves hard work, persistence, and smart strategy..."
        }
      ]
    },
    {
      id: 12,
      slug: "global-markets-economic-policies",
      title: "Global Markets React to New Economic Policies",
      category: "FINANCE",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop",
      imageAlt: "Global markets",
      excerpt: "Analysis of market trends and investor sentiment following major policy announcements from central banks worldwide.",
      type: "breaking",
      date: "22/09/2025",
      author: {
        name: "Emily Chen",
        image: "https://i.pravatar.cc/150?img=19",
        website: "https://example.com/emily-chen",
        bio: "Financial markets correspondent and economic analyst.",
        social: {
          facebook: "#",
          instagram: "#",
          twitter: "#",
          youtube: "#"
        }
      },
      content: [
        {
          type: "paragraph",
          text: "Global financial markets showed mixed reactions as central banks announced coordinated policy changes..."
        }
      ]
    },
    {
      id: 13,
      slug: "remote-work-revolution-balance",
      title: "Remote Work Revolution: Finding Balance in Digital Age",
      category: "LIFESTYLE",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop",
      imageAlt: "Remote work",
      excerpt: "Practical strategies for maintaining productivity and well-being while working from anywhere in the world.",
      type: "normal",
      date: "21/09/2025",
      author: {
        name: "David Brown",
        image: "https://i.pravatar.cc/150?img=20",
        website: "https://example.com/david-brown",
        bio: "Workplace culture expert and remote work advocate.",
        social: {
          facebook: "#",
          instagram: "#",
          twitter: "#",
          youtube: "#"
        }
      },
      content: [
        {
          type: "paragraph",
          text: "The shift to remote work has fundamentally changed how we approach our professional lives..."
        }
      ]
    },
    {
      id: 14,
      slug: "social-media-strategies-2025",
      title: "Social Media Strategies That Actually Work in 2025",
      category: "MARKETING",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=200&fit=crop",
      imageAlt: "Social media marketing",
      excerpt: "Cutting-edge tactics and proven methods to boost engagement and build authentic connections with your audience.",
      type: "exclusive",
      date: "20/09/2025",
      author: {
        name: "Lisa Anderson",
        image: "https://i.pravatar.cc/150?img=21",
        website: "https://example.com/lisa-anderson",
        bio: "Digital marketing strategist and social media consultant.",
        social: {
          facebook: "#",
          instagram: "#",
          twitter: "#",
          youtube: "#"
        }
      },
      content: [
        {
          type: "paragraph",
          text: "Social media marketing has evolved beyond simple posting schedules and hashtag strategies..."
        }
      ]
    },
    {
      id: 15,
      slug: "mental-health-corporate-environment",
      title: "Mental Health Awareness in Corporate Environment",
      category: "HEALTH",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop",
      imageAlt: "Corporate wellness",
      excerpt: "Companies are prioritizing employee wellness programs and creating supportive workplace cultures.",
      type: "normal",
      date: "19/09/2025",
      author: {
        name: "Dr. Rachel Green",
        image: "https://i.pravatar.cc/150?img=22",
        website: "https://example.com/rachel-green",
        bio: "Corporate wellness consultant and mental health advocate.",
        social: {
          facebook: "#",
          instagram: "#",
          twitter: "#",
          youtube: "#"
        }
      },
      content: [
        {
          type: "paragraph",
          text: "Mental health in the workplace has become a top priority for forward-thinking organizations..."
        }
      ]
    },
    {
      id: 16,
      slug: "sustainable-technology-greener-future",
      title: "Sustainable Technology: Building a Greener Future",
      category: "INNOVATION",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      imageAlt: "Sustainable technology",
      excerpt: "How tech companies are leading the charge in environmental responsibility and sustainable development.",
      type: "normal",
      date: "18/09/2025",
      author: {
        name: "Michael Torres",
        image: "https://i.pravatar.cc/150?img=23",
        website: "https://example.com/michael-torres",
        bio: "Environmental technology journalist and sustainability expert.",
        social: {
          facebook: "#",
          instagram: "#",
          twitter: "#",
          youtube: "#"
        }
      },
      content: [
        {
          type: "paragraph",
          text: "The technology sector is increasingly recognizing its role in addressing climate change and environmental challenges..."
        }
      ]
    },
  ]

  // Popular articles carousel with complete data structure
  const popularArticles = [
    {
      id: 17,
      slug: "bearded-firsts-pioneers-facial-hair",
      title: "Bearded Firsts: The Pioneers Of Facial Hair In America",
      category: "LIFESTYLE",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
      imageAlt: "Facial hair history",
      excerpt: "A fascinating journey through the history of facial hair trends in American culture.",
      type: "normal",
      date: "29/09/2025",
      author: {
        name: "Tom Sauk",
        image: "https://i.pravatar.cc/150?img=12",
        website: "https://example.com/tom-sauk",
        bio: "Cultural historian and lifestyle writer.",
        social: {
          facebook: "#",
          instagram: "#",
          twitter: "#",
          youtube: "#"
        }
      },
      content: [
        {
          type: "paragraph",
          text: "The history of facial hair in America tells a fascinating story of changing social norms and cultural attitudes..."
        }
      ]
    },
    {
      id: 18,
      slug: "ultimate-guide-modern-business-success",
      title: "The Ultimate Guide to Modern Business Success",
      category: "BUSINESS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      imageAlt: "Business success",
      excerpt: "Comprehensive strategies for building and scaling successful businesses in today's competitive landscape.",
      type: "exclusive",
      date: "28/09/2025",
      author: {
        name: "Jane Doe",
        image: "https://i.pravatar.cc/150?img=24",
        website: "https://example.com/jane-doe",
        bio: "Business strategy consultant and bestselling author.",
        social: {
          facebook: "#",
          instagram: "#",
          twitter: "#",
          youtube: "#"
        }
      },
      content: [
        {
          type: "paragraph",
          text: "Modern business success requires a combination of traditional principles and innovative approaches..."
        }
      ]
    },
    {
      id: 19,
      slug: "breaking-through-entrepreneurial-success",
      title: "Breaking Through: Stories of Entrepreneurial Success",
      category: "ENTREPRENEUR",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
      imageAlt: "Entrepreneurial success",
      excerpt: "Inspiring stories from entrepreneurs who overcame obstacles to build thriving businesses.",
      type: "normal",
      date: "27/09/2025",
      author: {
        name: "Mike Johnson",
        image: "https://i.pravatar.cc/150?img=25",
        website: "https://example.com/mike-johnson",
        bio: "Entrepreneur and startup mentor.",
        social: {
          facebook: "#",
          instagram: "#",
          twitter: "#",
          youtube: "#"
        }
      },
      content: [
        {
          type: "paragraph",
          text: "Every successful entrepreneur has a unique story of perseverance, innovation, and determination..."
        }
      ]
    },
  ]

 const sidebarPosts = [
  {
    id: 12,
    title: "Social Media Marketing for Franchises is Meant for Women",
    category: "MARKETING",
    author: "Dan Buell",
    authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
    date: "27/09/2025", // Updated date format
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    type: "Normal"
  },
  {
    id: 13,
    title: "Mobile Marketing is Said to Be the Future of E-Commerce",
    category: "MARKETING",
    author: "Dan Buell",
    authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
    date: "27/09/2025", // Updated date format
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    type: "Normal"
  },
  {
    id: 14,
    title: "Entrepreneurial Advertising: The Future Of Marketing",
    category: "MARKETING",
    author: "Dan Buell",
    authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
    date: "27/09/2025", // Updated date format
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    type: "Normal"
  },
  {
    id: 15,
    title: "How Nancy Reagan Gave Glamour and Class to the White House",
    category: "MARKETING",
    author: "Dan Buell",
    authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
    date: "27/09/2025", // Updated date format
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    type: "Normal"
  },
  {
    id: 16,
    title: "Now is the Time to Think About Your Small-Business Success",
    category: "MARKETING",
    author: "Dan Buell",
    authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
    date: "27/09/2025", // Updated date format
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    type: "Normal"
  },
  {
    id: 17,
    title: "The Best Marketing Strategies for Small Businesses",
    category: "MARKETING",
    author: "Dan Buell",
    authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
    date: "27/09/2025", // Updated date format
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    type: "Normal"
  },
  {
    id: 18,
    title: "Digital Marketing Trends to Watch in 2024",
    category: "MARKETING",
    author: "Dan Buell",
    authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
    date: "27/09/2025", // Updated date format
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    type: "Normal"
  },
];


  return (
    <div className="relative mb-30">
      {/* Blue background div that covers 75% of the cards height */}
      <div className="bg-[#eaeaea]/55 pb-48">
        <div className="container mx-auto px-4 pt-12">
          {/* Main heading */}
          <h1 className="text-5xl font-bold text-black text-center mb-8 font-serif">
            Politics
          </h1>

          {/* Category links */}
          <div className="flex justify-center gap-8 mb-16">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                href={category.href}
                className={`text-black text-xs lg:text-md font-semibold hover:text-red-500 transition-colors 
                            ${index > 2 ? 'hidden md:block' : ''}`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Articles row - positioned to overlap the blue background */}
      <div className="container mx-auto px-4 -mt-55 lg:px-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className="group cursor-pointer"
            >
              {/* Image container with overlay */}
              <div className="relative h-86 overflow-hidden shadow-lg">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Category badge */}
                  <div className="flex gap-2 mb-3">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-lg leading-tight hover:text-red-500">
                    {article.type !== "normal" && (
                      <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
                        {article.type}
                      </span>
                    )}
                    {article.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Section: 75/25 Layout */}
      <CategoryArticlelist listArticles={listArticles} popularArticles={popularArticles} sidebarPost={sidebarPosts}/>
    </div>
  )
}

export default Page