import TestimonialImage1 from '../assets/image/avatar/1.png';
import TestimonialImage2 from '../assets/image/avatar/2.png';
import TestimonialImage3 from '../assets/image/avatar/3.png';
import TestimonialImage4 from '../assets/image/avatar/4.png';
import TestimonialImage5 from '../assets/image/avatar/5.png';
import TestimonialImage6 from '../assets/image/avatar/6.png';
import CaseStudyImage1 from '../assets/image/case-study/1.png';
import CaseStudyImage2 from '../assets/image/case-study/2.png';
import CaseStudyImage3 from '../assets/image/case-study/3.png';
import CaseStudyImage4 from '../assets/image/case-study/4.png';
import CaseStudyImage5 from '../assets/image/case-study/5.png';
import CaseStudyImage6 from '../assets/image/case-study/6.png';
import CaseStudyImage7 from '../assets/image/case-study/7.png';
import TeamImage1 from '../assets/image/team/1.png';
import TeamImage2 from '../assets/image/team/2.png';
import TeamImage3 from '../assets/image/team/3.png';
import TeamImage4 from '../assets/image/team/4.png';
import TeamImage6 from '../assets/image/team/6.png';
import TeamImage7 from '../assets/image/team/7.png';
import TeamImage8 from '../assets/image/team/8.png';
import TeamImage9 from '../assets/image/team/9.png';
import Company1Svg from '../assets/svg/companies/1.svg';
import Company2Svg from '../assets/svg/companies/2.svg';
import Company3Svg from '../assets/svg/companies/3.svg';
import Company4Svg from '../assets/svg/companies/4.svg';
import Company5Svg from '../assets/svg/companies/5.svg';
import Company6Svg from '../assets/svg/companies/6.svg';
import Company7Svg from '../assets/svg/companies/7.svg';
import Company8Svg from '../assets/svg/companies/8.svg';
import Company9Svg from '../assets/svg/companies/9.svg';
import Company10Svg from '../assets/svg/companies/10.svg';
import Company11Svg from '../assets/svg/companies/11.svg';
import Company12Svg from '../assets/svg/companies/12.svg';
import Company13Svg from '../assets/svg/companies/13.svg';
import Company14Svg from '../assets/svg/companies/14.svg';
import Company15Svg from '../assets/svg/companies/15.svg';
import Company16Svg from '../assets/svg/companies/16.svg';
import Company18Svg from '../assets/svg/companies/18.svg';
import Company19Svg from '../assets/svg/companies/19.svg';
import Company20Svg from '../assets/svg/companies/20.svg';
import Company21Svg from '../assets/svg/companies/21.svg';
import Company22Svg from '../assets/svg/companies/22.svg';
import Company23Svg from '../assets/svg/companies/23.svg';
import Company24Svg from '../assets/svg/companies/24.svg';
import Company25Svg from '../assets/svg/companies/25.svg';
import Company26Svg from '../assets/svg/companies/26.svg';
import Company27Svg from '../assets/svg/companies/27.svg';
import Company28Svg from '../assets/svg/companies/28.svg';
import Company30Svg from '../assets/svg/companies/30.svg';

export const navigation = [
    {
        label: 'Home',
        to: '/',
    },
    {
        label: 'Services',
        to: '/',
        children: [
            {
                label: 'Discover',
                submenu: [
                    { label: 'Marketing Strategy', to: '/service/marketing-strategy', index: 0 },
                    { label: 'Brand Strategy', to: '/service/brand-strategy', index: 1 },
                    { label: 'Branding', to: '/service/branding', index: 2 },
                ],
            },
            {
                label: 'Create',
                submenu: [
                    { label: 'UX/UI', to: '/service/ux-ui', index: 3 },
                    { label: 'Content and Animation', to: '/service/content-animation', index: 4 },
                    { label: 'Content Writing', to: '/service/content-writing', index: 5 },
                    { label: 'Website Development', to: '/service/website-development', index: 6 },
                ],
            },
            {
                label: 'Grow',
                submenu: [
                    { label: 'Community Management', to: '/service/community-management', index: 7 },
                    { label: 'Guerilla Marketing', to: '/service/guerilla-marketing', index: 8 },
                    { label: 'Public Relations', to: '/service/pr', index: 9 },
                    { label: 'KOL Management', to: '/service/kol-management', index: 10 },
                    { label: 'Social Media Management', to: '/service/social-media-management', index: 11 },
                    { label: 'Advertising (PPC)', to: '/service/ppc', index: 12 },
                ],
            },
        ],
    },
    {
        label: 'Our Work',
        to: '/our-work',
    },
    {
        label: 'About',
        to: '/about',
    },
    {
        label: 'Contact Us',
        to: '/contact',
    },
];

