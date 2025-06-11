export const events = [
  {
    id: "santa-fe",
    details: {
      title: "RE/SET",
      subtitle: "Mastermind Retreat",
      location: "Santa Fe, New Mexico",
      dates: "March 17-22, 2025",
      "preview-image": "/santa-fe/background.webp",
    },
    navbar: {
      title: "RE/SET",
      content: [
        {
          type: "button",
          text: "Apply Now",
          variant: "nav-button",
          action: "href",
          target:
            "https://meetings.hubspot.com/jessica-carroll1/events?uuid=0eecf81e-3cf5-4347-8551-6607c1c0d6df",
        },
      ],
    },
    modals: [
      {
        id: "idaho-video",
        title: "Idaho Video",
        content: [
          {
            type: "video",
            value: "https://app.searchie.io/file/3w2VRnXO2M/embed",
          },
        ],
      },
      {
        id: "mexico-video",
        title: "Mexico Video",
        content: [
          {
            type: "video",
            value: "https://app.searchie.io/file/P52406xz21/embed",
          },
        ],
      },
    ],
    heroSection: {
      background: {
        type: "image",
        value: "/santa-fe/background.webp",
      },
      overlay: {
        type: "gradient",
        value: [
          {
            type: "brand",
            value: "black",
            opacity: 0.6,
          },
          {
            type: "brand",
            value: "black",
            opacity: 0.6,
          },
          {
            type: "hex",
            value: "#484c6c",
          },
        ],
      },
      content: [
        {
          type: "text",
          value: "Mastermind Retreat",
          variant: "hero-subheading",
        },
        {
          type: "text",
          value: "RE/SET",
          variant: "hero-heading-short",
        },
        {
          type: "text",
          value: "Santa Fe, New Mexico",
          variant: "hero-location",
        },
        {
          type: "text",
          value: "March 17-22, 2025",
          variant: "hero-dates",
        },
        {
          type: "button",
          text: "Watch Recap Video",
          action: "modal",
          target: "idaho-video",
          variant: "hero-button",
        },
      ],
    },
    contentSections: [
      {
        id: "about",
        background: {
          type: "gradient",
          value: [
            {
              type: "hex",
              value: "#484c6c",
            },
            {
              type: "brand",
              value: "navy",
            },
            {
              type: "brand",
              value: "black",
            },
          ],
        },
        "text-color": {
          type: "brand",
          value: "white",
        },
        content: [
          {
            type: "text",
            value: "Not your typical business event...",
            variant: "heading",
          },
          {
            type: "image",
            value: "/santa-fe/og-group.png",
            align: "middle",
          },
          {
            type: "text",
            value:
              "Join a select group of entrepreneurs, executives, and experts for a transformative 6-day retreat in Santa Fe, New Mexico. Designed to be the anti-conference, RE/SET offers intimate, high-value experiences that move beyond traditional networking and generic content.",
            variant: "body",
            align: "left",
          },
          {
            type: "text",
            value: "Our formula is simple",
            variant: "paragraph-heading",
            underline: true,
            align: "left",
          },
          {
            type: "list",
            items: [
              {
                type: "text",
                value: "30 inspiring humans +",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: "Beautiful location +",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: "Culinary excellence +",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: "Flowing format to meaningfully connect =",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value:
                  "Transformative event to efficiently optimize your business and personal life.",
                variant: "list-item",
                align: "left",
                color: {
                  type: "brand",
                  value: "yellow",
                },
              },
            ],
          },
          {
            type: "text",
            value: "We are highly selective and keep our group small.",
            variant: "paragraph-heading",
            underline: true,
            align: "left",
          },
          {
            type: "text",
            value: "Attendees include:",
            variant: "paragraph-heading",
            underline: true,
            align: "left",
          },
          {
            type: "list",
            variant: "bulleted",
            items: [
              {
                type: "text",
                value: "NYT best selling authors",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value:
                  "Fortune 500 executives from Chipotle, Starbucks, AirBnB",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value:
                  "Top computer hackers and cyber security experts. Leaders in the field of AI.",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value:
                  "Peak-performance wellness experts (including Novak Djokovick's coach)",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: "NFL players",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: "Entrepreneurs of 8-9 figure companies.",
                variant: "list-item",
                align: "left",
              },
            ],
          },
          {
            type: "text",
            value: "Why attend?",
            variant: "paragraph-heading",
            align: "left",
            underline: true,
          },
          {
            type: "list",
            variant: "bulleted",
            items: [
              {
                type: "text",
                value: (
                  <>
                    <span className="font-bold text-brand-yellow">
                      Exclusive & Curated:
                    </span>{" "}
                    Only 30 participants, ensuring deep connections and
                    meaningful discussions.
                  </>
                ),
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: (
                  <>
                    <span className="font-bold text-brand-yellow">
                      Actionable, Not Theoretical:
                    </span>{" "}
                    No fluff—just real conversations with real impact on your
                    business and life.
                  </>
                ),
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: (
                  <>
                    <span className="font-bold text-brand-yellow">
                      Immersive & Rejuvenating:
                    </span>{" "}
                    A unique mix of strategic insights, networking, and
                    relaxation in a world-class setting.
                  </>
                ),
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: (
                  <>
                    <span className="font-bold text-brand-yellow">
                      Hands on Consulting:
                    </span>{" "}
                    Let's sit down, open up the laptop, and figure out how we
                    can use systems, automation and AI to run a better business.
                  </>
                ),
                variant: "list-item",
                align: "left",
              },
            ],
          },
          {
            type: "text",
            value:
              "The real magic of the event is the Attendees. We turn down far more people than we accept. Attendees range from world famous NYT best selling authors, executives from Chiptole, Startbucks, AirBnB. Top computer hackers and cyber security experts. Leaders in the field of AI. Health experts (including Novak Djokovick's coach). Former NFL players & entrepreneurs of 8 and 9 figure companies.",
            variant: "body",
            align: "left",
          },
          {
            type: "text",
            value:
              "Past attendees have said that if they had to pay for all the consulting/advice they got during the event, it would've been over $250,000.",
            variant: "body",
            align: "left",
          },
          {
            type: "text",
            value:
              "So we're ditching the conference room for luxury ranch vibes, real breakthroughs, and zero fluff. No endless panels, no jam-packed schedules—just real solutions, a clear game plan, and powerful connections with top business leaders who actually know you and care.",
            variant: "body",
            align: "left",
          },
        ],
      },
      {
        id: "expectations",
        background: {
          type: "color",
          value: {
            type: "brand",
            value: "off-white",
          },
        },
        "text-color": {
          type: "brand",
          value: "black",
        },
        content: [
          {
            type: "text",
            value: "What to expect",
            variant: "heading",
          },
          {
            type: "info-card",
            title: "Tailored Hot Seats",
            description:
              "Bring your biggest challenge (or opportunity!) to the table and get laser-focused feedback from a powerhouse room of brilliant minds.",
            image: "/santa-fe/what-to-expect/hot-seat.png",
            align: "left",
            background: {
              type: "color",
              value: {
                type: "brand",
                value: "white",
              },
            },
          },
          {
            type: "info-card",
            title: "Expert-Led Insights",
            description:
              "Intimate discussions from world leaders on a wide range of topics from AI, Cyber Security, Team Culture, Health, and more.",
            image: "/santa-fe/what-to-expect/insights.jpg",
            align: "right",
            background: {
              type: "color",
              value: {
                type: "brand",
                value: "white",
              },
            },
          },
          {
            type: "info-card",
            title: "Real Relationships, Real Impact",
            description:
              "Connect with like-minded leaders who get it. No fluff—just high-value, lasting relationships.",
            image: "/santa-fe/what-to-expect/relationships.jpg",
            align: "left",
            background: {
              type: "color",
              value: {
                type: "brand",
                value: "white",
              },
            },
          },
          {
            type: "info-card",
            title: "Recharge & Reflect",
            description:
              "Soak in Santa Fe's natural beauty. Hike, unwind by the fire, or dive into deep 1:1 convos. You'll leave clear, energized, and ready to optimize.",
            image: "/santa-fe/what-to-expect/recharge.png",
            align: "right",
            background: {
              type: "color",
              value: {
                type: "brand",
                value: "white",
              },
            },
          },
        ],
      },
      {
        id: "past-events",
        background: {
          type: "color",
          value: {
            type: "brand",
            value: "white",
          },
        },
        "text-color": {
          type: "brand",
          value: "black",
        },
        content: [
          {
            type: "text",
            value: "Past events",
            variant: "heading",
          },
          {
            type: "image-buttons",
            items: [
              {
                text: "Mexico",
                image: "/santa-fe/mexico-thumbnail.jpg",
                action: "modal",
                target: "mexico-video",
              },
              {
                text: "Idaho",
                image: "/santa-fe/idaho-thumbnail.jpg",
                action: "modal",
                target: "idaho-video",
              },
            ],
          },
        ],
      },
      {
        id: "past-speakers",
        background: {
          type: "color",
          value: {
            type: "brand",
            value: "black",
          },
        },
        "text-color": {
          type: "brand",
          value: "white",
        },
        content: [
          {
            type: "text",
            value: "Past speakers",
            variant: "heading",
          },
          {
            type: "profile-gallery",
            profiles: [
              {
                name: "Chip Conley",
                title: "Hospitality Pioneer & Airbnb Strategic Advisor",
                image: "/santa-fe/speakers/chip-conley.jpeg",
                description:
                  "New York Times bestselling author Chip Conley is the hospitality maverick who helped Airbnb's founders turn their fast-growing tech start-up into the global hospitality brand.",
              },
              {
                name: "Mike Koenigs",
                title: "Marketing Expert & Business Growth Strategist",
                image: "/santa-fe/speakers/mike-koenigs.jpeg",
                description:
                  "Mike Koenigs is a 13-time #1 bestselling author, 'Marketer of the Year', and serial entrepreneur best known for turning business owners into Transformational Business Celebrity Influencers.",
              },
              {
                name: "Marissa Andrada",
                title: "Corporate Leadership & Culture Expert",
                image: "/santa-fe/speakers/marissa-andrada.jpeg",
                description:
                  "Krispy Kreme's Independent Board Director & former Chipotle CHRO, Marissa Andrada is a people-focused thought leader. She excels in strategy, talent development, and navigating founder/CEO transitions.",
              },
              {
                name: "Blake Eastman",
                title: "Behavioral Scientist & Leadership Coach",
                image: "/santa-fe/speakers/blake-eastman.jpeg",
                description:
                  "Behavioral scientist Blake Eastman helps CEOs, entrepreneurs, and executives craft a customized style of behavioral leadership. He is the founder of The Nonverbal Group and former adjunct psychology professor at the City University of New York.",
              },
            ],
          },
        ],
      },
      {
        id: "testimonials",
        background: {
          type: "color",
          value: {
            type: "brand",
            value: "white",
          },
        },
        content: [
          {
            type: "text",
            value: "What our attendees say",
            variant: "heading",
          },
          {
            type: "testimonial-carousel",
            value: [
              {
                quote:
                  "Attending the Baja OG event was truly transformative. I formed deep connections with inspiring individuals and gained invaluable insights that have already made a lasting impact. In fact, just one week after the event, I launched a new business with one of my OG connections! Every aspect of the experience was thoughtfully curated, set against an absolutely breathtaking backdrop. I can't recommend it highly enough!",
                name: "Jason Mewis",
                role: "President & Founder @ Engcomp",
                avatar: "/Workshops/testimonials/jason-mewis.jpeg",
              },
              {
                quote:
                  "The power of Hot Seats is exponential when you bring talented people together who share openly, with great vulnerability, their thought leadership and openly ask for help. It's hard, frankly, for anyone to ask for help. At the OG Retreat, there's so much talent in the room. To pay any one of these people to consult with you for a day is priceless, but to get all this together in one room, weighing in, elevates the impact.",
                name: "Robert S. Castellini",
                role: "Managing Director - Investments @ Wells Fargo",
                avatar: "/Workshops/testimonials/robert-castellini.png",
              },
              {
                quote:
                  "I came to this OG Retreat because I really needed a vacation with other ambitious entrepreneurs—it's all about that social connection and stimulating conversations. I'm weird and it's hard to find really solid connections with people because of the position that I'm in my work. But here I was, surrounded by people who get me.",
                name: "Dan Guido",
                role: "CEO & Co-Foundern of Trail of Bits - Cybersecurity Firm",
                avatar: "/Workshops/testimonials/dan-guido.jpg",
              },
              {
                quote:
                  "This mastermind gave me clear direction and actionable strategies to finally hit my business goals that I've been putting on paper but haven't been able to achieve. I believe the techniques and strategies that I've learned here today will 10x my growth in just one year.",
                name: "Dr. Donald Shrump",
                role: "Sports Performance Coach w/ a roster of top athletes like Novak Djokovic",
                avatar: "/Workshops/testimonials/donald-shrump.png",
              },
              {
                quote:
                  "Nick does a great job putting together these events and really bringing some some legitimate experts in their field. Every time I come to a leverage event, I'm always learning some really incredible stuff. Leverages businesses at optimization. I learned strategies to save a second here, a minute there, an hour here, and really cut down and become more efficient and optimize my business.",
                name: "Josh Martin",
                role: "Former Pro NFL player - Owner of Smoothie King Franchises",
                avatar: "/Workshops/testimonials/josh-martin.png",
              },
            ],
          },
          {
            type: "video-gallery",
            value: [
              {
                src: "https://app.searchie.io/file/92QbmGMgDp/embed",
              },
              {
                src: "https://app.searchie.io/file/w2VaYAeeqM/embed",
              },
              {
                src: "https://app.searchie.io/file/kqkOLVyMq4/embed",
              },
              {
                src: "https://app.searchie.io/file/l2RZ3kMx2a/embed",
              },
              {
                src: "https://app.searchie.io/file/VDGxYnKjNW/embed",
              },
              {
                src: "https://app.searchie.io/file/5qnlxWBvDr/embed",
              },
              {
                src: "https://app.searchie.io/file/RD6dJ1QPqQ/embed",
              },
              {
                src: "https://app.searchie.io/file/92QbZko9Dp/embed",
              },
            ],
            initialDisplay: 4,
            button: {
              text: "See More Testimonials",
              variant: "yellow",
            },
          },
        ],
      },
      {
        id: "location",
        background: {
          type: "color",
          value: {
            type: "brand",
            value: "off-white",
          },
        },
        content: [
          {
            type: "text",
            value: "A glimpse of the location",
            variant: "heading",
          },
          {
            type: "text",
            value:
              "Just outside downtown Santa Fe, this private 2,600-acre luxury ranch resort offers hiking trails, abundant wildlife, a running river, and stunning high-desert mountain views. Breathe in the crisp, clean air and experience a peaceful retreat surrounded by nature.",
            variant: "body",
          },
          {
            type: "image-gallery",
            images: [
              {
                src: "/santa-fe/gallery/Juniper entry.jpg",
                alt: "Juniper entry",
              },
              {
                src: "/santa-fe/gallery/indoor.png",
                alt: "Indoors",
              },
              {
                src: "/santa-fe/gallery/windmill.jpg",
                alt: "Windmill",
              },
            ],
          },
        ],
      },
      {
        id: "schedule",
        background: {
          type: "color",
          value: {
            type: "brand",
            value: "black",
          },
        },
        "text-color": {
          type: "brand",
          value: "white",
        },
        content: [
          {
            type: "text",
            value: "March 17-22, 2025",
            variant: "heading",
          },
          {
            type: "text",
            value: "Your daily schedule",
            variant: "subheading",
          },
          {
            type: "info-card",
            title: "Morning Movement",
            description:
              "Start your day with energy—yoga, workouts led by elite coaches (including the performance coach of Novak Djokovic & former NFL players), or a refreshing hike through stunning mountain trails.",
            emoji: "🌅",
            align: "left",
            variant: "small",
            dark: true,
            background: {
              type: "color",
              value: {
                type: "hex",
                value: "#2A2A2A",
              },
            },
          },
          {
            type: "info-card",
            title: "Networking Breakfast",
            description:
              "Enjoy a farm-fresh breakfast with organic ingredients, sip on fresh pour-over coffee, and dive into meaningful, high-level conversations.",
            emoji: "☕",
            align: "left",
            variant: "small",
            dark: true,
            background: {
              type: "color",
              value: {
                type: "hex",
                value: "#2A2A2A",
              },
            },
          },
          {
            type: "info-card",
            title: "Free Time",
            description:
              "Use this time however you need—work, unwind in nature, connect with others, or dive into 1:1 consulting and implementation sessions.",
            emoji: "🌿",
            align: "left",
            variant: "small",
            dark: true,
            background: {
              type: "color",
              value: {
                type: "hex",
                value: "#2A2A2A",
              },
            },
          },
          {
            type: "info-card",
            title: "Lunch",
            description:
              "A delicious, nourishing meal to fuel the rest of your day.",
            emoji: "🥗",
            align: "left",
            variant: "small",
            dark: true,
            background: {
              type: "color",
              value: {
                type: "hex",
                value: "#2A2A2A",
              },
            },
          },
          {
            type: "info-card",
            title: "Afternoon Session",
            description:
              "Dive into Hot Seat problem-solving and Expert-Led Q&A sessions, packed with actionable strategies you can immediately apply.",
            emoji: "💡",
            align: "left",
            variant: "small",
            dark: true,
            background: {
              type: "color",
              value: {
                type: "hex",
                value: "#2A2A2A",
              },
            },
          },
          {
            type: "info-card",
            title: "Golden Hour",
            description:
              "Refresh before dinner, or join optional networking activities like a hands-on cooking class.",
            emoji: "✨",
            align: "left",
            variant: "small",
            dark: true,
            background: {
              type: "color",
              value: {
                type: "hex",
                value: "#2A2A2A",
              },
            },
          },
          {
            type: "info-card",
            title: "Dinner & Fireside Chat",
            description:
              "A farm-to-table feast, followed by fireside conversations with live music playing in the background—an unforgettable way to end the day.",
            emoji: "🔥",
            align: "left",
            variant: "small",
            dark: true,
            background: {
              type: "color",
              value: {
                type: "hex",
                value: "#2A2A2A",
              },
            },
          },
          {
            type: "text",
            value: "Rinse...and repeat!",
            variant: "side-note",
            color: {
              type: "hex",
              value: "#9BA3AF",
            },
          },
        ],
      },
      {
        id: "hosts",
        background: {
          type: "color",
          value: {
            type: "brand",
            value: "black",
          },
        },
        "text-color": {
          type: "brand",
          value: "white",
        },
        content: [
          {
            type: "text",
            value: "Meet your hosts",
            variant: "heading",
          },
          {
            type: "profile-gallery",
            profiles: [
              {
                name: "Nick Sonnenberg",
                title: "Business Efficiency Expert",
                image: "/santa-fe/hosts/nick-sonnenberg-photo.png",
                description:
                  "Nick Sonnenberg is the world's leading business efficiency expert, founder and CEO of Leverage, an Inc. columnist and author. His CPR® Business Efficiency Framework helps companies maximize performance and reduce overwhelm, consistently resulting in greater output, less stress, and happier employees.",
              },
              {
                name: "Jessica Carroll",
                title: "Premier Event Strategist & Growth Expert",
                image: "/santa-fe/hosts/jessica-carroll-photo.jpg",
                description:
                  "Jessica Carroll is a premier event strategist and growth expert, specializing in high-impact experiences that connect top entrepreneurs, executives, and experts. As Head of Growth & Events at Leverage, she designs exclusive masterminds and workshops that drive strategic partnerships and business breakthroughs.",
              },
            ],
          },
        ],
      },
      {
        id: "origin-story",
        background: {
          type: "color",
          value: {
            type: "brand",
            value: "black",
          },
        },
        "text-color": {
          type: "brand",
          value: "white",
        },
        content: [
          {
            type: "text",
            value: "How this all began...",
            variant: "heading",
          },
          {
            type: "linkedin-post",
            value:
              "https://www.linkedin.com/embed/feed/update/urn:li:share:7295466462092152850",
          },
        ],
      },
      {
        id: "faq",
        background: {
          type: "color",
          value: {
            type: "brand",
            value: "white",
          },
        },
        "text-color": {
          type: "brand",
          value: "black",
        },
        content: [
          {
            type: "text",
            value: "Frequently asked questions",
            variant: "heading",
          },
          {
            type: "accordion",
            items: [
              {
                title:
                  "Are there fun activities available while we are in Santa Fe?",
                content:
                  "YES! Optional horseback riding, Equus Experience with horses, astrology, fireside chats, hiking, workouts, watercolor painting, yoga, and more.",
              },
              {
                title: "Where is the retreat located?",
                content:
                  "The Optimize Retreat will take place at MEA located 25 minutes from downtown on a stunning 2,500-acre private ranch. 77 Saddleback Ranch, Lamy, NM 87540",
              },
              {
                title: "Who should attend the Optimize Retreat?",
                content:
                  "This event is ideal for business owners and professionals eager to fast-track their personal and business growth. It's an opportunity to form valuable connections while learning to navigate and eliminate business obstacles.",
              },
              {
                title: "What are the key topics covered during the retreat?",
                content:
                  "The retreat will cover a range of topics focused on optimizing business operations, including but not limited to productivity hacks, leveraging biz ops technology, team efficiency strategies, and uncovering hidden growth opportunities. The sessions are interactive, ensuring practical and actionable insights.",
              },
              {
                title: "Who will be leading the Optimize Retreat?",
                content:
                  "The retreat will be led by Nick Sonnenberg, CEO of Leverage, and Jessica Carroll, Head of Events & Growth at Leverage. Both are seasoned experts in operational efficiency and business strategy, bringing a wealth of knowledge and practical insights to the event.",
              },
              {
                title: "Is there an additional cost for extra activities?",
                content:
                  "The activities such as horseback riding, cooking classes, painting, are optional and may incur additional costs.",
              },
              {
                title: "What is the accommodation arrangement for the retreat?",
                content:
                  "Housing is included. All attendees will get their own luxury room at the resort.",
              },
              {
                title: "Are meals included in the retreat?",
                content:
                  "Meals during the retreat days are included as part of the event. Participants will enjoy a variety of dining options, catering to different dietary needs. Please inform us of any dietary restrictions in advance.",
              },
              {
                title:
                  "How can I prepare for the retreat to get the most out of it?",
                content:
                  "We recommend that participants come prepared with specific business challenges or goals they wish to address. Bringing a notebook or digital device for note-taking can also be helpful. Prior to the retreat, participants will receive a welcome pack with more detailed information on how to prepare.",
              },
              {
                title:
                  "Will there be networking opportunities during the event?",
                content:
                  "Absolutely. The Optimize Retreat provides ample opportunities for networking with fellow business leaders and professionals. The informal setting and group activities are designed to foster connections and collaborations.",
              },
              {
                title: "Is transportation included in the retreat?",
                content:
                  "Yes! We will arrange transportation to and from the airport to the retreat center. If you leave early or arrive late, there may be an additional fee",
              },
              {
                title: "Is there a gym?",
                content:
                  "Yes! The resort has a gym equipped with a treadmill, rowing machine, stationary bike, weights, and dumbbells.",
              },
              {
                title: "What is the dress code? What to Pack?",
                content:
                  "Casual and comfortable. Bring: Layers - clothing you can easily layer for changing temperatures.\nCasual & Comfortable - relaxed, comfortable outfits suitable for various activities.\nClose-Toed Shoes - required for certain activities—pack sneakers or sturdy shoes.\nWorkout Attire - bring activewear for workouts, walking, or any movement-based sessions.",
              },
            ],
          },
          {
            type: "text",
            value:
              "Can't find your question? Email jessica.carroll@getleverage.com",
            variant: "side-note",
            color: {
              type: "hex",
              value: "#9BA3AF",
            },
          },
        ],
      },
      {
        id: "cta",
        background: {
          type: "gradient",
          direction: "right",
          value: [
            {
              type: "brand",
              value: "yellow",
            },
            {
              type: "hex",
              value: "#d97706",
            },
          ],
        },
        content: [
          {
            type: "text",
            value: "Time to RE/SET",
            variant: "heading",
          },
          {
            type: "text",
            value: "EMPOWER - ELEVATE - EXCEL",
            variant: "subheading",
          },
          {
            type: "text",
            value: "Think this could be valuable to you?",
            variant: "subheading",
          },
          {
            type: "button",
            text: "Apply Now",
            action: "href",
            target:
              "https://meetings.hubspot.com/jessica-carroll1/events?uuid=0eecf81e-3cf5-4347-8551-6607c1c0d6df",
            variant: "black",
            align: "center",
          },
        ],
      },
    ],
  },
  {
    id: "cincinnati",
    details: {
      title: "Process Optimization Workshop",
      subtitle: "Cincinnati Reds Baseball Stadium",
      location: "Cincinnati, Ohio",
      dates: "May 22-23, 2025",
      "preview-image": "/cincinnati/background.jpg",
    },
    navbar: {
      title: "OG EVENTS",
      content: [
        {
          type: "button",
          text: "Apply Now",
          variant: "nav-button",
          action: "href",
          target:
            "https://meetings.hubspot.com/jessica-carroll1/events?uuid=0eecf81e-3cf5-4347-8551-6607c1c0d6df",
        },
      ],
    },
    modals: [
      {
        id: "idaho-video",
        title: "Idaho Video",
        content: [
          {
            type: "video",
            value: "https://app.searchie.io/file/3w2VRnXO2M/embed",
          },
        ],
      },
      {
        id: "mexico-video",
        title: "Mexico Video",
        content: [
          {
            type: "video",
            value: "https://app.searchie.io/file/P52406xz21/embed",
          },
        ],
      },
    ],
    heroSection: {
      background: {
        type: "image",
        value: "/cincinnati/background.jpg",
      },
      overlay: {
        type: "gradient",
        value: [
          {
            type: "brand",
            value: "black",
            opacity: 0.6,
          },
          {
            type: "brand",
            value: "black",
            opacity: 0.6,
          },
          {
            type: "hex",
            value: "#C6011F",
          },
        ],
      },
      content: [
        {
          type: "text",
          value: "Invite-Only",
          variant: "hero-subheading",
        },
        {
          type: "text",
          value: "PROCESS OPTIMIZATION WORKSHOP",
          variant: "hero-heading",
        },
        {
          type: "text",
          value: "Inside the Executive Suite",
          variant: "hero-subheading",
        },
        {
          type: "text",
          value: "Reds Baseball Stadium, Cincinnati, Ohio",
          variant: "hero-location",
        },
        {
          type: "text",
          value: "May 22-23, 2025",
          variant: "hero-dates",
        },
        {
          type: "button",
          text: "Apply Now",
          action: "href",
          target:
            "https://meetings.hubspot.com/jessica-carroll1/events?uuid=0eecf81e-3cf5-4347-8551-6607c1c0d6df",
          variant: "hero-button",
        },
      ],
    },
    contentSections: [
      {
        id: "about",
        background: {
          type: "gradient",
          value: [
            {
              type: "hex",
              value: "#C6011F",
            },
            {
              type: "brand",
              value: "navy",
            },
          ],
        },
        "text-color": {
          type: "brand",
          value: "white",
        },
        content: [
          {
            type: "text",
            value: "Not your typical business event...",
            variant: "heading",
          },
          {
            type: "image",
            value: "/cincinnati/Group OG .JPG",
          },
          {
            type: "text",
            value:
              "Join an elite group of Entrepreneurs, Executives, and Experts for an exclusive two-day event where visionaries connect and transform their businesses together.",
            variant: "body",
            align: "left",
          },
          {
            type: "text",
            value: "Our formula is simple",
            variant: "paragraph-heading",
            underline: true,
            align: "left",
          },
          {
            type: "list",
            items: [
              {
                type: "text",
                value: "30 high-caliber business leaders +",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: "Exclusive Cincinnati venue +",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: "Collaborative problem-solving +",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: "Structured networking opportunities =",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value:
                  "High-impact event to efficiently optimize your business and personal life.",
                variant: "list-item",
                align: "left",
                color: {
                  type: "brand",
                  value: "yellow",
                },
              },
            ],
          },
          {
            type: "text",
            value: "This Workshop is designed for one thing: ROT - Return on Time",
            variant: "paragraph-heading",
            underline: true,
            align: "left",
          },
          {
            type: "text",
            value: "Time is your most limited resource. This two-day intensive is your chance to zoom out, get strategic, and solve what's slowing you down — with a room full of experienced operators and top performers acting as your executive strategy team.",
            variant: "body",
            align: "left",
          },
          {
            type: "testimonial",
            quote:
              "I'm hard to impress... but the last workshop was different. It gave me the intellectual capital I needed — a place to talk things through and get to the answer. That space alone was invaluable.",
            name: "Bryan Lowrie",
            role: "CEO/President @ SEKO Logistics",
            avatar: "/Workshops/testimonials/bryan-lowrie.jpg",
            extraLarge: true,
          },
          {
            type: "text",
            value: "The Format:",
            variant: "paragraph-heading",
            underline: true,
            align: "left",
          },
          {
            type: "list",
            variant: "bulleted",
            items: [
              {
                type: "text",
                value: "You bring a process, challenge, or idea you want to optimize.",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: "The group dives in with sharp questions and battle-tested strategies.",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: "You leave with clarity, action steps, and momentum.",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: "Then we move to the next person — and repeat.",
                variant: "list-item",
                align: "left",
              },
            ],
          },
          {
            type: "text",
            value: "Two full days. No fluff. No filler. Just execution.",
            variant: "body",
            align: "left",
            color: {
              type: "brand",
              value: "yellow"
            }
          },
          {
            type: "testimonial",
            quote:
              "I was a ChatGPT super user before this event — and I walked away with tools and strategies I had never seen before. I started implementing them while I was there.",
            name: "Kelly Bianucci",
            role: "Acquisition Entrepreneur",
            avatar: "/Workshops/testimonials/kelly-bianucci.jpg",
            extraLarge: true,
          },
          {
            type: "text",
            value: "What You'll Walk Away With:",
            variant: "paragraph-heading",
            underline: true,
            align: "left",
          },
          {
            type: "list",
            variant: "bulleted",
            items: [
              {
                type: "text",
                value: <>
                  <span className="text-brand-yellow">Immediate wins:</span> walk away with your process streamlined and real-time input you can use now,
                </>,
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: <>
                  <span className="text-brand-yellow">Big-picture clarity:</span> spot inefficiencies and opportunities that were hiding in plain sight,
                </>,
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: <>
                  <span className="text-brand-yellow">Leverage tech smarter:</span> get practical ideas for how to use AI and automation in your workflows,
                </>,
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: <>
                  <span className="text-brand-yellow">A mindset shift</span> that helps you see what's possible — and how to get there faster,
                </>,
                variant: "list-item",
                align: "left",
              },
            ],
          },
          {
            type: "testimonial",
            quote: "The retreat wasn't full of fluff or surface-level stuff. It was real people, sharing real challenges — and solving them together.",
            name: "Max Dembow",
            role: "Partner @ Kaizen Planning & Wealth Management",
            avatar: "/Workshops/testimonials/max-dembow.jpg",
            extraLarge: true,
          },
          {
            type: "text",
            value: "Who's In the Room?",
            variant: "paragraph-heading",
            underline: true,
            align: "left",
          },
          {
            type: "text",
            value: "We keep it small and selective — so every seat is powerful. Past attendees include:",
            variant: "body",
            align: "left",
          },
          {
            type: "list",
            variant: "bulleted",
            items: [
              {
                type: "text",
                value: "NYT Bestselling Authors",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: "Fortune 500 Execs from Chipotle, Starbucks, Airbnb",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: "Top cybersecurity experts and elite hackers",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: "Leaders in AI, automation, and innovation",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: "Peak-performance coaches (including Novak Djokovic's coach)",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: "NFL Players",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                value: "Founders of 8- and 9-figure companies",
                variant: "list-item",
                align: "left",
              },
            ],
          },
          {
            type: "text",
            value: "Bottom Line:",
            variant: "paragraph-heading",
            underline: true,
            align: "left",
          },
          {
            type: "text",
            value: <>This is for leaders who want to <u><strong>scale smarter</strong></u>.</>,
            variant: "body",
            align: "left",
          },
          {
            type: "text",
            value: "You'll leave with optimized systems, better tools, and sharper strategies, so you can make faster decisions, delegate more confidently, and get a higher return on your most valuable asset:",
            variant: "body",
            align: "left",
          },
          {
            type: "text",
            value: "TIME",
            variant: "huge-body",
            animatedUnderline: true,
            align: "left",
            color: {
              type: "brand",
              value: "yellow"
            }
          }
        ],
      },
      {
        id: "benefits",
        background: {
          type: "gradient",
          value: [
            {
              type: "brand",
              value: "navy",
            },
            {
              type: "hex",
              value: "#C6011F",
            },
          ],
        },
        "text-color": {
          type: "brand",
          value: "white",
        },
        content: [
          {
            type: "text",
            value:
              "Join the Circle of Leaders Who Are Redefining What Success Looks Like",
            variant: "heading",
          },
          {
            type: "text",
            value: "May 22 & 23, 2025",
            variant: "subheading",
          },
          {
            type: "info-card",
            title: "Elevate Your Business & Legacy",
            description:
              "Go beyond just growth—break free from burnout and build a business that fuels your future. Learn directly from those who've scaled with sanity and created real impact.",
            emoji: "🚀",
            align: "left",
            variant: "small",
            dark: true,
            background: {
              type: "color",
              value: {
                type: "hex",
                value: "#2A2A2A",
              },
            },
          },
          {
            type: "info-card",
            title: "Forge Your Inner Circle",
            description:
              "No more doing it alone at the top. Step into a room where the pressure fades and the right people get you. Forge relationships that spark clarity, collaboration, and lifelong growth.",
            emoji: "🤝",
            align: "left",
            variant: "small",
            dark: true,
            background: {
              type: "color",
              value: {
                type: "hex",
                value: "#2A2A2A",
              },
            },
          },
          {
            type: "info-card",
            title: "Experience What You've Earned",
            description:
              "You've earned this. Access rare moments, private experiences, and a pace that finally feels aligned with the life you've built.",
            emoji: "🔑",
            align: "left",
            variant: "small",
            dark: true,
            background: {
              type: "color",
              value: {
                type: "hex",
                value: "#2A2A2A",
              },
            },
          },
        ],
      },
      {
        id: "past-events",
        background: {
          type: "color",
          value: {
            type: "brand",
            value: "white",
          },
        },
        "text-color": {
          type: "brand",
          value: "black",
        },
        content: [
          {
            type: "text",
            value: "Past events",
            variant: "heading",
          },
          {
            type: "image-buttons",
            items: [
              {
                text: "Mexico",
                image: "/cincinnati/mexico-thumbnail.jpg",
                action: "modal",
                target: "mexico-video",
              },
              {
                text: "Idaho",
                image: "/cincinnati/idaho-thumbnail.jpg",
                action: "modal",
                target: "idaho-video",
              },
            ],
          },
        ],
      },
      {
        id: "what-to-expect",
        background: {
          type: "color",
          value: {
            type: "brand",
            value: "off-white",
          },
        },
        "text-color": {
          type: "brand",
          value: "black",
        },
        content: [
          {
            type: "text",
            value: "What to Expect Over the 2 Days",
            variant: "heading",
          },
          {
            type: "info-card",
            title: "🔥 Hot Seat Sessions",
            description:
              "Get laser-focused feedback on your biggest business challenges in a safe, no-judgment zone. Your new inner circle will help you untangle roadblocks and accelerate what matters most.",
            image: "/cincinnati/info-cards/Hot Seat.JPG",
            align: "left",
            background: {
              type: "color",
              value: {
                type: "brand",
                value: "white",
              },
            },
          },
          {
            type: "info-card",
            title: "🧠 Expert-Led Insights",
            description:
              "Learn directly from top-tier thinkers in Efficiency, AI, Team Culture, Marketing, Health, and beyond. These intimate, interactive sessions aren't about theory—they're about what works now.",
            image: "/cincinnati/info-cards/Expert Led Sessions .jpeg",
            align: "right",
            background: {
              type: "color",
              value: {
                type: "brand",
                value: "white",
              },
            },
          },
          {
            type: "info-card",
            title: "⚾ Leadership Q&As with Reds Executives",
            description:
              "Step behind the scenes with the General Manager, President & COO of the Cincinnati Reds. Gain rare insight into how elite organizations build legacies, lead through change, and perform under pressure.",
            image: "/cincinnati/info-cards/Q A w_ president and COO .jpeg",
            align: "left",
            background: {
              type: "color",
              value: {
                type: "brand",
                value: "white",
              },
            },
          },
          {
            type: "info-card",
            title: "⚡ On-Field & Batting Cage Access",
            description:
              "Experience what it feels like to be on the field—literally. Step into the shoes of legends with on-field batting practice and alumni pitching cages. It's success, but with a spark of childhood joy.",
            image: "/cincinnati/info-cards/Bob and Nick .JPG",
            align: "right",
            background: {
              type: "color",
              value: {
                type: "brand",
                value: "white",
              },
            },
          },
          {
            type: "info-card",
            title: "🏆 Private Reds Hall of Fame Tour",
            description:
              "Go deeper into legacy-building with an exclusive tour of the Reds Hall of Fame, led by one of the franchise's founders. Relive history and reconnect to purpose.",
            image: "/cincinnati/info-cards/hall of fame Reds  (1).jpg",
            align: "left",
            background: {
              type: "color",
              value: {
                type: "brand",
                value: "white",
              },
            },
          },
          {
            type: "info-card",
            title: "🍽️ Curated Connections Over Dinner",
            description:
              "Network without the name tags. Build real relationships during upscale, intimate dinners designed for honest conversation and meaningful connection.",
            image: "/cincinnati/info-cards/Dinner  (1).jpg",
            align: "right",
            background: {
              type: "color",
              value: {
                type: "brand",
                value: "white",
              },
            },
          },
          {
            type: "info-card",
            title: "🎯 VIP Game Viewing: Executive Suite Experience",
            description:
              "Savor the freedom-driven lifestyle you've earned - surrounded by peers who know what it takes to get there. Watch the game in VIP style from a private executive suite alongside the President and COO of the Cincinnati Reds-beer in hand, a gourmet dinner at your side, and Elly De La Cruz sending one over the fence.",
            image: "/cincinnati/info-cards/VIP Game Viewing .jpg",
            align: "left",
            background: {
              type: "color",
              value: {
                type: "brand",
                value: "white",
              },
            },
          },
        ],
      },
      {
        id: "location",
        background: {
          type: "gradient",
          direction: "bottom",
          value: [
            {
              type: "brand",
              value: "off-white",
            },
            {
              type: "hex",
              value: "#C6011F",
            },
          ],
        },
        content: [
          {
            type: "text",
            value: "Experience Baseball's Historic Birthplace",
            variant: "heading",
          },
          {
            type: "text",
            value:
              "Great American Ball Park isn't just a ballpark; it's the birthplace of professional baseball history. Home to the Cincinnati Reds—the first professional baseball team established in 1869—this stadium resonates with legacy, leadership, and longevity.",
            variant: "body",
          },
          {
            type: "image",
            value: "/cincinnati/Reds stadium .jpg",
          },
        ],
      },
      {
        id: "past-speakers",
        background: {
          type: "gradient",
          value: [
            {
              type: "hex",
              value: "#C6011F",
            },
            {
              type: "brand",
              value: "black",
            },
          ],
        },
        "text-color": {
          type: "brand",
          value: "white",
        },
        content: [
          {
            type: "text",
            value: "Past speakers",
            variant: "heading",
          },
          {
            type: "profile-gallery",
            profiles: [
              {
                name: "Chip Conley",
                title: "Hospitality Pioneer & Airbnb Strategic Advisor",
                image: "/cincinnati/speakers/chip-conley.jpeg",
                description:
                  "New York Times bestselling author Chip Conley is the hospitality maverick who helped Airbnb's founders turn their fast-growing tech start-up into the global hospitality brand.",
              },
              {
                name: "Mike Koenigs",
                title: "Marketing Expert & Business Growth Strategist",
                image: "/cincinnati/speakers/mike-koenigs.jpeg",
                description:
                  "Mike Koenigs is a 13-time #1 bestselling author, 'Marketer of the Year', and serial entrepreneur best known for turning business owners into Transformational Business Celebrity Influencers.",
              },
              {
                name: "Marissa Andrada",
                title: "Corporate Leadership & Culture Expert",
                image: "/cincinnati/speakers/marissa-andrada.jpeg",
                description:
                  "Krispy Kreme's Independent Board Director & former Chipotle CHRO, Marissa Andrada is a people-focused thought leader. She excels in strategy, talent development, and navigating founder/CEO transitions.",
              },
              {
                name: "Blake Eastman",
                title: "Behavioral Scientist & Leadership Coach",
                image: "/cincinnati/speakers/blake-eastman.jpeg",
                description:
                  "Behavioral scientist Blake Eastman helps CEOs, entrepreneurs, and executives craft a customized style of behavioral leadership. He is the founder of The Nonverbal Group and former adjunct psychology professor at the City University of New York.",
              },
            ],
          },
        ],
      },
      {
        id: "testimonials",
        background: {
          type: "color",
          value: {
            type: "brand",
            value: "white",
          },
        },
        content: [
          {
            type: "text",
            value: "What our attendees say",
            variant: "heading",
          },
          {
            type: "testimonial-carousel",
            value: [
              {
                quote:
                  "Attending the Baja OG event was truly transformative. I formed deep connections with inspiring individuals and gained invaluable insights that have already made a lasting impact. In fact, just one week after the event, I launched a new business with one of my OG connections! Every aspect of the experience was thoughtfully curated, set against an absolutely breathtaking backdrop. I can't recommend it highly enough!",
                name: "Jason Mewis",
                role: "President & Founder @ Engcomp",
                avatar: "/Workshops/testimonials/jason-mewis.jpeg",
              },
              {
                quote:
                  "The power of Hot Seats is exponential when you bring talented people together who share openly, with great vulnerability, their thought leadership and openly ask for help. It's hard, frankly, for anyone to ask for help. At the OG Retreat, there's so much talent in the room. To pay any one of these people to consult with you for a day is priceless, but to get all this together in one room, weighing in, elevates the impact.",
                name: "Robert S. Castellini",
                role: "Managing Director - Investments @ Wells Fargo",
                avatar: "/Workshops/testimonials/robert-castellini.png",
              },
              {
                quote:
                  "I came to this OG Retreat because I really needed a vacation with other ambitious entrepreneurs—it's all about that social connection and stimulating conversations. I'm weird and it's hard to find really solid connections with people because of the position that I'm in my work. But here I was, surrounded by people who get me.",
                name: "Dan Guido",
                role: "CEO & Co-Foundern of Trail of Bits - Cybersecurity Firm",
                avatar: "/Workshops/testimonials/dan-guido.jpg",
              },
              {
                quote:
                  "This mastermind gave me clear direction and actionable strategies to finally hit my business goals that I've been putting on paper but haven't been able of achieve. I believe the techniques and strategies that I've learned here today will 10x my growth in just one year.",
                name: "Dr. Donald Shrump",
                role: "Sports Performance Coach w/ a roster of top athletes like Novak Djokovic",
                avatar: "/Workshops/testimonials/donald-shrump.png",
              },
              {
                quote:
                  "Nick does a great job putting together these events and really bringing some some legitimate experts in their field. Every time I come to a leverage event, I'm always learning some really incredible stuff. Leverages businesses at optimization. I learned strategies to save a second here, a minute there, an hour here, and really cut down and become more efficient and optimize my business.",
                name: "Josh Martin",
                role: "Former Pro NFL player - Owner of Smoothie King Franchises",
                avatar: "/Workshops/testimonials/josh-martin.png",
              },
            ],
          },
          {
            type: "video-gallery",
            value: [
              {
                src: "https://app.searchie.io/file/92QbmGMgDp/embed",
              },
              {
                src: "https://app.searchie.io/file/w2VaYAeeqM/embed",
              },
              {
                src: "https://app.searchie.io/file/kqkOLVyMq4/embed",
              },
              {
                src: "https://app.searchie.io/file/l2RZ3kMx2a/embed",
              },
              {
                src: "https://app.searchie.io/file/VDGxYnKjNW/embed",
              },
              {
                src: "https://app.searchie.io/file/5qnlxWBvDr/embed",
              },
              {
                src: "https://app.searchie.io/file/RD6dJ1QPqQ/embed",
              },
              {
                src: "https://app.searchie.io/file/92QbZko9Dp/embed",
              },
            ],
            initialDisplay: 4,
            button: {
              text: "See More Testimonials",
              variant: "yellow",
            },
          },
        ],
      },
      {
        id: "who-for",
        background: {
          type: "color",
          value: {
            type: "brand",
            value: "off-white",
          },
        },
        "text-color": {
          type: "brand",
          value: "black",
        },
        content: [
          {
            type: "text",
            value: "Who this event is for",
            variant: "heading",
          },
          {
            type: "list",
            items: [
              {
                type: "text",
                value:
                  "✓ Established business owners generating $1M+ in annual revenue",
                variant: "list-item",
              },
              {
                type: "text",
                value: "✓ C-suite executives leading teams of 10+ employees",
                variant: "list-item",
              },
              {
                type: "text",
                value:
                  "✓ Industry experts with proven track records of innovation",
                variant: "list-item",
              },
              {
                type: "text",
                value:
                  "✓ Visionaries committed to both business growth and personal fulfillment",
                variant: "list-item",
              },
              {
                type: "text",
                value:
                  "✓ Leaders seeking high-level connections and strategic partnerships",
                variant: "list-item",
              },
              {
                type: "text",
                value:
                  "✓ Decision-makers ready to implement transformative changes",
                variant: "list-item",
              },
            ],
          },
          {
            type: "text",
            value: (
              <>
                Who this event is <span style={{ color: "#C6011F" }}>NOT</span>{" "}
                for
              </>
            ),
            variant: "heading",
          },
          {
            type: "list",
            items: [
              {
                type: "text",
                value:
                  "✗ Early-stage entrepreneurs still validating their business model",
                variant: "list-item",
              },
              {
                type: "text",
                value:
                  "✗ Individuals primarily focused on tactical implementation rather than strategic direction",
                variant: "list-item",
              },
              {
                type: "text",
                value:
                  "✗ Those unwilling to be vulnerable and share real challenges",
                variant: "list-item",
              },
              {
                type: "text",
                value:
                  "✗ Networkers only interested in transactional relationships",
                variant: "list-item",
              },
              {
                type: "text",
                value:
                  "✗ People seeking a passive learning experience without active participation",
                variant: "list-item",
              },
              {
                type: "text",
                value:
                  "✗ Leaders not ready to both give and receive honest feedback",
                variant: "list-item",
              },
            ],
          },
        ],
      },
      {
        id: "hosts",
        background: {
          type: "color",
          value: {
            type: "brand",
            value: "black",
          },
        },
        "text-color": {
          type: "brand",
          value: "white",
        },
        content: [
          {
            type: "text",
            value: "Meet your hosts",
            variant: "heading",
          },
          {
            type: "profile-gallery",
            profiles: [
              {
                name: "Nick Sonnenberg",
                title: "Business Efficiency Expert",
                image: "/santa-fe/hosts/nick-sonnenberg-photo.png",
                description:
                  "Nick Sonnenberg is the world's leading business efficiency expert, founder and CEO of Leverage, an Inc. columnist and author. His CPR® Business Efficiency Framework helps companies maximize performance and reduce overwhelm, consistently resulting in greater output, less stress, and happier employees.",
              },
              {
                name: "Jessica Carroll",
                title: "Premier Event Strategist & Growth Expert",
                image: "/santa-fe/hosts/jessica-carroll-photo.jpg",
                description:
                  "Jessica Carroll is a premier event strategist and growth expert, specializing in high-impact experiences that connect top entrepreneurs, executives, and experts. As Head of Growth & Events at Leverage, she designs exclusive masterminds and workshops that drive strategic partnerships and business breakthroughs.",
              },
            ],
          },
        ],
      },
      {
        id: "cta",
        background: {
          type: "gradient",
          direction: "right",
          value: [
            {
              type: "hex",
              value: "#C6011F",
            },
            {
              type: "brand",
              value: "navy",
            },
          ],
        },
        "text-color": {
          type: "brand",
          value: "white",
        },
        content: [
          {
            type: "text",
            value: "Ready to Join the Elite Circle of Game-Changers?",
            variant: "heading",
          },
          {
            type: "text",
            value:
              "This isn't just another networking event—it's your invitation to step into a room where real influence, impact, and growth happen.",
            variant: "subheading",
          },
          {
            type: "text",
            value:
              "You've built success. But what got you here won't get you to what's next. You don't need another surface-level seminar—you need an exclusive circle of sharp minds who challenge your thinking, expand your vision, and unlock new levels of freedom, wealth, and legacy.",
            variant: "body",
          },
          {
            type: "text",
            value: "Book your call with Jessica and apply today:",
            variant: "body",
            color: {
              type: "brand",
              value: "yellow",
            },
          },
          {
            type: "button",
            text: "Explore if you're a fit",
            action: "href",
            target:
              "https://meetings.hubspot.com/jessica-carroll1/events?uuid=0eecf81e-3cf5-4347-8551-6607c1c0d6df",
            variant: "white",
            align: "center",
          },
        ],
      },
    ],
  },
  {
    id: "Malibu",
    details: {
      title: "AI/Efficiency Workshop",
      subtitle: "Malibu, California",
      location: "Malibu, California",
      dates: "Sept 11-12, 2025",
      "preview-image": "/malibu/gallery/background.jpg",
    },
    navbar: {
      title: "OG EVENTS",
      content: [
        {
          type: "button",
          text: "Apply Now",
          variant: "nav-button",
          action: "href",
          target:
            "https://meetings.hubspot.com/jessica-carroll1/events?uuid=0eecf81e-3cf5-4347-8551-6607c1c0d6df",
        },
      ],
    },
    modals: [
      {
        id: "idaho-video",
        title: "Idaho Video",
        content: [
          {
            type: "video",
            value: "https://app.searchie.io/file/3w2VRnXO2M/embed",
          },
        ],
      },
      {
        id: "mexico-video",
        title: "Mexico Video",
        content: [
          {
            type: "video",
            value: "https://app.searchie.io/file/P52406xz21/embed",
          },
        ],
      },
    ],
    heroSection: {
      background: {
        type: "image",
        value: "/malibu/gallery/background.jpg",
      },
      overlay: {
        type: "gradient",
        value: [
          {
            type: "brand",
            value: "black",
            opacity: 0.6,
          },
          {
            type: "brand",
            value: "black",
            opacity: 0.6,
          },
          {
            type: "hex",
            value: "#484c6c",
          },
        ],
      },
      content: [
        {
          type: "text",
          value: "Invite-Only",
          variant: "hero-subheading",
        },
        {
          type: "text",
          value: "PROCESS OPTIMIZATION WORKSHOP",
          variant: "hero-heading",
        },
        {
          type: "text",
          value: "Ocean Views & Strategic Insights",
          variant: "hero-subheading",
        },
        {
          type: "text",
          value: "Luxury Oceanfront Venue, Malibu, California",
          variant: "hero-location",
        },
        {
          type: "text",
          value: "Sept 10-12, 2025",
          variant: "hero-dates",
        },
        {
          type: "button",
          text: "Apply Now",
          action: "href",
          target:
            "https://meetings.hubspot.com/jessica-carroll1/events?uuid=0eecf81e-3cf5-4347-8551-6607c1c0d6df",
          variant: "hero-button",
        },
      ],
    },
    contentSections: [
      {
        id: "about",
        background: {
          type: "gradient",
          value: [
            {
              type: "hex",
              value: "#484c6c",
            },
            {
              type: "brand",
              value: "navy",
            },
            {
              type: "brand",
              value: "black",
            },
          ],
        },
        "text-color": {
          type: "brand",
          value: "white",
        },
        content: [
          {
            type: "text",
            value: "Not your typical business event...",
            variant: "heading",
          },
                      {
              type: "image",
              value: "/OG-group.png",
            },
          {
            type: "text",
            value:
              "Join an elite group of Entrepreneurs, Executives, and Experts for an exclusive three-day event where visionaries connect and transform their businesses together.",
            variant: "body",
            align: "left",
          },
          {
            type: "text",
            value: "Our formula is simple",
            variant: "paragraph-heading",
            underline: true,
            align: "left",
          },
          {
            type: "list",
            items: [
              {
                type: "text",
                value: "30 high-caliber business leaders +",
                variant: "list-item",
                align: "left",
              },
              {
                type: "text",
                            value: "Exclusive Malibu oceanfront venue +",
            variant: "list-item",
            align: "left",
          },
          {
            type: "text",
            value: "Collaborative problem-solving +",
            variant: "list-item",
            align: "left",
          },
          {
            type: "text",
            value: "Structured networking opportunities =",
            variant: "list-item",
            align: "left",
          },
          {
            type: "text",
            value:
              "High-impact event to efficiently optimize your business and personal life.",
            variant: "list-item",
            align: "left",
            color: {
              type: "brand",
              value: "yellow",
            },
          },
        ],
      },
      {
        type: "text",
        value: "This Workshop is designed for one thing: ROT - Return on Time",
        variant: "paragraph-heading",
        underline: true,
        align: "left",
      },
      {
        type: "text",
                value: "Time is your most limited resource. This three-day intensive is your chance to zoom out, get strategic, and solve what's slowing you down — with a room full of experienced operators and top performers acting as your executive strategy team.",
        variant: "body",
        align: "left",
      },
      {
        type: "testimonial",
        quote:
          "I'm hard to impress... but the last workshop was different. It gave me the intellectual capital I needed — a place to talk things through and get to the answer. That space alone was invaluable.",
        name: "Bryan Lowrie",
        role: "CEO/President @ SEKO Logistics",
        avatar: "/Workshops/testimonials/bryan-lowrie.jpg",
        extraLarge: true,
      },
      {
        type: "text",
        value: "The Format:",
        variant: "paragraph-heading",
        underline: true,
        align: "left",
      },
      {
        type: "list",
        variant: "bulleted",
        items: [
          {
            type: "text",
            value: "You bring a process, challenge, or idea you want to optimize.",
            variant: "list-item",
            align: "left",
          },
          {
            type: "text",
            value: "The group dives in with sharp questions and battle-tested strategies.",
            variant: "list-item",
            align: "left",
          },
          {
            type: "text",
            value: "You leave with clarity, action steps, and momentum.",
            variant: "list-item",
            align: "left",
          },
          {
            type: "text",
            value: "Then we move to the next person — and repeat.",
            variant: "list-item",
            align: "left",
          },
        ],
      },
      {
        type: "text",
        value: "Three full days. No fluff. No filler. Just execution.",
        variant: "body",
        align: "left",
        color: {
          type: "brand",
          value: "yellow"
        }
      },
      {
        type: "testimonial",
        quote:
          "I was a ChatGPT super user before this event — and I walked away with tools and strategies I had never seen before. I started implementing them while I was there.",
        name: "Kelly Bianucci",
        role: "Acquisition Entrepreneur",
                avatar: "/Workshops/testimonials/kelly-bianucci.jpg",
        extraLarge: true,
      },
      {
        type: "text",
        value: "What You'll Walk Away With:",
        variant: "paragraph-heading",
        underline: true,
        align: "left",
      },
      {
        type: "list",
        variant: "bulleted",
        items: [
          {
            type: "text",
            value: <>
              <span className="text-brand-yellow">Immediate wins:</span> walk away with your process streamlined and real-time input you can use now,
            </>,
            variant: "list-item",
            align: "left",
          },
          {
            type: "text",
            value: <>
              <span className="text-brand-yellow">Big-picture clarity:</span> spot inefficiencies and opportunities that were hiding in plain sight,
            </>,
            variant: "list-item",
            align: "left",
          },
          {
            type: "text",
            value: <>
              <span className="text-brand-yellow">Leverage tech smarter:</span> get practical ideas for how to use AI and automation in your workflows,
            </>,
            variant: "list-item",
            align: "left",
          },
          {
            type: "text",
            value: <>
              <span className="text-brand-yellow">A mindset shift</span> that helps you see what's possible — and how to get there faster,
            </>,
            variant: "list-item",
            align: "left",
          },
        ],
      },
      {
        type: "testimonial",
        quote: "The retreat wasn't full of fluff or surface-level stuff. It was real people, sharing real challenges — and solving them together.",
        name: "Max Dembow",
        role: "Partner @ Kaizen Planning & Wealth Management",
        avatar: "/Workshops/testimonials/max-dembow.jpg",
        extraLarge: true,
      },
      {
        type: "text",
        value: "Who's In the Room?",
        variant: "paragraph-heading",
        underline: true,
        align: "left",
      },
      {
        type: "text",
        value: "We keep it small and selective — so every seat is powerful. Past attendees include:",
        variant: "body",
        align: "left",
      },
      {
        type: "list",
        variant: "bulleted",
        items: [
          {
            type: "text",
            value: "NYT Bestselling Authors",
            variant: "list-item",
            align: "left",
          },
          {
            type: "text",
            value: "Fortune 500 Execs from Chipotle, Starbucks, Airbnb",
            variant: "list-item",
            align: "left",
          },
          {
            type: "text",
            value: "Top cybersecurity experts and elite hackers",
            variant: "list-item",
            align: "left",
          },
          {
            type: "text",
            value: "Leaders in AI, automation, and innovation",
            variant: "list-item",
            align: "left",
          },
          {
            type: "text",
            value: "Peak-performance coaches (including Novak Djokovic's coach)",
            variant: "list-item",
            align: "left",
          },
          {
            type: "text",
            value: "NFL Players",
            variant: "list-item",
            align: "left",
          },
          {
            type: "text",
            value: "Founders of 8- and 9-figure companies",
            variant: "list-item",
            align: "left",
          },
        ],
      },
      {
        type: "text",
        value: "Bottom Line:",
        variant: "paragraph-heading",
        underline: true,
        align: "left",
      },
      {
        type: "text",
        value: <>This is for leaders who want to <u><strong>scale smarter</strong></u>.</>,
        variant: "body",
        align: "left",
      },
      {
        type: "text",
        value: "You'll leave with optimized systems, better tools, and sharper strategies, so you can make faster decisions, delegate more confidently, and get a higher return on your most valuable asset:",
        variant: "body",
        align: "left",
      },
      {
        type: "text",
        value: "TIME",
        variant: "huge-body",
        animatedUnderline: true,
        align: "left",
        color: {
          type: "brand",
          value: "yellow"
        }
      }
    ],
  },
  {
    id: "benefits",
    background: {
      type: "gradient",
      value: [
        {
          type: "hex",
          value: "#484c6c",
        },
        {
          type: "brand",
          value: "navy",
        },
        {
          type: "brand",
          value: "black",
        },
      ],
    },
    "text-color": {
      type: "brand",
      value: "white",
    },
    content: [
      {
        type: "text",
        value:
          "Join the Circle of Leaders Who Are Redefining What Success Looks Like",
        variant: "heading",
      },
      {
        type: "text",
        value: "Sept 10-12, 2025",
        variant: "subheading",
      },
          {
            type: "info-card",
            title: "Elevate Your Business & Legacy",
            description:
              "Go beyond just growth—break free from burnout and build a business that fuels your future. Learn directly from those who've scaled with sanity and created real impact.",
            emoji: "🚀",
            align: "left",
            variant: "small",
            dark: true,
            background: {
              type: "color",
              value: {
                type: "hex",
                value: "#2A2A2A",
              },
            },
          },
          {
            type: "info-card",
            title: "Forge Your Inner Circle",
            description:
              "No more doing it alone at the top. Step into a room where the pressure fades and the right people get you. Forge relationships that spark clarity, collaboration, and lifelong growth.",
            emoji: "🤝",
            align: "left",
            variant: "small",
            dark: true,
            background: {
              type: "color",
              value: {
                type: "hex",
                value: "#2A2A2A",
              },
            },
          },
          {
            type: "info-card",
            title: "Experience What You've Earned",
            description:
              "You've earned this. Access rare moments, private experiences, and a pace that finally feels aligned with the life you've built.",
            emoji: "🔑",
            align: "left",
            variant: "small",
            dark: true,
            background: {
              type: "color",
              value: {
                type: "hex",
                value: "#2A2A2A",
              },
            },
          },
        ],
      },
      {
        id: "past-events",
        background: {
          type: "color",
          value: {
            type: "brand",
            value: "white",
          },
        },
        "text-color": {
          type: "brand",
          value: "black",
        },
        content: [
          {
            type: "text",
            value: "Past events",
            variant: "heading",
          },
          {
            type: "image-buttons",
            items: [
              {
                text: "Mexico",
                image: "/Workshops/promoVideoThumbnails/mexico-thumbnail.jpg",
                action: "modal",
                target: "mexico-video",
              },
              {
                text: "Idaho",
                image: "/Workshops/promoVideoThumbnails/idaho-thumbnail.jpg",
                action: "modal",
                target: "idaho-video",
              },
            ],
          },
        ],
      },
      {
        id: "what-to-expect",
        background: {
          type: "color",
          value: {
            type: "brand",
            value: "off-white",
          },
        },
        "text-color": {
          type: "brand",
          value: "black",
        },
        content: [
          {
            type: "text",
            value: "What to Expect Over the 2 Days",
            variant: "heading",
          },
          {
            type: "info-card",
            title: "🔥 Hot Seat Sessions",
            description:
              "Get laser-focused feedback on your biggest business challenges in a safe, no-judgment zone. Your new inner circle will help you untangle roadblocks and accelerate what matters most.",
            image: "/Workshops/info-cards/Hot Seat.JPG",
            align: "left",
            background: {
              type: "color",
              value: {
                type: "brand",
                value: "white",
              },
            },
          },
          {
            type: "info-card",
            title: "🧠 Expert-Led Insights",
            description:
              "Learn directly from top-tier thinkers in Efficiency, AI, Team Culture, Marketing, Health, and beyond. These intimate, interactive sessions aren't about theory—they're about what works now.",
            image: "/Workshops/info-cards/Expert Led Sessions.jpeg",
            align: "right",
            background: {
              type: "color",
              value: {
                type: "brand",
                value: "white",
              },
            },
          },
          {
            type: "info-card",
            title: "🌊 Oceanfront Strategy Sessions",
            description:
              "Collaborate with industry leaders in an inspiring oceanfront setting. Gain fresh perspectives on business challenges while enjoying breathtaking Pacific Ocean views.",
            image: "/malibu/info-cards/Oceanfront Strategy.jpeg",
            align: "left",
            background: {
              type: "color",
              value: {
                type: "brand",
                value: "white",
              },
            },
          },
          {
            type: "info-card",
            title: "⚡ Wellness & Performance Optimization",
            description:
              "Experience peak performance coaching in Malibu's natural setting. Learn from wellness experts while enjoying morning beach walks and mindfulness sessions.",
            image: "/malibu/info-cards/Wellness Sessions.JPG",
            align: "right",
            background: {
              type: "color",
              value: {
                type: "brand",
                value: "white",
              },
            },
          },
          {
            type: "info-card",
            title: "🏆 Private Luxury Experiences",
            description:
              "Access exclusive Malibu venues and experiences reserved for high achievers. Connect with peers in world-class settings that inspire innovation and collaboration.",
            image: "/malibu/info-cards/Luxury Experiences.jpg",
            align: "left",
            background: {
              type: "color",
              value: {
                type: "brand",
                value: "white",
              },
            },
          },
          {
            type: "info-card",
            title: "🍽️ Curated Connections Over Dinner",
            description:
              "Network without the name tags. Build real relationships during upscale, intimate dinners designed for honest conversation and meaningful connection.",
            image: "/malibu/info-cards/Dinner.jpg",
            align: "right",
            background: {
              type: "color",
              value: {
                type: "brand",
                value: "white",
              },
            },
          },
          {
            type: "info-card",
            title: "🎯 VIP Oceanfront Experience",
            description:
              "Savor the freedom-driven lifestyle you've earned - surrounded by peers who know what it takes to get there. Enjoy private beach access, sunset cocktails, and transformative conversations with the Pacific as your backdrop.",
            image: "/malibu/info-cards/VIP Oceanfront Experience.jpg",
            align: "left",
            background: {
              type: "color",
              value: {
                type: "brand",
                value: "white",
              },
            },
          },
        ],
      },
      {
        id: "location",
        background: {
          type: "gradient",
          direction: "bottom",
          value: [
            {
              type: "brand",
              value: "off-white",
            },
            {
              type: "hex",
              value: "#484c6c",
            },
          ],
        },
        content: [
          {
            type: "text",
            value: "Experience Malibu's Stunning Coastline",
            variant: "heading",
          },
          {
            type: "text",
            value:
              "Malibu offers breathtaking Pacific Ocean views and world-class luxury venues. This exclusive coastal location provides the perfect backdrop for transformative business conversations and networking with like-minded visionaries.",
            variant: "body",
          },
          {
            type: "image",
            value: "/malibu/oceanfront-venue.jpg",
          },
        ],
      },
      {
        id: "past-speakers",
        background: {
          type: "gradient",
          value: [
            {
              type: "hex",
              value: "#484c6c",
            },
            {
              type: "brand",
              value: "black",
            },
          ],
        },
        "text-color": {
          type: "brand",
          value: "white",
        },
        content: [
          {
            type: "text",
            value: "Past speakers",
            variant: "heading",
          },
          {
            type: "profile-gallery",
            profiles: [
              {
                name: "Chip Conley",
                title: "Hospitality Pioneer & Airbnb Strategic Advisor",
                image: "/malibu/speakers/chip-conley.jpeg",
                description:
                  "New York Times bestselling author Chip Conley is the hospitality maverick who helped Airbnb's founders turn their fast-growing tech start-up into the global hospitality brand.",
              },
              {
                name: "Mike Koenigs",
                title: "Marketing Expert & Business Growth Strategist",
                image: "/malibu/speakers/mike-koenigs.jpeg",
                description:
                  "Mike Koenigs is a 13-time #1 bestselling author, 'Marketer of the Year', and serial entrepreneur best known for turning business owners into Transformational Business Celebrity Influencers.",
              },
              {
                name: "Marissa Andrada",
                title: "Corporate Leadership & Culture Expert",
                image: "/malibu/speakers/marissa-andrada.jpeg",
                description:
                  "Krispy Kreme's Independent Board Director & former Chipotle CHRO, Marissa Andrada is a people-focused thought leader. She excels in strategy, talent development, and navigating founder/CEO transitions.",
              },
              {
                name: "Blake Eastman",
                title: "Behavioral Scientist & Leadership Coach",
                image: "/malibu/speakers/blake-eastman.jpeg",
                description:
                  "Behavioral scientist Blake Eastman helps CEOs, entrepreneurs, and executives craft a customized style of behavioral leadership. He is the founder of The Nonverbal Group and former adjunct psychology professor at the City University of New York.",
              },
            ],
          },
        ],
      },
      {
        id: "testimonials",
        background: {
          type: "color",
          value: {
            type: "brand",
            value: "white",
          },
        },
        content: [
          {
            type: "text",
            value: "What our attendees say",
            variant: "heading",
          },
          {
            type: "testimonial-carousel",
            value: [
              {
                quote:
                  "Attending the Baja OG event was truly transformative. I formed deep connections with inspiring individuals and gained invaluable insights that have already made a lasting impact. In fact, just one week after the event, I launched a new business with one of my OG connections! Every aspect of the experience was thoughtfully curated, set against an absolutely breathtaking backdrop. I can't recommend it highly enough!",
                name: "Jason Mewis",
                role: "President & Founder @ Engcomp",
                avatar: "/Workshops/testimonials/jason-mewis.jpeg",
              },
              {
                quote:
                  "The power of Hot Seats is exponential when you bring talented people together who share openly, with great vulnerability, their thought leadership and openly ask for help. It's hard, frankly, for anyone to ask for help. At the OG Retreat, there's so much talent in the room. To pay any one of these people to consult with you for a day is priceless, but to get all this together in one room, weighing in, elevates the impact.",
                name: "Robert S. Castellini",
                role: "Managing Director - Investments @ Wells Fargo",
                avatar: "/Workshops/testimonials/robert-castellini.png",
              },
              {
                quote:
                  "I came to this OG Retreat because I really needed a vacation with other ambitious entrepreneurs—it's all about that social connection and stimulating conversations. I'm weird and it's hard to find really solid connections with people because of the position that I'm in my work. But here I was, surrounded by people who get me.",
                name: "Dan Guido",
                role: "CEO & Co-Foundern of Trail of Bits - Cybersecurity Firm",
                avatar: "/Workshops/testimonials/dan-guido.jpg",
              },
              {
                quote:
                  "This mastermind gave me clear direction and actionable strategies to finally hit my business goals that I've been putting on paper but haven't been able of achieve. I believe the techniques and strategies that I've learned here today will 10x my growth in just one year.",
                name: "Dr. Donald Shrump",
                role: "Sports Performance Coach w/ a roster of top athletes like Novak Djokovic",
                avatar: "/Workshops/testimonials/donald-shrump.png",
              },
              {
                quote:
                  "Nick does a great job putting together these events and really bringing some some legitimate experts in their field. Every time I come to a leverage event, I'm always learning some really incredible stuff. Leverages businesses at optimization. I learned strategies to save a second here, a minute there, an hour here, and really cut down and become more efficient and optimize my business.",
                name: "Josh Martin",
                role: "Former Pro NFL player - Owner of Smoothie King Franchises",
                avatar: "/Workshops/testimonials/josh-martin.png",
              },
            ],
          },
          {
            type: "video-gallery",
            value: [
              {
                src: "https://app.searchie.io/file/92QbmGMgDp/embed",
              },
              {
                src: "https://app.searchie.io/file/w2VaYAeeqM/embed",
              },
              {
                src: "https://app.searchie.io/file/kqkOLVyMq4/embed",
              },
              {
                src: "https://app.searchie.io/file/l2RZ3kMx2a/embed",
              },
              {
                src: "https://app.searchie.io/file/VDGxYnKjNW/embed",
              },
              {
                src: "https://app.searchie.io/file/5qnlxWBvDr/embed",
              },
              {
                src: "https://app.searchie.io/file/RD6dJ1QPqQ/embed",
              },
              {
                src: "https://app.searchie.io/file/92QbZko9Dp/embed",
              },
            ],
            initialDisplay: 4,
            button: {
              text: "See More Testimonials",
              variant: "yellow",
            },
          },
        ],
      },
      {
        id: "who-for",
        background: {
          type: "color",
          value: {
            type: "brand",
            value: "off-white",
          },
        },
        "text-color": {
          type: "brand",
          value: "black",
        },
        content: [
          {
            type: "text",
            value: "Who this event is for",
            variant: "heading",
          },
          {
            type: "list",
            items: [
              {
                type: "text",
                value:
                  "✓ Established business owners generating $1M+ in annual revenue",
                variant: "list-item",
              },
              {
                type: "text",
                value: "✓ C-suite executives leading teams of 10+ employees",
                variant: "list-item",
              },
              {
                type: "text",
                value:
                  "✓ Industry experts with proven track records of innovation",
                variant: "list-item",
              },
              {
                type: "text",
                value:
                  "✓ Visionaries committed to both business growth and personal fulfillment",
                variant: "list-item",
              },
              {
                type: "text",
                value:
                  "✓ Leaders seeking high-level connections and strategic partnerships",
                variant: "list-item",
              },
              {
                type: "text",
                value:
                  "✓ Decision-makers ready to implement transformative changes",
                variant: "list-item",
              },
            ],
          },
          {
            type: "text",
            value: (
              <>
                Who this event is <span style={{ color: "#484c6c" }}>NOT</span>{" "}
                for
              </>
            ),
            variant: "heading",
          },
          {
            type: "list",
            items: [
              {
                type: "text",
                value:
                  "✗ Early-stage entrepreneurs still validating their business model",
                variant: "list-item",
              },
              {
                type: "text",
                value:
                  "✗ Individuals primarily focused on tactical implementation rather than strategic direction",
                variant: "list-item",
              },
              {
                type: "text",
                value:
                  "✗ Those unwilling to be vulnerable and share real challenges",
                variant: "list-item",
              },
              {
                type: "text",
                value:
                  "✗ Networkers only interested in transactional relationships",
                variant: "list-item",
              },
              {
                type: "text",
                value:
                  "✗ People seeking a passive learning experience without active participation",
                variant: "list-item",
              },
              {
                type: "text",
                value:
                  "✗ Leaders not ready to both give and receive honest feedback",
                variant: "list-item",
              },
            ],
          },
        ],
      },
      {
        id: "hosts",
        background: {
          type: "color",
          value: {
            type: "brand",
            value: "black",
          },
        },
        "text-color": {
          type: "brand",
          value: "white",
        },
        content: [
          {
            type: "text",
            value: "Meet your hosts",
            variant: "heading",
          },
          {
            type: "profile-gallery",
            profiles: [
              {
                name: "Nick Sonnenberg",
                title: "Business Efficiency Expert",
                image: "/santa-fe/hosts/nick-sonnenberg-photo.png",
                description:
                  "Nick Sonnenberg is the world's leading business efficiency expert, founder and CEO of Leverage, an Inc. columnist and author. His CPR® Business Efficiency Framework helps companies maximize performance and reduce overwhelm, consistently resulting in greater output, less stress, and happier employees.",
              },
              {
                name: "Jessica Carroll",
                title: "Premier Event Strategist & Growth Expert",
                image: "/santa-fe/hosts/jessica-carroll-photo.jpg",
                description:
                  "Jessica Carroll is a premier event strategist and growth expert, specializing in high-impact experiences that connect top entrepreneurs, executives, and experts. As Head of Growth & Events at Leverage, she designs exclusive masterminds and workshops that drive strategic partnerships and business breakthroughs.",
              },
            ],
          },
        ],
      },
      {
        id: "cta",
        background: {
          type: "gradient",
          direction: "right",
          value: [
            {
              type: "hex",
              value: "#484c6c",
            },
            {
              type: "brand",
              value: "navy",
            },
          ],
        },
        "text-color": {
          type: "brand",
          value: "white",
        },
        content: [
          {
            type: "text",
            value: "Ready to Join the Elite Circle of Game-Changers?",
            variant: "heading",
          },
          {
            type: "text",
            value:
              "This isn't just another networking event—it's your invitation to step into a room where real influence, impact, and growth happen.",
            variant: "subheading",
          },
          {
            type: "text",
            value:
              "You've built success. But what got you here won't get you to what's next. You don't need another surface-level seminar—you need an exclusive circle of sharp minds who challenge your thinking, expand your vision, and unlock new levels of freedom, wealth, and legacy.",
            variant: "body",
          },
          {
            type: "text",
            value: "Book your call with Jessica and apply today:",
            variant: "body",
            color: {
              type: "brand",
              value: "yellow",
            },
          },
          {
            type: "button",
            text: "Explore if you're a fit",
            action: "href",
            target:
              "https://meetings.hubspot.com/jessica-carroll1/events?uuid=0eecf81e-3cf5-4347-8551-6607c1c0d6df",
            variant: "white",
            align: "center",
          },
        ],
      },
    ],
  }
];
