import { useTranslation } from "react-i18next";

export default function SafariArticle1() {
  const { t } = useTranslation();

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
                {t("safari1.heroTitle")}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-slide-up drop-shadow-lg">
                {t("safari1.heroSubtitle")}
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
              {t("safari1.intro")}
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:gap-12">
            {t("safari1.destinations", { returnObjects: true }).map(
              (destination, index) => (
                <div
                  key={index}
                  className="group hover:shadow-warm rounded-lg border bg-white text-card-foreground shadow-sm transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="pb-3 flex flex-col space-y-1.5 p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-safari flex items-center justify-center text-primary-foreground font-bold text-lg shadow-glow">
                        {index + 1}
                      </div>
                      <div className="text-xl font-bold text-foreground group-hover:text-safari-bronze transition-colors duration-300">
                        {destination.title}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {destination.description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Planning Tips */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
              {t("safari1.tipsTitle")}
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              {t("safari1.tipsSubtitle")}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t("safari1.tips", { returnObjects: true }).map((tip, index) => (
                <div
                  key={index}
                  className="border-border/50 bg-card/80 backdrop-blur-sm rounded-lg border bg-white text-card-foreground shadow-sm hover:shadow-warm transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="pb-3 flex flex-col space-y-1.5 p-6">
                    <div className="text-lg font-semibold text-safari-bronze">
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
              {t("safari1.finalWordTitle")}
            </h2>
            <p className="text-xl leading-relaxed text-muted-foreground mb-8">
              {t("safari1.finalWordText")}
            </p>
            <div className="bg-gradient-safari p-8 rounded-lg shadow-warm">
              <p className="text text-lg font-semibold mb-4">
                {t("safari1.cta.highlight")}
              </p>
              <p className="text text-xl font-bold">
                {t("safari1.cta.call")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