export const services = [
    {
        label: 'Marketing Strategy',
        to: '/service/marketing-strategy',
        description:
            'A growth marketing strategy is essential for your Web3 project seeking scalability and sustainable growth. We help prioritise effective tactics through data-driven improvements and targeted campaigns to achieve your project’s business goals, such as attracting new customers, retaining current ones, and driving revenue growth.',
    },
    {
        label: 'Brand Strategy',
        to: '/service/brand-strategy',
        description:
            'A well-defined brand architecture is crucial for a successful marketing strategy. Your project’s Purpose, Vision, Mission, and Proposition will serve as a foundation for your project’s brand identity, voice, behaviours, content, and more. A compelling brand story that connects with your project’s audience will fuel the growth of your project’s marketing strategy.',
    },
    {
        label: 'Branding',
        to: '/service/branding',
        description:
            'Connect with your project’s customers emotionally - The art of branding. Our research-driven process will give your project brand a voice, tone, and style that appeals to your project’s audience, delivering a lasting emotional bond. Let us create the unforgettable brand your project deserves.',
    },
    {
        label: 'UX/UI',
        to: '/service/ux-ui',
        description:
            'Our team offers comprehensive UX/UI design services, such as user research, wireframing, prototyping, and testing, to create user-friendly and engaging customer experiences. Our UX/UI design expertise can help increase your project’s customer satisfaction, usability, accessibility, conversions, and brand loyalty for new or existing products.',
    },
    {
        label: 'Content and Animation',
        to: '/service/content-animation',
        description:
            'We offer a service that combines content design and animation to create compelling digital content. Our services include creating banners, graphics, and animations like explainer videos, interactive animations, and motion graphics to effectively communicate your project’s message and drive conversions. Our team can help achieve your project’s objectives.',
    },
    {
        label: 'Content Writing',
        to: '/service/content-writing',
        description:
            'In the world of Web3 storytelling, our content writing team can help you navigate the unique challenges and opportunities of this ever-evolving industry. We understand how to craft content that resonates with your project’s target audience, whether your project wants to increase brand awareness, drive website traffic, or generate leads. A compelling content strategy can help you achieve your project goals faster.',
    },
    {
        label: 'Website Development',
        to: '/service/website-development',
        description:
            "Web3 standards are high, so it's more important than ever to have a strong online presence. That's where we come in. With years of experience, we know how to create high-converting website solutions that fuel your project’s growth strategy. We use the latest technology and a transparent process to design digital products that are not only high-performing but also fully scalable.",
    },
    {
        label: 'Community Management',
        to: '/service/community-management',
        description:
            'X8C offers 24/7 community moderation services focusing on brand representation, professional communication, and community building through engaging content. Trust us as your preferred project partner to sustain and foster your project’s native community.',
    },
    {
        label: 'Guerilla Marketing',
        to: '/service/guerilla-marketing',
        description:
            "Boost your project’s brand social presence with X8C’s guerilla marketing on various platforms like Twitter, Telegram, Discord, Reddit, and/or 4chan. Build awareness, create noise on prominent socials, and amplify engagement with our team's help.",
    },
    {
        label: 'Public Relations',
        to: '/service/pr',
        description:
            'Partner with top crypto and mainstream publications such as CoinDesk, Cointelegraph, Bloomberg, Nasdaq, and more to elevate your project’s PR. X8C also features PR articles on CryptoNewsLine and social blogs for an increased audience and maximum outreach.',
    },
    {
        label: 'KOL Management',
        to: '/service/kol-management',
        description:
            'X8C partners with top crypto KOLs to increase your project exposure, grow audience, and build brand credibility. We offer KOL mapping, identification, management, and relationship-building services at multiple price points.',
    },
    {
        label: 'Social Media Management',
        to: '/service/social-media-management',
        description:
            "X8C's SMM team manages high-performing social media campaigns on prominent platforms, leveraging next-gen strategies for measurable results. We work as an extension of your project’s marketing team.",
    },
    {
        label: 'Advertising (PPC)',
        to: '/service/ppc',
        description:
            'Once your project’s brand and tech stack is established, it’s time to turbocharge your project’s growth. X8C is constantly pushing for the next level in performance for Paid Ads (PPC). Using today’s most popular channels, and a specialist team with years of experience will not only fuel your project’s growth strategy but minimise spending in the process.',
    },
];

