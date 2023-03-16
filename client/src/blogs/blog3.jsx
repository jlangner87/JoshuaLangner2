import "./styles/blog-desktop.css"
import "./styles/blog-mobile.css"
import { NavLink } from 'react-router-dom'
import { HelmetTags } from 'react-helmet'
import {EmailShareButton, FacebookShareButton, LinkedinShareButton, RedditShareButton, TwitterShareButton} from "react-share";
import {EmailIcon, FacebookIcon, FacebookMessengerIcon, LinkedinIcon, RedditIcon, TwitterIcon} from "react-share";
import { ElfsightWidget } from "react-elfsight-widget";
import header from "./assets/adhd1/adhd-header1.png"
import subheader1 from "./assets/adhd1/adhd-subheader1.png"
import subheader2 from "./assets/adhd1/adhd-subheader2.png"
import subheader3 from "./assets/adhd1/adhd-subheader3.png"
import subheader4 from "./assets/adhd1/adhd-subheader4.png"
import subheader5 from "./assets/adhd1/adhd-subheader5.png"
import subheader6 from "./assets/adhd1/adhd-subheader6.png"

function Blog3(props) {
  return (
    <div className="blog">
      <HelmetTags>
      <meta property="og:title" content="ADHD Brain | Working from Home"/>
      <meta property="og:url" content="https://joshua-langner.com/blogs/adhd-working-from-home"/>
      <meta property="og:type" content="blog"/>
      <meta property="og:description" content="Blog | Services | Portfolio6 Game Changing Tricks that Helped Me Conquer Working From Home with ADHD"/>
      <meta property="og:image" content="https://joshua-langner.com/static/media/adhd-header1.8cc5a24ce649d88fde39.png"/>
      <meta property="og:image:height" content="1200"/>
      <meta property="og:image:width" content="1200"/>
      </HelmetTags>
      <div className="blog_header_container">
        <h1 className='blog_header'>ADHD Brain | Working from Home</h1>
        <h2 className='blog_subheader'>6 Game Changing Tricks that Helped Me Conquer Working From Home with ADHD</h2>
        <p className="blog_timestamp">| Joshua Langner | March 15, 2023 |</p>
        <img className='blog_banner' src={header}/>
      </div>
      <div className="blog_content_container">
        <h3 className='blog_section_header'>HOW DID I GET HERE?</h3>
        <p className='blog_content'>I was happily married. I had awesome kids. I was working a really great sales job. And I was a mental health disaster—fighting to not completely fall apart.</p>
        <p className='blog_content'>It took some persuasion from my wife, but I eventually spoke with my doctor. One thing led to another, and at the ripe old age of 34, I was officially diagnosed with ADHD.</p>
        <p className='blog_content'>Honestly, it didn't come as a surprise. If anything, it gave a name to the mountain of things I have struggled with my entire life. I finally had the resources to cope with the challenges. Things were going great. Until—</p>
        <p className='blog_content'>I found myself working from home as the result of a major career shift. This sounded like a match made in heaven. And, to an extent, it was. It also came with a new set of productivity challenges.</p>
        <p className='blog_content'>I dove into the trenches of Google, in search of solutions. I found so many people offering tried-and-true solutions: Sticky notes, alarms, day planners, and blah blah blah. These people meat well, but I have spent my <em>entire life</em> trying and failing to rein in my chaos with these exact things. They were tedious, boring, and quickly abandoned. I needed something out of the box. I needed novelty.</p>
        <p className='blog_content'>Though several months of trial and error, I landed on these six unconventional tricks that help me stay focused and productive.</p>
        <img className='blog_section_image' src={subheader1}/>
        <h3 className='blog_section_header'>1. Put Your Shoes on</h3>
        <p className='blog_content'>When your work schedule has flexibility, there is a lot of wiggle room to decide when it its time for work and when it is not. This level of autonomy is quite appealing to many neurotypical people. For my ADHD brain, the lack of imposed structure was a train wreck.</p>
        <p className='blog_content'>When I moved to the home office, the rug of structure was pulled out from under me. I was left to create my own structure, but my executive function was not at a place where I could gauge and prioritize the tasks in front of me or implement my own productive schedule. I often found myself wandering around the house with my attention bouncing between work and personal stuff. It was exhausting.</p>
        <p className='blog_content'>Then an <a href='https://www.tiktok.com/@stone.juless/video/7131404469144816942?q=adhd%20shoes%20on%20%222022%22&t=1678906216594'>ADHD TikTok rabbit hole</a> changed everything. What was the life altering secret? <em>Put your shoes on</em>. You read that right. The game changer was shoes.</p>
        <p className='blog_content'>Putting the shoes on signaled that the work day was starting. Taking them off signaled that the work day was over. All day long, the shoes on my feet said, "You are working now."</p>
        <p className='blog_content'><em>But why?</em> You are creating a ritual paired with a physical reminder that your brain associates with work. It doesn't even have to be shoes. That is just something that works for a lot of people. It can literally be <em>anything</em> that will signal to your brain when it is time to work.</p>
        <p className='blog_content'>I also have a magic productivity candle. It doesn't actually have any magical properties. It is just a regular candle that I light when I start work. When my brain starts to tell me that I need to go research how to start a home brewery <em>right now</em>, the candle on my desk and the shoes on my feet tell me, "No, child. This is the time to keep building that website."</p>
        <img className='blog_section_image' src={subheader3}/>
        <h3 className='blog_section_header'>2. Mix a productivity playlist</h3>
        <p className='blog_content'>I spent a decade believing that the office was the most distracting chaotic place on earth. Then I started working from home, and my dreams of a zen sanctuary of productivity were shattered. Homes have so many curious noises that beg to be explored—especially when that home is also occupied by significant others, offspring, and fur babies.</p>
        <p className='blog_content'>The fix to this seemed pretty straightforward. I nabbed some cheap noise cancelling headphones from Amazon and started blasting Spotify. It worked great for a minute or two...  and then backfired spectacularly.</p>
        <p className='blog_content'><em>Ooh! I like this song.</em></p>
        <p className='blog_content'><em>I need to hear more from this artist.</em></p>
        <p className='blog_content'><em>This song was in a movie… what movie was it?</em></p>
        <p className='blog_content'><em>Oh, yeah! Who was in that movie?</em></p>
        <p className='blog_content'><em>**Activate IMDB doom scroll**</em></p>
        <p className='blog_content'>This is just one of many such scenarios. The problem was this: I love music, and my brain was just following the music to the dopamine. But I couldn't just sit and endure the home noises. That was arguably worse. There had a be a way to travel the music-dopamine trail <em>and</em> remain undistracted.</p>
        <p className='blog_content'>There was a way. I mixed a productivity playlist.</p>
        <p className='blog_content'>I started by filling the playlist music that I enjoy. Then I progressively pruned the list down. When I found myself disengaged from my work and, instead, bobbing along to the song—<em>snip!</em> and get back to work.</p>
        <p className='blog_content'>I only listened to the playlist when I was working, and I noticed something really awesome. Not only did the music block out distractions, but it also motivated me! The music would start, and my brain would go, "Hooah! Let's get stuff done!"</p>
        <p className='blog_content'>There is no universally right or wrong way to mix a productivity playlist. If it makes you productive, then you did it right. If it doesn't, then keep tweaking it. The songs that make up the playlist are going to be unique for each person. For me, it is a lot of instrumental sci-fi soundtracks. I also change it up occasionally and have different playlists for different tasks. Do what you need to do. Hyperfixate on it a little bit, and have fun with it.</p>
        <img className='blog_section_image' src={subheader2}/>
        <h3 className='blog_section_header'>3. Get a visual timer</h3>
        <p className='blog_content'>I have a lousy perception of time, but somehow I tricked myself into thinking I was, in fact, great with time. This was actually one of my arguments as to why I <em>could not</em> possibly have ADHD.</p>
        <p className='blog_content'>I am always hyper-aware of what time it is <em>right now</em>, but that awareness does not translate to practical use. Things like: <em>how long something takes to do</em>, <em>how much time has passed</em>, <em>and when to move onto the next thing</em> escape me completely.</p>
        <p className='blog_content'>Taking myself out of a structured work environment, and leaving me to self-regulate my schedule was like shining a spotlight on how terrible I actually am with time. Without external forces cueing me in on what to do when, I had to find a way to regulate myself.</p>
        <p className='blog_content'>The natural option was timers. With high hopes, I downloaded a timer and got to work. To my horror, the timer went off <em>exactly</em> when it was supposed to. Who would have thought, right?</p>
        <p className='blog_content'>But what went wrong? Do you remember those old late-night infomercials for the countertop rotisserie machine? "Set it and forget it!" Yeah, that was me with the timers. I set it. Then I forgot it. I was still time blind, except now I had alerts rubbing it in my face at regular intervals.</p>
        <p className='blog_content'>To get a handle on this, I ended up stealing from my kids. My wife had been using this <a href='https://amzn.to/3lkIme7'>ADHD Visual Timer</a> for the kids because she knew something I did not. Timers alone are not helpful for ADHD time blindness. The abstract concept of time needs to be communicated in a concrete way. Visual timers do just that, and it has been a game changer.</p>
        <p className='blog_content'>It did not cure me. I am still time blind.</p>
        <p className='blog_content'>When I am doing a task that does not engage me, 20 minutes <em>still</em> feels like 2 hours.</p>
        <p className='blog_content'>When I am doing something interesting, it <em>still</em> engages me—no! It <em>still</em> takes over mind, body, spirit. I <em>still</em> leave this planet and exist in a new world with just me and the thing.</p>
        <p className='blog_content'>But now, instead of the nebulous, "Yeah… I've got 20 minutes to do that…" It is, "The pie is getting smaller! Gotta get a move on!" or "There is a lot of pie left. I can dig in and enjoy this for a while!"</p>
        <p className='blog_content'><em>In case you were worried, I did eventually buy my own timer and give the kids theirs back.</em></p>
        <img className='blog_section_image' src={subheader4}/>
        <h3 className='blog_section_header'>4. Create a flexible workspace</h3>
        <p className='blog_content'>Don't worry. This one doesn't have an exhaustive backstory or psychological info dump. I get bored easily. When I get bored, working is torture. A simple way to combat this is to create a flexible workspace. I do this in two ways.</p>
        <p className='blog_content'>I have this <a href='https://amzn.to/3yDDFPE'>Desk Converter</a>. I can switch from a sitting desk to a standing desk in about 10 seconds with the flick of my wrist. This small change of position helps break the monotony just enough to get me back on track.</p>
        <p className='blog_content'>When that fails, it is time for the go bag. The go bag has everything I need to do my work. On an impulse, I can slip my laptop into the go bag and change my entire work environment—to the kitchen, to the coffee shop, to my car, wherever.</p>
        <img className='blog_section_image' src={subheader5}/>
        <h3 className='blog_section_header'>5. Establish Boundaries</h3>
        <p className='blog_content'>When you work at a job outside of the home, you are surrounded with people who are generally working towards a common goal. And they usually have, at the very least, a surface level understanding of your work patterns.</p>
        <p className='blog_content'>Spouses, children, and roommates generally do not, and things can get real sticky real fast—especially if the work area is a shared area—especially for people who have a hard time recovering from an interruption (Or in my case, if an interruption can somehow turn into a 3 hour lunch date).</p>
        <p className='blog_content'>I had to learn to set boundaries pretty quickly. That is another thing that is going to look different for everyone. For me, it looked like this:</p>
        <p className='blog_content'><b>If my door is open:</b> <em>Please, come on in and talk to me!</em></p>
        <p className='blog_content'><b>If my door is closed:</b> <em>Come in and do what you need to do, but I don't want to be interrupted.</em></p>
        <p className='blog_content'><b>If my door is closed and my sign is up:</b> <em>Do not come in unless the there is a life or death situation unfolding.</em></p>
        <p className='blog_content'>The part of this that is going to look the same for everyone is this: COMMUNICATE. If you sit there and stew over every interruption but never communicate expectations around it, you are setting yourself up for a long grumpy road of resentment.</p>
        <img className='blog_section_image' src={subheader6}/>
        <h3 className='blog_section_header'>6. Find your tribe</h3>
        <p className='blog_content'>Whether you work from home or not, one of the most beneficial things anyone with ADHD can do is to find your tribe. This whole thing isn’t as uncommon as I grew up thinking. There are millions of adults out there who have been there and done that.</p>
        <p className='blog_content'>There are a lot of support groups out there. Men’s ADHD Support Group is the tribe I found myself in. This group has been an amazing support in my journey over the last year. They can be found on the <a href="https://www.mensadhdsupportgroup.org/">Men’s ADHD Support Group Website</a> or on their <a href="https://www.facebook.com/groups/mensadhdsupportgroup">Facebook Page</a>.</p>
        <p className='blog_content'>It is extremely validating to engage other adults who have a shared experience with you. It’s like <em>What? I am not one who has brain bees!?</em> Not only is support from someone who just gets it, but there is also something deeply fulfilling about being that support for someone else. Wherever you find your tribe, plug yourself in. Find support, and be support for someone else.</p>
        <p className="blog_content"><em>If you have any groups that you would like to recommend, let me know. I will update this post to include them.</em></p>
        <p className="page_break">. . .</p>
        <p className='blog_content'>Now, I know that every brain is different, and all of these might not be for everyone, and that is okay. These are just some of the things that have been helpful for me. If you try these out, I would love to hear how they worked for you. I would also love to hear some of your own tips and tricks for working from home with ADHD. You can comment below or contact me by dropping a message on <a href='https://joshua-langner.com'>My Website</a>.</p>
        <p className="disclosure">When you buy something using the links in my stories, I may earn a small commission from the Amazon Affiliates program. I only link to products that I have purchaced and love. Learn more <a href="https://affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ"><b>here</b></a>.</p>
        <div className="share_container">
          <h3 className="share_header">Like this content? Share it here!</h3>
          <div className="icon_container">
          <FacebookShareButton
            url={'https://joshua-langner.com/blogs/adhd-working-from-home'}
            quote={'This blog has some great tips for ADHDers working from home!'}
            hashtag="#ADHD #homeoffice #productivity">
            <FacebookIcon className="share_icon" round />
          </FacebookShareButton>

          <FacebookShareButton
            url={'https://joshua-langner.com/blogs/adhd-working-from-home'}
          >
            <FacebookMessengerIcon className="share_icon" round />
          </FacebookShareButton>

          <LinkedinShareButton
            url={'https://joshua-langner.com/blogs/adhd-working-from-home'}
            title="6 Game Changing Tricks that Helped Me Conquer Working From Home with ADHD"
            source="https://joshua-langner.com"
          >
            <LinkedinIcon className="share_icon" round />
          </LinkedinShareButton>

          <TwitterShareButton
            url={'https://joshua-langner.com/blogs/adhd-working-from-home'}
            title="6 Game Changing Tricks that Helped Me Conquer Working From Home with ADHD
            "
            hashtags={["ADHD", "productivity", "workingfromhome"]}
          >
            <TwitterIcon className="share_icon" round />
          </TwitterShareButton>

          <RedditShareButton
            url={'https://joshua-langner.com/blogs/adhd-working-from-home'}
            title="6 Game Changing Tricks that Helped Me Conquer Working From Home with ADHD"         
          >
            <RedditIcon className="share_icon" round />
          </RedditShareButton>

          <EmailShareButton
            url={'https://joshua-langner.com/blogs/adhd-working-from-home'}
            subject="6 Game Changing Tricks that Helped Me Conquer Working From Home with ADHD" 
          >
            <EmailIcon className="share_icon" round />
          </EmailShareButton>
          </div>
        </div>
        <div className="comment_container">
        <h3 className="share_header">Join the conversation!</h3>
          <ElfsightWidget widgetID="7379af5f-50e5-41c0-8374-7b8a29a9d641" />
        </div>
        <NavLink className="home_button" to="/">Home</NavLink>
      </div>
    </div>
  )
}

export default Blog3