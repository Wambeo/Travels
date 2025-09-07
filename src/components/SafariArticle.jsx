import { Link } from 'react-router-dom';

const SafariArticle = () => {
  return (
    <div className="min-h-screen bg-background bg-orange-100 ">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <img 
          src="https://i.pinimg.com/736x/9f/9f/81/9f9f8142ade8d84e9650ebc522c752c8.jpg"
          alt="African safari landscape"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
              A Beginner's Guide to Choosing the Perfect Safari Experience
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              From childhood dreams to life-changing adventures
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="p-8 mb-12 border border-border/50 rounded-lg border bg-card text-card-foreground shadow-sm">
          <p className="text-lg leading-relaxed text-foreground mb-6 font-body">
            I still remember the first time I decided I was going on a safari. It wasn't a practical decision. It was a dream, one that had been sitting quietly in the back of my mind since I was a child, flipping through glossy travel magazines and seeing lions bathed in golden light, elephants marching across dusty plains, and skies so wide they seemed to stretch into forever.
          </p>
          <p className="text-lg leading-relaxed text-foreground mb-6 font-body">
            But here's the truth no one tells you: the idea of booking a safari can feel overwhelming at first. There are endless options; national parks, private reserves, game drives, walking safaris, luxury lodges, rustic camps. How do you even begin to choose?
          </p>
          <p className="text-lg leading-relaxed text-primary font-semibold font-body">
            This is the story of how I found my perfect safari, and hopefully, it will help you find yours too.
          </p>
        </div>

        {/* Step 1 */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-green flex items-center justify-center text-primary-foreground font-bold text-xl mr-4">
              1
            </div>
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Finding the Why Behind the Trip
            </h2>
          </div>
          <div className="ml-16 space-y-6">
            <p className="text-lg leading-relaxed text-foreground font-body">
              Before I even opened my laptop to browse safari packages, I asked myself: Why do I want to do this?
            </p>
            <p className="text-lg leading-relaxed text-foreground font-body">
              Was it to witness the Great Migration? To photograph the Big Five? To disconnect from the noise of life and sink into nature's quiet rhythm?
            </p>
            <p className="text-lg leading-relaxed text-foreground font-body">
              For me, it was all three—but knowing your "why" will narrow your choices faster than you think.
            </p>
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm bg-card/50 border-accent/30">
              <p className="text-accent font-semibold italic font-body">
                If you dream of massive herds moving across the savannah, certain places will call your name. If you want rare, intimate wildlife sightings, others will steal your heart.
              </p>
            </div>
          </div>
        </section>

        {/* Step 2 */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-sunset flex items-center justify-center text-primary-foreground font-bold text-xl mr-4">
              2
            </div>
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Choosing the Type of Safari That Matches Your Style
            </h2>
          </div>
          <div className="ml-16 space-y-6">
            <p className="text-lg leading-relaxed text-foreground font-body">
              I learned quickly that safaris aren't one-size-fits-all.
            </p>
            <p className="text-lg leading-relaxed text-foreground font-body">
              Some travelers love the romance of tented camps under the stars, where the night is alive with the sound of hyenas in the distance. Others crave the indulgence of luxury lodges with infinity pools and fine dining.
            </p>
            <p className="text-lg leading-relaxed text-foreground font-body">
              I tried both, and while the lodge spoiled me with soft beds and sunset cocktails, it was the tented camp that made me feel like I was truly part of the wild.
            </p>
            <div className="bg-card/30 p-6 rounded-lg border border-border/50">
              <h3 className="text-xl font-heading font-bold text-accent mb-4">
                Then there's the style of the safari itself:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span className="text-lg text-foreground font-body">
                    <strong>Game drives</strong> for that classic open-vehicle experience.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span className="text-lg text-foreground font-body">
                    <strong>Walking safaris</strong> for feeling the earth under your boots as your guide shows you animal tracks.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span className="text-lg text-foreground font-body">
                    <strong>Water safaris</strong> in a boat or mokoro, drifting past hippos and birds.
                  </span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground mt-4 italic font-body">
                Choosing depends on how close you want to get, and how much adventure you're ready for.
              </p>
            </div>
          </div>
        </section>

        {/* Step 3 */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-sunset flex items-center justify-center text-primary-foreground font-bold text-xl mr-4">
              3
            </div>
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Timing Is Everything
            </h2>
          </div>
          <div className="ml-16 space-y-6">
            <p className="text-lg leading-relaxed text-foreground font-body">
              I almost booked in April.
            </p>
            <p className="text-lg leading-relaxed text-foreground font-body">
              Then a guide gently told me: "You might want to rethink that." Turns out, timing matters as much as location.
            </p>
            <p className="text-lg leading-relaxed text-foreground font-body">
              Dry seasons often mean easier wildlife spotting, as animals gather near waterholes. Wet seasons paint the landscapes green and bring newborn animals into the world—but sometimes make off-road travel trickier.
            </p>
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm bg-accent/10 border-accent/30">
              <p className="text-accent font-semibold text-lg font-body">
                The magic is that there's no "bad" time. There's just the right time for the experience you want.
              </p>
            </div>
          </div>
        </section>

        {/* Step 4 */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-sunset flex items-center justify-center text-primary-foreground font-bold text-xl mr-4">
              4
            </div>
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Trusting the Guides
            </h2>
          </div>
          <div className="ml-16 space-y-6">
            <div className="p-8 rounded-lg border bg-card text-card-foreground shadow-sm bg-gradient-earth border border-accent/20">
              <p className="text-lg leading-relaxed text-foreground mb-4 font-body">
                On my first game drive, I sat quietly, clutching my camera, scanning the horizon for any sign of movement. My guide, a man who seemed to speak the language of the wind, suddenly stopped the vehicle.
              </p>
              <p className="text-lg leading-relaxed text-foreground mb-4 font-body">
                "Do you hear that?" he asked.
              </p>
              <p className="text-lg leading-relaxed text-foreground mb-4 font-body">
                I shook my head.
              </p>
              <p className="text-lg leading-relaxed text-accent font-semibold font-body">
                Minutes later, a leopard emerged from the tall grass, moving with the grace of a whisper.
              </p>
            </div>
            <p className="text-lg leading-relaxed text-foreground font-body">
              That moment taught me that choosing the right guide is just as important as choosing the right destination. They are storytellers, protectors, and navigators of the wild—the bridge between you and the safari of your dreams.
            </p>
          </div>
        </section>

        {/* Step 5 */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-sunset flex items-center justify-center text-primary-foreground font-bold text-xl mr-4">
              5
            </div>
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Savoring the In-Between Moments
            </h2>
          </div>
          <div className="ml-16 space-y-6">
            <p className="text-lg leading-relaxed text-foreground font-body">
              Yes, the wildlife encounters will steal your breath—but the quiet in-between moments might just be what you remember most.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 text-centerrounded-lg border bg-card text-card-foreground shadow-sm bg-card/50">
                <p className="text-foreground font-body">
                  The way the air smells different at sunrise.
                </p>
              </div>
              <div className="p-6 text-center rounded-lg border bg-card text-card-foreground shadow-sm bg-card/50">
                <p className="text-foreground font-body">
                  The warmth of tea in your hands as the first light touches the plains.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm text-center bg-card/50">
                <p className="text-foreground font-body">
                  The way strangers around a campfire become friends by the end of the night.
                </p>
              </div>
            </div>
            <div className="p-6 bg-primary/10 rounded-lg border bg-card text-card-foreground shadow-sm border-primary/30">
              <p className="text-primary font-semibold text-lg font-body">
                A safari isn't just about what you see; it's about how it makes you feel.
              </p>
            </div>
          </div>
        </section>

        {/* Your Turn */}
        <section className="mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-8 text-center">
            Your Turn to Begin
          </h2>
          <div className="p-8 rounded-lg border bg-card text-card-foreground shadow-sm bg-gradient-sunset text-primary-foreground">
            <p className="text-lg leading-relaxed mb-6 font-body">
              If you're reading this and your heart is already halfway to Africa, take it as a sign. Your perfect safari is waiting, one that matches your style, your pace, and your dreams.
            </p>
            <p className="text-lg leading-relaxed mb-6 font-body">
              Start with your "why," choose the kind of adventure that feels right for you, and trust the journey. Because once you've stood on the open plains and felt the earth hum beneath your feet, you'll understand why a safari is never just a trip.
            </p>
            <p className="text-xl font-bold font-heading">
              It's a love story between you and the wild.
            </p>
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-8 text-center">
            Final Thoughts
          </h2>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground font-body">
              Your first safari is the start of a lifelong love affair with Africa. Whether you dream of tracking lions across Tanzania's endless plains, gliding through Botswana's waterways, or locking eyes with a gorilla in Rwanda, the right planning will make it unforgettable.
            </p>
            <p className="text-lg leading-relaxed text-foreground font-body">
              Choosing your first safari is about balancing your dreams, budget, and comfort level.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <div className="p-8 text-center rounded-lg border bg-card text-card-foreground shadow-sm bg-accent/10 border-accent/30">
          <div className="mb-6">
            <span className="text-4xl">📍</span>
          </div>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Ready to start planning your dream safari?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 font-body">
            Contact us today and we'll tailor an adventure that's as unique as you are.
          </p>
          <Link to = "/contact" size="lg" className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2 transition-opacity font-semibold">
            Start Your Safari Journey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SafariArticle;