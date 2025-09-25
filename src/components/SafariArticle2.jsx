import { useTranslation } from "react-i18next";

export default function SafariArticle2() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              {t("safari2.heroTitle")}
              <span className="block text-orange-100">{t("safari2.heroSubtitle")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
              {t("safari2.heroTagline")}
            </p>
          </div>
        </div>
      </section>

      {/* Opening Story */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-gray-700 mb-6">
                {t("safari2.story1")}
              </p>
              <blockquote className="border-l-4 border-orange-500 pl-6 text-xl italic text-gray-600 bg-white p-6 rounded-r-lg shadow-sm">
                {t("safari2.storyQuote")}
              </blockquote>
              <p className="text-xl leading-relaxed text-gray-700 mt-6">
                {t("safari2.story2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Timing Matters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">
              {t("safari2.whyTitle")}
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>{t("safari2.why1")}</p>
              <p>{t("safari2.why2")}</p>
              <p className="font-semibold text-orange-700">
                {t("safari2.whyHighlight")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Seasons */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-orange-200">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center">
              {t("safari2.seasonsTitle")}
            </h2>
            <blockquote className="text-center text-xl italic text-gray-600 mb-12 max-w-3xl mx-auto">
              {t("safari2.seasonsQuote")}
            </blockquote>
            <p className="text-center text-lg text-gray-700 mb-12">
              {t("safari2.seasonsIntro")}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {t("safari2.seasons", { returnObjects: true }).map((season, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300"
                >
                  <div className="pb-4 flex flex-col space-y-1.5 p-6">
                    <div className="text-2xl font-bold text-orange-700 leading-none tracking-tight">
                      {season.title}
                      {season.subtitle && (
                        <span className="block text-lg font-normal text-gray-600">
                          {season.subtitle}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center p-6 pt-0">
                    <p className="text-gray-700 leading-relaxed">{season.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Choosing the Right Time */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">
              {t("safari2.chooseTitle")}
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>{t("safari2.choose1")}</p>
              <div className="bg-orange-50 p-8 rounded-lg border-l-4 border-orange-500">
                <p className="italic text-lg">{t("safari2.chooseQuote")}</p>
              </div>
              <p className="font-semibold text-orange-700 text-xl">
                {t("safari2.chooseHighlight")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <p className="text-white text-lg font-semibold mb-4">
                {t("safari2.ctaHighlight")}
              </p>
              <p className="text-white text-xl font-bold">
                {t("safari2.ctaText")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
