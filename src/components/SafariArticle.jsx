import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SafariArticle = () => {
  const { t } = useTranslation();

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
              {t("safari.heroTitle")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              {t("safari.heroSubtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="p-8 mb-12 border border-border/50 rounded-lg border bg-card text-card-foreground shadow-sm">
          <p className="text-lg leading-relaxed text-foreground mb-6 font-body">
            {t("safari.intro1")}
          </p>
          <p className="text-lg leading-relaxed text-foreground mb-6 font-body">
            {t("safari.intro2")}
          </p>
          <p className="text-lg leading-relaxed text-primary font-semibold font-body">
            {t("safari.intro3")}
          </p>
        </div>

        {/* Step Sections */}
        {[1, 2, 3, 4, 5].map((step) => (
          <section className="mb-16" key={step}>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-sunset flex items-center justify-center text-primary-foreground font-bold text-xl mr-4">
                {step}
              </div>
              <h2 className="text-3xl font-heading font-bold text-foreground">
                {t(`safari.step${step}.title`)}
              </h2>
            </div>
            <div className="ml-16 space-y-6">
              {t(`safari.step${step}.content`, { returnObjects: true }).map(
                (paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-lg leading-relaxed text-foreground font-body"
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>
          </section>
        ))}

        {/* Your Turn */}
        <section className="mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-8 text-center">
            {t("safari.yourTurn.title")}
          </h2>
          <div className="p-8 rounded-lg border bg-card text-card-foreground shadow-sm bg-gradient-sunset text-primary-foreground">
            <p className="text-lg leading-relaxed mb-6 font-body">
              {t("safari.yourTurn.p1")}
            </p>
            <p className="text-lg leading-relaxed mb-6 font-body">
              {t("safari.yourTurn.p2")}
            </p>
            <p className="text-xl font-bold font-heading">
              {t("safari.yourTurn.p3")}
            </p>
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-8 text-center">
            {t("safari.finalThoughts.title")}
          </h2>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground font-body">
              {t("safari.finalThoughts.p1")}
            </p>
            <p className="text-lg leading-relaxed text-foreground font-body">
              {t("safari.finalThoughts.p2")}
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <div className="p-8 text-center rounded-lg border bg-card text-card-foreground shadow-sm bg-accent/10 border-accent/30">
          <div className="mb-6">
            <span className="text-4xl">📍</span>
          </div>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            {t("safari.cta.title")}
          </h3>
          <p className="text-lg text-muted-foreground mb-6 font-body">
            {t("safari.cta.desc")}
          </p>
          <Link
            to="/contact"
            size="lg"
            className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2 transition-opacity font-semibold"
          >
            {t("safari.cta.button")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SafariArticle;
