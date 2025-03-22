export const events = [
  {
    "id": "santa-fe",
    "details": {
      "title": "RE/SET",
      "subtitle": "Mastermind Retreat",
      "location": "Santa Fe, New Mexico",
      "dates": "March 17-22, 2025",
      "preview-image": "/santa-fe/background.webp"
    },
    "navbar": {
      "title": "RE/SET",
      "content": [
        {
          "type": "button",
          "text": "Apply Now",
          "variant": "nav-button",
          "action": "href",
          "target": "https://meetings.hubspot.com/jessica-carroll1/events?uuid=0eecf81e-3cf5-4347-8551-6607c1c0d6df"
        }
      ]
    },
    "modals": [
      {
        "id": "idaho-video",
        "title": "Idaho Video",
        "content": [
          {
            "type": "video",
            "value": "https://app.searchie.io/file/3w2VRnXO2M/embed"
          }
        ]
      },
      {
        "id": "mexico-video",
        "title": "Mexico Video",
        "content": [
          {
            "type": "video",
            "value": "https://app.searchie.io/file/P52406xz21/embed"
          }
        ]
      }
    ],
    "heroSection": {
      "background": {
        "type": "image",
        "value": "/santa-fe/background.webp"
      },
      "overlay": {
        "type": "gradient",
        "value": [
          {
            "type": "brand",
            "value": "black",
            "opacity": 0.6
          },
          {
            "type": "brand",
            "value": "black",
            "opacity": 0.6
          },
          {
            "type": "hex",
            "value": "#484c6c"  
          }
        ]
      },
      "content": [
        {
          "type": "text",
          "value": "Mastermind Retreat",
          "variant": "hero-subheading"
        },
        {
          "type": "text",
          "value": "RE/SET",
          "variant": "hero-heading-short"
        },
        {
          "type": "text",
          "value": "Santa Fe, New Mexico",
          "variant": "hero-location"
        },
        {
          "type": "text",
          "value": "March 17-22, 2025",
          "variant": "hero-dates"
        },
        {
          "type": "button",
          "text": "Watch Recap Video",
          "action": "modal",
          "target": "idaho-video",
          "variant": "hero-button",
        }
      ]
    },
    "contentSections": [
      {
        "id": "about",
        "background": {
          "type": "gradient",
          "value": [
            {
              "type": "hex",
              "value": "#484c6c"
            },
            {
              "type": "brand",
              "value": "navy"
            },
            {
              "type": "brand",
              "value": "black"
            }
          ]
        },
        "text-color": {
          "type": "brand",
          "value": "white"
        },
        "content": [
          {
            "type": "text",
            "value": "Not your typical business event...",
            "variant": "heading"
          },
          {
            "type": "image",
            "value": "/santa-fe/og-group.png",
            "align": "middle"
          },
          {
            "type": "text",
            "value": "Join a select group of entrepreneurs, executives, and experts for a transformative 6-day retreat in Santa Fe, New Mexico. Designed to be the anti-conference, RE/SET offers intimate, high-value experiences that move beyond traditional networking and generic content.",
            "variant": "body",
            "align": "left"
          },
          {
            "type": "text",
            "value": "Our formula is simple",
            "variant": "paragraph-heading",
            "underline": true,
            "align": "left"
          },
          {
            "type": "list",
            "items": [
              {
                "type": "text",
                "value": "30 inspiring humans +",
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": "Beautiful location +",
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": "Culinary excellence +",
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": "Flowing format to meaningfully connect =",
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": "Transformative event to efficiently optimize your business and personal life.",
                "variant": "list-item",
                "align": "left",
                "color": {
                  "type": "brand",
                  "value": "yellow"
                }
              }
            ]
          },
          {
            "type": "text",
            "value": "We are highly selective and keep our group small.",
            "variant": "paragraph-heading",
            "underline": true,
            "align": "left"
          },
          {
            "type": "text",
            "value": "Attendees include:",
            "variant": "paragraph-heading",
            "underline": true,
            "align": "left"
          },
          {
            "type": "list",
            "variant": "bulleted",
            "items": [
              {
                "type": "text",
                "value": "NYT best selling authors",
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": "Fortune 500 executives from Chipotle, Starbucks, AirBnB",
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": "Top computer hackers and cyber security experts. Leaders in the field of AI.",
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": "Peak-performance wellness experts (including Novak Djokovick's coach)",
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": "NFL players",
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": "Entrepreneurs of 8-9 figure companies.",
                "variant": "list-item",
                "align": "left"
              }
            ]
          },
          {
            "type": "text",
            "value": "Why attend?",
            "variant": "paragraph-heading",
            "align": "left",
            "underline": true
          },
          {
            "type": "list",
            "variant": "bulleted",
            "items": [
              {
                "type": "text",
                "value": <><span className="font-bold text-brand-yellow">Exclusive & Curated:</span> Only 30 participants, ensuring deep connections and meaningful discussions.</>,
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": <><span className="font-bold text-brand-yellow">Actionable, Not Theoretical:</span> No fluff—just real conversations with real impact on your business and life.</>,
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": <><span className="font-bold text-brand-yellow">Immersive & Rejuvenating:</span> A unique mix of strategic insights, networking, and relaxation in a world-class setting.</>,
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": <><span className="font-bold text-brand-yellow">Hands on Consulting:</span> Let's sit down, open up the laptop, and figure out how we can use systems, automation and AI to run a better business.</>,
                "variant": "list-item",
                "align": "left"
              }
            ]
          },
          {
            "type": "text",
            "value": "The real magic of the event is the Attendees. We turn down far more people than we accept. Attendees range from world famous NYT best selling authors, executives from Chiptole, Startbucks, AirBnB. Top computer hackers and cyber security experts. Leaders in the field of AI. Health experts (including Novak Djokovick's coach). Former NFL players & entrepreneurs of 8 and 9 figure companies.",
            "variant": "body",
            "align": "left"
          },
          {
            "type": "text",
            "value": "Past attendees have said that if they had to pay for all the consulting/advice they got during the event, it would've been over $250,000.",
            "variant": "body",
            "align": "left"
          },
          {
            "type": "text",
            "value": "So we're ditching the conference room for luxury ranch vibes, real breakthroughs, and zero fluff. No endless panels, no jam-packed schedules—just real solutions, a clear game plan, and powerful connections with top business leaders who actually know you and care.",
            "variant": "body",
            "align": "left"
          }
        ]
      },
      {
        "id": "expectations",
        "background": {
          "type": "color",
          "value": {
            "type": "brand",
            "value": "off-white"
          }
        },
        "text-color": {
          "type": "brand",
          "value": "black"
        },
        "content": [
          {
            "type": "text",
            "value": "What to expect",
            "variant": "heading"
          },
          {
            "type": "info-card",
            "title": "Tailored Hot Seats",
            "description": "Bring your biggest challenge (or opportunity!) to the table and get laser-focused feedback from a powerhouse room of brilliant minds.",
            "image": "/santa-fe/what-to-expect/hot-seat.png",
            "align": "left",
            "background": {
              "type": "color",
              "value": {
                "type": "brand",
                "value": "white"
              }
            }
          },
          {
            "type": "info-card",
            "title": "Expert-Led Insights",
            "description": "Intimate discussions from world leaders on a wide range of topics from AI, Cyber Security, Team Culture, Health, and more.",
            "image": "/santa-fe/what-to-expect/insights.jpg",
            "align": "right",
            "background": {
              "type": "color",
              "value": {
                "type": "brand",
                "value": "white"
              }
            }
          },
          {
            "type": "info-card",
            "title": "Real Relationships, Real Impact",
            "description": "Connect with like-minded leaders who get it. No fluff—just high-value, lasting relationships.",
            "image": "/santa-fe/what-to-expect/relationships.jpg",
            "align": "left",
            "background": {
              "type": "color",
              "value": {
                "type": "brand",
                "value": "white"
              }
            }
          },
          {
            "type": "info-card",
            "title": "Recharge & Reflect",
            "description": "Soak in Santa Fe's natural beauty. Hike, unwind by the fire, or dive into deep 1:1 convos. You'll leave clear, energized, and ready to optimize.",
            "image": "/santa-fe/what-to-expect/recharge.png",
            "align": "right",
            "background": {
              "type": "color",
              "value": {
                "type": "brand",
                "value": "white"
              }
            }
          }
        ]
      },
      {
        "id": "past-events",
        "background": {
          "type": "color",
          "value": {
            "type": "brand",
            "value": "white"
          }
        },
        "text-color": {
          "type": "brand",
          "value": "black"
        },
        "content": [
          {
            "type": "text",
            "value": "Past events",
            "variant": "heading"
          },
          {
            "type": "image-buttons",
            "items": [
              {
                "text": "Mexico",
                "image": "/santa-fe/mexico-thumbnail.jpg",
                "action": "modal",
                "target": "mexico-video"
              },
              {
                "text": "Idaho",
                "image": "/santa-fe/idaho-thumbnail.jpg",
                "action": "modal",
                "target": "idaho-video"
              }
            ]
          }
        ]
      },
      {
        "id": "past-speakers",
        "background": {
          "type": "color",
          "value": {
            "type": "brand",
            "value": "black"
          }
        },
        "text-color": {
          "type": "brand",
          "value": "white"
        },
        "content": [
          {
            "type": "text",
            "value": "Past speakers",
            "variant": "heading"
          },
          {
            "type": "profile-gallery",
            "profiles": [
              {
                "name": "Chip Conley",
                "title": "Hospitality Pioneer & Airbnb Strategic Advisor",
                "image": "/santa-fe/speakers/chip-conley.jpeg",
                "description": "New York Times bestselling author Chip Conley is the hospitality maverick who helped Airbnb's founders turn their fast-growing tech start-up into the global hospitality brand."
              },
              {
                "name": "Mike Koenigs",
                "title": "Marketing Expert & Business Growth Strategist",
                "image": "/santa-fe/speakers/mike-koenigs.jpeg",
                "description": "Mike Koenigs is a 13-time #1 bestselling author, 'Marketer of the Year', and serial entrepreneur best known for turning business owners into Transformational Business Celebrity Influencers."
              },
              {
                "name": "Marissa Andrada",
                "title": "Corporate Leadership & Culture Expert",
                "image": "/santa-fe/speakers/marissa-andrada.jpeg",
                "description": "Krispy Kreme's Independent Board Director & former Chipotle CHRO, Marissa Andrada is a people-focused thought leader. She excels in strategy, talent development, and navigating founder/CEO transitions."
              },
              {
                "name": "Blake Eastman",
                "title": "Behavioral Scientist & Leadership Coach",
                "image": "/santa-fe/speakers/blake-eastman.jpeg",
                "description": "Behavioral scientist Blake Eastman helps CEOs, entrepreneurs, and executives craft a customized style of behavioral leadership. He is the founder of The Nonverbal Group and former adjunct psychology professor at the City University of New York."
              }
            ]
          }
        ]
      },
      {
        "id": "testimonials",
        "background": {
          "type": "color",
          "value": {
            "type": "brand",
            "value": "white"
          }
        },
        "content": [
          {
            "type": "text",
            "value": "What our attendees say",
            "variant": "heading"
          },
          {
            "type": "testimonial-carousel",
            "value": [
              {
                "quote": "Attending the Baja OG event was truly transformative. I formed deep connections with inspiring individuals and gained invaluable insights that have already made a lasting impact. In fact, just one week after the event, I launched a new business with one of my OG connections! Every aspect of the experience was thoughtfully curated, set against an absolutely breathtaking backdrop. I can't recommend it highly enough!",
                "name": "Jason Mewis",
                "role": "President & Founder @ Engcomp",
                "avatar": "/santa-fe/testimonials/jason-mewis.jpeg"
              },
              {
                "quote": "The power of Hot Seats is exponential when you bring talented people together who share openly, with great vulnerability, their thought leadership and openly ask for help. It's hard, frankly, for anyone to ask for help. At the OG Retreat, there's so much talent in the room. To pay any one of these people to consult with you for a day is priceless, but to get all this together in one room, weighing in, elevates the impact.",
                "name": "Robert S. Castellini",
                "role": "Managing Director - Investments @ Wells Fargo",
                "avatar": "/santa-fe/testimonials/robert-castellini.png"
              },
              {
                "quote": "I came to this OG Retreat because I really needed a vacation with other ambitious entrepreneurs—it's all about that social connection and stimulating conversations. I'm weird and it's hard to find really solid connections with people because of the position that I'm in my work. But here I was, surrounded by people who get me.",
                "name": "Dan Guido",
                "role": "CEO & Co-Foundern of Trail of Bits - Cybersecurity Firm",
                "avatar": "/santa-fe/testimonials/dan-guido.jpg"
              },
              {
                "quote": "This mastermind gave me clear direction and actionable strategies to finally hit my business goals that I've been putting on paper but haven't been able to achieve. I believe the techniques and strategies that I've learned here today will 10x my growth in just one year.",
                "name": "Dr. Donald Shrump",
                "role": "Sports Performance Coach w/ a roster of top athletes like Novak Djokovic",
                "avatar": "/santa-fe/testimonials/donald-shrump.png"
              },
              {
                "quote": "Nick does a great job putting together these events and really bringing some some legitimate experts in their field. Every time I come to a leverage event, I'm always learning some really incredible stuff. Leverages businesses at optimization. I learned strategies to save a second here, a minute there, an hour here, and really cut down and become more efficient and optimize my business.",
                "name": "Josh Martin",
                "role": "Former Pro NFL player - Owner of Smoothie King Franchises",
                "avatar": "/santa-fe/testimonials/josh-martin.png"
              }
            ]
          },
          {
            "type": "video-gallery",
            "value": [
              {
                "src": "https://app.searchie.io/file/92QbmGMgDp/embed"
              },
              {
                "src": "https://app.searchie.io/file/w2VaYAeeqM/embed"
              },
              {
                "src": "https://app.searchie.io/file/kqkOLVyMq4/embed"
              },
              {
                "src": "https://app.searchie.io/file/l2RZ3kMx2a/embed"
              },
              {
                "src": "https://app.searchie.io/file/VDGxYnKjNW/embed"
              },
              {
                "src": "https://app.searchie.io/file/5qnlxWBvDr/embed"
              },
              {
                "src": "https://app.searchie.io/file/RD6dJ1QPqQ/embed"
              },
              {
                "src": "https://app.searchie.io/file/92QbZko9Dp/embed"
              }
            ],
            "initialDisplay": 4,
            "button": {
              "text": "See More Testimonials",
              "variant": "yellow"
            }
          }
        ]
      },
      {
        "id": "location",
        "background": {
          "type": "color",
          "value": {
            "type": "brand",
            "value": "off-white"
          }
        },
        "content": [
          {
            "type": "text",
            "value": "A glimpse of the location",
            "variant": "heading"
          },
          {
            "type": "text",
            "value": "Just outside downtown Santa Fe, this private 2,600-acre luxury ranch resort offers hiking trails, abundant wildlife, a running river, and stunning high-desert mountain views. Breathe in the crisp, clean air and experience a peaceful retreat surrounded by nature.",
            "variant": "body"
          },
          {
            "type": "image-gallery",
            "images": [
              {
                "src": "/santa-fe/gallery/Juniper entry.jpg",
                "alt": "Juniper entry"
              },
              {
                "src": "/santa-fe/gallery/indoor.png",
                "alt": "Indoors"
              },
              {
                "src": "/santa-fe/gallery/windmill.jpg",
                "alt": "Windmill"
              }
            ]
          }
        ]
      },
      {
        "id": "schedule",
        "background": {
          "type": "color",
          "value": {
            "type": "brand",
            "value": "black"
          }
        },
        "text-color": {
          "type": "brand",
          "value": "white"
        },
        "content": [
          {
            "type": "text",
            "value": "March 17-22, 2025",
            "variant": "heading"
          },
          {
            "type": "text",
            "value": "Your daily schedule",
            "variant": "subheading"
          },
          {
            "type": "info-card",
            "title": "Morning Movement",
            "description": "Start your day with energy—yoga, workouts led by elite coaches (including the performance coach of Novak Djokovic & former NFL players), or a refreshing hike through stunning mountain trails.",
            "emoji": "🌅",
            "align": "left",
            "variant": "small",
            "dark": true,
            "background": {
              "type": "color",
              "value": {
                "type": "hex",
                "value": "#2A2A2A"
              }
            }
          },
          {
            "type": "info-card",
            "title": "Networking Breakfast",
            "description": "Enjoy a farm-fresh breakfast with organic ingredients, sip on fresh pour-over coffee, and dive into meaningful, high-level conversations.",
            "emoji": "☕",
            "align": "left",
            "variant": "small",
            "dark": true,
            "background": {
              "type": "color",
              "value": {
                "type": "hex",
                "value": "#2A2A2A"
              }
            }
          },
          {
            "type": "info-card",
            "title": "Free Time",
            "description": "Use this time however you need—work, unwind in nature, connect with others, or dive into 1:1 consulting and implementation sessions.",
            "emoji": "🌿",
            "align": "left",
            "variant": "small",
            "dark": true,
            "background": {
              "type": "color",
              "value": {
                "type": "hex",
                "value": "#2A2A2A"
              }
            }
          },
          {
            "type": "info-card",
            "title": "Lunch",
            "description": "A delicious, nourishing meal to fuel the rest of your day.",
            "emoji": "🥗",
            "align": "left",
            "variant": "small",
            "dark": true,
            "background": {
              "type": "color",
              "value": {
                "type": "hex",
                "value": "#2A2A2A"
              }
            }
          },
          {
            "type": "info-card",
            "title": "Afternoon Session",
            "description": "Dive into Hot Seat problem-solving and Expert-Led Q&A sessions, packed with actionable strategies you can immediately apply.",
            "emoji": "💡",
            "align": "left",
            "variant": "small",
            "dark": true,
            "background": {
              "type": "color",
              "value": {
                "type": "hex",
                "value": "#2A2A2A"
              }
            }
          },
          {
            "type": "info-card",
            "title": "Golden Hour",
            "description": "Refresh before dinner, or join optional networking activities like a hands-on cooking class.",
            "emoji": "✨",
            "align": "left",
            "variant": "small",
            "dark": true,
            "background": {
              "type": "color",
              "value": {
                "type": "hex",
                "value": "#2A2A2A"
              }
            }
          },
          {
            "type": "info-card",
            "title": "Dinner & Fireside Chat",
            "description": "A farm-to-table feast, followed by fireside conversations with live music playing in the background—an unforgettable way to end the day.",
            "emoji": "🔥",
            "align": "left",
            "variant": "small",
            "dark": true,
            "background": {
              "type": "color",
              "value": {
                "type": "hex",
                "value": "#2A2A2A"
              }
            }
          },
          {
            "type": "text",
            "value": "Rinse...and repeat!",
            "variant": "side-note",
            "color": {
              "type": "hex",
              "value": "#9BA3AF"
            }
          }
        ]
      },
      {
        "id": "hosts",
        "background": {
          "type": "color",
          "value": {
            "type": "brand",
            "value": "black"
          }
        },
        "text-color": {
          "type": "brand",
          "value": "white"
        },
        "content": [
          {
            "type": "text",
            "value": "Meet your hosts",
            "variant": "heading"
          },
          {
            "type": "profile-gallery",
            "profiles": [
              {
                "name": "Nick Sonnenberg",
                "title": "Business Efficiency Expert",
                "image": "/santa-fe/hosts/nick-sonnenberg-photo.png",
                "description": "Nick Sonnenberg is the world's leading business efficiency expert, founder and CEO of Leverage, an Inc. columnist and author. His CPR® Business Efficiency Framework helps companies maximize performance and reduce overwhelm, consistently resulting in greater output, less stress, and happier employees."
              },
              {
                "name": "Jessica Carroll",
                "title": "Premier Event Strategist & Growth Expert",
                "image": "/santa-fe/hosts/jessica-carroll-photo.jpg",
                "description": "Jessica Carroll is a premier event strategist and growth expert, specializing in high-impact experiences that connect top entrepreneurs, executives, and experts. As Head of Growth & Events at Leverage, she designs exclusive masterminds and workshops that drive strategic partnerships and business breakthroughs."
              }
            ]
          }
        ]
      },
      {
        "id": "origin-story",
        "background": {
          "type": "color",
          "value": {
            "type": "brand",
            "value": "black"
          }
        },
        "text-color": {
          "type": "brand",
          "value": "white"
        },
        "content": [
          {
            "type": "text",
            "value": "How this all began...",
            "variant": "heading"
          },
          {
            "type": "linkedin-post",
            "value": "https://www.linkedin.com/embed/feed/update/urn:li:share:7295466462092152850"
          }
        ]
      },
      {
        "id": "faq",
        "background": {
          "type": "color",
          "value": {
            "type": "brand",
            "value": "white"
          }
        },
        "text-color": {
          "type": "brand",
          "value": "black"
        },
        "content": [
          {
            "type": "text",
            "value": "Frequently asked questions",
            "variant": "heading"
          },
          {
            "type": "accordion",
            "items": [
              {
                "title": "Are there fun activities available while we are in Santa Fe?",
                "content": "YES! Optional horseback riding, Equus Experience with horses, astrology, fireside chats, hiking, workouts, watercolor painting, yoga, and more."
              },
              {
                "title": "Where is the retreat located?",
                "content": "The Optimize Retreat will take place at MEA located 25 minutes from downtown on a stunning 2,500-acre private ranch. 77 Saddleback Ranch, Lamy, NM 87540"
              },
              {
                "title": "Who should attend the Optimize Retreat?",
                "content": "This event is ideal for business owners and professionals eager to fast-track their personal and business growth. It's an opportunity to form valuable connections while learning to navigate and eliminate business obstacles."
              },
              {
                "title": "What are the key topics covered during the retreat?",
                "content": "The retreat will cover a range of topics focused on optimizing business operations, including but not limited to productivity hacks, leveraging biz ops technology, team efficiency strategies, and uncovering hidden growth opportunities. The sessions are interactive, ensuring practical and actionable insights."
              },
              {
                "title": "Who will be leading the Optimize Retreat?",
                "content": "The retreat will be led by Nick Sonnenberg, CEO of Leverage, and Jessica Carroll, Head of Events & Growth at Leverage. Both are seasoned experts in operational efficiency and business strategy, bringing a wealth of knowledge and practical insights to the event."
              },
              {
                "title": "Is there an additional cost for extra activities?",
                "content": "The activities such as horseback riding, cooking classes, painting, are optional and may incur additional costs."
              },
              {
                "title": "What is the accommodation arrangement for the retreat?",
                "content": "Housing is included. All attendees will get their own luxury room at the resort."
              },
              {
                "title": "Are meals included in the retreat?",
                "content": "Meals during the retreat days are included as part of the event. Participants will enjoy a variety of dining options, catering to different dietary needs. Please inform us of any dietary restrictions in advance."
              },
              {
                "title": "How can I prepare for the retreat to get the most out of it?",
                "content": "We recommend that participants come prepared with specific business challenges or goals they wish to address. Bringing a notebook or digital device for note-taking can also be helpful. Prior to the retreat, participants will receive a welcome pack with more detailed information on how to prepare."
              },
              {
                "title": "Will there be networking opportunities during the event?",
                "content": "Absolutely. The Optimize Retreat provides ample opportunities for networking with fellow business leaders and professionals. The informal setting and group activities are designed to foster connections and collaborations."
              },
              {
                "title": "Is transportation included in the retreat?",
                "content": "Yes! We will arrange transportation to and from the airport to the retreat center. If you leave early or arrive late, there may be an additional fee"
              },
              {
                "title": "Is there a gym?",
                "content": "Yes! The resort has a gym equipped with a treadmill, rowing machine, stationary bike, weights, and dumbbells."
              },
              {
                "title": "What is the dress code? What to Pack?",
                "content": "Casual and comfortable. Bring: Layers - clothing you can easily layer for changing temperatures.\nCasual & Comfortable - relaxed, comfortable outfits suitable for various activities.\nClose-Toed Shoes - required for certain activities—pack sneakers or sturdy shoes.\nWorkout Attire - bring activewear for workouts, walking, or any movement-based sessions."
              }
            ]
          },
          {
            "type": "text",
            "value": "Can't find your question? Email jessica.carroll@getleverage.com",
            "variant": "side-note",
            "color": {
              "type": "hex",
              "value": "#9BA3AF"
            }
          }
        ]
      },
      {
        "id": "cta",
        "background": {
          "type": "gradient",
          "direction": "right",
          "value": [
            {
              "type": "brand",
              "value": "yellow"
            },
            {
              "type": "hex",
              "value": "#d97706"
            }
          ]
        },
        "content": [
          {
            "type": "text",
            "value": "Time to RE/SET",
            "variant": "heading"
          },
          {
            "type": "text",
            "value": "EMPOWER - ELEVATE - EXCEL",
            "variant": "subheading"
          },
          {
            "type": "text",
            "value": "Think this could be valuable to you?",
            "variant": "subheading"
          },
          {
            "type": "button",
            "text": "Apply Now",
            "action": "href",
            "target": "https://meetings.hubspot.com/jessica-carroll1/events?uuid=0eecf81e-3cf5-4347-8551-6607c1c0d6df",
            "variant": "black",
            "align": "center"
          }
        ]
      }
    ]
  },
  {
    "id": "cincinnati",
    "details": {
      "title": "VIP Business Workshop",
      "subtitle": "Cincinnati Reds Baseball Stadium",
      "location": "Cincinnati, Ohio",
      "dates": "May 22-23, 2025",
      "preview-image": "/cincinnati/background.jpg"
    },
    "navbar": {
      "title": "OG EVENTS",
      "content": [
        {
          "type": "button",
          "text": "Apply Now",
          "variant": "nav-button",
          "action": "href",
          "target": "https://meetings.hubspot.com/jessica-carroll1/events?uuid=0eecf81e-3cf5-4347-8551-6607c1c0d6df"
        }
      ]
    },
    "modals": [],
    "heroSection": {
      "background": {
        "type": "image",
        "value": "/cincinnati/background.jpg"
      },
      "overlay": {
        "type": "gradient",
        "value": [
          {
            "type": "brand",
            "value": "black",
            "opacity": 0.6
          },
          {
            "type": "brand",
            "value": "black",
            "opacity": 0.6
          },
          {
            "type": "hex",
            "value": "#C6011F"  
          }
        ]
      },
      "content": [
        {
          "type": "text",
          "value": "Invite-Only",
          "variant": "hero-subheading"
        },
        {
          "type": "text",
          "value": "BUSINESS WORKSHOP",
          "variant": "hero-heading"
        },
        {
          "type": "text",
          "value": "Inside the Executive Suite",
          "variant": "hero-subheading"
        },
        {
          "type": "text",
          "value": "Cincinnati, Ohio",
          "variant": "hero-location"
        },
        {
          "type": "text",
          "value": "May 22-23, 2025",
          "variant": "hero-dates"
        },
        {
          "type": "button",
          "text": "Apply Now",
          "action": "href",
          "target": "https://meetings.hubspot.com/jessica-carroll1/events?uuid=0eecf81e-3cf5-4347-8551-6607c1c0d6df",
          "variant": "hero-button",
        }
      ]
    },
    "contentSections": [
      {
        "id": "about",
        "background": {
          "type": "gradient",
          "value": [
            {
              "type": "hex",
              "value": "#C6011F"
            },
            {
              "type": "brand",
              "value": "navy"
            },
            {
              "type": "brand",
              "value": "black"
            }
          ]
        },
        "text-color": {
          "type": "brand",
          "value": "white"
        },
        "content": [
          {
            "type": "text",
            "value": "Introducing... A Business Workshop Like No Other",
            "variant": "heading"
          },
          {
            "type": "image",
            "value": "/cincinnati/info-cards/Hot seat sessions at the Reds .jpg"
          },
          {
            "type": "text",
            "value": "Join an elite circle of Entrepreneurs, Executives, and Experts for an exclusive two-day event where visionaries connect and transform their businesses together. Take your seat at the table with other high-level leaders who understand the challenges at the top.",
            "variant": "body",
            "align": "left"
          },
          {
            "type": "text",
            "value": "Our formula is simple",
            "variant": "paragraph-heading",
            "underline": true,
            "align": "left"
          },
          {
            "type": "list",
            "items": [
              {
                "type": "text",
                "value": "30 high-caliber business leaders +",
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": "Exclusive Cincinnati venue +",
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": "Collaborative problem-solving +",
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": "Structured networking opportunities =",
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": "High-impact event to efficiently optimize your business and personal life.",
                "variant": "list-item",
                "align": "left",
                "color": {
                  "type": "brand",
                  "value": "yellow"
                }
              }
            ]
          },
          {
            "type": "text",
            "value": "We are highly selective and keep our group small.",
            "variant": "paragraph-heading",
            "underline": true,
            "align": "left"
          },
          {
            "type": "text",
            "value": "Attendees include:",
            "variant": "paragraph-heading",
            "underline": true,
            "align": "left"
          },
          {
            "type": "list",
            "variant": "bulleted",
            "items": [
              {
                "type": "text",
                "value": "NYT best selling authors",
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": "Fortune 500 executives from Chipotle, Starbucks, AirBnB",
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": "Top computer hackers and cyber security experts. Leaders in the field of AI.",
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": "Peak-performance wellness experts (including Novak Djokovick's coach)",
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": "NFL players",
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": "Entrepreneurs of 8-9 figure companies.",
                "variant": "list-item",
                "align": "left"
              }
            ]
          },
          {
            "type": "text",
            "value": "Why attend?",
            "variant": "paragraph-heading",
            "underline": true,
            "align": "left"
          },
          {
            "type": "list",
            "variant": "bulleted",
            "items": [
              {
                "type": "text",
                "value": <><span className="text-brand-yellow">Exclusive & Curated</span>: Limited to 30 participants for meaningful connections. Spots are extremely limited & each applicant is vetted extensively.</>,
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": <><span className="text-brand-yellow">Actionable Solutions</span>: Spots are extremely limited & each applicant is vetted extensively.</>,
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": <><span className="text-brand-yellow">VIP Access</span>: Unique opportunity to meet and watch the game with Reds GM in the Executive Suite.</>,
                "variant": "list-item",
                "align": "left"
              },
              {
                "type": "text",
                "value": <><span className="text-brand-yellow">Real ROI</span>: Past attendees report value equivalent to $250,000 in consulting.</>,
                "variant": "list-item",
                "align": "left"
              }
            ]
          },
          {
            "type": "text",
            "value": "We’re ditching the typical conference room for a Major League stadium—because real transformation doesn’t happen in rows of chairs. This is a high-impact, intimate workshop designed for meaningful breakthroughs, not endless panels or surface-level content. Just powerful strategies, real conversations, and connections with leaders who truly get your challenges.",
            "variant": "body",
            "align": "left"
          },
          {
            "type": "text",
            "value": "Picture this: You’re standing on the field at Great American Ball Park, surrounded by top entrepreneurs, execs, and experts—ex-CHRO of Chipotle, an AirBnB founder, a VP at Amazon Prime, bestselling authors, TED speakers… even Novak Djokovic’s performance coach. Oh, and the owner of the Reds + key execs? Yeah, they’ll be there too.",
            "variant": "body",
            "align": "left"
          }
        ]
      },
      {
        "id": "past-events",
        "background": {
          "type": "color",
          "value": {
            "type": "brand",
            "value": "white"
          }
        },
        "text-color": {
          "type": "brand",
          "value": "black"
        },
        "content": [
          {
            "type": "text",
            "value": "Past events",
            "variant": "heading"
          },
          {
            "type": "image-buttons",
            "items": [
              {
                "text": "Mexico",
                "image": "/cincinnati/mexico-thumbnail.jpg",
                "action": "modal",
                "target": "mexico-video"
              },
              {
                "text": "Idaho",
                "image": "/cincinnati/idaho-thumbnail.jpg",
                "action": "modal",
                "target": "idaho-video"
              }
            ]
          }
        ]
      },
      {
        "id": "day1",
        "background": {
          "type": "color",
          "value": {
            "type": "brand",
            "value": "off-white"
          }
        },
        "text-color": {
          "type": "brand",
          "value": "black"
        },
        "content": [
          {
            "type": "text",
            "value": "Day 1:",
            "variant": "heading"
          },
          {
            "type": "text",
            "value": "What to expect",
            "variant": "subheading"
          },
          {
            "type": "info-card",
            "title": "Hot Seat Sessions",
            "description": "A safe space to share your struggles without the fear of looking weak in front of your team or industry. Receive undivided attention and strategic brainstorming from peers who truly \"get it\" and have overcome similar obstacles.",
            "image": "/cincinnati/info-cards/Hot seat sessions at the Reds .jpg",
            "align": "left",
            "background": {
              "type": "color",
              "value": {
                "type": "brand",
                "value": "white"
              }
            }
          },
          {
            "type": "info-card",
            "title": "Q&A with Reds GM",
            "description": "Gain insights from the General Manager and President of Baseball Operations. Learn leadership strategies that have built lasting legacies both on and off the field.",
            "image": "/cincinnati/info-cards/Q A GM .jpeg",
            "align": "right",
            "background": {
              "type": "color",
              "value": {
                "type": "brand",
                "value": "white"
              }
            }
          },
          {
            "type": "info-card",
            "title": "Expert-Led Insights",
            "description": "Intimate discussions from world leaders on a wide of topics from Efficiency, AI, Marketing, Team Culture, Health, and more.",
            "image": "/cincinnati/info-cards/Expert led session .JPG",
            "align": "left",
            "background": {
              "type": "color",
              "value": {
                "type": "brand",
                "value": "white"
              }
            }
          },
          {
            "type": "info-card",
            "title": "Batting Cages",
            "description": "Hit balls with Reds alumni pitchers and experience the thrill that most only dream about. A reminder that success should be both meaningful and enjoyable.",
            "image": "/cincinnati/info-cards/batting cages reds .jpeg",
            "align": "right",
            "background": {
              "type": "color",
              "value": {
                "type": "brand",
                "value": "white"
              }
            }
          },
          {
            "type": "info-card",
            "title": "Private Reds Hall of Fame and Museum",
            "description": "Led by one of the Founders of Reds. One of the only MLB stadiums with an attached museum, the Reds Hall of Fame houses artifacts from legends like Pete Rose and Joe Morgan, along with interactive exhibits detailing the franchise’s storied past.",
            "image": "/cincinnati/info-cards/hall of fame Reds .jpg",
            "align": "left",
            "background": {
              "type": "color",
              "value": {
                "type": "brand",
                "value": "white"
              }
            }
          },
          {
            "type": "info-card",
            "title": "Exclusive Dinner",
            "description": "Forge genuine connections with like-minded leaders during an upscale dinner. Build relationships that extend beyond business—the kind that make success less isolating.",
            "image": "/cincinnati/info-cards/Dinner option 2 .jpeg",
            "align": "right",
            "background": {
              "type": "color",
              "value": {
                "type": "brand",
                "value": "white"
              }
            }
          }
        ]
      },
      {
        "id": "day2",
        "background": {
          "type": "gradient",
          "value": [
            {
              "type": "brand",
              "value": "off-white"
            },
            {
              "type": "brand",
              "value": "off-white"
            },
            {
              "type": "hex",
              "value": "#C6011F"
            },
          ]
        },
        "text-color": {
          "type": "brand",
          "value": "black"
        },
        "content": [
          {
            "type": "text",
            "value": "Day 2:",
            "variant": "heading"
          },
          {
            "type": "info-card",
            "title": "Follow-Up Hot Seat Sessions",
            "description": "Validate your decisions with actionable feedback from your new trusted circle of advisors. Leave with the confidence to execute at the highest level.",
            "image": "/cincinnati/info-cards/Follow - Up Hot Seat Sessions .JPG",
            "align": "left",
            "background": {
              "type": "color",
              "value": {
                "type": "brand",
                "value": "white"
              }
            }
          },
          {
            "type": "info-card",
            "title": "Q&A with Reds President & COO",
            "description": "Exclusive insights from the President & Chief Operating Officer on building organizations that stand the test of time and create meaningful impact.",
            "image": "/cincinnati/info-cards/Q A w_ president and COO .jpeg",
            "align": "right",
            "background": {
              "type": "color",
              "value": {
                "type": "brand",
                "value": "white"
              }
            }
          },
          {
            "type": "info-card",
            "title": "On-Field Batting Practice",
            "description": "Step onto the same field where legends have stood. Smell the grass, feel the lights, and if you're lucky, catch a ball—because moments like this aren’t meant to stay in the stands.",
            "image": "/cincinnati/placeholder.jpg",
            "align": "left",
            "background": {
              "type": "color",
              "value": {
                "type": "brand",
                "value": "white"
              }
            }
          },
          {
            "type": "info-card",
            "title": "VIP Game Viewing: Executive Suite Experience",
            "description": "Savor the freedom-driven lifestyle you’ve earned—surrounded by peers who know what it takes to get there. Watch the game in VIP style from a private executive suite alongside the President and COO of the Cincinnati Reds—beer in hand, a gourmet dinner at your side, and Elly De La Cruz sending one over the fence.",
            "image": "/cincinnati/info-cards/VIP Game Viewing .jpg",
            "align": "right",
            "background": {
              "type": "color",
              "value": {
                "type": "brand",
                "value": "white"
              }
            }
          }
        ]
      },
      {
        "id": "benefits",
        "background": {
          "type": "gradient",
          "value": [
            {
              "type": "hex",
              "value": "#C6011F"
            },
            {
              "type": "brand",
              "value": "navy"
            }
          ]
        },
        "text-color": {
          "type": "brand",
          "value": "white"
        },
        "content": [
          {
            "type": "text",
            "value": "Secure Your Seat Among the Leaders Who Redefine Success",
            "variant": "heading"
          },
          {
            "type": "text",
            "value": "May 22 & 23, 2025",
            "variant": "subheading"
          },
          {
            "type": "info-card",
            "title": "Elevate Your Business & Legacy",
            "description": "Go beyond just growth—design a business that works for you. Gain real-world insights from those who’ve built meaningful success and sustainable systems—without burning out.",
            "emoji": "🚀",
            "align": "left",
            "variant": "small",
            "dark": true,
            "background": {
              "type": "color",
              "value": {
                "type": "hex",
                "value": "#2A2A2A"
              }
            }
          },
          {
            "type": "info-card",
            "title": "Forge Your Inner Circle",
            "description": "No more doing it alone at the top. Surround yourself with accomplished peers who understand your pace, your pressure, and your vision. Walk away with powerful relationships that bring clarity, support, and momentum.",
            "emoji": "🤝",
            "align": "left",
            "variant": "small",
            "dark": true,
            "background": {
              "type": "color",
              "value": {
                "type": "hex",
                "value": "#2A2A2A"
              }
            }
          },
          {
            "type": "info-card",
            "title": "Experience What You’ve Earned",
            "description": "Enjoy the kind of access and ease that reminds you why you’ve worked so hard. Private moments, rare privileges, and a space where success feels less like a grind—and more like a life well-lived.",
            "emoji": "🔑",
            "align": "left",
            "variant": "small",
            "dark": true,
            "background": {
              "type": "color",
              "value": {
                "type": "hex",
                "value": "#2A2A2A"
              }
            }
          }
        ]
      },
      {
        "id": "past-speakers",
        "background": {
          "type": "color",
          "value": {
            "type": "brand",
            "value": "black"
          }
        },
        "text-color": {
          "type": "brand",
          "value": "white"
        },
        "content": [
          {
            "type": "text",
            "value": "Past speakers",
            "variant": "heading"
          },
          {
            "type": "profile-gallery",
            "profiles": [
              {
                "name": "Chip Conley",
                "title": "Hospitality Pioneer & Airbnb Strategic Advisor",
                "image": "/cincinnati/speakers/chip-conley.jpeg",
                "description": "New York Times bestselling author Chip Conley is the hospitality maverick who helped Airbnb's founders turn their fast-growing tech start-up into the global hospitality brand."
              },
              {
                "name": "Mike Koenigs",
                "title": "Marketing Expert & Business Growth Strategist",
                "image": "/cincinnati/speakers/mike-koenigs.jpeg",
                "description": "Mike Koenigs is a 13-time #1 bestselling author, 'Marketer of the Year', and serial entrepreneur best known for turning business owners into Transformational Business Celebrity Influencers."
              },
              {
                "name": "Marissa Andrada",
                "title": "Corporate Leadership & Culture Expert",
                "image": "/cincinnati/speakers/marissa-andrada.jpeg",
                "description": "Krispy Kreme's Independent Board Director & former Chipotle CHRO, Marissa Andrada is a people-focused thought leader. She excels in strategy, talent development, and navigating founder/CEO transitions."
              },
              {
                "name": "Blake Eastman",
                "title": "Behavioral Scientist & Leadership Coach",
                "image": "/cincinnati/speakers/blake-eastman.jpeg",
                "description": "Behavioral scientist Blake Eastman helps CEOs, entrepreneurs, and executives craft a customized style of behavioral leadership. He is the founder of The Nonverbal Group and former adjunct psychology professor at the City University of New York."
              }
            ]
          }
        ]
      },
      {
        "id": "testimonials",
        "background": {
          "type": "color",
          "value": {
            "type": "brand",
            "value": "white"
          }
        },
        "content": [
          {
            "type": "text",
            "value": "What our attendees say",
            "variant": "heading"
          },
          {
            "type": "testimonial-carousel",
            "value": [
              {
                "quote": "Attending the Baja OG event was truly transformative. I formed deep connections with inspiring individuals and gained invaluable insights that have already made a lasting impact. In fact, just one week after the event, I launched a new business with one of my OG connections! Every aspect of the experience was thoughtfully curated, set against an absolutely breathtaking backdrop. I can't recommend it highly enough!",
                "name": "Jason Mewis",
                "role": "President & Founder @ Engcomp",
                "avatar": "/cincinnati/testimonials/jason-mewis.jpeg"
              },
              {
                "quote": "The power of Hot Seats is exponential when you bring talented people together who share openly, with great vulnerability, their thought leadership and openly ask for help. It's hard, frankly, for anyone to ask for help. At the OG Retreat, there's so much talent in the room. To pay any one of these people to consult with you for a day is priceless, but to get all this together in one room, weighing in, elevates the impact.",
                "name": "Robert S. Castellini",
                "role": "Managing Director - Investments @ Wells Fargo",
                "avatar": "/cincinnati/testimonials/robert-castellini.png"
              },
              {
                "quote": "I came to this OG Retreat because I really needed a vacation with other ambitious entrepreneurs—it's all about that social connection and stimulating conversations. I'm weird and it's hard to find really solid connections with people because of the position that I'm in my work. But here I was, surrounded by people who get me.",
                "name": "Dan Guido",
                "role": "CEO & Co-Foundern of Trail of Bits - Cybersecurity Firm",
                "avatar": "/cincinnati/testimonials/dan-guido.jpg"
              },
              {
                "quote": "This mastermind gave me clear direction and actionable strategies to finally hit my business goals that I've been putting on paper but haven't been able to achieve. I believe the techniques and strategies that I've learned here today will 10x my growth in just one year.",
                "name": "Dr. Donald Shrump",
                "role": "Sports Performance Coach w/ a roster of top athletes like Novak Djokovic",
                "avatar": "/cincinnati/testimonials/donald-shrump.png"
              },
              {
                "quote": "Nick does a great job putting together these events and really bringing some some legitimate experts in their field. Every time I come to a leverage event, I'm always learning some really incredible stuff. Leverages businesses at optimization. I learned strategies to save a second here, a minute there, an hour here, and really cut down and become more efficient and optimize my business.",
                "name": "Josh Martin",
                "role": "Former Pro NFL player - Owner of Smoothie King Franchises",
                "avatar": "/cincinnati/testimonials/josh-martin.png"
              }
            ]
          },
          {
            "type": "video-gallery",
            "value": [
              {
                "src": "https://app.searchie.io/file/92QbmGMgDp/embed"
              },
              {
                "src": "https://app.searchie.io/file/w2VaYAeeqM/embed"
              },
              {
                "src": "https://app.searchie.io/file/kqkOLVyMq4/embed"
              },
              {
                "src": "https://app.searchie.io/file/l2RZ3kMx2a/embed"
              },
              {
                "src": "https://app.searchie.io/file/VDGxYnKjNW/embed"
              },
              {
                "src": "https://app.searchie.io/file/5qnlxWBvDr/embed"
              },
              {
                "src": "https://app.searchie.io/file/RD6dJ1QPqQ/embed"
              },
              {
                "src": "https://app.searchie.io/file/92QbZko9Dp/embed"
              }
            ],
            "initialDisplay": 4,
            "button": {
              "text": "See More Testimonials",
              "variant": "yellow"
            }
          }
        ]
      },
      {
        "id": "who-for",
        "background": {
          "type": "color",
          "value": {
            "type": "brand",
            "value": "off-white"
          }
        },
        "text-color": {
          "type": "brand",
          "value": "black"
        },
        "content": [
          {
            "type": "text",
            "value": "Who this event is for",
            "variant": "heading"
          },
          {
            "type": "list",
            "items": [
              {
                "type": "text",
                "value": "✓ Established business owners generating $1M+ in annual revenue",
                "variant": "list-item"
              },
              {
                "type": "text",
                "value": "✓ C-suite executives leading teams of 10+ employees",
                "variant": "list-item"
              },
              {
                "type": "text",
                "value": "✓ Industry experts with proven track records of innovation",
                "variant": "list-item"
              },
              {
                "type": "text",
                "value": "✓ Visionaries committed to both business growth and personal fulfillment",
                "variant": "list-item"
              },
              {
                "type": "text",
                "value": "✓ Leaders seeking high-level connections and strategic partnerships",
                "variant": "list-item"
              },
              {
                "type": "text",
                "value": "✓ Decision-makers ready to implement transformative changes",
                "variant": "list-item"
              }
            ]
          },
          {
            "type": "text",
            "value": <>Who this event is <span style={{ color: "#C6011F" }}>NOT</span> for</>,
            "variant": "heading"
          },
          {
            "type": "list",
            "items": [
              {
                "type": "text",
                "value": "✗ Early-stage entrepreneurs still validating their business model",
                "variant": "list-item",
              },
              {
                "type": "text",
                "value": "✗ Individuals primarily focused on tactical implementation rather than strategic direction",
                "variant": "list-item",
              },
              {
                "type": "text",
                "value": "✗ Those unwilling to be vulnerable and share real challenges",
                "variant": "list-item",
              },
              {
                "type": "text",
                "value": "✗ Networkers only interested in transactional relationships",
                "variant": "list-item",
              },
              {
                "type": "text",
                "value": "✗ People seeking a passive learning experience without active participation",
                "variant": "list-item",
              },
              {
                "type": "text",
                "value": "✗ Leaders not ready to both give and receive honest feedback",
                "variant": "list-item",
              }
            ]
          }
        ]
      },
      {
        "id": "hosts",
        "background": {
          "type": "color",
          "value": {
            "type": "brand",
            "value": "black"
          }
        },
        "text-color": {
          "type": "brand",
          "value": "white"
        },
        "content": [
          {
            "type": "text",
            "value": "Meet your hosts",
            "variant": "heading"
          },
          {
            "type": "profile-gallery",
            "profiles": [
              {
                "name": "Nick Sonnenberg",
                "title": "Business Efficiency Expert",
                "image": "/santa-fe/hosts/nick-sonnenberg-photo.png",
                "description": "Nick Sonnenberg is the world's leading business efficiency expert, founder and CEO of Leverage, an Inc. columnist and author. His CPR® Business Efficiency Framework helps companies maximize performance and reduce overwhelm, consistently resulting in greater output, less stress, and happier employees."
              },
              {
                "name": "Jessica Carroll",
                "title": "Premier Event Strategist & Growth Expert",
                "image": "/santa-fe/hosts/jessica-carroll-photo.jpg",
                "description": "Jessica Carroll is a premier event strategist and growth expert, specializing in high-impact experiences that connect top entrepreneurs, executives, and experts. As Head of Growth & Events at Leverage, she designs exclusive masterminds and workshops that drive strategic partnerships and business breakthroughs."
              }
            ]
          }
        ]
      },
      {
        "id": "cta",
        "background": {
          "type": "gradient",
          "direction": "right",
          "value": [
            {
              "type": "hex",
              "value": "#C6011F"
            },
            {
              "type": "brand",
              "value": "navy"
            }
          ]
        },
        "text-color": {
          "type": "brand",
          "value": "white"
        },
        "content": [
          {
            "type": "text",
            "value": "Ready to Join the Elite Circle of Game-Changers?",
            "variant": "heading"
          },
          {
            "type": "text",
            "value": "This isn’t just another networking event—it’s your invitation to step into a room where real influence, impact, and growth happen.",
            "variant": "subheading"
          },
          {
            "type": "text",
            "value": "You’ve built success. But what got you here won’t get you to what’s next. You don’t need another surface-level seminar—you need an exclusive circle of sharp minds who challenge your thinking, expand your vision, and unlock new levels of freedom, wealth, and legacy.",
            "variant": "body"
          },
          {
            "type": "text",
            "value": "Book your call with Jessica and apply today:",
            "variant": "body",
            "color": {
              "type": "brand",
              "value": "yellow"
            }
          },
          {
            "type": "button",
            "text": "Explore if you’re a fit",
            "action": "href",
            "target": "https://meetings.hubspot.com/jessica-carroll1/events?uuid=0eecf81e-3cf5-4347-8551-6607c1c0d6df",
            "variant": "white",
            "align": "center"
          }
        ]
      }
    ]
  }
]