export const numbersInfo = [
    {
        prefix: '',
        suffix: '+',
        number: 160,
        text: 'Clients Served',
    },
    {
        prefix: '',
        suffix: '+',
        number: 80,
        text: 'Team Size',
    },
    {
        prefix: '',
        suffix: '+',
        number: 400,
        text: 'Publication Partners',
    },
    {
        prefix: '',
        suffix: 'M+',
        number: 300,
        text: 'Influencer Potential Outreach',
    },
];

export const testimonials = {
    employee: [
        {
            image: TestimonialImage1,
            text: '“Working as a moderator at X8C has been an incredibly rewarding experience. Not only have I had the opportunity to manage the communities of various Web3 projects, but I have also gained a deeper understanding and insight into the Web3 industry.\n\nAs a crypto enthusiast, this has been particularly exciting for me, as I have been able to increase my knowledge and passion for the field. Overall, I am grateful to be a part of the X8C team and to have the opportunity to contribute to the growth and success of these innovative Web3 projects.”',
            position: 'Mark Takehiko Maruyama,\n Community Manager',
        },
        {
            image: TestimonialImage2,
            text: '“The culture at X8C is one of inclusivity and community, even when working remotely. I have always felt supported and connected to my colleagues, which has greatly contributed to my overall sense of well-being and enjoyment in my job. I am grateful to be a part of such a welcoming and supportive team, and believe that this positive culture is a key factor in our success.“',
            position: 'Nyaknno Udofia,\n Brand Builder',
        },

        {
            image: TestimonialImage3,
            text: '“As a Brand Builder at X8C, I have the privilege of working for a global company that values diversity, ethical standards, and personal growth. Nearly a year into this role, I am thrilled to be working on multiple Web3 projects with colleagues from a variety of cultural backgrounds.\n\nThe diverse and dynamic nature of this work has made every day an exciting and enjoyable experience. I am grateful to be a part of a team that values inclusivity and the power of collaboration.“',
            position: 'Akwuneche Chinyere Vivian,\n Brand Builder',
        },
        {
            image: TestimonialImage4,
            text: '“X8C has provided me with numerous opportunities to accelerate my career development by improving my professional skills and abilities. Working closely with the management team, I have received exceptional guidance and support, which contributed to my strong performance with our Web3 and blockchain clients.\n\nI am grateful for the opportunity to work at X8C and highly recommend it as a place to grow and thrive. I am excited to see what the future holds for me here.”',
            position: 'Nemanja Tatalovic,\n Account Director',
        },
        {
            image: TestimonialImage5,
            text: "“Joining X8C has helped me quickly advance and grow from both a personal and professional perspective. My skills as an Editor have dramatically improved along with my ability to better serve our clients.\n\nOn top of that, X8C's culture and strong team dynamic have created an ideal environment for growth, motivating me to strive for more.”",
            position: 'Tristan Robert Lane,\n Lead Editor',
        },
        {
            image: TestimonialImage6,
            text: "“X8C is a dynamic and enjoyable place to work, where personal and professional development are actively encouraged and rewarded. If you are seeking new challenges and opportunities to take on greater responsibilities, I highly recommend considering a career at X8C. As a member of the team, I am proud to be a part of the company's growth and am excited to see what the future holds.”",
            position: 'Alper Baskan,\n Project Manager',
        },
    ],
    client: [
        {
            position: 'Guy Oren, CEO at Poolz',
            text: 'We engaged X8C for support on marketing efforts and community building, specifically to help manage our Telegram community. Their team is outstanding, especially in the way they handle questions and difficult situations in the channel. They exemplify professionalism with acute product, market, and general crypto knowledge, all put together to provide us with exceptional community moderation services.',
        },
        {
            position: 'Ryan Deen, Co-Founder at KOLnet',
            text: "X8C marketing brings a considerable level of experience, pragmatism, and strategy to any project's marketing.\n\nBringing novel and thought-through ideas to execution.\n\nA seasoned team in crypto is hard to find.",
        },
        {
            position: 'Justin Barr, Core Team at Honeyland',
            text: "One of our biggest needs was to raise awareness for our project across the crypto space. We partnered with X8C to help us establish a brand presence and grow our visibility through tailored marketing efforts. The team's expertise in marketing and social media, in addition to their strategic guidance, helped us achieve what we wanted and put us in a stronger market position",
        },
        {
            position: 'Mihaly Jurin, Partnership Manager at QANPlatform',
            text: "At the beginning of our partnership with X8C, our marketing goals were to push very focused and crisp narratives to our community, differentiating our layer-1 product and ecosystem from the rest while growing our social media presence.\n\nX8C's marketing support did just that, helping us establish our Brand identity and accelerate awareness for our project across the web3 ecosystem.\n\nIt was a pleasure working with their team and we'll continue to seek out their expertise as we expand.",
        },
        {
            position: 'Todd Young, CRO & Head of Web3 at Gamestar+',
            text: "X8C's team of blockchain experts shined across their suite of services. Their insights and recommendations were vital in helping us grow and manage our community of users. They are our go-to partner!",
        },
        {
            position: 'NicoThePico, Chief Growth Officer at Balthazar',
            text: "Working with X8C has always been a pleasure, they've shown to be consistently responsive while reliably delivering high-quality services.",
        },
        {
            position: 'Nuno Correia,  Founder & Chief Strategy Officer at Utrust',
            text: "X8C's web3 marketing expertise and strategies supported us at an important time in our development and expansion stages. Their level of commitment throughout our partnership was helpful in increasing our project's awareness. We look forward to future collaborations!",
        },
        {
            position: 'James Raymond Hattem, Business developer at Bugatti Group',
            text: 'The Bugatti Group had a great working experience with X8C - efficient, fast responses, and great work from the artist.',
        },
        {
            position: 'Charlie Rhee, CEO at Fufu',
            text: 'We have been working in tandem with X8C, regarding Community management and Marketing, right from our early days. Their commitment and agility in all areas made them an essential partner for us. Valuable collaboration for every project looking for different solutions in web3.',
        },
    ],
};

