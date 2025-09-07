

const destinations = [
  {
    number: 1,
    title: "Serengeti National Park, Tanzania",
    description: "The Serengeti is the stage for one of nature's greatest spectacles, the Great Migration. Over two million wildebeest, zebra, and gazelle cross the plains, with predators close behind. Visit between June and September for river crossings or January–February for calving season."
  },
  {
    number: 2,
    title: "Maasai Mara National Reserve, Kenya",
    description: "An extension of the Serengeti ecosystem, the Mara is famous for its big cat sightings; lions, leopards, and cheetahs. The annual migration also sweeps through here, making it a photographer's paradise."
  },
  {
    number: 3,
    title: "Okavango Delta, Botswana",
    description: "This UNESCO World Heritage Site is a lush inland delta attracting elephants, hippos, and hundreds of bird species. Mokoro (dugout canoe) safaris offer an intimate way to explore its waterways."
  },
  {
    number: 4,
    title: "Kruger National Park, South Africa",
    description: "One of Africa's most accessible parks, Kruger is perfect for first-time safari-goers. Home to the Big Five, it also offers self-drive options and a range of accommodations for every budget."
  },
  {
    number: 5,
    title: "Etosha National Park, Namibia",
    description: "Known for its salt pan landscapes and dramatic sunsets, Etosha draws herds of elephants, giraffes, and black rhinos to its waterholes, prime for game viewing."
  },
  {
    number: 6,
    title: "Chobe National Park, Botswana",
    description: "If you love elephants, this is your paradise. Chobe has one of the largest elephant populations in the world, best seen on a sunset boat cruise along the Chobe River."
  },
  {
    number: 7,
    title: "Bwindi Impenetrable National Park, Uganda",
    description: "Step into a misty jungle to meet the world's remaining mountain gorillas. Trekking here is challenging but offers a once-in-a-lifetime wildlife encounter."
  },
  {
    number: 8,
    title: "Volcanoes National Park, Rwanda",
    description: "Another gorilla trekking haven, Rwanda also offers golden monkey tracking and breathtaking views of the Virunga Mountains."
  },
  {
    number: 9,
    title: "Ngorongoro Crater, Tanzania",
    description: "Often called \"Africa's Garden of Eden,\" this volcanic caldera shelters an incredible density of wildlife, including rare black rhinos."
  },
  {
    number: 10,
    title: "South Luangwa National Park, Zambia",
    description: "The birthplace of the walking safari, South Luangwa offers up-close encounters with elephants, leopards, and wild dogs, without the hum of a vehicle engine."
  }
];

const tips = [
  {
    title: "Best Time to Visit",
    description: "Dry season (varies by region) for easier game viewing."
  },
  {
    title: "Book Early",
    description: "Especially for gorilla permits and migration season lodges."
  },
  {
    title: "Pack Smart",
    description: "Neutral-colored clothing, good binoculars, and a quality camera."
  },
  {
    title: "Consider Guided Tours",
    description: "Local guides enhance sightings and ensure safety."
  }
];

export default function SafariArticle1() {
  return (
    <main className="min-h-screen bg-orange-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-earth">
        <div className="relative h-[70vh] min-h-[500px]">
          <img 
            src="https://i.pinimg.com/736x/2c/dc/aa/2cdcaab7e49ca0dac971c37d3dfe4ba5.jpg"        
            alt="African safari landscape at sunset with elephants silhouetted against golden sky"
            className="absolute inset-0 w-full h-full object-cover"
            
          />
          <div className="absolute inset-0 bg-gradient-to-t from-safari-earth/80 via-safari-earth/40 to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-6 text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in drop-shadow-2xl">
                Top 10 Must-See
                <span className="block bg-gradient-safari bg-clip-text text-transparent">
                  Wildlife Destinations
                </span>
                in Africa
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-slide-up drop-shadow-lg">
                From the Serengeti's great migration to gorilla trekking in Rwanda. 
                Your ultimate safari bucket list awaits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl leading-relaxed text-foreground/80 mb-8">
              Africa isn't just a continent, it's a wildlife wonderland. From golden savannahs 
              teeming with lions to lush rainforests echoing with gorilla calls, this is where 
              nature still roams free. If you're a wildlife enthusiast looking for your next 
              adventure, here are 10 destinations that deserve a spot on your bucket list.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:gap-12">
            {destinations.map((destination, index) => (
              <div
                key={destination.number}
                className="group hover:shadow-warm rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="pb-3 flex flex-col space-y-1.5 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-safari flex items-center justify-center text-primary-foreground font-bold text-lg shadow-glow">
                      {destination.number}
                    </div>
                    <div className="text-xl text-2xl font-semibold leading-none tracking-tight font-bold text-foreground group-hover:text-safari-bronze transition-colors duration-300">
                      {destination.title}
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Tips */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
              Tips for Planning Your African Wildlife Adventure
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Essential advice to make your safari dreams come true
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tips.map((tip, index) => (
                <div 
                  key={tip.title} 
                  className="border-border/50 bg-card/80 backdrop-blur-sm rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-warm transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="pb-3 flex flex-col space-y-1.5 p-6">
                    <div className="text-lg font-semibold text-safari-bronze text-2xl font-semibold leading-none tracking-tight">
                      {tip.title}
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <p className="text-muted-foreground">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Final Word
            </h2>
            <p className="text-xl leading-relaxed text-muted-foreground mb-8">
              Whether you're chasing the drama of the migration, the tranquility of a mokoro ride, 
              or the thrill of locking eyes with a gorilla, Africa offers wildlife encounters you'll never forget.
            </p>
            <div className="bg-gradient-safari p-8 rounded-lg shadow-warm">
              <p className="text text-lg font-semibold mb-4">
                📌 Plan your dream safari with us
              </p>
              <p className="text text-xl font-bold">
                Book Your African Adventure With Africkson Safaris Today!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}