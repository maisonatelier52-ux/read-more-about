import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CategoryArticlelist from '@/components/categorycomponents/CategoryArticlelist'

function Page() {
  // Author data
  const author = {
    name: "Dan Bush",
    postCount: 50,
    bio: "Newspaper is your news, entertainment, music fashion website. We provide you with the latest breaking news and videos straight from the entertainment industry.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      youtube: "#"
    }
  }

  // Exclusive articles
  const exclusiveArticles = [
    {
      id: 1,
      title: "10 Outfits Inspired by Famous Art are Sold in London",
      category: "MAKE-UP",
      image: "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=200&h=150&fit=crop"
    },
    {
      id: 2,
      title: "Customer Engagement: New Strategy for the Economy",
      category: "MARKETING",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=150&fit=crop"
    },
    {
      id: 3,
      title: "Things to Look For in a Financial Trading Platform Environment",
      category: "FINANCE",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=150&fit=crop"
    }
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
      {/* Author Profile Section with Background */}
      <div className="relative">
        {/* Background that covers 75% of card height */}
        <div className="bg-[#eaeaea]/55 pb-80"></div>

        {/* Author Profile Card - overlapping the background */}
        <div className="container mx-auto px-4 lg:px-7 -mt-68">
          <div>
            <div className="flex flex-col lg:flex-row">
              {/* Left Column - 35% width - Author Image */}
              <div className="lg:w-[30%] relative">
                <div className="relative h-96 lg:h-full">
                  <Image
                    src={author.image}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Social Icons Overlay - Bottom Center */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
                    <Link 
                      href={author.social.facebook}
                      className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </Link>
                    <Link 
                      href={author.social.instagram}
                      className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </Link>
                    <Link 
                      href={author.social.twitter}
                      className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </Link>
                    <Link 
                      href={author.social.youtube}
                      className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column - 65% width */}
              <div className="lg:w-[70%] p-8">
                {/* Row 1 - Name, Posts, Bio */}
                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-4">
                    <h1 className="text-4xl lg:text-5xl font-bold font-serif text-black">
                      {author.name}
                    </h1>
                    <span className="bg-red-600 text-white text-sm font-bold px-4 py-1 uppercase">
                      {author.postCount} POSTS
                    </span>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {author.bio}
                  </p>
                </div>

                {/* Row 2 - Exclusive Articles */}
                <div>
                  <h2 className="text-2xl font-bold font-serif mb-6">Exclusive articles:</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exclusiveArticles.map((article) => (
                      <div key={article.id} className="group cursor-pointer">
                        <div className="flex gap-3">
                          
                          <div className="flex-1 w-[75%]">
                            
                            <h3 className="text-sm font-bold text-black group-hover:text-red-600 transition-colors mb-2 leading-tight">
                              
                              <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase inline-block">
                                EXCLUSIVE
                              </span>
                              {article.title}
                            </h3>
                            <p className="text-xs text-red-600 font-semibold uppercase">
                              {article.category}
                            </p>
                          </div>

                          <div className="relative w-[25%] h-15 flex-shrink-0 overflow-hidden">
                            <Image
                              src={article.image}
                              alt={article.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Articles List Section */}
      <CategoryArticlelist listArticles={listArticles} popularArticles={popularArticles} sidebarPost={sidebarPosts} />
    </div>
  )
}

export default Page