export const caseStudies = [
    {
        image: CaseStudyImage1,
        label: 'Polkastarter',
        title: 'Fast-tracking product adoption through community management',
        text: 'Managed 24/7 community (80k+ members, 110+ IDOs, thriving trading) via moderation (screening, removal, channels, training, quick answers).',
        service: 'Community Management',
        heading:
            'Our team provided 24/7 community management, resulting in 80,000+ members and 110+ successful IDOs with a thriving trading channel, by moderating messages, removing spam, establishing communication channels, training moderators, and providing quick responses to common questions.',
        challenges:
            "• High-volume message management and community flooding control.\n• Managing the community's post-IDO sentiments and reactions.\n• Protecting the community from bots and scammers and FUD management.\n• Addressing user inquiries while building products and executing marketing.",
        solutions:
            "The team provided 24/7 support for community management, including moderating messages and removing spam to maintain the community's appeal and brand image. They established communication channels to ensure positive community sentiment and trained moderators to handle FUD, attacks, and bots. They also provided quick responses to common questions and kept the Polkastarter team informed about community sentiment.",
        results: [
            { value: '80,000+', label: 'community members' },
            { value: 'Launched', label: 'their token (POLS)' },
            { value: '24/7', label: 'Moderation' },
            { value: '110+', label: 'successful IDOs' },
        ],
        campaign:
            'Our team was available 24/7 and covered every time zone, even during holidays. Our moderators engaged with the community, keeping it thriving while the Polkastarter team focused on building their product and expanding their marketing efforts. To ensure positive community sentiment, we established an internal group on Telegram for seamless communication in case of an escalation or for product-based questions until resolution. Moderators were trained to be resilient and smart in handling situations like FUD, planned attacks, or bot infiltrations, and we configured a Telegram bot to remove spam links or messages automatically. We also curated FAQs and shorthand quick responses to accelerate response times for common questions and prioritized pacifying the community in cases of negative post-launch reactions and FUD. We also kept the Polkastarter team informed about the community sentiment and reception of specific IDOs.',
        conclusion:
            'The successful community management campaign resulted in a 160x growth of community members, the launch of their token and product, a thriving trading channel, and 110+ successful IDOs with engaged participants. This was achieved through 24/7 support, moderating messages and removing spam, establishing communication channels, training moderators to handle FUD and bots, providing quick responses to common questions, and keeping the team informed about community sentiment.',
    },
    {
        image: CaseStudyImage2,
        label: 'Layer 1',
        title: 'Marketing beyond market constraints',
        text: "X8C boosted the client's social media presence with a tailored approach and custom narratives. Results: 145% more mentions, 3X higher engagements in the first month.",
        service: 'Guerilla Marketing',
        heading:
            'The X8C team successfully increased engagement and awareness for a client with a low social media presence by tailoring their approach and creating custom narratives, resulting in 145% increase in mentions and more than 3X increase in engagements within the first month.',
        challenges:
            '• Lack of general interest because of bear market conditions\n• Complexity of the project\n• Low social media presence and community awareness\n• Limited overall engagement with low unique authors and site mentions',
        solutions:
            'The solution to increase traction for the project despite bear market conditions was to tailor the approach, identify target audiences, and create custom narratives for different social media platforms. The X8C team worked with the project team to execute the marketing plan and achieved success by breaking down the complexity of the project into simpler USPs and discussing them with the community from a personal perspective. This allowed for the use of multiple narratives and discussion of the project from different angles.',
        results: [
            { value: '145% ', label: 'increase in mentions' },
            { value: '3X ', label: 'increase in engagements' },
            { value: '67%', label: 'increase in unique authors' },
            { value: '46%', label: 'increase in site mentions' },
        ],
        campaign:
            'Our client, a company with multiple products, needed help with their Guerrilla Marketing efforts to increase awareness and engagement on social media. They were facing challenges such as a lack of interest due to bear market conditions and a low social media presence. We tailored our approach, identified target audiences, and created custom narratives for different social media platforms. We also broke down the complexity of the project into simpler USPs and discussed them with the community from a personal perspective. This allowed for the use of multiple narratives and discussion of the project from different angles. This approach led to a 145% increase in mentions and more than 3X increase in engagements within the first month, as well as positive results throughout the following months.',
        conclusion:
            'Despite bear market conditions and a low social media presence. The team tailored their approach, identified target audiences, and created custom narratives for different social media platforms, as well as breaking down the complexity of the project into simpler USPs and discussing them with the community. This approach led to a 145% increase in mentions, more than 3X increase in engagements within the first month, and positive results throughout the following months.',
    },
    {
        image: CaseStudyImage3,
        label: 'Defi',
        title: 'Claiming market share in intense competition',
        text: "We helped this DeFi project grow community and market share. Targeted DeFi communities with campaigns around the project's USPs.",
        service: 'Guerilla Marketing',
        heading:
            "Our client, a DeFi project, sought help in growing their community and increasing their market share in the competitive DeFi space. We targeted DeFi communities on social media with campaigns and narratives focusing on the project's USPs, and adopted an organic approach which led to a 3.2K increase in Twitter followers in the first month, reaching 50% growth over 1 year and a 45X increase in token price.",
        challenges:
            '• Need for a strong and well-established community in the competitive DeFi sphere.\n• Difficulty in standing out from the competition.\n• Difficulty in securing market share in the Defi space.',
        solutions:
            'To achieve the anticipated results, we created campaigns and narratives revolving around the strongest USPs of the project, comparison angles to showcase our client for what they are worth. We specifically targeted DeFi communities across all the social platforms to make every effort count. We adopted a completely organic approach to spread the word and increase awareness of the project. ',
        results: [
            { value: '3.2K', label: 'increase in Twitter followers' },
            { value: '5.2K', label: 'increase in Twitter followers' },
            { value: '50%', label: 'increase in Twitter followers' },
            { value: '45X', label: 'increase in token price' },
        ],
        campaign:
            "Our client, a DeFi project with strong fundamentals and a long-term vision, approached us for help in spreading the word and growing their community organically. They were facing a challenge in the competitive DeFi sphere, where they needed a strong and well-established community to stand out and secure their market share. To address this challenge, we created campaigns and narratives that highlighted the project's strongest USPs, and compared it to others in the space. We specifically targeted DeFi communities across all social platforms to make the most of our efforts. We also adopted a completely organic approach to increase awareness of the project, which led to a 3.2K increase in Twitter followers in the first month, 5.2K increase in the second month, and a 50% increase over the course of 1 year, reaching up to 50K followers. Additionally, the token price reached the ATH with a 45X price action within the first year.",
        conclusion:
            "The campaign for our client, a DeFi project, aimed to secure market share in the competitive DeFi space. The strategy included highlighting the project's strongest USPs and targeting DeFi communities across all social platforms with an organic approach. The results were impressive, with a 3.2K and 5.2K increase in Twitter followers in the first two months and a 50% increase over the course of 1 year, reaching up to 50K followers. Additionally, the token price reached its all-time high with a 45X increase within the first year, showing the success of our campaign in building a strong and well-established community.",
    },
    {
        image: CaseStudyImage4,
        label: 'AR + VR',
        title: 'Building brand recognition through strategy',
        text: 'Marketing campaign aimed to generate awareness and hype for token launch. Successful, resulting in sold-out IDO.',
        service: 'Guerilla Marketing',
        heading:
            'The marketing campaign aimed to generate awareness and hype for a new token launch. The team selected relevant crypto communities, used social media, PR, and community building to establish a strong presence in the market. The campaign was a success, resulting in a sold-out IDO and a token price increase of 30X within 10 days, reaching ATH with 62X increase from IDO price.',
        challenges:
            '• Successful token launch\n• 6 month time frame for marketing campaigns\n• Project is brand new and lacks presence in the space\n• Need to create awareness and hype around the project.',
        solutions:
            'We carefully selected the appropriate crypto communities and the ecosystem that the project belongs to across all social platforms to engage with and continuously built up the hype around the token launch and project USPs with a laser focus approach.',
        results: [
            { value: 'Successful', label: 'token launch' },
            { value: '30X', label: 'increase in token price' },
            { value: 'ATH', label: 'reached with 62X' },
        ],
        campaign:
            'The campaign for the token launch was a comprehensive and well-executed strategy aimed at creating awareness and hype around the new project. The team had a clear goal of achieving a successful token launch and set a 6-month time frame for the marketing campaigns. The project was brand new and did not have much presence in the market, so it was crucial to establish a strong foothold in the space. The team used a variety of marketing channels such as social media, PR, and community building to build a strong community and generate buzz around the project. The effort paid off, with an sold-out IDO and a token price that increased by 30X within the first 10 days of the launch, eventually reaching its all-time high with a 62X price increase from the IDO price. The campaign was a resounding success and served as a model for other projects in the industry.',
        conclusion:
            'The team faced challenges such as a new project and a 6-month time frame for marketing campaigns. They used a variety of channels to engage with crypto communities and build a strong community. The effort paid off with a successful token launch, IDO sold-out, and a token price increase of 30X within 10 days of launch. Eventually reaching its ATH with a 62X price increase from the IDO price, the campaign was a resounding success.',
    },
    {
        image: CaseStudyImage5,
        label: 'Indexing protocol',
        title: 'From obscurity to presence',
        text: 'X8C aimed to increase awareness and engagement in the Polkadot ecosystem via the GM campaign. Despite challenges, the team ran campaigns for 6 months.',
        service: 'Guerilla Marketing',
        heading:
            'The X8C project, an indexing protocol for the Polkadot ecosystem, aimed to increase awareness and engagement within the community through a GM campaign. Despite initial challenges, the team ran multiple campaigns over 6 months focusing mainly on Polkadot communities but also targeting other ecosystems, adapting approach based on market conditions and community feedback.',
        challenges:
            '• Low numbers at the start of the project\n• Lack of engagements or awareness\n• Limited number of followers\n• Low total number of mentions across social media\n• Low engagement (1.3 K)',
        solutions:
            'Team curated multiple campaigns over 6 months, with unique approaches to increase awareness and engagement, mainly focusing on Polkadot communities but also targeting other ecosystems, adapting approach based on market conditions and community feedback.',
        results: [
            { value: '5K', label: 'mentions' },
            { value: '3X', label: 'increase in engagements' },
            { value: '2X', label: 'increase in unique authors' },
        ],
        campaign:
            'The campaign aimed to increase awareness and perception of the X8C project, an indexing protocol for the Polkadot ecosystem, which had a limited social media presence and low engagement with the community. The team faced challenges such as low numbers, lack of awareness and limited followers, but they curated multiple campaigns over 6 months, with unique approaches, focusing mainly on Polkadot communities but also targeting other ecosystems, adapting approach based on market conditions and community feedback. The campaign was successful in increasing the number of mentions up to 5K per month, tripling the number of engagements and doubling the number of unique authors discussing the project.',
        conclusion:
            "The GM campaign for the X8C project, an indexing protocol for the Polkadot ecosystem, aimed to increase awareness and engagement within the community. Despite initial challenges such as low numbers, lack of awareness, and limited followers, the team was able to successfully increase the project's presence through multiple campaigns over 6 months. These campaigns focused mainly on Polkadot communities but also targeted other ecosystems, adapting the approach based on market conditions and community feedback. As a result of these efforts, the number of mentions per month increased to 5K, engagement tripled, and the number of unique authors discussing the project doubled.",
    },
    {
        image: CaseStudyImage6,
        label: 'Kolnet',
        title: 'Achieving "sold-out" token sale in a bear market',
        text: 'PR campaign aimed to increase KOLnet IMOs, and IDO awareness in the bear market. The team used project reviews, current IDO focus, and tailored content strategy.',
        service: 'Public Relations',
        heading:
            'The PR campaign for KOLnet aimed to increase awareness of their Initial Marketing Offerings (IMOs) and IDO in a bear market. The team used a combination of deep-dive project reviews, emphasizing the current IDO, and tailored external content strategy.',
        challenges:
            '• Lack of general interest due to bear market conditions\n• Low overall media presence and community awareness\n• Limited published content\n• No focused attention from newswires',
        solutions:
            "The solutions for increasing awareness and interest in the project included: deep-dive project reviews to educate the audience, emphasizing the current IDO and pursuing new PR narratives, tailoring an external content strategy and identifying target audience, placing a thought leader for an organic interview on Hackernoon, focusing on discovery by an organic placement, and sponsored placements on Coincodex and Coincheckup on IDO day. Additionally, all main articles were syndicated via X8C's micro PR line to increase SEO score with backlinks to the main article, project website, and Twitter.",
        results: [
            { value: 'Sold-out', label: 'IDO' },
            { value: 'Token Sale', label: 'listing on CoinCodex and CoinCheckup' },
            { value: 'Most engaged', label: 'interview on Hackernoon' },
            { value: 'High number', label: 'of backlinks' },
        ],
        campaign:
            'Our PR campaign for KOLnet, a launchpad introducing Initial Marketing Offerings (IMOs), was successful in achieving their goals of creating awareness, spreading the word about their product and IDO, and increasing their overall SEO health. Despite the bear market conditions, our external content strategy led to a sold-out token sale. We placed a thought leader interview on Hackernoon and an organic placement on NullTX, followed by sponsored placements on CoinCodex and CoinCheckup. All main articles were syndicated via our micro PR channels, leading to 320+ backlinks, 4 main placements, 58+ syndicated content placements, and 87,281+ overall impressions.',
        conclusion:
            'The PR campaign for KOLnet aimed to create awareness and interest in their Initial Marketing Offerings (IMOs) and IDO despite bear market conditions. Solutions included deep-dive project reviews, emphasizing the current IDO, tailoring an external content strategy, placing a thought leader interview on Hackernoon, and sponsored placements on CoinCodex and CoinCheckup.',
    },
    {
        image: CaseStudyImage7,
        label: 'Spool',
        title: 'Transforming SEO from murky to healthy',
        text: 'High-impact press releases & interviews, expertly syndicated via CryptoNewsLine, reaching an ideal audience for positive impact.',
        service: 'Public Relations',
        heading:
            "PR campaign for Spool Finance aimed to improve SEO & media presence despite bear market conditions, common project name & lack of interest. Solns incl press release & organic interview, syndicated via X8C's CryptoNewsLine & targeting ideal audience.",
        challenges:
            '• Lack of general interest due to bear market conditions\n• Lack of established media presence and community awareness\n• Difficulty in drawing traction due to common project name and poor SEO\n• No organic content, thought leaders or external content strategies in place. Difficulty in selecting an appropriate thought leader.',
        solutions:
            'We created a press release and an organic interview with the CMO, which were syndicated on X8C’s CryptoNewsLine, to increase media presence and community awareness. We also aimed to improve SEO and establish recognition for the project by highlighting its unique selling points and targeting the ideal audience.',
        results: [
            { value: 'Most engaged ', label: 'interview' },
            { value: 'Delivered', label: 'new users' },
            { value: '83+', label: 'backlinks' },
            { value: '36,828+', label: 'Overall impressions' },
        ],
        campaign:
            "The Spool Finance campaign aimed to improve the project's SEO and establish a media presence for them. The challenges faced included lack of interest due to bear market conditions, no media presence or community awareness, a common project name, and difficulty in selecting an appropriate thought leader. To overcome these challenges, a press release titled \"Project offers premium returns on Stablecoins thanks to Smart Yield Generation\" was pushed, along with an organic interview with the project's CMO titled \"DAOs Will Make Financial Services Truly Collaborative and Equal in Nature.\" These were then syndicated through X8C's CryptoNewsLine, which included blockchain-related and mainstream websites. The press release was featured on the front page of a top-tier publication for 24 hours, highlighting the project's main USP and premium returns. The organic interview became the most engaged post on Hackernoon for 7 days, building community confidence and recognition. The syndication of the articles helped improve the project's SEO presence, increase community strength and adoption, and deliver new users to the smart yield generation project.",
        conclusion:
            "The Spool Finance PR campaign aimed to improve SEO and establish a media presence for the project. Challenges included a lack of interest due to market conditions, no media or community presence, and a common project name. Solutions included pushing a press release and organic interview, syndicating them through X8C's CryptoNewsLine, and highlighting the project's unique selling points and targeting the ideal audience. Results included most engaged interview for 7 days on Hackernoon, delivered new users to the project's smart yield generation, and improved SEO presence with 83+ backlinks and overall impressions of 36,828+.",
    },
];

export const teamMembers = [
    {
        name: 'Damir Horvat',
        position: 'CEO',
        link: 'https://www.linkedin.com/in/damir-horvat-60268115b/',
        image: TeamImage1,
    },
    {
        name: 'Bharadwaj Hari',
        position: 'Head of Operations',
        link: 'https://www.linkedin.com/in/bharadwaj-hari-52738115b/',
        image: TeamImage2,
    },
    {
        name: 'Sangeetha Coelho',
        position: 'Head of HR',
        link: 'https://www.linkedin.com/in/sangeeta-c-278568b4/',
        image: TeamImage4,
    },
    {
        name: "Sam O'Leary",
        position: 'Head of KOL Networking',
        link: 'https://www.linkedin.com/in/samjoleary/',
        image: TeamImage8,
    },
    {
        name: 'Baran Altan',
        position: 'Head of Growth Marketing',
        link: 'https://www.linkedin.com/in/baran-altan-341a07152/',
        image: TeamImage7,
    },
    {
        name: 'Chris Marley',
        position: 'Head of Marketing',
        link: 'https://www.linkedin.com/in/allaboardtheporta/',
        image: TeamImage9,
    },
    {
        name: 'Luka Kopajtic',
        position: 'Head of Design',
        link: 'https://www.linkedin.com/in/lukakopajtic/',
        image: TeamImage6,
    },
    {
        name: 'Arvin Nathan',
        position: 'Head of PR',
        link: 'https://www.linkedin.com/in/arvin-nathan-16638a16a/',
        image: TeamImage3,
    },
];

export const trustedCompanies = [
    Company1Svg,
    Company2Svg,
    Company3Svg,
    Company4Svg,
    Company5Svg,
    Company6Svg,
    Company7Svg,
    Company8Svg,
    Company9Svg,
    Company10Svg,
    Company11Svg,
    Company12Svg,
    Company13Svg,
    Company14Svg,
    Company15Svg,
    Company16Svg,
    Company18Svg,
    Company19Svg,
    Company20Svg,
    Company21Svg,
    Company22Svg,
    Company23Svg,
    Company24Svg,
    Company25Svg,
    Company26Svg,
    Company27Svg,
    Company28Svg,
    Company30Svg,
];

export const serviceCircles = ['GROW', 'CREATE', 'DISCOVER'];
